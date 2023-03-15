---
layout: default
title: "Moses"
---

<div class="max-w-4xl min-h-screen p-6 py-24 mx-auto bg-white">
  <div>
    <div class="">
      <img class="w-auto h-32" src="/assets/images/avatar.png">
    </div>
    <div>
      <h1 class="text-xl">
        <span class="block text-xl font-semibold text-red-700">
          Moses Gathuku
        </span>
        <span class="text-2xl font-extrabold text-gray-900 md:text-4xl">
          Ruby on Rails product developer
        </span>
      </h1>
    </div>
    <div class="w-2/3 mt-3 prose">
      <p>
        I am Moses Gathuku, an expert Ruby on Rails product developer. I help businesses and individuals build and lunch fully-fledged products and MVPs.
        Apart from day-to-day work with different clients, I work on my side projects. Currently am building 
        <a href="https://errorready.com" class="text-blue-600">ErrorReady</a> a Ruby on Rails error monitoring app
      </p>
    </div>
    <div class="flex mt-3 space-x-3">
      <a href="https://twitter.com/Gathukumose">
      <svg viewBox="0 0 24 24" aria-hidden="true" class="w-8 h-8 transition fill-gray-500 group-hover:fill-gray-600 dark:fill-gray-400 dark:group-hover:fill-zinc-300">
        <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
      </svg>
      </a>
      <a href="https://github.com/gathuku">
      <svg viewBox="0 0 24 24" aria-hidden="true" class="w-8 h-8 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
      </svg>
      </a>
    </div>
    
    <div class="my-8">
      <a href="mailto:hey@gathuku.me" class="px-4 py-3 text-white bg-red-700 rounded-md">Say hey</a>
    </div>
  </div>
  <div class="mx-3">
    <div class="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      {% for post in site.posts %}
        <article class="flex flex-col items-start justify-between max-w-xl">
          <div class="flex items-center text-xs gap-x-4">
            <time datetime="2020-03-16" class="text-gray-500">{{ post.date | date_to_string }}</time>
            <a href="#" class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">{{ post.tags }}</a>
          </div>
          <div class="relative group">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="{{ post.url }}">
                <span class="absolute inset-0"></span>
                {{ post.title }}
              </a>
            </h3>
            <p class="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
              {{ post.description }}
            </p>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</div>
