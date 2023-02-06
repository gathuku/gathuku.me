---
layout: default
title: "Moses"
---

<div class="flex flex-col justify-between max-w-4xl min-h-screen p-6 py-24 mx-auto bg-white">
  <div class="grid gap-3 md:grid-cols-6">
    <div class="col-span-4">
      <div class="">
        <img class="w-auto h-32" src="/assets/images/avatar.png">
      </div>
      <div>
        <h1 class="mb-12 text-xl">
          <span class="block text-xl font-semibold text-red-700">
            Moses Gathuku
          </span>
          <span class="text-2xl font-extrabold text-gray-900 md:text-4xl">
            Expert Ruby on Rails product developer
          </span>
        </h1>
      </div>
      <div class="text-base font-normal leading-relaxed text-left text-gray-900">
        <p>
          I am Moses Gathuku, an expert Ruby on Rails product developer.
        </p>
        <p>
          I help businesses and individuals build and lunch fully-fledged products and MVPs
        </p>
        <p>
          I have been working with Rails since 2019, back then on Rails 5.2 when I was new and learning. I found Rails to be interesting as someone who was doing PHP/LARAVEL before and I have never turned back.
        </p>
        <p>
          Apart from day-to-day work with different clients, I work on my side projects. Currently am building [ErrorReady](https://errorready.com) a Ruby on Rails error monitoring app
        </p>
      </div>
      <div class="my-8">
        <a href="mailto:hey@gathuku.me" class="px-4 py-3 text-white bg-red-600 rounded-md">Send me an email</a>
      </div>
    </div>
    <div class="col-span-2 md:mt-16">
     <span class="text-sm font-bold">Latest articles </span>
      <ul>
        {% for post in site.posts %}
          <li class="devide-y">
            <a class="my-3 text-blue-600" href="{{ post.url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>

  <div class="flex flex-col items-center justify-center gap-10 my-10 lg:flex-row lg:items-end">
      <div>
        {% include rails.svg %}
      </div>
      <div>
        {% include hotwire.svg %}
      </div>
      <div>
        <div class="flex items-center w-32 gap-1 mx-auto">
          {% include tailwind.svg %}
          <span class="text-base font-bold tracking-tight text-gray-900">Tailwindcss</span>
        </div>
      </div>
      <div>
       <div class="flex items-center w-32 gap-1 mx-auto">
        {% include postgres.svg %}
        <span class="text-base font-bold tracking-tight text-gray-900">Postgres</span>
       </div>
      </div>
  </div>
</div>
