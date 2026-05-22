## Default order summary

Use this example to show a list of selected products, billing information, shipping details and a payment method before sending the order.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mx-auto max-w-3xl">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Order summary</h2>

      <div class="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Billing & Delivery information</h4>

        <dl>
          <dt class="text-base font-medium text-gray-900 dark:text-white">Individual</dt>
          <dd class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">Bonnie Green - +1 234 567 890, San Francisco, California, United States, 3454, Scott Street</dd>
        </dl>

        <button type="button" data-modal-target="billingInformationModal" data-modal-toggle="billingInformationModal" class="text-base font-medium text-primary-700 hover:underline dark:text-primary-500">Edit</button>
      </div>

      <div class="mt-6 sm:mt-8">
        <div class="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
          <table class="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
              <tr>
                <td class="whitespace-nowrap py-4 md:w-[384px]">
                  <div class="flex items-center gap-4">
                    <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                      <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                      <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                    </a>
                    <a href="#" class="hover:underline">Apple iMac 27”</a>
                  </div>
                </td>

                <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

                <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$1,499</td>
              </tr>

              <tr>
                <td class="whitespace-nowrap py-4 md:w-[384px]">
                  <div class="flex items-center gap-4">
                    <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                      <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                      <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                    </a>
                    <a href="#" class="hover:underline">Apple iPhone 14</a>
                  </div>
                </td>

                <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x2</td>

                <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$1,998</td>
              </tr>

              <tr>
                <td class="whitespace-nowrap py-4 md:w-[384px]">
                  <div class="flex items-center gap-4">
                    <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                      <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="ipad image" />
                      <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="ipad image" />
                    <a href="#" class="hover:underline">Apple iPad Air</a>
                  </div>
                </td>

                <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

                <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$898</td>
              </tr>

              <tr>
                <td class="whitespace-nowrap py-4 md:w-[384px]">
                  <div class="flex items-center gap-4">
                    <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                      <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg" alt="xbox image" />
                      <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg" alt="xbox image" />
                    <a href="#" class="hover:underline">Xbox Series X</a>
                  </div>
                </td>

                <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x4</td>

                <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$4,499</td>
              </tr>

              <tr>
                <td class="whitespace-nowrap py-4 md:w-[384px]">
                  <div class="flex items-center gap-4">
                    <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                      <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="playstation image" />
                      <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="playstation image" />
                    <a href="#" class="hover:underline">PlayStation 5</a>
                  </div>
                </td>

                <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

                <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$499</td>
              </tr>

              <tr>
                <td class="whitespace-nowrap py-4 md:w-[384px]">
                  <div class="flex items-center gap-4">
                    <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                      <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg" alt="macbook image" />
                      <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg" alt="macbook image" />
                    <a href="#" class="hover:underline">MacBook Pro 16"</a>
                  </div>
                </td>

                <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

                <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$499</td>
              </tr>

              <tr>
                <td class="whitespace-nowrap py-4 md:w-[384px]">
                  <div class="flex items-center gap-4">
                    <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                      <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="watch image" />
                      <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="watch image" />
                    <a href="#" class="hover:underline">Apple Watch SE</a>
                  </div>
                </td>

                <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x2</td>

                <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$799</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-4 space-y-6">
          <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</h4>

          <div class="space-y-4">
            <div class="space-y-2">
              <dl class="flex items-center justify-between gap-4">
                <dt class="text-gray-500 dark:text-gray-400">Original price</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">$6,592.00</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-gray-500 dark:text-gray-400">Savings</dt>
                <dd class="text-base font-medium text-green-500">-$299.00</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-gray-500 dark:text-gray-400">Store Pickup</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-gray-500 dark:text-gray-400">Tax</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">$799</dd>
              </dl>
            </div>

            <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt class="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
              <dd class="text-lg font-bold text-gray-900 dark:text-white">$7,191.00</dd>
            </dl>
          </div>

          <div class="flex items-start sm:items-center">
            <input id="terms-checkbox-2" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label for="terms-checkbox-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> I agree with the <a href="#" title="" class="text-primary-700 underline hover:no-underline dark:text-primary-500">Terms and Conditions</a> of use of the Flowbite marketplace </label>
          </div>

          <div class="gap-4 sm:flex sm:items-center">
            <button type="button" class="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Return to Shopping</button>

            <button type="submit" class="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0">Send the order</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</section>

<div id="billingInformationModal" tabindex="-1" aria-hidden="true" class="antialiased fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-auto w-full max-h-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
  <div class="relative max-h-auto w-full max-h-full max-w-lg p-4">
    <!-- Modal content -->
    <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
      <!-- Modal header -->
      <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Billing Information</h3>
        <button type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="billingInformationModal">
          <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <form class="p-4 md:p-5">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
          <div class="flex items-center gap-4 sm:col-span-2">
            <div class="flex items-center">
              <input id="company_address_billing_modal" data-collapse-toggle="company-info-container-modal" aria-expanded="false" type="checkbox" value="" name="address-type-modal" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="company_address_billing_modal" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Order as a company </label>
            </div>
          </div>
  
          <div class="grid hidden grid-cols-2 gap-4 sm:col-span-2" id="company-info-container-modal">
            <div>
              <label for="company_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Company name </label>
              <input type="text" id="company_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Flowbite LLC" />
            </div>
  
            <div>
              <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> VAT number </label>
              <input type="text" id="vat_number" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="DE42313253" />
            </div>
          </div>
  
          <div class="sm:col-span-2">
            <div class="mb-2 flex items-center gap-1">
              <label for="saved-address-modal" class="block text-sm font-medium text-gray-900 dark:text-white"> Saved Address </label>
              <svg data-tooltip-target="saved-address-modal-desc-2" data-tooltip-trigger="hover" class="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd" />
              </svg>
            </div>
            <select id="saved-address-modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
              <option selected>Choose one of your saved address</option>
              <option value="address-1">San Francisco, California, United States, 3454, Scott Street</option>
              <option value="address-2">New York, United States, Broadway 10012</option>
            </select>
            <div id="saved-address-modal-desc-2" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Choose one of your saved addresses
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
  
          <div>
            <label for="first_name_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> First Name* </label>
            <input type="text" id="first_name_billing_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your first name" required />
          </div>
  
          <div>
            <label for="last_name_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Last Name* </label>
            <input type="text" id="last_name_billing_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your last name" required />
          </div>
  
          <div class="sm:col-span-2">
            <label for="phone-input_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number* </label>
            <div class="flex items-center">
              <button id="dropdown_phone_input__button_billing_modal" data-dropdown-toggle="dropdown_phone_input_billing_modal" class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                <svg fill="none" aria-hidden="true" class="me-2 h-4 w-4" viewBox="0 0 20 15">
                  <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                  <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                  </mask>
                  <g mask="url(#a)">
                    <path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" />
                    <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                    <g filter="url(#filter0_d_343_121520)">
                      <path
                        fill="url(#paint0_linear_343_121520)"
                        fill-rule="evenodd"
                        d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff" />
                      <stop offset="1" stop-color="#F0F0F0" />
                    </linearGradient>
                    <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="1" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                    </filter>
                  </defs>
                </svg>
                +1
                <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>
              <div id="dropdown_phone_input_billing_modal" class="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                <ul class="p-2 text-sm font-medium text-gray-700 dark:text-gray-200" aria-labelledby="dropdown_phone_input__button_billing_modal">
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg fill="none" aria-hidden="true" class="me-2 h-4 w-4" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" />
                            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                            <g filter="url(#filter0_d_343_121520)">
                              <path
                                fill="url(#paint0_linear_343_121520)"
                                fill-rule="evenodd"
                                d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                clip-rule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#fff" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                            <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="1" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                        United States (+1)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                            <path fill="#fff" fill-rule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z" clip-rule="evenodd" />
                            <path stroke="#DB1F35" stroke-linecap="round" stroke-width=".667" d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093" />
                            <path fill="#E6273E" fill-rule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clip-rule="evenodd" />
                          </g>
                        </svg>
                        United Kingdom (+44)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                            <path fill="#fff" stroke="#fff" stroke-width=".667" d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z" />
                            <path fill="url(#paint0_linear_374_135177)" fill-rule="evenodd" d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z" clip-rule="evenodd" />
                            <path fill="url(#paint1_linear_374_135177)" fill-rule="evenodd" d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z" clip-rule="evenodd" />
                            <path
                              fill="#fff"
                              fill-rule="evenodd"
                              d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                              clip-rule="evenodd"
                            />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.5" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#fff" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.033" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FF2E3B" />
                              <stop offset="1" stop-color="#FC0D1B" />
                            </linearGradient>
                          </defs>
                        </svg>
                        Australia (+61)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#262626" fill-rule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clip-rule="evenodd" />
                            <g filter="url(#filter0_d_374_135180)">
                              <path fill="#F01515" fill-rule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clip-rule="evenodd" />
                            </g>
                            <g filter="url(#filter1_d_374_135180)">
                              <path fill="#FFD521" fill-rule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clip-rule="evenodd" />
                            </g>
                          </g>
                          <defs>
                            <filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                            <filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                        Germany (+49)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#F5F5F5" stroke-width=".5" rx="1.75" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#fff" stroke-width=".5" rx="1.75" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#F44653" d="M13.067.5H19.6v14h-6.533z" />
                            <path fill="#1035BB" fill-rule="evenodd" d="M0 14.5h6.533V.5H0v14z" clip-rule="evenodd" />
                          </g>
                        </svg>
                        France (+33)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#262626" fill-rule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clip-rule="evenodd" />
                            <g filter="url(#filter0_d_374_135180)">
                              <path fill="#F01515" fill-rule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clip-rule="evenodd" />
                            </g>
                            <g filter="url(#filter1_d_374_135180)">
                              <path fill="#FFD521" fill-rule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clip-rule="evenodd" />
                            </g>
                          </g>
                          <defs>
                            <filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                            <filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                        Germany (+49)
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="relative w-full">
                <input type="text" id="phone-input" class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
              </div>
            </div>
          </div>

          <div>
            <div class="mb-2 flex items-center gap-2">
              <label for="select_country_input_billing_modal" class="block text-sm font-medium text-gray-900 dark:text-white"> Country* </label>
            </div>
            <select id="select_country_input_billing_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
              <option selected>United States</option>
              <option value="AS">Australia</option>
              <option value="FR">France</option>
              <option value="ES">Spain</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
  
          <div>
            <div class="mb-2 flex items-center gap-2">
              <label for="select_city_input_billing_modal" class="block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
            </div>
            <select id="select_city_input_billing_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
              <option selected>San Francisco</option>
              <option value="NY">New York</option>
              <option value="LA">Los Angeles</option>
              <option value="CH">Chicago</option>
              <option value="HU">Houston</option>
            </select>
          </div>
  
          <div class="sm:col-span-2">
            <label for="address_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Shipping Address* </label>
            <textarea id="address_billing_modal" rows="4" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter here your address"></textarea>
          </div>

        </div>
        <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
          <button type="submit" class="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save information</button>
          <button type="button" data-modal-toggle="billingInformationModal" class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>
```

## Order summary with edit modals

Use this example to show the summary of the order inside cards and also allow the user to edit the details using modals.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Order summary</h2>

    <div class="mt-8 space-y-6 md:space-y-8">
      <div class="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
        <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Billing information</h4>

          <dl>
            <dt class="text-base font-medium text-gray-900 dark:text-white">Company</dt>
            <dd class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">Bergside LLC, VAT 123456, (+1) 234 567 890</dd>
          </dl>

          <button type="button" data-modal-target="billingInformationModal" data-modal-toggle="billingInformationModal" class="text-base font-medium text-primary-700 hover:underline dark:text-primary-500">Edit</button>
        </div>

        <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Delivery information</h4>

          <dl>
            <dt class="text-base font-medium text-gray-900 dark:text-white">DHL Express</dt>
            <dd class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">3454 Scott Street, San Francisco, California, United States</dd>
          </dl>

          <button type="button" data-modal-target="deliveryInformationModal" data-modal-toggle="deliveryInformationModal" class="text-base font-medium text-primary-700 hover:underline dark:text-primary-500">Edit</button>
        </div>

        <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Payment method</h4>

          <p class="text-base font-medium text-gray-900 dark:text-white">Online with credit card</p>

          <button type="button" data-modal-target="paymentInformationModal" data-modal-toggle="paymentInformationModal" class="text-base font-medium text-primary-700 hover:underline dark:text-primary-500">Edit</button>
        </div>
      </div>

      <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
        <div class="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square w-20 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS Sonoma, Blue, Keyboard layout INT </a>
            </div>
          </div>

          <div class="w-8 shrink-0">
            <p class="text-base font-normal text-gray-900 dark:text-white">x1</p>
          </div>

          <div class="md:w-24 md:text-right">
            <p class="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square w-20 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band </a>
            </div>
          </div>

          <div class="w-8 shrink-0">
            <p class="text-base font-normal text-gray-900 dark:text-white">x2</p>
          </div>

          <div class="md:w-24 md:text-right">
            <p class="text-base font-bold text-gray-900 dark:text-white">$598</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square w-20 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> Sony Playstation 5 Digital Edition Console with Extra Blue Controller, White PULSE 3D Headset and Surge Dual Controller, 2 games </a>
            </div>
          </div>

          <div class="w-8 shrink-0">
            <p class="text-base font-normal text-gray-900 dark:text-white">x1</p>
          </div>

          <div class="md:w-24 md:text-right">
            <p class="text-base font-bold text-gray-900 dark:text-white">$799</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square w-20 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> Xbox Series X Diablo IV Bundle + Xbox Wireless Controller Carbon Black </a>
            </div>
          </div>

          <div class="w-8 shrink-0">
            <p class="text-base font-normal text-gray-900 dark:text-white">x1</p>
          </div>

          <div class="md:w-24 md:text-right">
            <p class="text-base font-bold text-gray-900 dark:text-white">$699</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square w-20 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> APPLE iPhone 15 5G phone, 256GB, Gold </a>
            </div>
          </div>

          <div class="w-8 shrink-0">
            <p class="text-base font-normal text-gray-900 dark:text-white">x3</p>
          </div>

          <div class="md:w-24 md:text-right">
            <p class="text-base font-bold text-gray-900 dark:text-white">$2,997</p>
          </div>
        </div>
      </div>

      <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="space-y-2">
          <dl class="flex items-center justify-between gap-4">
            <dt class="text-gray-500 dark:text-gray-400">Original price</dt>
            <dd class="text-base font-medium text-gray-900 dark:text-white">$6,592.00</dd>
          </dl>

          <dl class="flex items-center justify-between gap-4">
            <dt class="text-gray-500 dark:text-gray-400">Savings</dt>
            <dd class="text-base font-medium text-green-500">-$299.00</dd>
          </dl>

          <dl class="flex items-center justify-between gap-4">
            <dt class="text-gray-500 dark:text-gray-400">Store Pickup</dt>
            <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
          </dl>

          <dl class="flex items-center justify-between gap-4">
            <dt class="text-gray-500 dark:text-gray-400">Tax</dt>
            <dd class="text-base font-medium text-gray-900 dark:text-white">$799</dd>
          </dl>
        </div>

        <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt class="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
          <dd class="text-lg font-bold text-gray-900 dark:text-white">$7,191.00</dd>
        </dl>
      </div>

      <div class="flex items-start sm:items-center">
        <input id="terms-checkbox" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
        <label for="terms-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> I agree with the <a href="#" title="" class="text-primary-700 underline hover:no-underline dark:text-primary-500">Terms and Conditions</a> of use of the Flowbite marketplace </label>
      </div>

      <div class="gap-4 sm:flex sm:items-center">
        <button type="button" class="w-full rounded-lg  border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">Return to Shopping</button>
        <button type="submit" class="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600  dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto">Send the order</button>
      </div>
    </div>
  </form>
</section>

<div id="billingInformationModal" tabindex="-1" aria-hidden="true" class="antialiased fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
  <div class="relative max-h-full w-full max-w-lg p-4">
    <!-- Modal content -->
    <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
      <!-- Modal header -->
      <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Billing Information</h3>
        <button type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="billingInformationModal">
          <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <form class="p-4 md:p-5">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
          <div class="flex items-center gap-4 sm:col-span-2">
            <div class="flex items-center">
              <input id="company_address_billing_modal" data-collapse-toggle="company-info-container-modal" aria-expanded="false" type="checkbox" value="" name="address-type-modal" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="company_address_billing_modal" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Order as a company </label>
            </div>
          </div>
  
          <div class="grid hidden grid-cols-2 gap-4 sm:col-span-2" id="company-info-container-modal">
            <div>
              <label for="company_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Company name </label>
              <input type="text" id="company_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Flowbite LLC" />
            </div>
  
            <div>
              <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> VAT number </label>
              <input type="text" id="vat_number" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="DE42313253" />
            </div>
          </div>
  
          <div>
            <label for="first_name_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> First Name* </label>
            <input type="text" id="first_name_billing_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your first name" required />
          </div>
  
          <div>
            <label for="last_name_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Last Name* </label>
            <input type="text" id="last_name_billing_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your last name" required />
          </div>
  
          <div class="sm:col-span-2">
            <label for="phone-input-billing-modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number* </label>
            <div class="flex items-center">
              <button id="phone-input-billing-modal-dropdown-button" data-dropdown-toggle="phone-input-billing-modal-dropdown" class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                <svg fill="none" aria-hidden="true" class="me-2 h-4 w-4" viewBox="0 0 20 15">
                  <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                  <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                  </mask>
                  <g mask="url(#a)">
                    <path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" />
                    <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                    <g filter="url(#filter0_d_343_121520)">
                      <path
                        fill="url(#paint0_linear_343_121520)"
                        fill-rule="evenodd"
                        d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff" />
                      <stop offset="1" stop-color="#F0F0F0" />
                    </linearGradient>
                    <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="1" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                    </filter>
                  </defs>
                </svg>
                +1
                <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>
              <div id="phone-input-billing-modal-dropdown" class="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                <ul class="p-2 text-sm font-medium text-gray-700 dark:text-gray-200" aria-labelledby="phone-input-billing-modal-dropdown-button">
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg fill="none" aria-hidden="true" class="me-2 h-4 w-4" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" />
                            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                            <g filter="url(#filter0_d_343_121520)">
                              <path
                                fill="url(#paint0_linear_343_121520)"
                                fill-rule="evenodd"
                                d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                clip-rule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#fff" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                            <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="1" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                        United States (+1)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                            <path fill="#fff" fill-rule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z" clip-rule="evenodd" />
                            <path stroke="#DB1F35" stroke-linecap="round" stroke-width=".667" d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093" />
                            <path fill="#E6273E" fill-rule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clip-rule="evenodd" />
                          </g>
                        </svg>
                        United Kingdom (+44)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                            <path fill="#fff" stroke="#fff" stroke-width=".667" d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z" />
                            <path fill="url(#paint0_linear_374_135177)" fill-rule="evenodd" d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z" clip-rule="evenodd" />
                            <path fill="url(#paint1_linear_374_135177)" fill-rule="evenodd" d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z" clip-rule="evenodd" />
                            <path
                              fill="#fff"
                              fill-rule="evenodd"
                              d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                              clip-rule="evenodd"
                            />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.5" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#fff" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.033" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FF2E3B" />
                              <stop offset="1" stop-color="#FC0D1B" />
                            </linearGradient>
                          </defs>
                        </svg>
                        Australia (+61)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#262626" fill-rule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clip-rule="evenodd" />
                            <g filter="url(#filter0_d_374_135180)">
                              <path fill="#F01515" fill-rule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clip-rule="evenodd" />
                            </g>
                            <g filter="url(#filter1_d_374_135180)">
                              <path fill="#FFD521" fill-rule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clip-rule="evenodd" />
                            </g>
                          </g>
                          <defs>
                            <filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                            <filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                        Germany (+49)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#F5F5F5" stroke-width=".5" rx="1.75" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#fff" stroke-width=".5" rx="1.75" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#F44653" d="M13.067.5H19.6v14h-6.533z" />
                            <path fill="#1035BB" fill-rule="evenodd" d="M0 14.5h6.533V.5H0v14z" clip-rule="evenodd" />
                          </g>
                        </svg>
                        France (+33)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#262626" fill-rule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clip-rule="evenodd" />
                            <g filter="url(#filter0_d_374_135180)">
                              <path fill="#F01515" fill-rule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clip-rule="evenodd" />
                            </g>
                            <g filter="url(#filter1_d_374_135180)">
                              <path fill="#FFD521" fill-rule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clip-rule="evenodd" />
                            </g>
                          </g>
                          <defs>
                            <filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                            <filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                        Germany (+49)
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="relative w-full">
                <input type="text" id="phone-input" class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
              </div>
            </div>
          </div>

          <div>
            <div class="mb-2 flex items-center gap-2">
              <label for="select_country_input_billing_modal" class="block text-sm font-medium text-gray-900 dark:text-white"> Country* </label>
            </div>
            <select id="select_country_input_billing_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
              <option selected>United States</option>
              <option value="AS">Australia</option>
              <option value="FR">France</option>
              <option value="ES">Spain</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
  
          <div>
            <div class="mb-2 flex items-center gap-2">
              <label for="select_city_input_billing_modal" class="block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
            </div>
            <select id="select_city_input_billing_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
              <option selected>San Francisco</option>
              <option value="NY">New York</option>
              <option value="LA">Los Angeles</option>
              <option value="CH">Chicago</option>
              <option value="HU">Houston</option>
            </select>
          </div>
  
          <div class="sm:col-span-2">
            <label for="address_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Shipping Address* </label>
            <textarea id="address_billing_modal" rows="4" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter here your address"></textarea>
          </div>

        </div>
        <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
          <button type="submit" class="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save information</button>
          <button type="button" data-modal-toggle="billingInformationModal" class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>

<div id="deliveryInformationModal" tabindex="-1" aria-hidden="true" class="antialiased fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
  <div class="relative max-h-full w-full max-w-lg p-4">
    <!-- Modal content -->
    <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
      <!-- Modal header -->
      <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Delivery Information</h3>
        <button type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deliveryInformationModal">
          <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <form class="p-4 md:p-5">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
  
          <div class="sm:col-span-2">
            <div class="mb-2 flex items-center gap-1">
              <label for="delivery-methods-modal" class="block text-sm font-medium text-gray-900 dark:text-white"> Delivery Methods </label>
              <svg data-tooltip-target="delivery-methods-modal-desc-3" data-tooltip-trigger="hover" class="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd" />
              </svg>
            </div>
            <select id="delivery-methods-modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
              <option selected value="method-2">DHL Express - $15</option>
              <option value="method-2">Royal Post Office - $6</option>
              <option value="method-3">USP Standard - $20</option>
            </select>
            <div id="delivery-methods-modal-desc-3" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Choose the preferred way of delivery
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
  
          <div>
            <label for="first_name_delivery_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> First Name* </label>
            <input type="text" id="first_name_delivery_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your first name" required />
          </div>
  
          <div>
            <label for="last_name_delivery_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Last Name* </label>
            <input type="text" id="last_name_delivery_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter your last name" required />
          </div>
  
          <div class="sm:col-span-2">
            <label for="phone-input-delivery-modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number* </label>
            <div class="flex items-center">
              <button id="phone-input-delivery-modal-dropdown-button" data-dropdown-toggle="phone-input-delivery-modal-dropdown" class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                <svg fill="none" aria-hidden="true" class="me-2 h-4 w-4" viewBox="0 0 20 15">
                  <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                  <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                  </mask>
                  <g mask="url(#a)">
                    <path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" />
                    <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                    <g filter="url(#filter0_d_343_121520)">
                      <path
                        fill="url(#paint0_linear_343_121520)"
                        fill-rule="evenodd"
                        d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#fff" />
                      <stop offset="1" stop-color="#F0F0F0" />
                    </linearGradient>
                    <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="1" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                    </filter>
                  </defs>
                </svg>
                +1
                <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>
              <div id="phone-input-delivery-modal-dropdown" class="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                <ul class="p-2 text-sm font-medium text-gray-700 dark:text-gray-200" aria-labelledby="hone-input-delivery-modal-dropdown-button">
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg fill="none" aria-hidden="true" class="me-2 h-4 w-4" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" />
                            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                            <g filter="url(#filter0_d_343_121520)">
                              <path
                                fill="url(#paint0_linear_343_121520)"
                                fill-rule="evenodd"
                                d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                clip-rule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#fff" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                            <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="1" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                        United States (+1)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                            <path fill="#fff" fill-rule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z" clip-rule="evenodd" />
                            <path stroke="#DB1F35" stroke-linecap="round" stroke-width=".667" d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093" />
                            <path fill="#E6273E" fill-rule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clip-rule="evenodd" />
                          </g>
                        </svg>
                        United Kingdom (+44)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                            <path fill="#fff" stroke="#fff" stroke-width=".667" d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z" />
                            <path fill="url(#paint0_linear_374_135177)" fill-rule="evenodd" d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z" clip-rule="evenodd" />
                            <path fill="url(#paint1_linear_374_135177)" fill-rule="evenodd" d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z" clip-rule="evenodd" />
                            <path
                              fill="#fff"
                              fill-rule="evenodd"
                              d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                              clip-rule="evenodd"
                            />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.5" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#fff" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.033" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FF2E3B" />
                              <stop offset="1" stop-color="#FC0D1B" />
                            </linearGradient>
                          </defs>
                        </svg>
                        Australia (+61)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#262626" fill-rule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clip-rule="evenodd" />
                            <g filter="url(#filter0_d_374_135180)">
                              <path fill="#F01515" fill-rule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clip-rule="evenodd" />
                            </g>
                            <g filter="url(#filter1_d_374_135180)">
                              <path fill="#FFD521" fill-rule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clip-rule="evenodd" />
                            </g>
                          </g>
                          <defs>
                            <filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                            <filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                        Germany (+49)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#F5F5F5" stroke-width=".5" rx="1.75" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#fff" stroke-width=".5" rx="1.75" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#F44653" d="M13.067.5H19.6v14h-6.533z" />
                            <path fill="#1035BB" fill-rule="evenodd" d="M0 14.5h6.533V.5H0v14z" clip-rule="evenodd" />
                          </g>
                        </svg>
                        France (+33)
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                      <span class="inline-flex items-center">
                        <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#262626" fill-rule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clip-rule="evenodd" />
                            <g filter="url(#filter0_d_374_135180)">
                              <path fill="#F01515" fill-rule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clip-rule="evenodd" />
                            </g>
                            <g filter="url(#filter1_d_374_135180)">
                              <path fill="#FFD521" fill-rule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clip-rule="evenodd" />
                            </g>
                          </g>
                          <defs>
                            <filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                            <filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                        Germany (+49)
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="relative w-full">
                <input type="text" id="phone-input" class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
              </div>
            </div>
          </div>

          <div>
            <div class="mb-2 flex items-center gap-2">
              <label for="select_country_input_delivery_modal" class="block text-sm font-medium text-gray-900 dark:text-white"> Country* </label>
            </div>
            <select id="select_country_input_delivery_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
              <option selected>United States</option>
              <option value="AS">Australia</option>
              <option value="FR">France</option>
              <option value="ES">Spain</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
  
          <div>
            <div class="mb-2 flex items-center gap-2">
              <label for="select_city_input_delivery_modal" class="block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
            </div>
            <select id="select_city_input_delivery_modal" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
              <option selected>San Francisco</option>
              <option value="NY">New York</option>
              <option value="LA">Los Angeles</option>
              <option value="CH">Chicago</option>
              <option value="HU">Houston</option>
            </select>
          </div>
  
          <div class="sm:col-span-2">
            <label for="address_delivery_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Shipping Address* </label>
            <textarea id="address_delivery_modal" rows="4" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Enter here your address"></textarea>
          </div>

        </div>
        <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
          <button type="submit" class="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save information</button>
          <button type="button" data-modal-toggle="deliveryInformationModal" class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>

<div id="paymentInformationModal" tabindex="-1" aria-hidden="true" class="antialiased fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
  <div class="relative max-h-full w-full max-w-lg p-4">
    <!-- Modal content -->
    <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
      <!-- Modal header -->
      <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Payment Methods</h3>
        <button type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="paymentInformationModal">
          <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <form class="p-4 md:p-5">
        <div class="mb-5">
          <div class="space-y-4">
            <div class="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-600 dark:bg-gray-700">
            <div>
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="visa" aria-describedby="visa-text" type="radio" name="payment-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                </div>

                <div class="ms-4 text-sm">
                  <label for="visa" class="font-medium text-gray-900 dark:text-white"> Visa ending in 7658 </label>
                  <p id="visa-text" class="text-xs font-normal text-gray-500 dark:text-gray-400">Expiry 10/2024</p>
                </div>
              </div>

              <div class="mt-4 flex items-center gap-2">
                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-500"></div>

                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
              </div>
            </div>

            <div class="shrink-0">
              <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
              <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
            </div>
          </div>
          <div class="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-600 dark:bg-gray-700">
            <div>
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="mastercard" aria-describedby="mastercard-text" type="radio" name="payment-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                </div>

                <div class="ms-4 text-sm">
                  <label for="mastercard" class="font-medium text-gray-900 dark:text-white"> Mastercard ending in 8429 </label>
                  <p id="mastercard-text" class="text-xs font-normal text-gray-500 dark:text-gray-400">Expiry 04/2026</p>
                </div>
              </div>

              <div class="mt-4 flex items-center gap-2">
                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-500"></div>

                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
              </div>
            </div>

            <div class="shrink-0">
              <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
              <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="" />
            </div>
          </div>
          <div class="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-600 dark:bg-gray-700">
            <div>
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="paypal" aria-describedby="paypal-text" type="radio" name="payment-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                </div>

                <div class="ms-4 text-sm">
                  <label for="paypal" class="font-medium text-gray-900 dark:text-white"> Paypal account </label>
                </div>
              </div>

              <div class="mt-4 flex items-center gap-2">
                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-500"></div>

                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
              </div>
            </div>

            <div class="shrink-0">
              <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="" />
              <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="" />
            </div>
          </div>

            <div class="flex items-center gap-4 sm:col-span-2">
              <div class="flex items-center">
                <input id="payment_method_new_modal" data-collapse-toggle="new-payment-method-container" aria-expanded="false" type="checkbox" value="" name="payment-method-modal" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="payment_method_new_modal" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Add new payment method </label>
              </div>
            </div>

            <div id="new-payment-method-container" class="hidden">
              <div class="flex items-center gap-4 sm:col-span-2 mb-5">
                <div class="flex items-center">
                  <input checked id="credit-card-payment-modal" type="radio" value="" name="payment-method-modal-type" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                  <label for="credit-card-payment-modal" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Credit Card </label>
                </div>

                <div class="flex items-center">
                  <input id="paypal-payment-modal" type="radio" value="" name="payment-method-modal-type" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                  <label for="paypal-payment-modal" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> PayPal </label>
                </div>
              </div>
              <label for="card-number-input" class="sr-only">Card number:</label>
              <div class="grid md:grid-cols-4 gap-4">
                <div class="relative col-span-2">
                  <label for="card-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name*</label>
                  <input type="text" id="card-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name on card" required />
                </div>
                <div class="relative col-span-2">
                  <label for="card-number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card number*</label>
                  <input type="text" id="card-number-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxx xxxx xxxx xxxx" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
                </div>
              </div>
              <div class="grid grid-cols-5 gap-4 my-4">
                  <div class="col-span-3">
                    <label for="card-expiration-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card expiration*</label>
                    <div class="relative max-w-sm">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <input datepicker datepicker-format="mm/yy" id="card-expiration-input" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12/23" required />
                    </div>
                  </div>
                  <div class="col-span-2">
                      <label for="cvv-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Security code*</label>
                      <input type="number" id="cvv-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxx" required />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
          <button type="submit" class="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save information</button>
          <button type="button" data-modal-toggle="paymentInformationModal" class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
```

## Order summary with stepper and sidebar

Use this example to show the final step of an e-commerce purchase using a stepper and a sidebar layout to provide all shipping details and the order amount.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <ol class="items-nter flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
      <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:w-full sm:after:inline-block sm:after:content-[''] xl:after:mx-10">
        <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Cart
        </span>
      </li>

      <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:w-full sm:after:inline-block sm:after:content-[''] xl:after:mx-10">
        <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Checkout
        </span>
      </li>

      <li class="flex shrink-0 items-center text-primary-700 dark:text-primary-500">
        <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Order summary
      </li>
    </ol>

    <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-8">
      <div class="min-w-0 flex-1 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
        <div class="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square w-20 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS Sonoma, Blue, Keyboard layout INT </a>
            </div>
          </div>

          <div class="w-8 shrink-0">
            <p class="text-base font-normal text-gray-900 dark:text-white">x1</p>
          </div>

          <div class="md:w-24 md:text-right">
            <p class="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square w-20 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band </a>
            </div>
          </div>

          <div class="w-8 shrink-0">
            <p class="text-base font-normal text-gray-900 dark:text-white">x2</p>
          </div>

          <div class="md:w-24 md:text-right">
            <p class="text-base font-bold text-gray-900 dark:text-white">$598</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square w-20 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> Sony Playstation 5 Digital Edition Console with Extra Blue Controller, White PULSE 3D Headset and Surge Dual Controller, 2 games </a>
            </div>
          </div>

          <div class="w-8 shrink-0">
            <p class="text-base font-normal text-gray-900 dark:text-white">x1</p>
          </div>

          <div class="md:w-24 md:text-right">
            <p class="text-base font-bold text-gray-900 dark:text-white">$799</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square w-20 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> Xbox Series X Diablo IV Bundle + Xbox Wireless Controller Carbon Black </a>
            </div>
          </div>

          <div class="w-8 shrink-0">
            <p class="text-base font-normal text-gray-900 dark:text-white">x1</p>
          </div>

          <div class="md:w-24 md:text-right">
            <p class="text-base font-bold text-gray-900 dark:text-white">$699</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square w-20 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> APPLE iPhone 15 5G phone, 256GB, Gold </a>
            </div>
          </div>

          <div class="w-8 shrink-0">
            <p class="text-base font-normal text-gray-900 dark:text-white">x3</p>
          </div>

          <div class="md:w-24 md:text-right">
            <p class="text-base font-bold text-gray-900 dark:text-white">$2,997</p>
          </div>
        </div>
      </div>

      <div class="mt-6 w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
        <div class="p-6">
          <h4 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Order Details</h4>

          <div class="flow-root">
            <div class="divide-y divide-gray-200 dark:divide-gray-700">
              <dl class="pb-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Order date</dt>
                <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">24 November 2023</dd>
              </dl>

              <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Email</dt>
                <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">name@example.com</dd>
              </dl>

              <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                <dt class="whitespace-nowrap text-base font-semibold text-gray-900 dark:text-white">Phone</dt>
                <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">+123 456 7890</dd>
              </dl>

              <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Payment method</dt>
                <dd class="mt-2 flex items-center gap-2 sm:mt-0 sm:justify-end">
                  <img class="h-auto w-5" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
                  <span class="text-right text-gray-500 dark:text-gray-400"> Credit Card </span>
                </dd>
              </dl>

              <dl class="pt-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Shipping address</dt>
                <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">62 Miles Drive St, Newark, NJ 07103, California,</dd>
              </dl>
            </div>
          </div>
        </div>

        <div class="space-y-4 p-6">
          <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Order amount</h4>

          <div class="space-y-4">
            <div class="space-y-2">
              <dl class="flex items-center justify-between gap-4">
                <dt class="text-gray-500 dark:text-gray-400">Original price</dt>
                <dd class="font-medium text-gray-900 dark:text-white">$6,592.00</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-gray-500 dark:text-gray-400">Savings</dt>
                <dd class="font-medium text-green-500">-$299.00</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-gray-500 dark:text-gray-400">Store Pickup</dt>
                <dd class="font-medium text-gray-900 dark:text-white">$99</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-gray-500 dark:text-gray-400">Tax</dt>
                <dd class="font-medium text-gray-900 dark:text-white">$799</dd>
              </dl>
            </div>

            <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt class="font-bold text-gray-900 dark:text-white">Total</dt>
              <dd class="font-bold text-gray-900 dark:text-white">$7,191.00</dd>
            </dl>
          </div>

          <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5  py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4   focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Place your order</button>

          <p class="max-w-xs text-sm font-normal text-gray-500 dark:text-gray-400">By placing your order, you agree to Flowbite's <a href="#" title="" class="text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">privacy note</a> and <a href="#" title="" class="text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">terms of use</a>.</p>
        </div>

        <div class="space-y-4 bg-gray-50 p-6 dark:bg-gray-700">
          <p class="text-sm font-medium text-gray-900 dark:text-white">Your benefits:</p>
          <ul class="list-outside list-disc space-y-1 pl-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            <li>Pre-order guarantee</li>
            <li>Free shipping</li>
            <li>Best price</li>
          </ul>

          <a href="#" title="" class="inline-block text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"> How are shipping costs calculated? </a>

          <p class="max-w-xs text-sm font-normal text-gray-500 dark:text-gray-400">Flowbite PRO shipping benefits have been applied to your order.</p>
        </div>
      </div>
    </div>
  </form>
</section>
```

## Order summary with drawer

This example can be used to add all order summary information inside of a drawer component that can be shown or dismissed off-canvas.

``html
<div class="m-5 text-center">
  <button id="orderSummaryButton" class="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button" data-drawer-target="orderSummaryDrawer" data-drawer-show="orderSummaryDrawer" aria-controls="orderSummaryDrawer">Show order summary drawer</button>
</div>

<form action="#" id="orderSummaryDrawer" class="fixed left-0 top-0 z-40 flex h-screen w-full max-w-md -translate-x-full flex-col justify-between overflow-y-auto bg-white p-4 antialiased transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label" aria-hidden="true">
  <div class="flex-1 space-y-6">
    <div class="flex items-center justify-between">
      <h3 class="text-base font-semibold uppercase leading-none text-gray-500 dark:text-gray-400">My shopping cart</h3>

      <button type="button" data-drawer-dismiss="orderSummaryDrawer" data-drawer-hide="orderSummaryDrawer" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
        </svg>
      </button>
    </div>

    <div>
      <div class="space-y-4 border-b border-gray-200 pb-4 dark:border-gray-700">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Billing information</h4>

        <dl>
          <dt class="text-base font-medium text-gray-900 dark:text-white">Company</dt>
          <dd class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">Bergside LLC, VAT 123456, (+1) 234 567 890</dd>
        </dl>

        <button type="button" class="text-base font-medium text-primary-700 hover:underline dark:text-primary-500">Edit</button>
      </div>

      <div class="space-y-4 border-b border-gray-200 py-4 dark:border-gray-700">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Delivery information</h4>

        <dl>
          <dt class="text-base font-medium text-gray-900 dark:text-white">DHL Express</dt>
          <dd class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">3454 Scott Street, San Francisco, California, United States</dd>
        </dl>

        <button type="button" class="text-base font-medium text-primary-700 hover:underline dark:text-primary-500">Edit</button>
      </div>

      <div class="space-y-4 border-b border-gray-200 py-4 dark:border-gray-700">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Payment method</h4>

        <p class="text-base font-medium text-gray-900 dark:text-white">Online with credit card</p>

        <button type="button" class="text-base font-medium text-primary-700 hover:underline dark:text-primary-500">Edit</button>
      </div>
    </div>
    <div>
      <h4 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Products</h4>
      <div class="relative overflow-x-auto">
        <table class="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <td class="whitespace-nowrap pb-4 md:w-[224px]">
                <div class="flex items-center gap-4">
                  <a href="#" class="aspect-square h-10 w-10 shrink-0 flex items-center">
                    <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                  </a>
                </a>
                  <a href="#" class="hover:underline">Apple iMac 27”</a>
              </td>

              <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

              <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$1,499</td>
            </tr>

            <tr>
              <td class="whitespace-nowrap py-4 md:w-[224px]">
                <div class="flex items-center gap-4">
                  <a href="#" class="aspect-square h-10 w-10 shrink-0 flex items-center">
                    <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="phone image" />
                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="phone image" />
                  </a>
                  <a href="#" class="hover:underline">Apple iPhone 14</a>
                </div>
              </td>

              <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x2</td>

              <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$1,998</td>
            </tr>

            <tr>
              <td class="whitespace-nowrap py-4 md:w-[224px]">
                <div class="flex items-center gap-4">
                  <a href="#" class="aspect-square h-10 w-10 shrink-0 flex items-center">
                    <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="ipad image" />
                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="ipad image" />
                  </a>
                  <a href="#" class="hover:underline">Apple iPad Air</a>
                </div>
              </td>

              <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

              <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$898</td>
            </tr>

            <tr>
              <td class="whitespace-nowrap py-4 md:w-[224px]">
                <div class="flex items-center gap-4">
                  <a href="#" class="aspect-square h-10 w-10 shrink-0 flex items-center">
                    <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg" alt="xbox image" />
                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg" alt="xbox image" />
                  </a>
                  <a href="#" class="hover:underline">Xbox Series X</a>
                </div>
              </td>

              <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x4</td>

              <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$4,499</td>
            </tr>

            <tr>
              <td class="whitespace-nowrap py-4 md:w-[224px]">
                <div class="flex items-center gap-4">
                  <a href="#" class="aspect-square h-10 w-10 shrink-0 flex items-center">
                    <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="playstation image" />
                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="playstation image" />
                  </a>
                  <a href="#" class="hover:underline">PlayStation 5</a>
                </div>
              </td>

              <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

              <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$499</td>
            </tr>

            <tr>
              <td class="whitespace-nowrap py-4 md:w-[224px]">
                <div class="flex items-center gap-4">
                  <a href="#" class="aspect-square h-10 w-10 shrink-0 flex items-center">
                    <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg" alt="macbook image" />
                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg" alt="macbook image" />
                  </a>
                  <a href="#" class="hover:underline">MacBook Pro 16"</a>
                </div>
              </td>

              <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

              <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$499</td>
            </tr>

            <tr>
              <td class="whitespace-nowrap pt-4 md:w-[224px]">
                <div class="flex items-center gap-4">
                  <a href="#" class="aspect-square h-10 w-10 shrink-0 flex items-center">
                    <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="watch image" />
                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="watch image" />
                  </a>
                  <a href="#" class="hover:underline">Apple Watch SE</a>
                </div>
              </td>

              <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x2</td>

              <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$799</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Total price -->
    <div class="rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
      <h4 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Order amount</h4>

      <dl class="mb-2 flex items-center justify-between gap-4">
        <dt class="font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
        <dd class="font-medium text-gray-900 dark:text-white">$5,992</dd>
      </dl>

      <dl class="mb-2 flex items-center justify-between gap-4">
        <dt class="font-normal text-gray-500 dark:text-gray-400">Savings</dt>
        <dd class="font-medium text-green-500 dark:text-green-400">$0</dd>
      </dl>

      <dl class="mb-2 flex items-center justify-between gap-4">
        <dt class="font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
        <dd class="font-medium text-gray-900 dark:text-white">$99</dd>
      </dl>

      <dl class="mb-2 flex items-center justify-between gap-4">
        <dt class="font-normal text-gray-500 dark:text-gray-400">Tax</dt>
        <dd class="font-medium text-gray-900 dark:text-white">$199</dd>
      </dl>

      <dl class="mt-4 flex items-center justify-between gap-4 border-t border-gray-200 pt-2 font-bold text-gray-900 dark:border-gray-700 dark:text-white">
        <dt>Total</dt>
        <dd>$6,290</dd>
      </dl>
    </div>
  </div>

  <div class="mt-8 gap-4 sm:flex sm:items-center sm:justify-center">
    <button type="submit" class="mb-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600  dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mb-0 sm:mt-0">Place your order</button>
    <button type="button" data-drawer-dismiss="orderSummaryDrawer" data-drawer-hide="orderSummaryDrawer" class="block w-full rounded-lg  border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel the order</button>
  </div>
</form>
```

## Order summary with modal

Use this component show the order summary and selected products to be purchased inside of a modal component.

```html
<div class="m-5 flex justify-center">
  <button id="orderSummaryButton" data-modal-target="orderSummaryModal" data-modal-toggle="orderSummaryModal" class="block rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">Show order summary modal</button>
</div>

<form action="#" id="orderSummaryModal" tabindex="-1" aria-hidden="true" class="antialiased fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
  <div class="relative max-h-full w-full max-w-3xl p-4">
    <!-- Modal content -->
    <div class="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
      <!-- Modal header -->
      <div class="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-700 sm:mb-5">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Order summary</h3>
        <button type="button" class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="orderSummaryModal">
          <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="flow-root">
        <div class="divide-y divide-gray-200 dark:divide-gray-700">
          <dl class="pb-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
            <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Order date</dt>
            <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">24 November 2023</dd>
          </dl>

          <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
            <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Email</dt>
            <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">name@example.com</dd>
          </dl>

          <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
            <dt class="whitespace-nowrap text-base font-semibold text-gray-900 dark:text-white">Phone</dt>
            <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">+123 456 7890</dd>
          </dl>

          <dl class="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
            <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Payment method</dt>
            <dd class="mt-2 flex items-center gap-2 sm:mt-0 sm:justify-end">
              <img class="h-auto w-5" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
              <span class="text-right text-gray-500 dark:text-gray-400"> Credit Card </span>
            </dd>
          </dl>

          <dl class="pt-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
            <dt class="whitespace-nowrap font-semibold text-gray-900 dark:text-white">Shipping address</dt>
            <dd class="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">62 Miles Drive St, Newark, NJ 07103, California,</dd>
          </dl>
        </div>
      </div>
      <h4 class="mb-4 mt-5 text-lg font-semibold text-gray-900 dark:text-white">Products</h4>
      <div class="mb-5 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-gray-50 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
        <div class="items-center space-y-4 p-4 sm:flex sm:gap-6 sm:space-y-0">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square h-14 w-14 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS Sonoma, Blue, Keyboard layout INT </a>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-8 shrink-0">
              <p class="text-base font-normal text-gray-900 dark:text-white">x1</p>
            </div>

            <div class="md:w-24 md:text-right">
              <p class="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
            </div>
          </div>
        </div>

        <div class="items-center space-y-4 p-4 sm:flex sm:gap-6 sm:space-y-0">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square h-14 w-14 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band </a>
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-8 shrink-0">
              <p class="text-base font-normal text-gray-900 dark:text-white">x2</p>
            </div>

            <div class="md:w-24 md:text-right">
              <p class="text-base font-bold text-gray-900 dark:text-white">$598</p>
            </div>
          </div>
        </div>

        <div class="items-center space-y-4 p-4 sm:flex sm:gap-6 sm:space-y-0">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square h-14 w-14 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> Sony Playstation 5 Digital Edition Console with Extra Blue Controller, White PULSE 3D Headset and Surge Dual Controller, 2 games </a>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-8 shrink-0">
              <p class="text-base font-normal text-gray-900 dark:text-white">x1</p>
            </div>

            <div class="md:w-24 md:text-right">
              <p class="text-base font-bold text-gray-900 dark:text-white">$799</p>
            </div>
          </div>
        </div>

        <div class="items-center space-y-4 p-4 sm:flex sm:gap-6 sm:space-y-0">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square h-14 w-14 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> Xbox Series X Diablo IV Bundle + Xbox Wireless Controller Carbon Black </a>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-8 shrink-0">
              <p class="text-base font-normal text-gray-900 dark:text-white">x1</p>
            </div>

            <div class="md:w-24 md:text-right">
              <p class="text-base font-bold text-gray-900 dark:text-white">$699</p>
            </div>
          </div>
        </div>

        <div class="items-center space-y-4 p-4 sm:flex sm:gap-6 sm:space-y-0">
          <div class="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
            <a href="#" class="block aspect-square h-14 w-14 shrink-0">
              <img class="h-full w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
              <img class="hidden h-full w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
            </a>

            <div class="w-full md:max-w-sm lg:max-w-md">
              <a href="#" class="font-medium text-gray-900 hover:underline dark:text-white"> APPLE iPhone 15 5G phone, 256GB, Gold </a>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-8 shrink-0">
              <p class="text-base font-normal text-gray-900 dark:text-white">x3</p>
            </div>

            <div class="md:w-24 md:text-right">
              <p class="text-base font-bold text-gray-900 dark:text-white">$2,997</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 space-y-4">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Order summary</h4>
        <div class="space-y-4">
          <div class="space-y-2">
            <dl class="flex items-center justify-between gap-4">
              <dt class="text-gray-500 dark:text-gray-400">Original price</dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">$6,592.00</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4">
              <dt class="text-gray-500 dark:text-gray-400">Savings</dt>
              <dd class="text-base font-medium text-green-500">-$299.00</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4">
              <dt class="text-gray-500 dark:text-gray-400">Store Pickup</dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4">
              <dt class="text-gray-500 dark:text-gray-400">Tax</dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">$799</dd>
            </dl>
          </div>

          <dl class="flex items-center justify-between gap-4">
            <dt class="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
            <dd class="text-lg font-bold text-gray-900 dark:text-white">$7,191.00</dd>
          </dl>
        </div>
      </div>
      <div class="mt-4 items-center space-x-0 space-y-4 border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex sm:space-x-4 sm:space-y-0 md:mt-5 md:pt-5">
        <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600  dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto">Place your order</button>
        <button type="button" data-modal-toggle="orderSummaryModal" class="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">Cancel the order</button>
      </div>
    </div>
  </div>
</form>
```

