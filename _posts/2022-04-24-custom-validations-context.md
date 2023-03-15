---
layout: post
title:  Rails custom validation contexts
author: Moses Gathuku
tags: [rails]
description: In rails, it is possible to specify when the validation should happen. sometimes you may want to introduce new validation or skip some. Rails `on` option helps us achieve this.
---

In rails, it is possible to specify when the validation should happen. sometimes you may want to introduce new validation or skip some. Rails `on` option helps us achieve this.

```rb
class Post < ApplicationRecord
 validates :body, presence: true
 validates :title, uniqueness: true, on: :create 
 validates :published, exclusion: [nil], on: :update 
end
```
From the above validations: 
- it's not possible to create or update a post without a body
- it will be possible to update a post with a duplicate title 
- it will be possible to create a record with published nil 

Apart from the commonly used `on: :create` and `on: :update` rails allow us to provide custom contexts. 

```rb
class Post < ApplicationRecord
 validates :title, presence: true 
 validates :published_at, presence: true, on: :publish
end
```
From the above example, we are validating `published_at` presence `on: :publish`. Custom contexts  are triggered explicitly by passing the name of the context to `valid?` `invalid?` or `save`

```sh
post = Post.new(title: "Rails validations")
post.valid? # true 
post.valid?(context: :publish) # false 
post.save(context: :publish) # false
```
