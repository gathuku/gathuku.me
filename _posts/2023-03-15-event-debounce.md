---
layout: post
title: Custom Rails form submit debounce
author: Moses Gathuku
tags: [rails, hotwire]
description: This is mostly applied in typehead searching, when a user is typing you can listen to the input event and submit a form that returns search results from the server.
---

```
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    wait: { type: Number, default: 1000 }
  }

  debouncedSubmit() {
    clearTimeout(this.timeoutId)

    this.timeoutId = setTimeout(() => {
      this.element.requestSubmit()
    }, this.waitValue)
  }
}

```

Turbo added a form [submitter polyfill ](https://github.com/hotwired/turbo/pull/439) which can submit a form on certain events listeners for `input`, `change`, `focustout` etc. 

This is mostly applied in typehead searching, when a user is typing you can listen to the input event and submit a form that returns search results from the server. In most case we don't want to search every character the user types, we only want to capture the end state(when the user finish typing).

In some cases, this isn't necessary, but this technique can drastically improve network overhead if costly server requests are involved. The form submit event is only triggered when the user "finishes typing"

__Why not use Lodash?__

For a long time, it was obvious to include a library like lodash. Lodash includes a `_.debounce` function that would work fine.
With rails 7 using import maps to manage javascript I think it's really necessary to keep your third-party dependencies low as possible.

I recently upgraded a Rails app from web packer to importmap and the process was smooth because the app didn't have a lot of javascript libraries.
![PR image?](/assets/images/upgrade.png)

__Usage__

```erb
  <%= form_with(url: customers_path, method: :get, data: { controller: 'form', turbo_frame: :customers }) do |form| %>
    <%= form.text_field :query, data: { action: 'input->form#debouncedSubmit' } %>
  <% end %>

  <%= turbo_frame_tag :customers do %>
    <%= render  @customers %>
  <% end %>
```


__Explanation__

In this typehead searching example. We are connecting the `form_controller.js` with the form element, on the input action of text_field `query` we call the `debouncedSubmit` function on the controller.

```
export default class extends Controller {
  static values = {
    wait: { type: Number, default: 1000 }
  }

  debouncedSubmit() {
    clearTimeout(this.timeoutId)

    this.timeoutId = setTimeout(() => {
      this.element.requestSubmit()
    }, this.waitValue)
  }
}
```

The `debouncedSubmit()` function is doing two things

1. Clear any previously set timeout

2. Set a new timeout and store its `timeoutId`.

The [clearTimeout](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout) accepts `timeoutId` of the timeout to clear, At first `this.timeoutId` will be null, clearTimout doesn't complain and will fail silently. 

[serTimeout]((https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)) returns a number, a reference to the specific timeout. We store it in the `timeoutId` variable which is persisted until the next event.

If the user starts searching, timeouts are scheduled and cancelled immediately (before the `wait` time elapses). Once the user stops typing the default wait period of 1000ms elapses and `this.element.requestSubmit()` is fired. `this.element` references the form element on which the controller is mounted

This works as a charm, scheduling and clearing timeouts happen very fast.

> [@hopesoft](https://github.com/hopsoft) has made a [great package debounce](https://github.com/hopsoft/debounced) that is tailured to work with Stimulus and Stimulus reflex
