---
layout: default
---

<div class="max-w-4xl min-h-screen p-6 py-12 mx-auto bg-white md:py-16">
  <div class="flex items-center px-2">
    <a href="/" class="flex items-center space-x-3 hover:text-blue-400">
      <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/>
      </svg>
      <img class="w-auto h-12 md:h-16" src="/assets/images/avatar.png">
    </a>

    <div>
      <h2 class="text-gray-500 md:text-lg font-semibold">Ruby on Rails product developer</h2>
      <a href="https://twitter.com/Gathukumose">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="w-8 h-8 transition fill-gray-500 group-hover:fill-gray-600 dark:fill-gray-400 dark:group-hover:fill-zinc-300">
          <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
        </svg>
        </a>
      </div>
  </div>

  <div class="mt-12 text-2xl font-extrabold md:text-center md:text-5xl">
    {{ page.title }}
  </div>
  
  <div class="mt-3 prose lg:prose-xl">
    {{ content }}
  </div>
</div>
