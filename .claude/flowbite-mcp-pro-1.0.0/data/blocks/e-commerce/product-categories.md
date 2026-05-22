## Default product categories

Use this example to show a list of all categories within your website using small cards with icons and text that are anchor links and a CTA button to show all categories on a dedicated page.

```html
<section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shop by category</h2>

      <a href="#" title="" class="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500">
        See more categories
        <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
        </svg>
      </a>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Computer &amp; Office</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Collectibles &amp; Toys</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Books</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Fashion/Clothes</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Sports &amp; Outdoors</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Painting &amp; Hobby</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Electronics</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
          ></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Food &amp; Grocery</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Music</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">TV/Projectors</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.041 13.862A4.999 4.999 0 0 1 17 17.831V21M7 3v3.169a5 5 0 0 0 1.891 3.916M17 3v3.169a5 5 0 0 1-2.428 4.288l-5.144 3.086A5 5 0 0 0 7 17.831V21M7 5h10M7.399 8h9.252M8 16h8.652M7 19h10"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Health &amp; beauty</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Home Air Quality</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z" />
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Gaming/Consoles</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Car &amp; Motorbike</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"></path>
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Photo/Video</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"
          />
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Security & Wi-Fi</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M8 15h7.01v.01H15L8 15Z" />
          <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z" />
          <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z" />
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Computer Peripherals</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Phone Accessories</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Watches</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z" />
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Printers</span>
      </a>

      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z" />
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Projectors</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Skin Care</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"></path>
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Photo/Video</span>
      </a>
      <a href="#" class="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
        </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-white">Office Supplies</span>
      </a>
    </div>
  </div>
</section>
```

## Featured product categories

This example can be used to show three or more featured product categories in between product listings and categories on your homepage or as related content when showing product pages.

```html
<section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Featured Categories</h2>

      <a href="#" title="" class="text-base font-medium text-gray-900 underline hover:no-underline dark:text-white"> See all categories</a>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <a href="#">
          <img class="mx-auto mb-4 h-60 dark:hidden md:mb-6" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller.svg" alt="controller" />
          <img class="mx-auto mb-4 hidden h-60 dark:block md:mb-6" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller-dark.svg" alt="controller" />
        </a>

        <span class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          <svg class="me-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.9 15.1 15 9m-5-.6h0m3.1 7.2h0M14 4a2.8 2.8 0 0 0 2.3.9 2.8 2.8 0 0 1 2.9 3 2.8 2.8 0 0 0 .9 2.1 2.8 2.8 0 0 1 0 4.2 2.8 2.8 0 0 0-.9 2.2 2.8 2.8 0 0 1-3 2.9 2.8 2.8 0 0 0-2.1.9 2.8 2.8 0 0 1-4.2 0 2.8 2.8 0 0 0-2.2-.9 2.8 2.8 0 0 1-2.9-3 2.8 2.8 0 0 0-.9-2.1 2.8 2.8 0 0 1 0-4.2 2.8 2.8 0 0 0 .9-2.2 2.8 2.8 0 0 1 3-2.9A2.8 2.8 0 0 0 9.9 4a2.8 2.8 0 0 1 4.2 0Z"
            ></path>
          </svg>
          Up to 25% off today
        </span>

        <a href="#" class="mt-4 block font-medium text-gray-900 hover:underline dark:text-white">Find great deals on the most popular video games and gaming consoles</a>

        <a href="#" title="" class="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400">
          See more gaming deals
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
          </svg>
        </a>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <a href="#">
          <img class="mx-auto mb-4 h-60 dark:hidden md:mb-6" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg" alt="laptop" />
          <img class="mx-auto mb-4 hidden h-60 dark:block md:mb-6" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg" alt="laptop" />
        </a>

        <span class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          <svg class="me-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.9 15.1 15 9m-5-.6h0m3.1 7.2h0M14 4a2.8 2.8 0 0 0 2.3.9 2.8 2.8 0 0 1 2.9 3 2.8 2.8 0 0 0 .9 2.1 2.8 2.8 0 0 1 0 4.2 2.8 2.8 0 0 0-.9 2.2 2.8 2.8 0 0 1-3 2.9 2.8 2.8 0 0 0-2.1.9 2.8 2.8 0 0 1-4.2 0 2.8 2.8 0 0 0-2.2-.9 2.8 2.8 0 0 1-2.9-3 2.8 2.8 0 0 0-.9-2.1 2.8 2.8 0 0 1 0-4.2 2.8 2.8 0 0 0 .9-2.2 2.8 2.8 0 0 1 3-2.9A2.8 2.8 0 0 0 9.9 4a2.8 2.8 0 0 1 4.2 0Z"
            ></path>
          </svg>
          Up to 50% off today
        </span>

        <a href="#" class="mt-4 block font-medium text-gray-900 hover:underline dark:text-white">MacBook Pro Accessories, from Apple, Belkin, Logitech, Anker, and more</a>

        <a href="#" title="" class="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400">
          See more laptop deals
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
          </svg>
        </a>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <a href="#">
          <img class="mx-auto mb-4 h-60 dark:hidden md:mb-6" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg" alt="keyboard" />
          <img class="mx-auto mb-4 hidden h-60 dark:block md:mb-6" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard-dark.svg" alt="keyboard" />
        </a>

        <span class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          <svg class="me-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.9 15.1 15 9m-5-.6h0m3.1 7.2h0M14 4a2.8 2.8 0 0 0 2.3.9 2.8 2.8 0 0 1 2.9 3 2.8 2.8 0 0 0 .9 2.1 2.8 2.8 0 0 1 0 4.2 2.8 2.8 0 0 0-.9 2.2 2.8 2.8 0 0 1-3 2.9 2.8 2.8 0 0 0-2.1.9 2.8 2.8 0 0 1-4.2 0 2.8 2.8 0 0 0-2.2-.9 2.8 2.8 0 0 1-2.9-3 2.8 2.8 0 0 0-.9-2.1 2.8 2.8 0 0 1 0-4.2 2.8 2.8 0 0 0 .9-2.2 2.8 2.8 0 0 1 3-2.9A2.8 2.8 0 0 0 9.9 4a2.8 2.8 0 0 1 4.2 0Z"
            ></path>
          </svg>
          Up to 25% off today
        </span>

        <a href="#" class="mt-4 block font-medium text-gray-900 hover:underline dark:text-white">Find great deals on PC games, and desktops, accessories and more from top brands.</a>

        <a href="#" title="" class="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400">
          See more electronics deals
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
```

## Product categories with icons

Use this example to show a larger list of product categories where you show a custom SVG icon and the title of the category on two or more rows and circular cards.

```html
<section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mb-4 items-center justify-between border-gray-200 pb-4 text-gray-900 dark:border-gray-700 md:mb-8 md:flex md:border-b md:pb-8">
      <h2 class="text-center text-xl font-semibold text-gray-900 dark:text-white sm:mb-0 sm:text-2xl">Top categories</h2>
      <a href="#" class="hidden items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto md:flex lg:flex">
        View more categories
        <svg class="-me-2 ms-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
        </svg>
      </a>
    </div>

    <div class="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:mb-0 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M5 12h14M5 12a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-2 3h.01M14 15h.01M17 9h.01M14 9h.01" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Computers</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Fashion</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Electronics</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Gaming</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">TV/Projectors</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Toys</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h.01M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM6.6 13a5.5 5.5 0 0 0 10.81 0H6.6Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Sport</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
            />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Grocery</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Health</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Auto</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Books</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Home</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Photo/Video</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Collectibles</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Beauty</p>
      </a>
      <a href="#" class="hover group text-center">
        <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
          <svg class="h-8 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">Phone/Tablets</p>
      </a>
    </div>

    <a href="#" class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:hidden">
      View more categories
      <svg class="-me-2 ms-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
      </svg>
    </a>
  </div>
</section>
```

## Product categories with cards

Use this example to show a list of product categories inside cards with SVG icons and a title and a CTA button to view all categories for your e-commerce website.

```html
<section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="sm:flex sm:items-center sm:justify-between sm:gap-4">
      <p class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Categories that might interest you</p>

      <a href="#" title="" class="mt-4 hidden rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 lg:inline-block" role="button"> See all categories </a>
    </div>

    <div class="mb-4 mt-6 grid grid-cols-1 gap-4 text-center sm:mt-8 sm:grid-cols-2 lg:mb-0 lg:grid-cols-4 xl:gap-8">
      <a href="#" class="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
        </svg>
        <p class="text-lg font-semibold text-gray-900 dark:text-white">Laptops & Computers</p>
      </a>

      <a href="#" class="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v9c0 .6.4 1 1 1Z" />
        </svg>
        <p class="text-lg font-semibold text-gray-900 dark:text-white">TV</p>
      </a>

      <a href="#" class="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 18h2M5.9 3H18c.5 0 .9.4.9 1v16c0 .6-.4 1-.9 1H6c-.5 0-.9-.4-.9-1V4c0-.6.4-1 .9-1Z" />
        </svg>
        <p class="text-lg font-semibold text-gray-900 dark:text-white">Tablets</p>
      </a>

      <a href="#" class="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2c0 1.1.9 2 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
        </svg>
        <p class="text-lg font-semibold text-gray-900 dark:text-white">Audio</p>
      </a>

      <a href="#" class="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M16.4 18H19c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v5c0 .6.4 1 1 1h2.6m9.4-7V5c0-.6-.4-1-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4c0 .6-.4 1-1 1H8a1 1 0 0 1-1-1v-4Z" />
        </svg>
        <p class="text-lg font-semibold text-gray-900 dark:text-white">Printers</p>
      </a>

      <a href="#" class="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M8 15h7v0h0-7Zm12-9H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1ZM6 9h0v0h0v0Zm0 3h0v0h0v0Zm0 3h0v0h0v0Zm3-6h0v0h0v0Zm0 3h0v0h0v0Zm3-3h0v0h0v0Zm0 3h0v0h0v0Zm3 0h0v0h0v0Zm3 0h0v0h0v0Zm0 3h0v0h0v0Zm-3-6h0v0h0v0Zm3 0h0v0h0v0Z" />
        </svg>
        <p class="text-lg font-semibold text-gray-900 dark:text-white">Computer Accessories</p>
      </a>

      <a href="#" class="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12c.1 3-.2 6-1 9M7.1 4.4a9 9 0 0 1 13 3.7M3 15v-3a9 9 0 0 1 1.7-5.3m12.9 3c.3.8.4 1.5.4 2.3 0 2 0 4.2-.5 6.2M6 12a6 6 0 0 1 9.4-5M4 21a6 6 0 0 1 1-3.3 5 5 0 0 0 .8-2m8.7 2.5a14 14 0 0 1-1 2.7m-6-1.6C9 17.1 9 14.8 9 12a3 3 0 1 1 6 0v2.3M12 12c0 3 0 6-2 9" />
        </svg>
        <p class="text-lg font-semibold text-gray-900 dark:text-white">Security & Wi-Fi</p>
      </a>

      <a href="#" class="relative grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg class="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.6 8.4h0m-4.7 11.3-6.6-6.6a1 1 0 0 1 0-1.4l7.3-7.4a1 1 0 0 1 .7-.3H18a2 2 0 0 1 2 2v5.5a1 1 0 0 1-.3.7l-7.5 7.5a1 1 0 0 1-1.3 0Z" />
        </svg>
        <p class="text-lg font-semibold text-gray-900 dark:text-white">Deals</p>
      </a>
    </div>

    <a href="#" title="" class="mt-4 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 lg:hidden" role="button"> See all categories </a>
  </div>
</section>
```

## Advanced product categories list

Use this example to show an advanced list of product categories within cards that can feature subcategories divided with grid layouts and show an information alert component for additional context.

```html
<section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mb-4 sm:flex sm:items-center sm:justify-between sm:gap-4 md:mb-8">
      <p class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shop member deals by category</p>

      <a href="#" title="" class="mt-4 hidden rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 md:inline-block" role="button"> See more categories</a>
    </div>
    <div class="flex w-full items-center rounded-lg bg-primary-50 p-4 text-sm text-primary-800 dark:bg-gray-700 dark:text-primary-400" role="alert">
      <svg class="me-2 hidden h-5 w-5 md:flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <span>We are displaying products that ship to your location. You can select a different location in the menu above. <a href="#" class="font-medium underline hover:no-underline">Click here to learn more about international shipping.</a></span>
    </div>
    <div class="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
      <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:space-y-6">
        <p class="text-lg font-bold text-gray-900 dark:text-white">Top categories</p>

        <div class="grid grid-cols-2 divide-x divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white">
          <div class="relative pb-4 pr-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Laptop/Computers</a>
          </div>

          <div class="relative !border-t-0 pb-4 pl-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller.svg" alt="controller" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller-dark.svg" alt="controller-dark" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Gaming</a>
          </div>

          <div class="relative !border-l-0 pr-4 pt-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="ipad" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="ipad" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Tablets</a>
          </div>

          <div class="relative pl-4 pt-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/bag.svg" alt="shopping-bag" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/bag-dark.svg" alt="shopping-bag" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Fashion/Clothes</a>
          </div>
        </div>

        <a href="#" title="" class="flex items-center gap-1 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400">
          Shop now
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </a>
      </div>
      <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:space-y-6">
        <p class="text-lg font-bold text-gray-900 dark:text-white">Shop consumer electronics</p>

        <div class="grid grid-cols-2 divide-x divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white">
          <div class="relative pb-4 pr-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg" alt="laptop" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg" alt="laptop" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Laptops</a>
          </div>

          <div class="relative !border-t-0 pb-4 pl-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="watch" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="watch" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Watches</a>
          </div>

          <div class="relative !border-l-0 pr-4 pt-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg" alt="tablet" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard-dark.svg" alt="tablet" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Tablets</a>
          </div>

          <div class="relative pl-4 pt-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/airpods.svg" alt="airpods" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/airpods-dark.svg" alt="airpods" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Accessories</a>
          </div>
        </div>

        <a href="#" title="" class="flex items-center gap-1 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400">
          Shop now
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </a>
      </div>
      <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:space-y-6">
        <p class="text-lg font-bold text-gray-900 dark:text-white">Free Time</p>

        <div class="grid grid-cols-2 divide-x divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white">
          <div class="relative pb-4 pr-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-side.svg" alt="xbox" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-side-dark.svg" alt="xbox" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Consoles</a>
          </div>

          <div class="relative !border-t-0 pb-4 pl-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg" alt="peripherals" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg" alt="peripherals" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Peripherals</a>
          </div>

          <div class="relative !border-l-0 pr-4 pt-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="iphone" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="iphone" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Phones</a>
          </div>

          <div class="relative pl-4 pt-4">
            <a href="#">
              <img class="mb-4 h-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/football.svg" alt="ball" />
              <img class="mb-4 hidden h-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/football-dark.svg" alt="ball" />
            </a>
            <a href="#" title="" class="font-medium hover:underline">Sports/Outdoors</a>
          </div>
        </div>

        <a href="#" title="" class="flex items-center gap-1 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400">
          Shop now
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </a>
      </div>
    </div>
    <a href="#" title="" class="mt-4 block rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:hidden" role="button"> See more categories</a>
  </div>
</section>
```

## Categories with links

Use this example to show a list of headers and links as text on multiple columns within a grid layout to showcase all categories and subcategories of an e-commerce store.

```html
<section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-8">Top categories</h2>

    <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 xl:grid-cols-5">
      <div>
        <h3 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Electronics</h3>
        <ul class="space-y-3">
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">Laptops/Computers</a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> TV </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Projectors </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Tablets </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Audio </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Smartwatches </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Gaming Consoles </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Digital Cameras </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Headphones </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Phones </a>
          </li>
          <li>
            <a href="#" title="" class="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500">
              See more
              <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Fashion/Clothes</h3>
        <ul class="space-y-3">
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> T-shirts </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Jeans </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Dresses </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Jackets </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Sweaters </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Skirts </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Suits </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Blouses </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Shorts </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Scarves </a>
          </li>
          <li>
            <a href="#" title="" class="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500">
              See more
              <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Food & Grocery</h3>
        <ul class="space-y-3">
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Fresh Fruits </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Vegetables </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Bread and Bakery </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Dairy Products </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Meat and Poultry </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Seafood </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Grains and Pasta </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Canned Goods </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Snacks </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Beverages </a>
          </li>
          <li>
            <a href="#" title="" class="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500">
              See more
              <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Sports & Outdoors</h3>
        <ul class="space-y-3">
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Tents </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Backpacks </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Sleeping Bags </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Sports Shoes </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Fitness Trackers </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Bicycles </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Fishing Gear </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Kayaks </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Sports Apparel </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Exercise Equipment </a>
          </li>
          <li>
            <a href="#" title="" class="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500">
              See more
              <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Health & Beauty</h3>
        <ul class="space-y-3">
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Vitamin Supplements </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Shampoo & Conditioner </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Body Wash </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Sunscreen </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Toothpaste </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Lip Balm </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Deodorant </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Makeup </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Hair Styling Tools </a>
          </li>
          <li>
            <a href="#" title="" class="text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"> Face Moisturizer </a>
          </li>
          <li>
            <a href="#" title="" class="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500">
              See more
              <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

