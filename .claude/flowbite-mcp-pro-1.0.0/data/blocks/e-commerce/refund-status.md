## Default refund status page

Use this example to show a card of the product that is associated with the requested refund and a timeline of the process below.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mx-auto max-w-3xl space-y-6 sm:space-y-8">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Status for your refund request</h2>

      <div class="items-center gap-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <a href="#" class="mb-4 flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0">
          <img class="h-auto max-h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
          <img class="hidden h-auto max-h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
        </a>
        <a href="#" class="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white">Sony Playstation 5 Digital Edition Console with Extra Blue Controller, White PULSE 3D Headset and Surge Dual Controller Charge Docker</a>
      </div>

      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-6">
          <span class="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">
            <svg class="h-3 w-3 text-primary-800 dark:text-primary-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
          </span>
          <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            02 February 2024
          </span>
          <h3 class="mb-0.5 mt-2 text-lg font-semibold text-primary-800 dark:text-primary-300">Your request has been registered</h3>
          <p class="text-base font-normal text-primary-700 dark:text-primary-300">Please pack the product and accessories received in the original packaging. The courier will contact you to pick up the package from the specified address.</p>
        </li>

        <li class="mb-10 ms-6">
          <span class="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-800 dark:ring-gray-900">
            <svg class="h-3 w-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
          </span>
          <h3 class="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">Pick up product from the address</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Estimated time 2 February 2024 - 5 February 2024.</p>
        </li>

        <li class="mb-10 ms-6">
          <span class="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-800 dark:ring-gray-900">
            <svg class="h-3 w-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
          </span>
          <h3 class="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">Product check</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">We will carefully check the product and inform you as soon as possible if you are eligible for a refund.</p>
        </li>

        <li class="ms-6">
          <span class="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-800 dark:ring-gray-900">
            <svg class="h-3 w-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
          </span>
          <h3 class="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">Refund the amount</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">We will return the amount depending on the option chosen.</p>
        </li>
      </ol>

      <div class="sm:flex items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <a href="#" title="" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700" role="button">
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
          </svg>
          Back to your account
        </a>
        <button type="button" class="w-full sm:w-auto flex justify-center items-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
          </svg>
          Cancel the refund
        </button>
      </div>
    </div>
  </div>
</section>
```

## Refund status with timeline and cards

This example can be used to show a timeline of the refund process and cards with the associated information like the reason, price, and due date.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mx-auto max-w-lg md:max-w-5xl">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Track the refund of order <a href="#" class="hover:underline">#957684673</a></h2>

      <div class="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2 xl:mt-12">
        <div>
          <ol class="relative ms-3 border-s border-dashed border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-6">
              <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-900 dark:ring-gray-900">
                <svg class="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </span>
              <h3 class="mb-0.5 flex items-center pt-1 text-base font-semibold text-gray-900 dark:text-white">Refund the amount</h3>
              <time class="mb-2 block text-gray-500 dark:text-gray-400"> Estimated time will be 22 September 2024 </time>
              <p class="text-gray-500 dark:text-gray-400">We will return the amount depending on the option chosen.</p>
            </li>

            <li class="mb-10 ms-6">
              <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-900 dark:ring-gray-900">
                <svg class="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8 7.5 2.5 2.5M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                </svg>                  
              </span>
              <h3 class="mb-0.5 flex items-center pt-1 text-base font-semibold text-gray-900 dark:text-white">Product check</h3>
              <time class="mb-2 block text-gray-500 dark:text-gray-400"> Estimated time will be 22 September 2024 </time>
              <p class="text-gray-500 dark:text-gray-400">We will carefully check the product and inform you as soon as possible if you are eligible for a refund.</p>
            </li>

            <li class="mb-10 ms-6">
              <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-900 dark:ring-gray-900">
                <svg class="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z" />
                </svg>
              </span>
              <h3 class="mb-0.5 flex items-center pt-1 text-base font-semibold text-gray-900 dark:text-white">Products in the courier’s warehouse</h3>
              <time class="mb-2 block text-gray-500 dark:text-gray-400"> Estimated time will be 20 September 2024 </time>
              <p class="text-gray-500 dark:text-gray-400">The products have arrived at the courier's headquarters and are ready to be shipped to the seller.</p>
            </li>

            <li class="mb-10 ms-6">
              <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-900 dark:ring-gray-900">
                <svg class="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                </svg>
              </span>
              <h3 class="mb-0.5 flex items-center pt-1 text-base font-semibold text-gray-900 dark:text-white">Pick up product from the address</h3>
              <time class="mb-2 block text-gray-500 dark:text-gray-400"> 16-17 September 2024 </time>
              <p class="text-gray-500 dark:text-gray-400">Estimated time will be 2-3 business days.</p>
            </li>

            <li class="mb-10 ms-6">
              <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-900 dark:ring-gray-900">
                <svg class="h-5 w-5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 6 2 2 4-4m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
                </svg>
              </span>
              <h3 class="mb-0.5 flex items-center pt-1 text-base font-semibold text-gray-900 dark:text-white">Refund accepted</h3>
              <time class="mb-2 block text-gray-500 dark:text-gray-400"> 13 September 2024 at 12:07 </time>
            </li>

            <li class="ms-6">
              <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-900 dark:ring-gray-900">
                <svg class="h-5 w-5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
                </svg>
              </span>
              <h3 class="mb-0.5 flex items-center pt-1 text-base font-semibold text-gray-900 dark:text-white">Order placed</h3>
              <time class="mb-2 block text-gray-500 dark:text-gray-400"> 12 September 2024 at 10:45 </time>
            </li>
          </ol>
        </div>

        <div class="space-y-4">
          <div class="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4 lg:p-6 dark:border-gray-700 dark:bg-gray-800">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Details of the refund</h4>
            <dl class="space-y-1">
              <dt class="font-medium text-gray-900 dark:text-white">Refund reason</dt>
              <dd class="font-normal text-gray-500 dark:text-gray-400">The product received is broken, malfunctioning, or damaged, making it unusable.</dd>
            </dl>
            <dl class="space-y-1">
              <dt class="font-medium text-gray-900 dark:text-white">Due date</dt>
              <dd class="flex items-center font-medium text-gray-500 dark:text-gray-400">
                <svg class="me-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                12 September 2024
              </dd>
            </dl>
            <dl class="space-y-1">
              <dt class="font-medium text-gray-900 dark:text-white">Package condition</dt>
              <dd class="font-normal text-gray-500 dark:text-gray-400">I want to return a non-functional but unsealed product.</dd>
            </dl>
          </div>

          <div class="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4 lg:p-6 dark:border-gray-700 dark:bg-gray-800">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">The amount to be refunded</h4>
            <dl class="space-y-1">
              <dt class="sr-only">Amount</dt>
              <dd class="font-bold text-gray-900 dark:text-white">$7,191.00</dd>
            </dl>
          </div>

          <div class="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4 lg:p-6 dark:border-gray-700 dark:bg-gray-800">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">The chosen refund method</h4>
            <dl class="space-y-1">
              <dt class="font-medium text-gray-900 dark:text-white">Bank transfer refund</dt>
              <dd class="font-normal text-gray-500 dark:text-gray-400">The refund is processed by transferring the funds directly to your bank account.</dd>
            </dl>
            <div class="flex items-start rounded-lg bg-primary-50 px-4 py-2 text-sm text-primary-800 dark:bg-gray-700 dark:text-primary-300" role="alert">
              <svg class="me-2 mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p>Refunds may take up to 3 - 4 additional business days to reflect in your bank account from the date of initiating it.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 md:mt-8 items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
        <a href="#" title="" class="me-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto" role="button">
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
          </svg>
          Back to your account
        </a>
        <button id="cancelRefundButton" data-modal-target="cancelRefundModal" data-modal-toggle="cancelRefundModal" type="button" class="flex w-full items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:w-auto">
          <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
          </svg>
          Cancel the refund
        </button>
      </div>
    </div>
  </div>
  <!-- Cancel Refund modal -->
  <div id="cancelRefundModal" tabindex="-1" aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
    <div class="relative h-full w-full max-w-md p-4 md:h-auto">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
        <button type="button" class="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="cancelRefundModal">
          <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
          <svg class="h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
          </svg>
          <span class="sr-only">Danger icon</span>
        </div>
        <p class="mb-3.5 text-gray-900 dark:text-white">Are you sure you want to cancel the refund?</p>
        <div class="flex items-center justify-center space-x-4">
          <button data-modal-toggle="cancelRefundModal" type="button" class="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
          <button type="submit" class="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Yes, delete</button>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Refund status with sidebar layout

Use this example to show a page with a sidebar layout for the e-commerce dashboard for the refund status using a horizontal timeline and a list of informational items.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <nav class="mb-4 flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
          <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
            <svg class="me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
            </svg>
            <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2">My account</a>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg class="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
            </svg>
            <span class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Returns</span>
          </div>
        </li>
      </ol>
    </nav>
    <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-8">Track the refund <a href="#" class="hover:underline">#95768463</a></h2>
    <div class="gap-8 lg:flex">
      <!-- Sidenav -->
      <aside id="sidebar" class="hidden h-full w-80 shrink-0 overflow-y-auto border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:block lg:rounded-lg">
        <button id="dropdownUserNameButton" data-dropdown-toggle="dropdownUserName" type="button" class="dark:hover-bg-gray-700 mb-3 flex w-full items-center justify-between rounded-lg bg-white p-2 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700" type="button">
          <span class="sr-only">Open user menu</span>
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" class="mr-3 h-8 w-8 rounded-md" alt="Bonnie avatar" />
              <div class="text-left">
                <div class="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">Jese Leos (Personal)</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">jese@flowbite.com</div>
              </div>
            </div>
            <svg class="h-5 w-5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
            </svg>
          </div>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdownUserName" class="z-10 hidden w-[294px] divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700" data-popper-placement="bottom">
          <a href="#" class="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8 w-8 rounded" alt="Michael avatar" />
            <div class="text-left">
              <div class="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">Flowbite LLC (Company)</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">company@flowbite.com</div>
            </div>
          </a>
        </div>
        <div class="mb-4 w-full border-y border-gray-100 py-4 dark:border-gray-700">
          <ul class="grid grid-cols-3 gap-2">
            <li>
              <a href="#" class="group flex flex-col items-center justify-center rounded-xl bg-primary-50 p-2.5 hover:bg-primary-100 dark:bg-primary-900 dark:hover:bg-primary-800">
                <span class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-200 dark:bg-primary-800  dark:group-hover:bg-primary-700">
                  <svg class="h-5 w-5 text-primary-600 dark:text-primary-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </span>
                <span class="text-sm font-medium text-primary-600 dark:text-primary-300">Profile</span>
              </a>
            </li>
            <li>
              <a href="#" class="group flex flex-col items-center justify-center rounded-xl bg-purple-50 p-2.5 hover:bg-purple-100 dark:bg-purple-900 dark:hover:bg-purple-800">
                <span class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 dark:bg-purple-800  dark:group-hover:bg-purple-700">
                  <svg class="h-5 w-5 text-purple-600 dark:text-purple-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
                  </svg>
                </span>
                <span class="text-sm font-medium text-purple-600 dark:text-purple-300">Gifts</span>
              </a>
            </li>
            <li>
              <a href="#" class="group flex flex-col items-center justify-center rounded-xl bg-teal-50 p-2.5 hover:bg-teal-100 dark:bg-teal-900 dark:hover:bg-teal-800">
                <span class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200 dark:bg-teal-800  dark:group-hover:bg-teal-700">
                  <svg class="h-5 w-5 text-teal-600 dark:text-teal-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
                  </svg>
                </span>
                <span class="text-sm font-medium text-teal-600 dark:text-teal-300">Wallet</span>
              </a>
            </li>
          </ul>
        </div>

        <ul class="space-y-2">
          <li>
            <a href="#" class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <svg class="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
              <span class="ml-3">My orders</span>
            </a>
          </li>
          <li>
            <a href="#" class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <svg class="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
              </svg>
              <span class="ml-3 flex-1 whitespace-nowrap">Reviews</span>
            </a>
          </li>
          <li>
            <a href="#" class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <svg class="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
              </svg>
              <span class="ml-3 flex-1 whitespace-nowrap">Delivery addresses</span>
            </a>
          </li>
          <li>
            <a href="#" class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <svg class="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span class="ml-3 flex-1 whitespace-nowrap">Recently viewed</span>
            </a>
          </li>
          <li>
            <a href="#" class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <svg class="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
              </svg>
              <span class="ml-3 flex-1 whitespace-nowrap">Favourite items</span>
            </a>
          </li>
        </ul>
        <ul class="mt-5 space-y-2 border-t border-gray-100 pt-5 dark:border-gray-700">
          <li>
            <a href="#" class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <svg class="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
                />
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
              <span class="ml-3 flex-1 whitespace-nowrap">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" class="group flex items-center rounded-lg p-2 text-base font-medium text-red-600 hover:bg-red-100 dark:text-red-500 dark:hover:bg-gray-700">
              <svg class="h-6 w-6 flex-shrink-0 text-red-600 transition duration-75 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
              </svg>
              <span class="ml-3 flex-1 whitespace-nowrap">Log out</span>
            </a>
          </li>
        </ul>
      </aside>
      <!-- Right content -->
      <div class="w-full">
        <div class="my-6 md:my-8">
          <div class="grid grid-cols-1 divide-y divide-gray-200 text-start dark:divide-gray-700 md:grid-cols-4 md:gap-8 md:divide-y-0 md:text-center">
            <div class="pb-4 text-primary-700 dark:text-primary-500 md:py-0">
              <svg class="h-8 w-8 md:mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>

              <p class="mt-2 text-sm">22 Nov 2024: 12:27</p>
              <p class="mt-1 font-medium leading-tight text-sm xl:text-base">Your request has been registered</p>
            </div>

            <div class="py-4 text-primary-700 dark:text-primary-500 md:py-0">
              <svg class="h-8 w-8 md:mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"></path>
              </svg>

              <p class="mt-2 text-sm">19 Nov 2023: 10:47</p>
              <p class="mt-1 font-medium leading-tight text-sm xl:text-base">Product has been pick up from the address</p>
            </div>

            <div class="py-4 text-gray-500 dark:text-gray-400 md:py-0">
              <svg class="h-8 w-8 md:mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8 7.5 2.5 2.5M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
              </svg>                
              <p class="mt-2 text-sm font-normal">3-4 business days</p>
              <p class="mt-1 font-medium leading-tight text-sm xl:text-base">Your product will be checked by the seller</p>
            </div>

            <div class="pt-4 text-gray-500 dark:text-gray-400 md:py-0">
              <svg class="h-8 w-8 md:mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>

              <p class="mt-2 text-sm font-normal">1 business day</p>
              <p class="mt-1 font-medium leading-tight text-sm xl:text-base">Refund the amount</p>
            </div>
          </div>

          <div class="mt-6 hidden h-3 w-full rounded-sm bg-gray-200 dark:bg-gray-700 sm:mt-8 lg:block">
            <div class="h-3 rounded-sm bg-primary-700 dark:bg-primary-600" style="width: 40%"></div>
          </div>
        </div>
        <!-- List -->
        <h4 class="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Refund request details</h4>
        <div class="flow-root">
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <dl class="pb-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
              <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Order date</dt>
              <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">24 November 2023</dd>
            </dl>

            <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
              <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Refund reason</dt>
              <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">The product received is broken, making it unusable.</dd>
            </dl>

            <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
              <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Package condition</dt>
              <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">I want to return a non-functional but unsealed product</dd>
            </dl>

            <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
              <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">The chosen refund method</dt>
              <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">Store Credit/ Gift Card Refund</dd>
            </dl>

            <dl class="pt-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
              <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">The amount to be refunded</dt>
              <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">$1,299</dd>
            </dl>
          </div>
        </div>
        <div class="sm:flex items-center sm:space-x-4 space-y-4 sm:space-y-0 mt-6">
          <a href="#" title="" class="me-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto" role="button">
            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
            Back to your account
          </a>
          <button id="cancelRefundButton2" data-modal-target="cancelRefundModal2" data-modal-toggle="cancelRefundModal2" type="button" class="flex w-full items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:w-auto">
            <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            Cancel the refund
          </button>
        </div>
      </div>
    </div>
    </div>
    <!-- Cancel Refund modal -->
    <div id="cancelRefundModal2" tabindex="-1" aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
      <div class="relative h-full w-full max-w-md p-4 md:h-auto">
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
          <button type="button" class="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="cancelRefundModal2">
            <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
            <svg class="h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
            </svg>
            <span class="sr-only">Danger icon</span>
          </div>
          <p class="mb-3.5 text-gray-900 dark:text-white">Are you sure you want to cancel this refund?</p>
          <div class="flex items-center justify-center space-x-4">
            <button data-modal-toggle="cancelRefundModal2" type="button" class="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
            <button type="submit" class="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Yes, delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Refund tracking with drawer

Use this example to show all information regarding the status of a refund inside of a drawer component that includes a timeline and informational cards.

```html
<div class="m-5 text-center">
  <button id="refundTrackingButton" class="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button" data-drawer-target="refundTrackingDrawer" data-drawer-show="refundTrackingDrawer" aria-controls="refundTrackingDrawer">Show refund tracking drawer</button>
</div>

<div id="refundTrackingDrawer" class="fixed left-0 top-0 z-40 flex h-screen w-full max-w-md -translate-x-full flex-col justify-between overflow-y-auto bg-white p-4 antialiased transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label" aria-hidden="true">
  <div class="flex-1 space-y-6">
    <div class="flex items-center justify-between">
      <h3 class="text-base font-semibold uppercase leading-none text-gray-500 dark:text-gray-400">Track the refund <a href="#" class="hover:underline">#957684673</a></h3>

      <button type="button" data-drawer-dismiss="refundTrackingDrawer" data-drawer-hide="refundTrackingDrawer" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
        </svg>
      </button>
    </div>
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <li class="mb-10 ms-6">
        <span class="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
          <svg class="h-3 w-3 text-primary-800 dark:text-primary-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
          </svg>
        </span>
        <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
          <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          02 February 2024
        </span>
        <h3 class="mb-0.5 mt-2 text-lg font-semibold text-primary-800 dark:text-primary-300">Your request has been registered</h3>
        <p class="text-base font-normal text-primary-700 dark:text-primary-300">Please pack the product and accessories received in the original packaging. The courier will contact you to pick up the package from the specified address.</p>
      </li>

      <li class="mb-10 ms-6">
        <span class="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
          <svg class="h-3 w-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
          </svg>                
        </span>
        <h3 class="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">Pick up product from the address</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Estimated time 2 February 2024 - 5 February 2024.</p>
      </li>

      <li class="mb-10 ms-6">
        <span class="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
          <svg class="h-3 w-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8 7.5 2.5 2.5M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
          </svg>                
        </span>
        <h3 class="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">Product check</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">We will carefully check the product and inform you as soon as possible if you are eligible for a refund.</p>
      </li>

      <li class="ms-6">
        <span class="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
          <svg class="h-3 w-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
          </svg>                
        </span>
        <h3 class="mb-1.5 text-lg font-semibold leading-none text-gray-900 dark:text-white">Refund the amount</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">We will return the amount depending on the option chosen.</p>
      </li>
    </ol>
    <div class="space-y-4">
      <div class="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Details of the refund</h4>
        <dl class="space-y-1">
          <dt class="font-medium text-gray-900 dark:text-white">Refund reason</dt>
          <dd class="font-normal text-gray-500 dark:text-gray-400">The product received is broken, malfunctioning, or damaged, making it unusable.</dd>
        </dl>
        <dl class="space-y-1">
          <dt class="font-medium text-gray-900 dark:text-white">Due date</dt>
          <dd class="flex items-center font-medium text-gray-500 dark:text-gray-400">
            <svg class="me-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
            </svg>
            12 September 2024
          </dd>
        </dl>
        <dl class="space-y-1">
          <dt class="font-medium text-gray-900 dark:text-white">Package condition</dt>
          <dd class="font-normal text-gray-500 dark:text-gray-400">I want to return a non-functional but unsealed product.</dd>
        </dl>
      </div>

      <div class="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">The amount to be refunded</h4>
        <dl class="space-y-1">
          <dt class="sr-only">Amount</dt>
          <dd class="font-bold text-gray-900 dark:text-white">$7,191.00</dd>
        </dl>
      </div>

      <div class="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">The chosen refund method</h4>
        <dl class="space-y-1">
          <dt class="font-medium text-gray-900 dark:text-white">Bank transfer refund</dt>
          <dd class="font-normal text-gray-500 dark:text-gray-400">The refund is processed by transferring the funds directly to your bank account.</dd>
        </dl>
        <div class="rounded-lg bg-primary-50 px-4 py-2 text-sm text-primary-800 dark:bg-gray-600 dark:text-primary-300" role="alert">
          <p>Refunds may take up to 3 - 4 additional business days to reflect in your bank account from the date of initiating it.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 sm:flex sm:items-center sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
    <button data-drawer-dismiss="refundTrackingDrawer" data-drawer-hide="refundTrackingDrawer" type="button" title="" class="me-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto" role="button">
      <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
      </svg>
      Return to homepage
    </button>
    <button type="button" class="flex w-full items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:w-auto">
      <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
      </svg>
      Cancel the refund
    </button>
  </div>
</div>
```

## Refund tracking with modal

Use this example to show a modal component containing the refund status elements such as a timeline and a list of informations related to the requested refund.

```html
<div class="m-5 flex justify-center">
  <button id="orderTrackingButton" data-modal-target="orderTrackingModal" data-modal-toggle="orderTrackingModal" class="block rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">Show refund tracking modal</button>
</div>

<div id="orderTrackingModal" tabindex="-1" aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
  <div class="relative max-h-full w-full max-w-4xl p-4">
    <!-- Modal content -->
    <div class="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
      <!-- Modal header -->
      <div class="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-700 sm:mb-5">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Track the delivery of order <a href="#" class="hover:underline">#957684673</a></h3>
        <button type="button" class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="orderTrackingModal">
          <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="grid md:grid-cols-2 gap-5 md:gap-8">
        <div>
          <h4 class="mb-4 md:mb-5 text-lg font-semibold text-gray-900 dark:text-white">Refund request details</h4>
          <div class="flow-root">
            <div class="divide-y divide-gray-200 dark:divide-gray-700">
              <dl class="pb-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
                <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Order date</dt>
                <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">24 November 2023</dd>
              </dl>

              <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
                <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Refund reason</dt>
                <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">Missing parts</dd>
              </dl>

              <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
                <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Package condition</dt>
                <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">New</dd>
              </dl>

              <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
                <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Refund method</dt>
                <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">Gift card</dd>
              </dl>

              <dl class="pt-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
                <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Amount to be refunded</dt>
                <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">$1,299</dd>
              </dl>
            </div>
          </div>
        </div>
        <ol class="relative ms-3 border-s border-dashed border-gray-200 dark:border-gray-700">
          <li class="mb-10 ms-6">
            <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-800 dark:ring-gray-800">
              <svg class="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
            </span>
            <h3 class="mb-0.5 flex items-center pt-1 text-base font-semibold text-gray-900 dark:text-white">Refund the amount</h3>
            <time class="mb-2 block text-gray-500 dark:text-gray-400"> Estimated time will be 22 September 2024 </time>
            <p class="text-gray-500 dark:text-gray-400">The amount will be refunded based on the chosen option.</p>
          </li>

          <li class="mb-10 ms-6">
            <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-800 dark:ring-gray-800">
              <svg class="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8 7.5 2.5 2.5M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
              </svg>                  
            </span>
            <h3 class="mb-0.5 flex items-center pt-1 text-base font-semibold text-gray-900 dark:text-white">Product check</h3>
            <time class="mb-2 block text-gray-500 dark:text-gray-400"> Estimated time will be 22 September 2024 </time>
            <p class="text-gray-500 dark:text-gray-400">We will carefully check the product and inform you if you are eligible for a refund.</p>
          </li>

          <li class="mb-10 ms-6">
            <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-800 dark:ring-gray-800">
              <svg class="h-5 w-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
            </span>
            <h3 class="mb-0.5 flex items-center pt-1 text-base font-semibold text-gray-900 dark:text-white">Pick up product from the address</h3>
            <time class="mb-2 block text-gray-500 dark:text-gray-400"> 16-17 September 2024 </time>
          </li>

          <li class="mb-10 ms-6">
            <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-800 dark:ring-gray-800">
              <svg class="h-5 w-5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 6 2 2 4-4m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
              </svg>
            </span>
            <h3 class="mb-0.5 flex items-center pt-1 text-base font-semibold text-gray-900 dark:text-white">Refund accepted</h3>
            <time class="mb-2 block text-gray-500 dark:text-gray-400"> 13 September 2024 at 12:07 </time>
          </li>

          <li class="ms-6">
            <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-800 dark:ring-gray-800">
              <svg class="h-5 w-5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
              </svg>
            </span>
            <h3 class="mb-0.5 flex items-center pt-1 text-base font-semibold text-gray-900 dark:text-white">Order placed</h3>
            <time class="mb-2 block text-gray-500 dark:text-gray-400"> 12 September 2024 at 10:45 </time>
          </li>
        </ol>
      </div>
      <div class="mt-4 items-center space-x-0 space-y-4 border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex sm:space-x-4 sm:space-y-0 md:mt-5 md:pt-5">            
        <button data-modal-toggle="orderTrackingModal" type="button" title="" class="me-2 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700" role="button">
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
          </svg>
          Back to your account
        </button>
        <button type="button" class="flex w-full items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:w-auto">
          <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
          </svg>
          Cancel the refund
        </button>
      </div>
    </div>
  </div>
</div>
```

