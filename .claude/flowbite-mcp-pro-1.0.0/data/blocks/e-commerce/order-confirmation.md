## Default order confirmation

Use this example to show an order confirmation with details and follow up buttons to track the order or return shopping after successfully finishing payment.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-2xl px-4 2xl:px-0">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">Thanks for your order!</h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">Your order <a href="#" class="font-medium text-gray-900 dark:text-white hover:underline">#7564804</a> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
      <div class="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Date</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">14 May 2024</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Payment Method</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">JPMorgan monthly installments</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Name</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Flowbite Studios LLC</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Address</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">34 Scott Street, San Francisco, California, USA</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Phone</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">+(123) 456 7890</dd>
          </dl>
      </div>
      <div class="flex items-center space-x-4">
          <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Track your order</a>
          <a href="#" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Return to shopping</a>
      </div>
  </div>
</section>
```

## Order confirmation with sidebar

This example can be used to show the order details and an overview of the products purchased as a confirmation of a successful online payment.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-5xl px-4 2xl:px-0">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">Thanks for your order!</h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
      <div class="grid md:grid-cols-2 md:gap-12">
          <div class="mb-6 md:mb-8">
              <div class="divide-y divide-gray-200 dark:divide-gray-800 mb-6 md:mb-8">
                  <dl class="sm:flex items-center justify-between gap-4 pb-3">
                      <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Order number</dt>
                      <dd class="font-medium text-gray-900 dark:text-white sm:text-end">#76453857</dd>
                  </dl>
                  <dl class="sm:flex items-center justify-between gap-4 py-3">
                      <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Date</dt>
                      <dd class="font-medium text-gray-900 dark:text-white sm:text-end">14 May 2024</dd>
                  </dl>
                  <dl class="sm:flex items-center justify-between gap-4 py-3">
                      <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Payment Method</dt>
                      <dd class="font-medium text-gray-900 dark:text-white sm:text-end">JPMorgan monthly installments</dd>
                  </dl>
                  <dl class="sm:flex items-center justify-between gap-4 py-3">
                      <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Name</dt>
                      <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Flowbite Studios LLC</dd>
                  </dl>
                  <dl class="sm:flex items-center justify-between gap-4 py-3">
                      <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Address</dt>
                      <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Scott Street, San Francisco, California, USA</dd>
                  </dl>
                  <dl class="sm:flex items-center justify-between gap-4 py-3">
                      <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Phone</dt>
                      <dd class="font-medium text-gray-900 dark:text-white sm:text-end">+(123) 456 7890</dd>
                  </dl>
                  <dl class="sm:flex items-center justify-between gap-4 pt-3">
                      <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Email</dt>
                      <dd class="font-medium text-gray-900 dark:text-white sm:text-end">name@company.com</dd>
                  </dl>
              </div>
              <div class="flex items-center space-x-4">
                  <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Track your order</a>
                  <a href="#" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Return to shopping</a>
              </div>
          </div>
          <div class="space-x-4">
              <div class="rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                  <p class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Order summary</p>
                  <div class="relative overflow-x-auto">
                      <table class="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                              <td class="whitespace-nowrap pb-2.5 md:w-[256px]">
                                <div class="flex items-center gap-4">
                                  <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                                    <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                                  </a>
                                  <a href="#" class="hover:underline">Apple iMac 27”</a>
                                </div>
                              </td>
              
                              <td class="px-2.5 pb-2.5 text-base font-normal text-gray-900 dark:text-white w-[56px]">x1</td>
              
                              <td class="ps-2.5 pb-2.5 text-end text-base font-bold text-gray-900 dark:text-white">$1,499</td>
                            </tr>
              
                            <tr>
                              <td class="whitespace-nowrap py-2.5 md:w-[256px]">
                                <div class="flex items-center gap-4">
                                  <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                                    <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                                  </a>
                                  <a href="#" class="hover:underline">Apple iPhone 14</a>
                                </div>
                              </td>
              
                              <td class="p-2.5 text-base font-normal text-gray-900 dark:text-white w-[56px]">x2</td>
              
                              <td class="ps-2.5 py-2.5 text-end text-base font-bold text-gray-900 dark:text-white">$1,998</td>
                            </tr>
              
                            <tr>
                              <td class="whitespace-nowrap py-2.5 md:w-[256px]">
                                <div class="flex items-center gap-4">
                                  <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                                    <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="ipad image" />
                                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="ipad image" />
                                  <a href="#" class="hover:underline">Apple iPad Air</a>
                                </div>
                              </td>
              
                              <td class="p-2.5 text-base font-normal text-gray-900 dark:text-white w-[56px]">x1</td>
              
                              <td class="ps-2.5 py-2.5 text-end text-base font-bold text-gray-900 dark:text-white">$898</td>
                            </tr>
              
                            <tr>
                              <td class="whitespace-nowrap pt-2.5 md:w-[256px]">
                                <div class="flex items-center gap-4">
                                  <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                                    <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg" alt="xbox image" />
                                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg" alt="xbox image" />
                                  <a href="#" class="hover:underline">Xbox Series X</a>
                                </div>
                              </td>
              
                              <td class="p-2.5 text-base font-normal text-gray-900 dark:text-white w-[56px]">x4</td>
              
                              <td class="ps-2.5 py-2.5 text-end text-base font-bold text-gray-900 dark:text-white">$4,499</td>
                            </tr>
                          </tbody>
                      </table>
                  </div>
                  <div class="mt-4 space-y-4">
                    <div class="space-y-2">
                      <dl class="flex items-center justify-between gap-4">
                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                        <dd class="text-base font-medium text-gray-900 dark:text-white">$4,894.00</dd>
                      </dl>
          
                      <dl class="flex items-center justify-between gap-4">
                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                        <dd class="text-base font-medium text-green-500">-$299.00</dd>
                      </dl>
          
                      <dl class="flex items-center justify-between gap-4">
                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                        <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                      </dl>
          
                      <dl class="flex items-center justify-between gap-4">
                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                        <dd class="text-base font-medium text-gray-900 dark:text-white">$799</dd>
                      </dl>
                    </div>
                    <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 text-lg font-bold text-gray-900 dark:border-gray-600 dark:text-white">
                      <dt>Total</dt>
                      <dd>$5,493.00</dd>
                    </dl>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>
```

## Product confirmation with cards

Use this example to show the order confirmation message, an overview of the purchased item and a list of related products at the end of the page to increase conversions.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-3xl px-4 2xl:px-0">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">Thanks for your order!</h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
      <div class="flex items-center space-x-4 mb-6 md:mb-8">
          <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Track your order</a>
          <a href="#" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Return to shopping</a>
      </div>
      <div class="rounded-lg border border-gray-100 bg-gray-50 p-4 md:p-6 dark:border-gray-700 dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-800 mb-6 md:mb-8">
          <dl class="sm:flex items-center justify-between gap-4 pb-3">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Order number</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">#76453857</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4 py-3">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Date</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">14 May 2024</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4 py-3">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Payment Method</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Mastercard</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4 py-3">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Name</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Flowbite Studios LLC</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4 py-3">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Address</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Scott Street, San Francisco, California, USA</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4 py-3">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Phone</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">+(123) 456 7890</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4 pt-3">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Email</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">name@company.com</dd>
          </dl>
      </div>
      <p class="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">Need anything in the meantime? You can reach us at <a href="#" class="font-medium text-gray-900 dark:text-white underline hover:no-underline">support@company.com</a>.</p>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recommended for you</h3>
      <div class="grid sm:grid-cols-2 gap-6">
          <a href="#" class="border border-gray-200 rounded-lg p-4 hover:shadow-md md:p-6 dark:border-gray-700 dark:hover:bg-gray-800">
              <div class="w-full h-60">
                  <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                  <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
              </div>
              <h4 class="leading-tight text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">Apple iMac 27”</h4>
              <p class="text-gray-500 dark:text-gray-400 mb-4">This generation has some improvements, including a longer continuous battery.</p>
              <p class="text-gray-900 dark:text-white text-xl font-bold">$1,299</p>
          </a>
          <a href="#" class="border border-gray-200 rounded-lg p-4 hover:shadow-md md:p-6 dark:border-gray-700 dark:hover:bg-gray-800">
              <div class="w-full h-60">
                  <img class="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="playstation image" />
                  <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="playstation image" />
              </div>
              <h4 class="leading-tight text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-6">PlayStation 5</h4>
              <p class="text-gray-500 dark:text-gray-400 mb-4">This generation has some improvements, including a longer continuous battery.</p>
              <p class="text-gray-900 dark:text-white text-xl font-bold">$1,299</p>
          </a>
      </div>
  </div>
</section>
```

## Order confirmation with drawer

This example can be used to show the order confirmation and the overview of the purchased items inside of a dismissible drawer component.

```html
<div class="m-5 text-center">
  <button id="orderConfirmationButton" class="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button" data-drawer-target="orderConfirmationDrawer" data-drawer-show="orderConfirmationDrawer" aria-controls="orderConfirmationDrawer">Show order confirmation drawer</button>
</div>
<div id="orderConfirmationDrawer" class="fixed left-0 top-0 z-40 flex h-screen w-full max-w-md -translate-x-full flex-col justify-between overflow-y-auto bg-white p-4 antialiased transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label" aria-hidden="true">
  <div class="flex-1 space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-base font-semibold uppercase leading-none text-gray-500 dark:text-gray-400">Order confirmation</h2>

      <button type="button" data-drawer-dismiss="orderConfirmationDrawer" data-drawer-hide="orderConfirmationDrawer" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
        </svg>
      </button>
    </div>
    <div>
      <div class="flex items-center space-x-2 mb-2">
        <div class="flex justify-center items-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700">
          <svg class="w-4 h-4 text-gray-900 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
          </svg>                      
        </div>
        <h3 class="text-xl leading-none font-semibold text-gray-900 dark:text-white">Thanks for your order!</h3>
      </div>
      <p class="text-gray-500 dark:text-gray-400 mb-6">Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
    </div>
    <div class="rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600 mb-6 md:mb-8">
        <dl class="sm:flex items-center justify-between gap-4 pb-3">
            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Order number</dt>
            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">#76453857</dd>
        </dl>
        <dl class="sm:flex items-center justify-between gap-4 py-3">
            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Date</dt>
            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">14 May 2024</dd>
        </dl>
        <dl class="sm:flex items-center justify-between gap-4 py-3">
            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Payment Method</dt>
            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Mastercard</dd>
        </dl>
        <dl class="sm:flex items-center justify-between gap-4 py-3">
            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Name</dt>
            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Flowbite Studios LLC</dd>
        </dl>
        <dl class="sm:flex items-center justify-between gap-4 py-3">
            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Address</dt>
            <dd class="font-medium text-gray-900 dark:text-white sm:text-end sm:w-56">Scott Street, San Francisco, California, USA</dd>
        </dl>
        <dl class="sm:flex items-center justify-between gap-4 py-3">
            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Phone</dt>
            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">+(123) 456 7890</dd>
        </dl>
        <dl class="sm:flex items-center justify-between gap-4 py-3">
            <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Email</dt>
            <dd class="font-medium text-gray-900 dark:text-white sm:text-end">name@company.com</dd>
        </dl>
        <dl class="sm:flex items-center justify-between gap-4 pt-3">
          <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Estimated delivery</dt>
          <dd class="font-medium text-green-500 sm:text-end">Wednesday, May 15</dd>
      </dl>
    </div>
    <p class="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">Need anything in the meantime? You can reach us at <a href="#" class="font-medium text-gray-900 dark:text-white underline hover:no-underline">support@company.com</a>.</p>
  </div>

  <div class="mt-8 gap-4 sm:flex sm:items-center sm:justify-center">
    <a href="#" class="mb-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600  dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mb-0 sm:mt-0">Track your order</a>
    <button type="button" data-drawer-dismiss="orderConfirmationDrawer" data-drawer-hide="orderConfirmationDrawer" class="w-full rounded-lg inline-flex justify-center border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Return to shopping</button>
  </div>
</div>
```

## Order confirmation with modal

This example can be used to show a success message inside of a modal component that can be dismissed after successfully purchasing an item from an e-commerce store.

```html
<div class="m-5 flex justify-center">
  <button id="orderConfirmationButton" data-modal-target="orderConfirmationModal" data-modal-toggle="orderConfirmationModal" class="block rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">Show order confirmation modal</button>
</div>

<div id="orderConfirmationModal" tabindex="-1" aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
  <div class="relative max-h-full w-full max-w-lg p-4">
    <!-- Modal content -->
    <div class="relative rounded-lg text-center bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
      <!-- Modal header -->
      <button type="button" class="absolute ml-auto inline-flex end-2 top-2 items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="orderConfirmationModal">
        <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close modal</span>
      </button>
      <!-- Modal body -->
      <div class="flex justify-center mx-auto items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-100 dark:bg-green-900">
        <svg class="w-8 h-8 sm:w-12 sm:h-12 text-green-700 dark:text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
        </svg>                      
      </div>
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white my-4">Your order is confirmed!</h2>
      <p class="text-gray-500 dark:text-gray-400">Your order <a href="#" class="text-gray-900 dark:text-white font-semibold hover:underline">#7564804</a> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
      <div class="mt-4 justify-center items-center space-x-0 space-y-4 border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex sm:space-x-4 sm:space-y-0 md:mt-5 md:pt-5">
        <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600  dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto">Track your order</button>
        <button type="button" data-modal-toggle="orderConfirmationModal" class="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">Return to shopping</button>
      </div>
    </div>
  </div>
</div>
```

