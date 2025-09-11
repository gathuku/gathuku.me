---
layout: post
title: Mission control custom authentication with rails 8 authentication.
author: Moses Gathuku
tags: [rails]
description: Learn how to integrate custom authentication into Rails Mission Control Jobs by overriding the base controller and handling isolated engine routes with main_app
---

[Mission control](https://github.com/rails/mission_control-jobs) is a new dashboard (Rails engine) for accessing and troubleshooting background jobs.

Apart from HTTP basic authentication, Mission Control allows developers to configure a base controller with custom authentication logic.

This can be achieved by defining a `base_controller_class`, in this case `AdminController`, which includes the Rails 8 Authentication concern. The concern ensures the user is authenticated before any action and redirects them to the new session page if not.

```
# config/application.rb

config.mission_control.jobs.base_controller_class = "AdminController"
config.mission_control.jobs.http_basic_auth_enabled = false

# app/controller/admin/controller.rb

class AdminController < ActionController::Base
  include Authentication
end
```

The above implementation will result in a `UrlGenerationError` because the authentication concern redirects unauthorized users to `new_session_path`

```rb
class Authentication
  ...
  def request_authentication
    session[:return_to_after_authenticating] = request.url
    redirect_to new_session_path, alert: "Please sign in first."
  end
  ...
end
```

The problem is that engine routes are isolated from the main app routes by default. To solve this, you need to call the route using the main_app routing proxy method. In this case, you can update the Authentication concern directly or override request_authentication.

```rb
class AdminController < ActionController::Base
  include Authentication

  private

  # Override concern method
  def request_authentication
    session[:return_to_after_authenticating] = request.url
    redirect_to main_app.new_session_path, alert: "Please sign in first."
  end
end
```


