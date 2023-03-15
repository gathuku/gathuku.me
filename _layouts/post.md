---
layout: default
---

<div class="max-w-4xl min-h-screen p-6 py-24 mx-auto bg-white">
  <div>
    <a href="/" class="flex items-center space-x-3 hover:text-blue-400">
      <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/>
      </svg>
      <img class="w-auto h-16" src="/assets/images/avatar.png">
    </a>
  </div>

  <div class="mt-3 text-5xl font-extrabold text-center">
    {{ page.title }}
  </div>
  
  <div class="mt-3 prose lg:prose-xl">
    {{ content }}
  </div>
</div>
