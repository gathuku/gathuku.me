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
          Apart from day-to-day work with different clients, I work on my side projects. Currently am building 
          <a href="https://errorready.com" class="text-blue-600">ErrorReady</a> a Ruby on Rails error monitoring app
        </p>
      </div>
      <div class="my-8">
        <a href="mailto:hey@gathuku.me" class="px-4 py-3 text-white bg-red-700 rounded-md">Send me an email</a>
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
  
  <div class="flex justify-center">
    <a href="https://twitter.com/Gathukumose">
      <svg class="w-12 h-12 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
      </svg>
    </a>
  </div>

</div>
