## Default related articles

Use this example to show a list of related articles after the main content of a blog post to engage users and decrease the bounce rate.

```html
<aside aria-label="Related articles" class="py-8 lg:py-24 bg-white dark:bg-gray-900 antialiased">
    <div class="px-4 mx-auto max-w-screen-xl">
        <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
        <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article class="max-w-xs">
                <a href="#">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" class="mb-5 rounded-lg" alt="Image 1">
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#">Our first office</a>
                </h2>
                <p class="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read in 2 minutes
                </a>
            </article>
            <article class="max-w-xs">
                <a href="#">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" class="mb-5 rounded-lg" alt="Image 2">
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#">Enterprise design tips</a>
                </h2>
                <p class="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read in 12 minutes
                </a>
            </article>
            <article class="max-w-xs">
                <a href="#">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" class="mb-5 rounded-lg" alt="Image 3">
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#">We partnered with Google</a>
                </h2>
                <p class="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read in 8 minutes
                </a>
            </article>
            <article class="max-w-xs">
                <a href="#">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" class="mb-5 rounded-lg" alt="Image 4">
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#">Our first project with React</a>
                </h2>
                <p class="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read in 4 minutes
                </a>
            </article>
        </div>
    </div>
</aside>
```

## Rounded list of blog posts

This example can also be used to show a list of recommended blog posts with a rounded style for the image preview.

```html
<aside aria-label="Related articles" class="py-8 lg:py-24 bg-white dark:bg-gray-900 antialiased">
  <div class="px-4 mx-auto max-w-screen-xl">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Read next</h2>
      <article class="flex mb-8">
          <a href="#" class="shrink-0">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png" class="mr-5 w-32 h-32 max-w-fullalign-middle rounded-full" alt="Image 1">
          </a>
          <div class="flex flex-col justify-center">
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first office</a>
              </h2>
              <p class="mb-2 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 2 minutes
              </a>
          </div>
      </article>
      <article class="flex mb-8">
          <a href="#" class="shrink-0">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png" class="mr-5 w-32 h-32 max-w-full align-middle rounded-full" alt="Image 2">
          </a>
          <div class="flex flex-col justify-center">
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Enterprise design tips</a>
              </h2>
              <p class="mb-2 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 12 minutes
              </a>
          </div>
      </article>
      <article class="flex">
          <a href="#" class="shrink-0">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png" class="mr-5 w-32 h-32 max-w-full align-middle rounded-full" alt="Image 3">
          </a>
          <div class="flex flex-col justify-center">
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">We partnered up with Google</a>
              </h2>
              <p class="mb-2 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 8 minutes
              </a>
          </div>
      </article>
  </div>
</aside>
```

## Horizontal card with image

Use this example to show a list of related articles based on a two-column layout with horizontal alignment.

```html
<aside aria-label="Related articles" class="bg-white dark:bg-gray-900 py-8 lg:py-24 antialiased">
  <div class="px-4 mx-auto max-w-screen-xl">
      <h2 class="mb-6 lg:mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
      <div class="grid gap-6 lg:gap-12 md:grid-cols-2">
          <article class="flex flex-col xl:flex-row">
              <a href="#" class="mb-2 xl:mb-0">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" class="mr-5 max-w-sm" alt="Image 1">
              </a>
              <div class="flex flex-col justify-center">
                  <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <a href="#">Our first office</a>
                  </h2>
                  <p class="mb-4 text-gray-500 dark:text-gray-400 max-w-sm">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                  <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                      Read in 2 minutes
                  </a>
              </div>
          </article>
          <article class="flex flex-col xl:flex-row">
              <a href="#" class="mb-2 xl:mb-0">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" class="mr-5 max-w-sm" alt="Image 2">
              </a>
              <div class="flex flex-col justify-center">
                  <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <a href="#">Enterprise design tips</a>
                  </h2>
                  <p class="mb-4 text-gray-500 dark:text-gray-400 max-w-sm">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                  <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                      Read in 12 minutes
                  </a>
              </div>
          </article>
          <article class="flex flex-col xl:flex-row">
              <a href="#" class="mb-2 xl:mb-0">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" class="mr-5 max-w-sm" alt="Image 3">
              </a>
              <div class="flex flex-col justify-center">
                  <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <a href="#">We partnered up with Google</a>
                  </h2>
                  <p class="mb-4 text-gray-500 dark:text-gray-400 max-w-sm">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                  <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                      Read in 8 minutes
                  </a>
              </div>
          </article>
          <article class="flex flex-col xl:flex-row">
              <a href="#" class="mb-2 xl:mb-0">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" class="mr-5 max-w-sm" alt="Image 4">
              </a>
              <div class="flex flex-col justify-center">
                  <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <a href="#">Our first project with React</a>
                  </h2>
                  <p class="mb-4 text-gray-500 dark:text-gray-400 max-w-sm">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                  <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                      Read in 12 minutes
                  </a>
              </div>
          </article>
      </div>
  </div>
</aside>
```

## Carousel slider cards

This example can be used to show a list of related articles in cards within a carousel slider shown after the main blog post content.

```html
<aside aria-label="Related articles" class="py-8 bg-white dark:bg-gray-900 lg:py-16 antialiased">
  <div class="px-4 mx-auto w-full max-w-screen-xl">
      <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Trending on Flowbite</h2>
      <div id="animation-carousel" data-carousel="slide">
          <div class="relative overflow-hidden rounded-lg h-[480px]">
              <div class="hidden bg-white duration-700 ease-in-out dark:bg-gray-900" data-carousel-item>
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <article class="p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md border border-gray-200 dark:border-gray-800 dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                              <img class="mb-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png" alt="office laptop working">
                          </a>
                          <div class="flex items-center mb-3 space-x-2">
                              <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar">
                              <div class="font-medium dark:text-white">
                                  <div>Jese Leos</div>
                                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
                              </div>
                          </div>
                          <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
                              <a href="#">Our first office</a>
                          </h3>
                          <p class="mb-3 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                          <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline">
                              Read more <svg class="mt-px ml-1 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg> 
                          </a>
                      </article>
                      <article class="hidden p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-200 dark:border-gray-800 sm:block">
                          <a href="#">
                              <img class="mb-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png" alt="google hq">
                          </a>
                          <div class="flex items-center mb-3 space-x-2">
                              <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta Casas avatar">
                              <div class="font-medium dark:text-white">
                                  <div>Roberta Casas</div>
                                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
                              </div>
                          </div>
                          <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
                              <a href="#">We partnered up with Google</a>
                          </h3>
                          <p class="mb-3 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                          <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline">
                              Read more <svg class="mt-px ml-1 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg> 
                          </a>
                      </article>
                      <article class="hidden p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-200 dark:border-gray-800 xl:block">
                          <a href="#">
                              <img class="mb-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptop working">
                          </a>
                          <div class="flex items-center mb-3 space-x-2">
                              <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar">
                              <div class="font-medium dark:text-white">
                                  <div>Sofia McGuire</div>
                                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
                              </div>
                          </div>
                          <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
                              <a href="#">Our first project with React</a>
                          </h3>
                          <p class="mb-3 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                          <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline">
                              Read more <svg class="mt-px ml-1 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg> 
                          </a>
                      </article>
                  </div>
              </div>
              <div class="hidden bg-white duration-700 ease-in-out dark:bg-gray-900" data-carousel-item>
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <article class="p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                          <a href="#">
                              <img class="mb-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png" alt="google hq">
                          </a>
                          <div class="flex items-center mb-3 space-x-2">
                              <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta Casas avatar">
                              <div class="font-medium dark:text-white">
                                  <div>Roberta Casas</div>
                                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
                              </div>
                          </div>
                          <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
                              <a href="#">We partnered up with Google</a>
                          </h3>
                          <p class="mb-3 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                          <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline">
                              Read more <svg class="mt-px ml-1 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg> 
                          </a>
                      </article>
                      <article class="hidden p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-200 dark:border-gray-800 sm:block">
                          <a href="#">
                              <img class="mb-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png" alt="office laptop working">
                          </a>
                          <div class="flex items-center mb-3 space-x-2">
                              <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar">
                              <div class="font-medium dark:text-white">
                                  <div>Jese Leos</div>
                                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
                              </div>
                          </div>
                          <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
                              <a href="#">Our first office</a>
                          </h3>
                          <p class="mb-3 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                          <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline">
                              Read more <svg class="mt-px ml-1 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg> 
                          </a>
                      </article>
                      <article class="hidden p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-200 dark:border-gray-800 xl:block">
                          <a href="#">
                              <img class="mb-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptop working">
                          </a>
                          <div class="flex items-center mb-3 space-x-2">
                              <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar">
                              <div class="font-medium dark:text-white">
                                  <div>Sofia McGuire</div>
                                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
                              </div>
                          </div>
                          <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
                              <a href="#">Our first project with React</a>
                          </h3>
                          <p class="mb-3 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                          <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline">
                              Read more <svg class="mt-px ml-1 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg> 
                          </a>
                      </article>
                  </div>
              </div>
              <div class="hidden bg-white duration-700 ease-in-out dark:bg-gray-900" data-carousel-item>
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      <article class="p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                          <a href="#">
                              <img class="mb-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png" alt="office laptop working">
                          </a>
                          <div class="flex items-center mb-3 space-x-2">
                              <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia McGuire avatar">
                              <div class="font-medium dark:text-white">
                                  <div>Sofia McGuire</div>
                                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
                              </div>
                          </div>
                          <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
                              <a href="#">Our first project with React</a>
                          </h3>
                          <p class="mb-3 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                          <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline">
                              Read more <svg class="mt-px ml-1 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg> 
                          </a>
                      </article>
                      <article class="hidden p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-200 dark:border-gray-800 sm:block">
                          <a href="#">
                              <img class="mb-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png" alt="google hq">
                          </a>
                          <div class="flex items-center mb-3 space-x-2">
                              <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta Casas avatar">
                              <div class="font-medium dark:text-white">
                                  <div>Roberta Casas</div>
                                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
                              </div>
                          </div>
                          <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
                              <a href="#">We partnered up with Google</a>
                          </h3>
                          <p class="mb-3 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                          <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline">
                              Read more <svg class="mt-px ml-1 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg> 
                          </a>
                      </article>
                      <article class="hidden p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-200 dark:border-gray-800 xl:block">
                          <a href="#">
                              <img class="mb-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png" alt="office laptop working">
                          </a>
                          <div class="flex items-center mb-3 space-x-2">
                              <img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar">
                              <div class="font-medium dark:text-white">
                                  <div>Jese Leos</div>
                                  <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read</div>
                              </div>
                          </div>
                          <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
                              <a href="#">Our first office</a>
                          </h3>
                          <p class="mb-3 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.</p>
                          <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline">
                              Read more <svg class="mt-px ml-1 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg> 
                          </a>
                      </article>
                  </div>
              </div>
          </div>
          <div class="flex justify-center items-center mt-4">
              <button type="button" class="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/></svg>
                      <span class="hidden">Previous</span>
                  </span>
              </button>
              <button type="button" class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
                  <span class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg> 
                      <span class="hidden">Next</span>
                  </span>
              </button>
          </div>
      </div>
  </div>
```

## Grid layout cards

Use this example to show three cards on a row based on a grid layout to encourage users to read another article.

```html
<aside aria-label="Related articles" class="py-8 bg-white lg:py-16 dark:bg-gray-900 antialiased">
    <div class="px-4 mx-auto max-w-screen-xl">
        <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Read Next</h2>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article>
                <a href="#">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-1.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 1">
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#">Flowbite enables IT to automate Apple device configuration</a>
                </h2>
                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read more
                </a>
            </article>
            <article>
                <a href="#">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-2.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 2">
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#">How AI is transforming your smartphone</a>
                </h2>
                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read more
                </a>
            </article>
            <article>
                <a href="#">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-3.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 3">
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#">Android, ChromeOS, and the future of app discovery</a>
                </h2>
                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read more
                </a>
            </article>
            <article>
                <a href="#">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-4.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 4">
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#">What Google collaboration app offers remote teams</a>
                </h2>
                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read more
                </a>
            </article>
            <article>
                <a href="#">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-5.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 5">
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#">Collaboration app spending grows in the face of crisis</a>
                </h2>
                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read more
                </a>
            </article>
            <article>
                <a href="#">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-6.jpg" class="mb-5 w-full max-w-full rounded-lg" alt="Image 6">
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#">For developers, too many meetings, too little 'focus' time</a>
                </h2>
                <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read more
                </a>
            </article>
        </div>
    </div>
</aside>
```