## Default discount banner

Use this example to show a basic promotional message with a link to the discount page using a sticky banner to the top or bottom side of your website.

```html
<div id="banner" tabindex="-1" class="fixed z-50 flex w-full items-start justify-between gap-8 border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800 sm:items-center lg:py-4">
  <p class="mx-auto text-base text-gray-500 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-white">Autumn Sale is Here!</span> 🌟 Whether you're prepping for cooler days or refreshing your home, now’s the time <a href="#" class="font-medium text-gray-900 underline hover:no-underline dark:text-white">to shop!</a></p>
  <button data-collapse-toggle="banner" type="button" class="flex items-center rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
```

## Discount banner with illustration

This example can be used as another sticky banner to promote campaigns and discount codes by using an illustration and a button as CTA elements.

```html
<div id="banner-2" tabindex="-1" class="fixed z-50 flex w-full items-start justify-between gap-8 border-b border-primary-200 bg-primary-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800 sm:items-center lg:py-4">
  <div class="mx-auto items-center sm:flex sm:space-x-4">
    <div class="mb-4 flex items-center text-sm text-primary-700 dark:text-primary-300 sm:mb-0 md:text-base">
      <img class="mx-auto h-12 pe-4 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-with-rocket.svg" alt="girl with rocket illustration" />
      <img class="mx-auto hidden h-12 pe-4 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-with-rocket-dark.svg" alt="girl with rocket illustration" />
      <p class="border-primary-200 dark:border-gray-700 sm:border-s sm:ps-4"><span class="font-medium">50% Off!</span> 🌟 Don't miss out the chance to level up your gaming collection with huge savings!</p>
    </div>
    <div class="flex items-center space-x-4 sm:shrink-0 sm:space-x-0">
      <a href="#" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-center text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Shop Now</a>
      <button data-collapse-toggle="banner-2" type="button" class="flex w-full justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:hidden">Close</button>
    </div>
  </div>
  <button data-collapse-toggle="banner-2" type="button" class="hidden items-center rounded-lg p-1.5 text-sm text-primary-400 hover:bg-primary-200 hover:text-primary-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:flex">
    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
```

## Floating discount banner

Use this sticky banner example with floating styles to show a discount icon, promotional text and a CTA link to the campaign page.

```html
<div class="fixed left-1/2 -translate-x-1/2 max-w-screen-lg px-4 2xl:px-0 w-full py-4">
  <div id="banner-3" tabindex="-1" class="relative z-50 flex w-full items-start justify-between gap-8 rounded-lg border border-primary-200 bg-primary-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800 sm:items-center lg:py-4">
    <div class="items-center text-primary-700 dark:text-primary-300 sm:flex sm:space-x-3">
      <div class="mb-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 sm:mb-0">
        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
          />
        </svg>
      </div>
      <p class="border-primary-200 dark:border-gray-700">
        <span class="font-medium">BLACK FRIDAY!</span> From gadgets to fashion, enjoy huge savings on your favorite items.
        <a href="#" class="inline-flex items-center font-medium hover:underline">
          Shop now
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </a>
      </p>
    </div>
    <button data-collapse-toggle="banner-3" type="button" class="absolute end-3 top-3 items-center rounded-lg p-1.5 text-sm text-primary-400 hover:bg-primary-200 hover:text-primary-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:relative sm:end-0 sm:top-0 sm:flex">
      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
</div>
```

## Discount with modal and email signup

Use this example to show a promotional discount inside a modal component and an email signup form to create a list of audience.

```html
<div id="promo-popup" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div class="relative p-4 w-full max-w-sm max-h-full">
    <div class="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800">
      <img src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/promo-banner.jpg" class="mb-4 h-36 w-full rounded bg-cover" alt="promo banner" />
      <span class="mb-4 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-200 dark:text-green-900">
        <svg class="-ml-1 mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Today's offer
      </span>
      <div class="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <h3 class="mb-1 text-2xl font-bold text-gray-900 dark:text-white">20% Off All Gaming Gear</h3>
        <p class="text-sm">Simply enter your email to unlock this deal and stay in the loop for future promotions.</p>
      </div>
      <form action="#" class="mb-4 space-y-2">
        <div class="relative w-full">
          <label for="email" class="sr-only mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
            </svg>
          </div>
          <input class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Your email" type="email" id="email" required="" />
        </div>
        <button type="submit" class="w-full cursor-pointer rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Get my 20% OFF</button>
      </form>
      <button type="button" id="closeModal" class="inline-flex font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">No thanks</button>
    </div>
  </div>
</div>
```

```javascript
const modalEl = document.getElementById('promo-popup');
const discountModal = new Modal(modalEl, {
    placement: 'center'
});

discountModal.show();

const closeModalEl = document.getElementById('closeModal');
closeModalEl.addEventListener('click', function() {
    discountModal.hide();
});
```

## Pricing plan modal

This example can be used to promote a subscription plan for your e-commerce store or website inside of a modal component.

```html
<div id="pro-version-popup" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div class="relative p-4 w-full max-w-2xl max-h-full">
    <div class="md:p-8 p-4 shadow dark:bg-gray-800 rounded-lg bg-white">
        <div class="mb-4 flex items-center md:mb-6">
        <a href="https://flowbite.com" class="me-3 flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" class="me-2 sm:h-8" alt="Flowbite Logo" />
          <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Flowbite</span>
        </a>
        <span class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">PRO</span>
      </div>
      <p class="mb-4 border-b border-t border-gray-200 py-4 text-lg text-gray-500 dark:border-gray-700 dark:text-white md:mb-6 md:py-6 md:text-xl">You know that a <span class="font-bold text-gray-900 dark:text-white">Flowbite PRO</span> customer saves more than <span class="font-bold text-gray-900 dark:text-white">$200</span> on average per year from transport costs?</p>
      <h3 class="mb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white md:mb-6">PRO plan benefits</h3>
      <ul role="list" class="mb-4 space-y-3 md:mb-6">
        <li class="flex items-center space-x-1.5">
          <!-- Icon -->
          <svg class="h-5 w-5 shrink-0 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
          </svg>
          <span class="leading-tight text-gray-500 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-white">Free delivery</span> delivery for all products</span>
        </li>
        <li class="flex items-center space-x-1.5">
          <!-- Icon -->
          <svg class="h-5 w-5 shrink-0 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
            />
          </svg>
          <span class="leading-tight text-gray-500 dark:text-gray-400">Exlusive discount in Flowbite Store</span>
        </li>
        <li class="flex items-center space-x-1.5">
          <!-- Icon -->
          <svg class="h-5 w-5 shrink-0 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z" />
          </svg>
          <span class="leading-tight text-gray-500 dark:text-gray-400">Up to <span class="font-medium text-gray-900 dark:text-white">30% extra discount</span> on premium brands</span>
        </li>
        <li class="flex items-center space-x-1.5">
          <!-- Icon -->
          <svg class="h-5 w-5 shrink-0 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
            />
          </svg>
          <span class="leading-tight text-gray-500 dark:text-gray-400">Up to <span class="font-medium text-gray-900 dark:text-white">40% extra discounts</span> at thousands of local restaurants</span>
        </li>
      </ul>
      <div class="sn:flex items-center space-y-4 sm:space-x-4 sm:space-y-0">
        <a href="#" class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white  hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto">Try it free for 3 months</a>
        <button type="button" id="closeModal" class="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">Not today</button>
      </div>
    </div>
  </div>
</div>
```

```javascript
const modalEl = document.getElementById('pro-version-popup');
const discountModal = new Modal(modalEl, {
    placement: 'center'
});

discountModal.show();

const closeModalEl = document.getElementById('closeModal');
closeModalEl.addEventListener('click', function() {
    discountModal.hide();
});
```

## Discount corner popup

This example can be used to show an offcanvas popup component on any corner side of your website to indicate an ongoing promotion and discount campaign.

```html
<div id="signup-popup" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full px-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div class="relative w-full max-w-lg max-h-full">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 md:p-6 p-4">
      <button type="button" id="closeModal" class="absolute right-1 top-1 inline-flex items-center rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white" id="close-modal" data-collapse-toggle="sign-up-pop-up">
          <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
          </svg>
        </button>
        <div class="items-center space-y-4 sm:flex sm:space-y-0">
          <img class="h-28 dark:hidden sm:mx-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-with-rocket.svg" alt="girl with rocket illustration" />
          <img class="hidden h-28 dark:block sm:mx-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-with-rocket-dark.svg" alt="girl with rocket illustration" />
          <div class="sm:ps-6">
            <h3 class="mb-2 font-semibold text-gray-900 dark:text-white">Today's deal for gaming weekend</h3>
            <p class="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">You get up to <span class="font-medium text-gray-900 dark:text-white">-30%</span> extra on purchase of <span class="font-medium text-gray-900 dark:text-white">least $100</span> with the <span class="font-medium text-gray-900 dark:text-white">crazygaming</span> code!</p>
            <a href="#" class="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500">
              See the offer
              <svg class="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"></path>
              </svg>
            </a>
          </div>
        </div>
    </div>
  </div>
</div>
```

```javascript
const modalEl = document.getElementById('signup-popup');
const discountModal = new Modal(modalEl, {
    placement: 'bottom-right'
});

discountModal.show();

const closeModalEl = document.getElementById('closeModal');
closeModalEl.addEventListener('click', function() {
    discountModal.hide();
});
```

