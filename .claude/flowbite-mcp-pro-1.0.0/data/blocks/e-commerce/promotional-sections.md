## Default promo section

Use this example to show a basic promotional section for your e-commerce website by showing an image, heading, paragraph and a CTA button.

```html
<section class="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
    <div class="lg:col-span-5 lg:mt-0">
      <a href="#">
        <img class="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg" alt="peripherals" />
        <img class="mb-4 hidden dark:block md:h-full" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg" alt="peripherals" />
      </a>
    </div>
    <div class="me-auto place-self-center lg:col-span-7">
      <h1 class="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
        Save $500 today on your purchase <br />
        of a new iMac computer.
      </h1>
      <p class="mb-6 text-gray-500 dark:text-gray-400">Reserve your new Apple iMac 27” today and enjoy exclusive savings with qualified activation. Pre-order now to secure your discount.</p>
      <a href="#" class="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"> Pre-order now </a>
    </div>
  </div>
</section>
```

## Promo section with cards

This example can be used to show a list of featured cards as a way to promote shopping incentives to your potential e-commerce customers using SVG icons, a description and a CTA link.

```html
<section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mb-4 text-center md:mb-8">
      <h2 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">Why Flowbite Shop?</h2>
      <p class="text-base text-gray-500 dark:text-gray-400 md:text-xl">Simplify the entire ordering process from search to fulfillment, all in one platform.</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      <div class="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <svg class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"
          />
        </svg>
        <h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Enjoy secure payments</h3>
        <p class="mb-4 text-gray-500 dark:text-gray-400">Pay for your order in over 20 currencies via 20+ secure payment methods, including flexible payment terms.</p>
        <a href="#" class="flex items-center justify-center font-medium text-primary-700 hover:underline dark:text-primary-500">
          How to make the payments
          <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </a>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <svg class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        </svg>
        <h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Comprehensive logistics</h3>
        <p class="mb-4 text-gray-500 dark:text-gray-400">Get your logistics needs fulfilled with best solutions, with real-time tracking for 40,000+ routes across 208 countries.</p>
        <a href="#" class="flex items-center justify-center font-medium text-primary-700 hover:underline dark:text-primary-500">
          Get premium delivery
          <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </a>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <svg class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
        </svg>
        <h3 class="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Handle everything effortlessly</h3>
        <p class="mb-4 text-gray-500 dark:text-gray-400">Check order status, manage suppliers, track payments and shipments, and contact after-sales support all via My Account.</p>
        <a href="#" class="flex items-center justify-center font-medium text-primary-700 hover:underline dark:text-primary-500">
          Activate your account
          <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
```

## Promo section with illustration

This example can be used to show a list of advantages and incentives next to a custom illustration to promote the features of your e-commerce website.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl items-center gap-8 px-4 lg:grid lg:grid-cols-2 xl:gap-16 2xl:px-0 ">
    <div class="text-base text-gray-500 dark:text-gray-400">
      <h2 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">Start your shopping journey</h2>
      <p class="mb-8 md:text-xl">Find what speaks to you, and embark on a shopping experience that's both convenient and enjoyable.</p>
      <div class="mb-6 border-b border-t border-gray-200 py-8 dark:border-gray-800">
        <div class="flex">
          <div class="bg-white-100 me-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <svg class="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
            </svg>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Advanced Filtering</h3>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Easy-to-use advanced filtering options (by category, price, brand, etc.) to help customers find products quickly.</p>
            <a href="#" class="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500">
              Learn more
              <svg class="ms-1 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </div>
        </div>
        <div class="flex pt-8">
          <div class="bg-white-100 me-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <svg class="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"
              />
            </svg>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Secure Payment</h3>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Integration with trusted payment gateways (such as PayPal, Stripe, etc.) to ensure safe and secure transactions for customers.</p>
            <a href="#" class="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500">
              Learn more
              <svg class="ms-1 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </div>
        </div>
        <div class="flex pt-8">
          <div class="bg-white-100 me-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <svg class="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
            </svg>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Shipping Options</h3>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Multiple shipping methods with real-time shipping cost calculation and tracking information provided to customers.</p>
            <a href="#" class="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500">
              Learn more
              <svg class="ms-1 h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p>Deliver great service experiences - without the complexity of traditional shops.</p>
    </div>
    <div class="hidden lg:flex">
      <img class="mb-4 w-full rounded-lg dark:hidden lg:mb-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/store.svg" alt="store image" />
      <img class="mb-4 hidden w-full rounded-lg dark:block lg:mb-0" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/store-dark.svg" alt="store image" />
    </div>
  </div>
</section>
```

## Promo section with carousel

Use this example to show a list of features and then a list of multiple user testimonials inside of a carousel component that slides automatically every few seconds.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mb-4 text-center md:mb-8">
      <h2 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">Why us?</h2>
      <p class="text-base text-gray-500 dark:text-gray-400 md:text-xl">Discover why choosing us is your best decision for online shopping.</p>
    </div>
    <div class="mb-4 border-b border-t border-gray-200 py-6 dark:border-gray-800 sm:py-16 md:mb-8 md:py-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-6 md:gap-y-8 lg:grid-cols-3">
        <div class="flex items-start gap-4">
          <svg class="h-9 w-9 shrink-0 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
          </svg>
          <div class="min-w-0 flex-1">
            <h6 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Real time order tracking</h6>
            <p class="mb-3 text-sm text-gray-500 dark:text-gray-400">Find out when your online purchase will arrive or schedule a delivery.</p>
            <ul class="space-y-3 text-sm font-medium">
              <li>
                <a href="#" title="" class="flex items-center text-primary-700 underline hover:no-underline dark:text-primary-500">
                  Track Your Order
                  <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title="" class="flex items-center text-primary-700 underline hover:no-underline dark:text-primary-500">
                  Schedule Delivery
                  <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <svg class="h-9 w-9 shrink-0 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
            />
          </svg>

          <div class="min-w-0 flex-1">
            <h6 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Your marketplace</h6>
            <p class="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">Earn Reward Dollars every time you shop, plus get access to special offers and event..</p>

            <ul class="space-y-3 text-sm font-medium">
              <li>
                <a href="#" title="" class="flex items-center text-primary-700 underline hover:no-underline dark:text-primary-500">
                  Apply Now
                  <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title="" class="flex items-center text-primary-700 underline hover:no-underline dark:text-primary-500">
                  Manage Your Shop
                  <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <svg class="h-9 w-9 shrink-0 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z" />
          </svg>

          <div class="min-w-0 flex-1">
            <h6 class="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Premium support</h6>
            <p class="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">Various support channels to assist customers with inquiries, orders, and product information.</p>
            <ul class="space-y-3 text-sm font-normal text-gray-500 dark:text-gray-400">
              <li class="flex items-center gap-2">
                <svg class="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"></path>
                </svg>
                Office: +12(3) 456 7890 1234
              </li>

              <li class="flex items-center gap-2">
                <svg class="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"></path>
                </svg>
                Support: <a href="#" class="hover:underline">company@flowbite.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Carousel -->
    <div id="animation-carousel" data-carousel="slide">
      <div class="relative h-[196px] overflow-hidden sm:h-[236px] lg:h-[240px] xl:h-[200px]">
        <!-- Carousel item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Amazing Quality Products</h3>
                <p class="my-4">"I am thoroughly impressed with the quality of the products I purchased. They exceeded my expectations and the customer service was outstanding."</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span>
              </figcaption>
            </figure>

            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Excellent Customer Service</h3>
                <p class="my-4">"The team went above and beyond to ensure my order was perfect. They were prompt, courteous, and incredibly helpful throughout the process."</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Jese Leos</span>
              </figcaption>
            </figure>

            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Fast and Reliable Shipping</h3>
                <p class="my-4">"I received my order much quicker than expected. The packaging was secure and the items were exactly as described. Highly recommend this shop!"</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Roberta Casas</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- Carousel item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Secure Packaging</h3>
                <p class="my-4">"I am extremely pleased with the quality of the products I bought. They surpassed my expectations, and the customer service was exceptional."</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Helene Engels</span>
              </figcaption>
            </figure>

            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Highly Recommended</h3>
                <p class="my-4">"The team went the extra mile to make sure my order was flawless. They were prompt, polite, and incredibly supportive throughout the entire process."</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Lana Byrd</span>
              </figcaption>
            </figure>

            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Exceeded Expectations</h3>
                <p class="my-4">"My order arrived much faster than I anticipated. The packaging was secure, and the items matched the description perfectly. I highly recommend this shop!"</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Neil Sims</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- Carousel item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Great Shopping Experience</h3>
                <p class="my-4">"I am thoroughly impressed with the quality of the products I purchased. They exceeded my expectations and the customer service was outstanding."</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span>
              </figcaption>
            </figure>

            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Friendly Support Team</h3>
                <p class="my-4">"The team went above and beyond to ensure my order was perfect. They were prompt, courteous, and incredibly helpful throughout the process."</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Jese Leos</span>
              </figcaption>
            </figure>

            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Fast and Reliable Shipping</h3>
                <p class="my-4">"I received my order much quicker than expected. The packaging was secure and the items were exactly as described. Highly recommend this shop!"</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Roberta Casas</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- Carousel item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Best Refund Policy</h3>
                <p class="my-4">"The quality of the products I purchased is outstanding. They went above and beyond my expectations, and the customer service was top-notch."</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Michael Gough</span>
              </figcaption>
            </figure>

            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Awesome Support</h3>
                <p class="my-4">"The team went above and beyond to ensure my order was perfect. They were quick, courteous, and provided incredible support throughout."</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Joseph Mcfall</span>
              </figcaption>
            </figure>

            <figure class="rounded bg-gray-50 p-6 dark:bg-gray-800">
              <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Best products</h3>
                <p class="my-4">"I received my order much sooner than expected. The packaging was secure, and the items were exactly as described. I highly recommend this shop!"</p>
              </blockquote>
              <figcaption class="flex items-center space-x-3">
                <img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="profile picture" />
                <span class="font-medium text-gray-900 dark:text-white">Thomas Lean</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div class="mt-4 flex items-center justify-center md:mt-6">
        <button type="button" class="group me-4 flex h-full cursor-pointer items-center justify-center focus:outline-none" data-carousel-prev>
          <span class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg aria-hidden="true" class="h-7 w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>

        <button type="button" class="group flex h-full cursor-pointer items-center justify-center focus:outline-none" data-carousel-next>
          <span class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg aria-hidden="true" class="h-7 w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
```

## Promo section for mobile app

This example can be used to promote the iOS and Android version of your e-commerce website mobile application using this featured section with cards and CTA download buttons.

```html
<section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl items-center gap-8 px-4 lg:grid lg:grid-cols-2 xl:gap-16 2xl:px-0 ">
    <div class="mb-8">
      <h2 class="mb-4 mt-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">Buy faster and from anywhere with our mobile application</h2>
      <p class="text-gray-500 dark:text-gray-400 sm:text-xl">Enhance your shopping experience with our convenient mobile application, allowing you to browse and purchase items swiftly from anywhere and anytime.</p>
      <div class="mt-6 items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
        <a href="#" class="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-auto">
          <svg class="me-3 h-7 w-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="currentColor"
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            ></path>
          </svg>
          <div class="text-left">
            <div class="mb-1 text-xs">Download on the</div>
            <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
          </div>
        </a>
        <a href="#" class="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-auto">
          <svg class="me-3 h-7 w-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
          <div class="text-left">
            <div class="mb-1 text-xs">Get it on</div>
            <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
          </div>
        </a>
      </div>
    </div>
    <div class="grid space-y-8 sm:grid-cols-2 sm:gap-8 sm:space-y-0">
      <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <svg class="mb-2 h-8 w-8 text-primary-700 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        </svg>
        <h3 class="mb-2 text-xl font-semibold dark:text-white">Premium Shipping</h3>
        <p class="font-light text-gray-500 dark:text-gray-400">Multiple shipping methods with real-time shipping cost</p>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <svg class="mb-2 h-8 w-8 text-primary-700 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
          />
        </svg>
        <h3 class="mb-2 text-xl font-semibold dark:text-white">Weekly Promotions</h3>
        <p class="font-light text-gray-500 dark:text-gray-400">Explore our weekly promotions for special discounts</p>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <svg class="mb-2 h-8 w-8 text-primary-700 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
        </svg>
        <h3 class="mb-2 text-xl font-semibold dark:text-white">Advanced Filtering</h3>
        <p class="font-light text-gray-500 dark:text-gray-400">Advanced filtering options (by category, price and more)</p>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <svg class="mb-2 h-8 w-8 text-primary-700 dark:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"
          />
        </svg>
        <h3 class="mb-2 text-xl font-semibold dark:text-white">Secure Payment</h3>
        <p class="font-light text-gray-500 dark:text-gray-400">Integration with trusted payment gateways such as Stripe</p>
      </div>
    </div>
  </div>
</section>
```

