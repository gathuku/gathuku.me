---
layout: post
title: Boring authorization in rails
author: Moses Gathuku
tags: [rails]
description: In this article, we look a how we can add authorization to a Rails app without the need to add a gem. The goal is to keep things simple, ship fast, and avoid dependency hell.
---


In the dynamic world of web development, Rails remains a reliable framework renowned for its simplicity and convention over configuration. 

In this article, we look a how we can add authorization to a Rails app without the need to add a gem. The goal is to keep things simple, ship fast, and avoid dependency hell.

We'll start by creating a simple blog application.

 Assumptions:
 - You already have a `current_user` helper method from your authorization logic/gem.
 - You're primarily using default Rails database, `SQLite`.


```
rails new blog
```

Next, we create an article scaffold, migrate the database, and create some test records.

```
rails g scaffold Article title:string body:text
```


Now that we have something to work with, let's assume we want to restrict the article creation feature to admin users. 

First, we'll need to implement the authorization logic. To do this, let's add a [controller concern](https://api.rubyonrails.org/classes/ActiveSupport/Concern.html).

```
# app/controllers/concerns/authorizable.rb


module Authorizeable
  extend ActiveSupport::Concern

  included do
    def allowed_to?(action, object, user = current_user)
      policy_klass = "#{object.class}Policy".constantize
      policy = policy_klass.new(user, object)
      policy.send(action)
    end
    helper_method :allowed_to?

    def authorize!(action, object)
      return if allowed_to?(action, object)

      raise UnauthorizedError, "Action not allowed"
    end

    rescue_from UnauthorizedError do |exception|
      redirect_to root_path, alert: exception.message
    end
  end
end

```

The concern will do several things. 

1. Add an `allowed_to?` helper method that accepts `action` and `object` parameters, with a default `user` parameter to `current_user`. This method checks if an action is permitted in a matching policy class.

2. Add an `authorize!` method, which accepts `action` and `object` arguments. This method also raises `UnauthorizedError` if a user isn't allowed to access an action. `UnauthorizedError` is a custom error, which can be added in any folder that is autoloaded by Rails. 

```
 # app/models/unauthorized_error.rb
 class UnauthorizedError < StandardError; end
```

3. Rescue `UnauthorizedError` and redirect to the root path with an alert message.



Now let's include this module in the `ArticlesController` to authorize the new action.

```rb
# app/controllers/articles/controller

class ArticlesController
  include Authorizeable


  def new
    @article = Article.new

    authorize!(:new?, @article)
  end
end
```

To do this, we will need an `ArticlePolicy` class to define policies. Based on this policy, only admin users are allowed to create an article.

```rb
# app/policies/article_policy.rb

class ArticlePolicy
  def initialize(user, object)
    @user = user
    @article = object
  end

  def new?
    @user.admin?
  end

  def create?
    new?
  end
end
```

With these changes in place, if users without access click the `New article` link, they will be redirected to the root path with an alert message. 

![Redirect screenshot.](/assets/images/alert.jpeg)


You can also render this link conditionally, depending on whether or not a user has access.

```
# app/views/articles/index.html.erb

<% if allowed_to?(:create?, Article.new) %>
  <%= link_to "New article", new_article_path %>
<% end %>
```
