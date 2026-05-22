## Default customer service

Use this component to show a list of question and a form where you can submit a question within a modal to provide support to customers.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-lg px-4 2xl:px-0">
    <div class="lg:flex lg:items-center lg:justify-between lg:gap-4">
      <h2 class="shrink-0 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Questions (147)</h2>

      <form class="mt-4 w-full gap-4 sm:flex sm:items-center sm:justify-end lg:mt-0">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full flex-1 lg:max-w-sm">
          <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="simple-search" class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Search Questions & Answers" required />
        </div>

        <button type="button" data-modal-target="question-modal" data-modal-toggle="question-modal" class="mt-4 w-full shrink-0 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto">Ask a question</button>
      </form>
    </div>

    <div class="mt-6 flow-root">
      <div class="-my-6 divide-y divide-gray-200 dark:divide-gray-800">
        <div class="space-y-4 py-6 md:py-8">
          <div class="grid gap-4">
            <div>
              <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 3 answers </span>
            </div>

            <a href="#" class="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“The specs say this model has 2 USB ports. The one I received has none. Are they hidden somewhere?”</a>
          </div>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">It’s a USB-C port it’s a smaller port. Not the regular size USB port. See the picture below. It fits the newer Apple chargers.</p>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
            Answered 1 day ago by
            <a href="#" class="text-gray-900 hover:underline dark:text-white">Bonnie Green</a>
          </p>
        </div>

        <div class="space-y-4 py-6 md:py-8">
          <div class="grid gap-4">
            <div>
              <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 1 answer </span>
            </div>

            <a href="#" class="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“Is this just the monitor?”</a>
          </div>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">It's an all-in-one (AIO). Which means everything in one structure. So it's not just a monitor it uses Apple's operating System, macOS and it has storage, CPU, GPU etc.</p>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
            Answered 1 day ago by
            <a href="#" class="text-gray-900 hover:underline dark:text-white">Jese Leos</a>
          </p>
        </div>

        <div class="space-y-4 py-6 md:py-8">
          <div class="grid gap-4">
            <div>
              <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 7 answers </span>
            </div>
            <a href="#" class="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“For an inexpert 85-year-old general user with a ten-year old iMac (OSX Yosemite version 10.10.5), is this latest model 24" iMac with Retina 4.5K display Apple M1 8GB memory - 256GB SSD a decent upgrade?”</a>
          </div>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">It's basically the same system as your older machine, but bigger, lighter and faster. There is no disc drive and it has fewer ports.</p>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
            Answered 2 days ago by
            <a href="#" class="text-gray-900 hover:underline dark:text-white">Bonnie Green</a>
          </p>
        </div>

        <div class="space-y-4 py-6 md:py-8">
          <div class="grid gap-4">
            <div>
              <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 32 answers </span>
            </div>

            <a href="#" class="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“I just brought home the Imac24". It saysthe mouse and Keyboard are wireless. Where do I install the power for them?”</a>
          </div>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">You can charge the mouse and keyboard with a lightning charger. Once charged, they last months before having to charge again.</p>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
            Answered 2 days ago by
            <a href="#" class="text-gray-900 hover:underline dark:text-white">Roberta Casas</a>
          </p>
        </div>

        <div class="space-y-4 py-6 md:py-8">
          <div class="grid gap-4">
            <div>
              <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 4 answers </span>
            </div>

            <a href="#" class="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“Does this include the keyboard and mouse?”</a>
          </div>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Yes it does, color matched to the Mac. And the keyboard has Touch ID.</p>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
            Answered 1 week ago by
            <a href="#" class="text-gray-900 hover:underline dark:text-white">Joseph McFallen</a>
          </p>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-center lg:justify-start">
      <button type="button" class="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">View more questions</button>
    </div>
  </div>
</section>

<div id="question-modal" tabindex="-1" aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased antialiased md:inset-0">
  <div class="relative max-h-full w-full max-w-xl p-4">
    <!-- Modal content -->
    <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
      <!-- Modal header -->
      <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Ask a question</h3>
        <button type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="question-modal">
          <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <form class="p-4 md:p-5">
        <div class="mb-4 grid grid-cols-2 gap-4">
          <div class="col-span-2">
            <label for="question" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your question <span class="text-gray-500 dark:text-gray-400">(150-1000 characters)</span></label>
            <textarea id="question" rows="6" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required=""></textarea>
          </div>
          <div class="col-span-2 grid gap-4 md:grid-cols-2">
            <div>
              <label for="question-type" class="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                <span class="me-1">Question type</span>
                <button type="button" data-tooltip-target="tooltip-dark" data-tooltip-style="dark" class="ml-1">
                  <svg aria-hidden="true" class="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Details</span>
                </button>
                <div id="tooltip-dark" role="tooltip" class="tooltip invisible absolute z-10 inline-block max-w-sm rounded-lg bg-gray-900 px-3 py-2 text-xs font-normal text-white opacity-0 shadow-sm dark:bg-gray-700">
                  Choose your question type to get a faster answer.
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </label>
              <select id="question-type" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <option value="technical">Technical Question</option>
                <option value="shipment">Shipment Question</option>
                <option value="payment">Payment Issue</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label for="priority-type" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Priority</label>
              <select id="priority-type" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <option value="very-high">Very High</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
          <div class="col-span-2">
            <p class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Upload files <span class="text-gray-500 dark:text-gray-400">(Optional)</span></p>
            <div class="flex w-full items-center justify-center">
              <label for="dropzone-file" class="dark:hover:bg-bray-800 flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg class="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>

          <div class="col-span-2">
            <div class="flex items-center">
              <input id="link-checkbox" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">I have read and agree with the <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>.</label>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
          <button type="submit" class="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit question</button>
          <button type="button" data-modal-toggle="question-modal" class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>
```

## Customer service with drawer

This example can be used to show both questions and answers and use a drawer with a form element that allows you to add a question.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-lg px-4 2xl:px-0 space-y-6">
    <div class="lg:flex lg:items-end lg:justify-between lg:gap-4">
      <h2 class="shrink-0 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl lg:flex-1">Questions (147)</h2>

      <div class="mt-4 sm:flex sm:items-center sm:justify-end sm:gap-4 lg:mt-0">
        <div class="shrink-0">
          <label for="reviews" class="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white">Select question type</label>
          <select id="reviews" class="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pe-10 pl-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
            <option selected="">Most helpful</option>
            <option value="recend">Most recent</option>
          </select>
        </div>

        <form class="mt-4 w-full shrink-0 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:gap-4">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full flex-1 lg:max-w-sm">
            <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="simple-search" class="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Search Questions & Answers" required />
          </div>

          <button type="button" data-drawer-target="add-question-drawer" data-drawer-show="add-question-drawer" data-drawer-placement="right" class="mt-4 w-full shrink-0 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto">Ask a question</button>
        </form>
      </div>
    </div>

    <div class="space-y-6 sm:space-y-8">
      <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="flex items-center gap-3">
          <a href="#" class="text-base font-semibold text-gray-900 hover:underline dark:text-white">Michael Gough</a>
          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:40</p>
        </div>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">The specs say this model has 2 USB ports. The one I received has none. Are they hidden somewhere?</p>
        <div class="flex items-center gap-4">
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">I have the same question</p>
          <div class="flex items-center">
            <input id="answer-radio-1" type="radio" value="" name="answer-radio" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label for="answer-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 8 </label>
          </div>
          <div class="flex items-center">
            <input id="answer-radio-2" type="radio" value="" name="answer-radio" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label for="answer-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
          </div>
        </div>
        </div>
      </div>

      <div class="sm:pl-12">
        <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <span class="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
            <svg class="me-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
            Answer
          </span>
          <div class="flex items-center gap-3">
            <a href="#" class="text-base font-semibold text-gray-900 hover:underline  dark:text-white">James Way</a>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:45</p>
          </div>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">It’s a USB-C port it’s a smaller port. Not the regular size USB port. See the picture below. It fits the newer Apple chargers.</p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="answer-radio-3" type="radio" value="" name="answer-radio-2" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="answer-radio-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 8 </label>
            </div>
            <div class="flex items-center">
              <input id="answer-radio-4" type="radio" value="" name="answer-radio-2" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="answer-radio-4" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="flex items-center gap-3">
          <a href="#" class="text-base font-semibold text-gray-900 hover:underline dark:text-white">Jese Leos</a>
          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 18 2023 • 09:12</p>
        </div>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Is this just the monitor?</p>
        <div class="flex items-center gap-4">
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">I have the same question</p>
          <div class="flex items-center">
            <input id="answer-radio-5" type="radio" value="" name="answer-radio-3" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label for="answer-radio-5" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 8 </label>
          </div>
          <div class="flex items-center">
            <input id="answer-radio-6" type="radio" value="" name="answer-radio-3" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label for="answer-radio-6" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
          </div>
        </div>
      </div>

      <div class="sm:pl-12">
        <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <span class="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
            <svg class="me-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
            Answer
          </span>
          <div class="flex items-center gap-3">
            <a href="#" class="text-base font-semibold text-gray-900 hover:underline  dark:text-white">Bonnie Green</a>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 18 2023 • 09:24</p>
          </div>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">It's an all-in-one (AIO). Which means everything in one structure. So it's not just a monitor it uses Apple's operating System, macOS and it has storage, CPU, GPU etc.</p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="answer-radio-7" type="radio" value="" name="answer-radio-4" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="answer-radio-7" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 8 </label>
            </div>
            <div class="flex items-center">
              <input id="answer-radio-8a" type="radio" value="" name="answer-radio-4" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="answer-radio-8a" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="flex items-center gap-3">
          <a href="#" class="text-base font-semibold text-gray-900 hover:underline  dark:text-white">Roberta Casas</a>
          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 18 2023 • 16:02</p>
        </div>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">I just brought home the Imac 24". It says the mouse and Keyboard are wireless. Where do I install the power for them?</p>
        <div class="flex items-center gap-4">
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">I have the same question</p>
          <div class="flex items-center">
            <input id="answer-radio-8b" type="radio" value="" name="answer-radio-5" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label for="answer-radio-8b" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 8 </label>
          </div>
          <div class="flex items-center">
            <input id="answer-radio-9" type="radio" value="" name="answer-radio-5" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label for="answer-radio-9" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
          </div>
        </div>
      </div>

      <div class="sm:pl-12">
        <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <span class="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
            <svg class="me-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
            Answer
          </span>
          <div class="flex items-center gap-3">
            <a href="#" class="text-base font-semibold text-gray-900 hover:underline  dark:text-white">James Way</a>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 18 2023 • 09:24</p>
          </div>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">You can charge the mouse and keyboard with a lightning charger. Once charged, they last months before having to charge again.</p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="answer-radio-10" type="radio" value="" name="answer-radio-6" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="answer-radio-10" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 8 </label>
            </div>
            <div class="flex items-center">
              <input id="answer-radio-11" type="radio" value="" name="answer-radio-6" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="answer-radio-11" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="flex items-center gap-3">
          <a href="#" class="text-base font-semibold text-gray-900 hover:underline  dark:text-white">Joseph McFallen</a>
          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 16 2023 • 13:00</p>
        </div>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">For an inexpert 85-year-old general user with a ten-year old iMac (OSX Yosemite version 10.10.5), is this latest model 24" iMac with Retina 4.5K display Apple M1 8GB memory - 256GB SSD a decent upgrade?</p>
        <div class="flex items-center gap-4">
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">I have the same question</p>
          <div class="flex items-center">
            <input id="answer-radio-12" type="radio" value="" name="answer-radio-7" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label for="answer-radio-12" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 8 </label>
          </div>
          <div class="flex items-center">
            <input id="answer-radio-13" type="radio" value="" name="answer-radio-7" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label for="answer-radio-13" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
          </div>
        </div>
      </div>

      <div class="sm:pl-12">
        <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <span class="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
            <svg class="me-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
            Answer
          </span>
          <div class="flex items-center gap-3">
            <a href="#" class="text-base font-semibold text-gray-900 hover:underline  dark:text-white">Bonnie Green</a>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 16 2023 • 13:44</p>
          </div>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Hello Joseph, it's basically the same system as your older machine, but bigger, lighter and faster. There is no disc drive and it has fewer ports.</p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="answer-radio-14" type="radio" value="" name="answer-radio-8" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="answer-radio-14" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 8 </label>
            </div>
            <div class="flex items-center">
              <input id="answer-radio-15" type="radio" value="" name="answer-radio-8" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="answer-radio-15" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="flex items-center gap-3">
          <a href="#" class="text-base font-semibold text-gray-900 hover:underline dark:text-white">Neil Sims</a>
          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 06 2023 • 17:37</p>
        </div>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Does this include the keyboard and mouse?</p>
        <div class="flex items-center gap-4">
          <p class="text-sm font-medium text-gray-500 dark:text-gray-400">I have the same question</p>
          <div class="flex items-center">
            <input id="answer-radio-16" type="radio" value="" name="answer-radio-9" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label for="answer-radio-16" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 8 </label>
          </div>
          <div class="flex items-center">
            <input id="answer-radio-17" type="radio" value="" name="answer-radio-9" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
            <label for="answer-radio-17" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
          </div>
        </div>
      </div>

      <div class="sm:pl-12">
        <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <span class="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
            <svg class="me-1.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
            Answer
          </span>
          <div class="flex items-center gap-3">
            <a href="#" class="text-base font-semibold text-gray-900 hover:underline  dark:text-white">James Way</a>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 06 2023 • 18:07</p>
          </div>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Yes it does, color matched to the Mac. And the keyboard has Touch ID.</p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="answer-radio-18" type="radio" value="" name="answer-radio-10" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="answer-radio-18" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 8 </label>
            </div>
            <div class="flex items-center">
              <input id="answer-radio-19" type="radio" value="" name="answer-radio-10" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="answer-radio-19" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="mt-6 sm:mt-8 lg:mt-12" aria-label="Page navigation example">
      <ul class="flex h-8 items-center justify-center -space-x-px text-sm">
        <li>
          <a href="#" class="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg class="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
        </li>
        <li>
          <a href="#" class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
        </li>
        <li>
          <a href="#" aria-current="page" class="z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
        </li>
        <li>
          <a href="#" class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
        </li>
        <li>
          <a href="#" class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
        </li>
        <li>
          <a href="#" class="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg class="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</section>

<div id="add-question-drawer" class="fixed right-0 top-0 z-40 h-screen w-full max-w-md translate-x-full overflow-y-auto bg-white p-4 antialiased transition-transform dark:bg-gray-800" tabindex="-1" aria-labelledby="add-question-drawer-label" aria-hidden="true">
  <h5 id="add-question-drawer-label" class="mb-6 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">Ask a question</h5>
  <button type="button" data-drawer-dismiss="add-question-drawer" aria-controls="add-question-drawer" class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
    <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Close menu</span>
  </button>
  <form action="#">
    <div class="mb-4 grid grid-cols-2 gap-4">
      <div class="col-span-2">
        <label for="question" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your question <span class="text-gray-500 dark:text-gray-400">(150-1000 characters)</span></label>
        <textarea id="question" rows="6" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required=""></textarea>
      </div>
      <div class="col-span-2 grid gap-4">
        <div>
          <label for="question-type" class="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
            <span class="me-1">Question type</span>
            <button type="button" data-tooltip-target="tooltip-drawer" data-tooltip-style="dark" class="ml-1">
              <svg aria-hidden="true" class="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Details</span>
            </button>
            <div id="tooltip-drawer" role="tooltip" class="tooltip invisible absolute z-10 inline-block max-w-sm rounded-lg bg-gray-900 px-3 py-2 text-xs font-normal text-white opacity-0 shadow-sm dark:bg-gray-700">
              Choose your question type to get a faster answer.
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </label>
          <select id="question-type" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
            <option value="technical">Technical Question</option>
            <option value="shipment">Shipment Question</option>
            <option value="payment">Payment Issue</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label for="priority-type" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Priority</label>
          <select id="priority-type" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
            <option value="very-high">Very High</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
      <div class="col-span-2">
        <p class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Upload files <span class="text-gray-500 dark:text-gray-400">(Optional)</span></p>
        <div class="flex w-full items-center justify-center">
          <label for="dropzone-file" class="dark:hover:bg-bray-800 flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pb-6 pt-5">
              <svg class="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>

      <div class="col-span-2">
        <div class="flex items-center">
          <input id="drawer-checkbox" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
          <label for="drawer-checkbox" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">I have read and agree with the <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>.</label>
        </div>
      </div>

      <div class="col-span-2">
        <button type="submit" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Submit question</button>
      </div>
    </div>
  </form>
</div>
```

## Customer service accordion with FAQ

Use this example to show a list of frequently asked questions and answers inside an accordion component for your e-commerce customers.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0 space-y-6">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">General questions</h2>

    <div class="mt-6" id="accordion-flush" data-accordion="open" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
      <h2 id="accordion-flush-heading-1">
        <button type="button" class="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
          <span> What is an iMac, and how does it differ from other computers? </span>
          <svg data-accordion-icon class="h-5 w-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-1" class="" aria-labelledby="accordion-flush-heading-1">
        <div class="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
          <div class="flex items-center gap-3">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Flowbite Shop</h3>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:45</p>
          </div>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">The iMac is a line of all-in-one desktop computers designed and produced by Apple Inc. It sets itself apart by integrating the display, processing unit, and other components into a single sleek enclosure, minimizing cable clutter and providing a seamless user experience.</p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="general-radio-1" type="radio" value="" name="general-radio" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 9 </label>
            </div>
            <div class="flex items-center">
              <input id="general-radio-2" type="radio" value="" name="general-radio" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 0 </label>
            </div>
          </div>
        </div>
      </div>

      <h2 id="accordion-flush-heading-2">
        <button type="button" class="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
          <span> What are the key features of the latest iMac models? </span>
          <svg data-accordion-icon class="h-5 w-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
        <div class="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
          <div class="flex items-center gap-3">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Flowbite Experts</h3>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:45</p>
          </div>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Apple Silicon:</span>
            Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Slimmer Design:</span>
            Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Vivid Retina Display:</span>
            iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.
          </p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="general-radio-3" type="radio" value="" name="general-radio-2" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 16 </label>
            </div>
            <div class="flex items-center">
              <input id="general-radio-4" type="radio" value="" name="general-radio-2" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-4" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 3 </label>
            </div>
          </div>
        </div>
      </div>

      <h2 id="accordion-flush-heading-3">
        <button type="button" class="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
          <span> What is the Retina display on an iMac, and why is it significant? </span>
          <svg data-accordion-icon class="h-5 w-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
        <div class="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
          <div class="flex items-center gap-3">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Flowbite Experts</h3>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:45</p>
          </div>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Apple Silicon:</span>
            Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Slimmer Design:</span>
            Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Vivid Retina Display:</span>
            iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.
          </p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="general-radio-5" type="radio" value="" name="general-radio-3" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-5" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 16 </label>
            </div>
            <div class="flex items-center">
              <input id="general-radio-6" type="radio" value="" name="general-radio-3" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-6" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 3 </label>
            </div>
          </div>
        </div>
      </div>

      <h2 id="accordion-flush-heading-4">
        <button type="button" class="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
          <span> How is the performance of an iMac for tasks like video editing, graphic design, and gaming? </span>
          <svg data-accordion-icon class="h-5 w-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
        <div class="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
          <div class="flex items-center gap-3">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Flowbite Experts</h3>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:45</p>
          </div>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Apple Silicon:</span>
            Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Slimmer Design:</span>
            Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Vivid Retina Display:</span>
            iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.
          </p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="general-radio-7" type="radio" value="" name="general-radio-4" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-7" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 16 </label>
            </div>
            <div class="flex items-center">
              <input id="general-radio-8" type="radio" value="" name="general-radio-4" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-8" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 3 </label>
            </div>
          </div>
        </div>
      </div>

      <h2 id="accordion-flush-heading-5">
        <button type="button" class="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white" data-accordion-target="#accordion-flush-body-5" aria-expanded="false" aria-controls="accordion-flush-body-5">
          <span> Can I upgrade the components of my iMac, such as RAM or storage? </span>
          <svg data-accordion-icon class="h-5 w-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-5" class="hidden" aria-labelledby="accordion-flush-heading-5">
        <div class="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
          <div class="flex items-center gap-3">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Flowbite Experts</h3>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:45</p>
          </div>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Apple Silicon:</span>
            Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Slimmer Design:</span>
            Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Vivid Retina Display:</span>
            iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.
          </p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="general-radio-9" type="radio" value="" name="general-radio-5" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-9" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 16 </label>
            </div>
            <div class="flex items-center">
              <input id="general-radio-10" type="radio" value="" name="general-radio-5" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-10" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 3 </label>
            </div>
          </div>
        </div>
      </div>

      <h2 id="accordion-flush-heading-6">
        <button type="button" class="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white" data-accordion-target="#accordion-flush-body-6" aria-expanded="false" aria-controls="accordion-flush-body-6">
          <span> What is the role of Thunderbolt ports on an iMac? </span>
          <svg data-accordion-icon class="h-5 w-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-6" class="hidden" aria-labelledby="accordion-flush-heading-6">
        <div class="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
          <div class="flex items-center gap-3">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Flowbite Experts</h3>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:45</p>
          </div>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Apple Silicon:</span>
            Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Slimmer Design:</span>
            Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Vivid Retina Display:</span>
            iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.
          </p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="general-radio-11" type="radio" value="" name="general-radio-6" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-11" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 16 </label>
            </div>
            <div class="flex items-center">
              <input id="general-radio-12" type="radio" value="" name="general-radio-6" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-12" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 3 </label>
            </div>
          </div>
        </div>
      </div>

      <h2 id="accordion-flush-heading-7">
        <button type="button" class="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white" data-accordion-target="#accordion-flush-body-7" aria-expanded="false" aria-controls="accordion-flush-body-7">
          <span> How does the macOS operating system differ from Windows? </span>
          <svg data-accordion-icon class="h-5 w-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-7" class="hidden" aria-labelledby="accordion-flush-heading-7">
        <div class="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
          <div class="flex items-center gap-3">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Flowbite Experts</h3>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:45</p>
          </div>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Apple Silicon:</span>
            Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Slimmer Design:</span>
            Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Vivid Retina Display:</span>
            iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.
          </p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="general-radio-13" type="radio" value="" name="general-radio-6" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-13" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 16 </label>
            </div>
            <div class="flex items-center">
              <input id="general-radio-14" type="radio" value="" name="general-radio-6" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-14" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 3 </label>
            </div>
          </div>
        </div>
      </div>

      <h2 id="accordion-flush-heading-8">
        <button type="button" class="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white" data-accordion-target="#accordion-flush-body-8" aria-expanded="false" aria-controls="accordion-flush-body-8">
          <span> What security features does the iMac offer? </span>
          <svg data-accordion-icon class="h-5 w-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-8" class="hidden" aria-labelledby="accordion-flush-heading-8">
        <div class="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
          <div class="flex items-center gap-3">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Flowbite Experts</h3>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:45</p>
          </div>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Apple Silicon:</span>
            Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Slimmer Design:</span>
            Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Vivid Retina Display:</span>
            iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.
          </p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="general-radio-15" type="radio" value="" name="general-radio-7" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-15" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 16 </label>
            </div>
            <div class="flex items-center">
              <input id="general-radio-16" type="radio" value="" name="general-radio-7" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-16" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 3 </label>
            </div>
          </div>
        </div>
      </div>

      <h2 id="accordion-flush-heading-9">
        <button type="button" class="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white" data-accordion-target="#accordion-flush-body-9" aria-expanded="false" aria-controls="accordion-flush-body-9">
          <span> Can I use my iMac with other Apple devices, such as iPhone and iPad? </span>
          <svg data-accordion-icon class="h-5 w-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-9" class="hidden" aria-labelledby="accordion-flush-heading-9">
        <div class="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
          <div class="flex items-center gap-3">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Flowbite Experts</h3>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:45</p>
          </div>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Apple Silicon:</span>
            Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Slimmer Design:</span>
            Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Vivid Retina Display:</span>
            iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.
          </p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="general-radio-17" type="radio" value="" name="general-radio-8" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-17" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 16 </label>
            </div>
            <div class="flex items-center">
              <input id="general-radio-18" type="radio" value="" name="general-radio-8" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-18" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 3 </label>
            </div>
          </div>
        </div>
      </div>

      <h2 id="accordion-flush-heading-10">
        <button type="button" class="flex w-full items-center justify-between gap-3 border-b border-gray-200 py-5 text-left text-xl font-semibold text-gray-900 dark:border-gray-700 dark:text-white" data-accordion-target="#accordion-flush-body-10" aria-expanded="false" aria-controls="accordion-flush-body-10">
          <span> What support options are available for iMac users? </span>
          <svg data-accordion-icon class="h-5 w-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-10" class="hidden" aria-labelledby="accordion-flush-heading-10">
        <div class="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
          <div class="flex items-center gap-3">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">Flowbite Experts</h3>
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">November 20 2023 • 12:45</p>
          </div>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Apple Silicon:</span>
            Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Slimmer Design:</span>
            Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.
          </p>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Vivid Retina Display:</span>
            iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.
          </p>
          <div class="flex items-center gap-4">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Was it helpful to you?</p>
            <div class="flex items-center">
              <input id="general-radio-19" type="radio" value="" name="general-radio-9" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-19" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Yes: 16 </label>
            </div>
            <div class="flex items-center">
              <input id="general-radio-20" type="radio" value="" name="general-radio-9" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="general-radio-20" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No: 3 </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 sm:mt-8">
      <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
        Didn't find the answer?
        <a href="#" title="" class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Ask a question</a>
      </p>
    </div>
  </div>
</section>
```

## Customer service with wysiwyg

Use this example to show a list of questions and answers with upvotes and a wysiwyg form to submit an answer as a product customer.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-lg px-4 2xl:px-0">
    <h1 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-4">“This will be our first computer believe that or not. We have a 10-year-old who needs it for school. With this package is everything included that we need to plug it in and go?”</h1>
    <p class="text-gray-500 dark:text-gray-400">Asked 3 days ago by <a href="#" class="font-medium text-gray-900 dark:text-white hover:underline">Bonnie Green</a></p>
    <!-- Answers -->
    <div class="border-t border-gray-200 mt-4 md:mt-8 pt-4 md:pt-8 dark:border-gray-700 mb-4 md:mb-8">
      <article class="p-4 lg:p-6 mb-4 text-base bg-gray-50 border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
        <div class="flex flex-col sm:flex-row">
            <div class="sm:mr-4 mt-4 sm:mt-0 order-2 sm:order-1">
                <div class="rounded-lg bg-gray-100 border border-gray-200 dark:border-gray-600 sm:w-9 w-24 flex sm:flex-col items-center justify-center font-medium dark:bg-gray-700">
                    <button type="button" class="text-gray-500 dark:text-gray-400 py-1 rounded-l-md sm:rounded-t-md sm:rounded-b-none hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">+</button>
                    <span class="text-gray-900 font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm dark:text-white">65</span>
                    <button type="button" class="text-gray-500  dark:text-gray-400 py-1 rounded-r-md sm:rounded-b-md sm:rounded-t-none hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">-</button>
                </div>
            </div>
            <div class="text-gray-500 dark:text-gray-400 order-1 sm:order-2">
              <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Best answer</span>
                <p class="my-4 md:mb-5">Certainly! Embracing the significance of your first computer acquisition, particularly in catering to your 10-year-old's educational needs, underscores the importance of a comprehensive package. In the case of an iMac, Apple offering is meticulously crafted to encompass all requisite components for immediate functionality upon unboxing.</p>
                <p class="mb-4 md:mb-5">Within this package, you will find not only the iMac itself, boasting its sleek design and powerful performance, but also a suite of complementary peripherals essential for seamless operation. These include a Magic Keyboard and a Magic Mouse, ensuring intuitive interaction with the system right out of the box. Furthermore, all necessary cables, including the power cord and Thunderbolt 3 cables for peripheral connectivity, are thoughtfully included, eliminating any need for additional purchases or compatibility concerns.</p>
                <img class="max-w-full dark:hidden mb-4" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/complete-imac-light.svg" alt="" />
                <img class="hidden max-w-full dark:block mb-4" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/complete-imac-dark.svg" alt="" />
                <p class="mb-4 md:mb-5">Moreover, recognizing the pivotal role of software in enhancing productivity and enabling educational pursuits, this iMac package comes preloaded with macOS, Apple's robust operating system. Additionally, essential productivity applications such as Pages, Numbers, and Keynote are readily available, facilitating tasks ranging from document creation to presentations with utmost efficiency.</p>
                <p class="mb-4 md:mb-5">Beyond hardware and software provisions, Apple commitment extends to ensuring a seamless setup experience. Clear and concise setup instructions accompany the package, guiding you through the initial configuration process effortlessly. Should you encounter any queries or require further assistance, our dedicated support channels stand ready to provide prompt resolution, ensuring your transition into the world of iMac computing is smooth and gratifying.</p>
                <p class="mb-4 md:mb-5">Thus, with our iMac package, you can confidently plug in your new computer, empowered with the knowledge that every element essential for immediate use is meticulously curated and readily accessible. </p>
                <p class="text-gray-500 dark:text-gray-400">Asked 1 day ago by <a href="#" class="font-medium text-gray-900 dark:text-white hover:underline">Roberta Casas</a></p>
            </div>
        </div>
      </article>
      <article class="p-4 lg:p-6 mb-4 text-base bg-gray-50 border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
        <div class="flex flex-col sm:flex-row">
            <div class="sm:mr-4 mt-4 sm:mt-0 order-2 sm:order-1">
                <div class="rounded-lg bg-gray-100 border border-gray-200 dark:border-gray-600 sm:w-9 w-24 flex sm:flex-col items-center justify-center font-medium dark:bg-gray-700">
                    <button type="button" class="text-gray-500 dark:text-gray-400 py-1 rounded-l-md sm:rounded-t-md sm:rounded-b-none hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">+</button>
                    <span class="text-gray-900 font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm dark:text-white">8</span>
                    <button type="button" class="text-gray-500  dark:text-gray-400 py-1 rounded-r-md sm:rounded-b-md sm:rounded-t-none hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">-</button>
                </div>
            </div>
            <div class="text-gray-500 dark:text-gray-400 order-1 sm:order-2">
              <p class="mb-4 md:mb-5">Absolutely! This package includes everything you need to set up your first computer smoothly. From the computer itself to necessary cables and adapters, you'll be ready to plug it in and get started right away.</p>
              <p>Asked 1 day ago by <a href="#" class="font-medium text-gray-900 dark:text-white hover:underline">Jese Leos</a></p>
            </div>
        </div>
      </article>
      <article class="p-4 lg:p-6 mb-4 text-base bg-gray-50 border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
        <div class="flex flex-col sm:flex-row">
            <div class="sm:mr-4 mt-4 sm:mt-0 order-2 sm:order-1">
                <div class="rounded-lg bg-gray-100 border border-gray-200 dark:border-gray-600 sm:w-9 w-24 flex sm:flex-col items-center justify-center font-medium dark:bg-gray-700">
                    <button type="button" class="text-gray-500 dark:text-gray-400 py-1 rounded-l-md sm:rounded-t-md sm:rounded-b-none hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">+</button>
                    <span class="text-gray-900 font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm dark:text-white">2</span>
                    <button type="button" class="text-gray-500  dark:text-gray-400 py-1 rounded-r-md sm:rounded-b-md sm:rounded-t-none hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">-</button>
                </div>
            </div>
            <div class="text-gray-500 dark:text-gray-400 order-1 sm:order-2">
              <p class="mb-4 md:mb-5">Yes, indeed! This comprehensive package ensures that you have all the essentials to set up your computer hassle-free. No need to worry about missing components or compatibility issues – just plug it in, and you're good to go!</p>
              <p>Asked 1 day ago by <a href="#" class="font-medium text-gray-900 dark:text-white hover:underline">Thomas Lean</a></p>
            </div>
        </div>
      </article>
      <article class="p-4 lg:p-6 mb-4 text-base bg-gray-50 border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
        <div class="flex flex-col sm:flex-row">
            <div class="sm:mr-4 mt-4 sm:mt-0 order-2 sm:order-1">
                <div class="rounded-lg bg-gray-100 border border-gray-200 dark:border-gray-600 sm:w-9 w-24 flex sm:flex-col items-center justify-center font-medium dark:bg-gray-700">
                    <button type="button" class="text-gray-500 dark:text-gray-400 py-1 rounded-l-md sm:rounded-b-none sm:rounded-t-md hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">+</button>
                    <span class="text-gray-900 font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm dark:text-white">1</span>
                    <button type="button" class="text-gray-500  dark:text-gray-400 py-1 rounded-r-md sm:rounded-t-none sm:rounded-b-md hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">-</button>
                </div>
            </div>
            <div class="text-gray-500 dark:text-gray-400 order-1 sm:order-2">
              <p class="mb-4 md:mb-5">You bet! They thought of everything to make your transition to your first computer seamless. From power cords to peripherals, this package has you covered. Just plug it in, power up, and dive into the world of computing!</p>
              <p>Asked 1 day ago by <a href="#" class="font-medium text-gray-900 dark:text-white hover:underline">Karen Nelson</a></p>
            </div>
        </div>
      </article>
      <article class="p-4 lg:p-6 text-base bg-gray-50 border border-gray-100 dark:border-gray-700 rounded-lg dark:bg-gray-800">
        <div class="flex flex-col sm:flex-row">
            <div class="sm:mr-4 mt-4 sm:mt-0 order-2 sm:order-1">
                <div class="rounded-lg bg-gray-100 border border-gray-200 dark:border-gray-600 sm:w-9 w-24 flex sm:flex-col items-center justify-center font-medium dark:bg-gray-700">
                    <button type="button" class="text-gray-500 dark:text-gray-400 py-1 rounded-l-md sm:rounded-t-md sm:rounded-b-none hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">+</button>
                    <span class="text-gray-900 font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm dark:text-white">0</span>
                    <button type="button" class="text-gray-500  dark:text-gray-400 py-1 rounded-r-md sm:rounded-b-md sm:rounded-t-none hover:bg-gray-200 w-full focus:ring-2 focus:outline-none focus:ring-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">-</button>
                </div>
            </div>
            <div class="text-gray-500 dark:text-gray-400 order-1 sm:order-2">
              <p class="mb-4 md:mb-5">Apple taken care of the details so you can focus on helping your 10-year-old excel in school with their new computer. Just plug it in, power on, and begin your computing journey!</p>
              <p>Asked 1 day ago by <a href="#" class="font-medium text-gray-900 dark:text-white hover:underline">Neil Sims</a></p>
            </div>
        </div>
      </article>
    </div>
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-4 sm:mb-6">Answer to this question</h2>
    <form action="#" class="mb-4 md:mb-8">
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-4 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your name" required />
      <label for="response" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write your answer here</label>
      <div class="rounded-lg border border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div class="w-full">
          <div class="rounded-t-lg bg-gray-50 px-4 py-2 dark:bg-gray-800">
            <textarea id="response" rows="8" class="block w-full border-0 bg-gray-50 px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" placeholder="" required></textarea>
          </div>
        </div>
        <div class="flex flex-wrap items-center divide-gray-200 rounded-b-lg border-t border-gray-200 px-4 py-3 dark:divide-gray-700 dark:border-gray-700 sm:divide-x sm:rtl:divide-x-reverse">
          <div class="flex flex-wrap items-center space-x-0.5 sm:pe-4 rtl:space-x-reverse">
            <a href="#" data-tooltip-target="tooltip-undo" class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4" />
              </svg>
              <span class="sr-only">Undo</span>
            </a>
            <div id="tooltip-undo" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Undo
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a href="#" data-tooltip-target="tooltip-redo" class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4" />
              </svg>
              <span class="sr-only">Redo</span>
            </a>
            <div id="tooltip-redo" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Redo
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
              id="filterDropdownButton"
              data-dropdown-toggle="filterDropdown"
              data-dropdown-ignore-click-outside-class="datepicker"
              class="flex items-center justify-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
              type="button"
            >
              Arial (Sans-serif)
              <svg class="-me-0.5 ms-1.5 h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="filterDropdown" class="z-10 hidden w-56 rounded bg-white p-2 shadow dark:bg-gray-700">
              <ul class="space-y-1 text-sm font-medium" aria-labelledby="filterDropdownButton">
                <li>
                  <a class="flex w-full rounded px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="#">Arial (Sans-serif)</a>
                </li>
                <li>
                  <a class="flex w-full rounded px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="#">Times New Roman (Serif)</a>
                </li>
                <li>
                  <a class="flex w-full rounded px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="#">Helvetica (Sans-serif)</a>
                </li>
                <li>
                  <a class="flex w-full rounded px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="#">Verdana (Sans-serif)</a>
                </li>
                <li>
                  <a class="flex w-full rounded px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="#">Georgia (Sans-serif)</a>
                </li>
                <li>
                  <a class="flex w-full rounded px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" href="#">Roboto (Sans-serif)</a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              data-tooltip-target="tooltip-text-size"
              class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3" />
              </svg>
              <span class="sr-only">Text size</span>
            </a>
            <div id="tooltip-text-size" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Text size
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a
              href="#"
              data-tooltip-target="tooltip-font-bold"
              class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6" />
              </svg>
              <span class="sr-only">Bold</span>
            </a>
            <div id="tooltip-font-bold" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Bold
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a
              href="#"
              data-tooltip-target="tooltip-font-italic"
              class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.9 19 15 5M6 19h6.3m-.6-14H18" />
              </svg>
              <span class="sr-only">Italic</span>
            </a>
            <div id="tooltip-font-italic" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Italic
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a
              href="#"
              data-tooltip-target="tooltip-font-underline"
              class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4" />
              </svg>
              <span class="sr-only">Underline</span>
            </a>
            <div
              id="tooltip-font-underline"
              role="tooltip"
              class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
              Underline
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a
              href="#"
              data-tooltip-target="tooltip-text-slash"
              class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.7 6.5M9.6 19l1-4M5 5l6.5 6.5M19 19l-7.5-7.5" />
              </svg>
              <span class="sr-only">Text slash</span>
            </a>
            <div id="tooltip-text-slash" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Text slash
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a
              href="#"
              data-tooltip-target="tooltip-paragraph"
              class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v7m0 7v-7m4-7v14m3-14H8.5C6.5 5 5 6.6 5 8.5v0c0 2 1.6 3.5 3.5 3.5H12" />
              </svg>
              <span class="sr-only">Paragraph</span>
            </a>
            <div id="tooltip-paragraph" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Paragraph
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
          <div class="hidden flex-wrap items-center space-x-1 sm:ps-4 md:flex rtl:space-x-reverse">
            <a href="#" data-tooltip-target="tooltip-quote" class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M6 6a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Quote</span>
            </a>
            <div id="tooltip-quote" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Quote
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a
              href="#"
              data-tooltip-target="tooltip-text-center"
              class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h8M6 10h12M8 14h8M6 18h12" />
              </svg>
              <span class="sr-only">Text center</span>
            </a>
            <div id="tooltip-text-center" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Text center
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a
              href="#"
              data-tooltip-target="tooltip-ordered-list"
              class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.3 1.5L4 20h5M4 5l2-1v6m-2 0h4" />
              </svg>
              <span class="sr-only">Ordered list</span>
            </a>
            <div id="tooltip-ordered-list" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Ordered list
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a href="#" data-tooltip-target="tooltip-list" class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0" />
              </svg>
              <span class="sr-only">List</span>
            </a>
            <div id="tooltip-list" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              List
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a
              href="#"
              data-tooltip-target="tooltip-text-indent"
              class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h12M6 18h12m-5-8h5m-5 4h5M6 9v6l3.5-3L6 9Z" />
              </svg>
              <span class="sr-only">Text indent</span>
            </a>
            <div id="tooltip-text-indent" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Text indent
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a
              href="#"
              data-tooltip-target="tooltip-text-outdent"
              class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h12M6 18h12m-5-8h5m-5 4h5M9.5 9v6L6 12l3.5-3Z" />
              </svg>
              <span class="sr-only">Text outdent</span>
            </a>
            <div id="tooltip-text-outdent" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
              Text outdent
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
        <div class="items-center space-x-0.5 rounded-b-lg border-t border-gray-200 px-4 py-3 dark:border-gray-700 sm:flex">
          <button
            type="submit"
            class="mb-4 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mb-0 sm:w-auto"
          >
            Submit answer
          </button>
          <a
            href="#"
            data-tooltip-target="tooltip-attach-file"
            class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8" />
            </svg>
            <span class="sr-only">Attach file</span>
          </a>
          <div id="tooltip-attach-file" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
            Attach file
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a href="#" data-tooltip-target="tooltip-emoji" class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm5.5 1a.5.5 0 0 0-1 0 5 5 0 0 0 1.6 3.4 5.5 5.5 0 0 0 7.8 0 5 5 0 0 0 1.6-3.4.5.5 0 0 0-1 0h-.2l-1 .3a18.9 18.9 0 0 1-7.8-.4ZM9 8a1 1 0 0 0 0 2 1 1 0 1 0 0-2Zm6 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Emoji</span>
          </a>
          <div id="tooltip-emoji" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
            Emoji
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a
            href="#"
            data-tooltip-target="tooltip-insert-photo"
            class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm.4 9.6a1 1 0 0 0-1.8 0l-2.5 6A1 1 0 0 0 8 19h8a1 1 0 0 0 .9-1.4l-2-4a1 1 0 0 0-1.7-.2l-.5.7-1.3-2.5ZM13 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Insert photo</span>
          </a>
          <div id="tooltip-insert-photo" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
            Insert photo
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </form>
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-4 sm:mb-6">Related questions</h2>
    <div class="-my-6 divide-y divide-gray-200 dark:divide-gray-800">
      <div class="space-y-4 py-6 md:py-8">
        <div class="grid gap-4">
          <div>
            <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"> 3 answers </span>
          </div>

          <a href="#" class="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“The specs say this model has 2 USB ports. The one I received has none. Are they hidden somewhere?”</a>
        </div>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">It’s a USB-C port it’s a smaller port. Not the regular size USB port. See the picture below. It fits the newer Apple chargers.</p>
      </div>

      <div class="space-y-4 py-6 md:py-8">
        <div class="grid gap-4">
          <div>
            <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"> 1 answer </span>
          </div>

          <a href="#" class="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“Is this just the monitor?”</a>
        </div>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">It's an all-in-one (AIO). Which means everything in one structure. So it's not just a monitor it uses Apple's operating System.</p>
      </div>

      <div class="space-y-4 py-6 md:py-8">
        <div class="grid gap-4">
          <div>
            <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"> 7 answers </span>
          </div>
          <a href="#" class="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“For an inexpert 85-year-old general user with a ten-year old iMac (OSX Yosemite version 10.10.5), is this latest model 24" iMac with Retina 4.5K display Apple M1 8GB memory - 256GB SSD a decent upgrade?”</a>
        </div>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">It's basically the same system as your older machine, but bigger, lighter and faster. There is no disc drive and it has fewer ports.</p>
      </div>

      <div class="space-y-4 py-6 md:py-8">
        <div class="grid gap-4">
          <div>
            <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 32 answers </span>
          </div>

          <a href="#" class="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“I just brought home the Imac24". It saysthe mouse and Keyboard are wireless. Where do I install the power for them?”</a>
        </div>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">You can charge the mouse and keyboard with a lightning charger. Once charged, they last months before having to charge again.</p>
      </div>

      <div class="space-y-4 py-6 md:py-8">
        <div class="grid gap-4">
          <div>
            <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"> No answers </span>
          </div>

          <a href="#" class="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“Does this include the keyboard and mouse?”</a>
        </div>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Yes it does, color matched to the Mac. And the keyboard has Touch ID.</p>
      </div>
    </div>
  </div>
</section>
```

## Customer service page

Use this example to show a full page of customer service data using FAQ sections and a modal to submit a question.

```html
<section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0 space-y-6">
    <div class="flex flex-col gap-8 lg:flex-row lg:items-start">
      <div class="w-full lg:max-w-xs lg:sticky lg:top-4">
        <div class="border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-4 space-y-4">
            <ul class="space-y-2 text-gray-900 dark:text-white">
              <li>
                <a href="#general" title="" class="flex items-center py-1.5 px-3 hover:bg-gray-100 w-full rounded-lg font-medium group dark:hover:text-white dark:hover:bg-gray-700">
                  <svg class="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>                      
                  General questions
                </a>
              </li>

              <li>
                <a href="#technical" title="" class="flex items-center py-1.5 px-3 hover:bg-gray-100 w-full rounded-lg font-medium group dark:hover:text-white dark:hover:bg-gray-700">
                  <svg class="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"/>
                  </svg>                      
                  Technical questions
                </a>
              </li>

              <li>
                <a href="#payment" title="" class="flex items-center py-1.5 px-3 hover:bg-gray-100 w-full rounded-lg font-medium group dark:hover:text-white dark:hover:bg-gray-700">
                  <svg class="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"/>
                  </svg>                      
                  Payment questions
                </a>
              </li>

              <li>
                <a href="#technical" title="" class="flex items-center py-1.5 px-3 hover:bg-gray-100 w-full rounded-lg font-medium group dark:hover:text-white dark:hover:bg-gray-700">
                  <svg class="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                  </svg>                      
                  Delivery questions
                </a>
              </li>

            </ul>
            <div>
              <span class="text-gray-500 dark:text-gray-400">Didn't find the answer?</span>
              <a href="#" title="" data-modal-target="question-modal-2" data-modal-toggle="question-modal-2"
                class="w-full mt-2 text-white items-center justify-center inline-flex bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Ask a question
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="flex xl:items-center text-lg md:text-xl font-bold py-4 border-b border-t text-gray-900 dark:text-white dark:border-gray-700">
          <svg class="w-5 h-5 shrink-0 text-gray-900 dark:text-white me-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>              
          How does the fusion drive technology in the iMac work, and what benefits does it offer?
        </h3>
        <div class="flex items-center text-gray-500 my-4 dark:text-gray-400">Updated November 20 2023 <div class="w-1.5 h-1.5 rounded-full bg-gray-500 mx-2"></div> <div>12:45</div></div>
        <p class="text-gray-500 dark:text-gray-400">Fusion Drive technology in the iMac combines the benefits of both traditional hard disk drives (HDDs) and solid-state drives (SSDs) into a single storage solution. Here's how it works and the advantages it offers:</p>
        <ol class="my-4 md:my-6 text-gray-500 dark:text-gray-400 space-y-2.5 list-[decimal] list-outside pl-5">
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Hybrid Storage Architecture:</span> Fusion Drive combines a large-capacity HDD with a smaller SSD into a single logical volume. The macOS operating system manages this hybrid storage architecture intelligently, ensuring that frequently accessed files and applications are stored on the faster SSD portion, while less frequently accessed data resides on the HDD.
          </li>

          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Automatic Data Tiering:</span> The macOS operating system continuously monitors the usage patterns of files and applications. Frequently accessed data, such as system files, frequently used applications, and often-used documents, are automatically moved to the SSD portion of the Fusion Drive for faster access.
          </li>

          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Improved Performance:</span> By prioritizing frequently accessed data on the SSD portion, Fusion Drive delivers faster read and write speeds compared to traditional HDDs alone. This results in quicker boot times, faster application launches, and smoother overall system performance.
          </li>
        </ol>
        <p class="mb-4 text-gray-500 dark:text-gray-400">Overall, Fusion Drive technology in the iMac offers a balanced combination of speed, capacity, and affordability, making it an ideal solution for users who need fast access to frequently used data without sacrificing storage space or breaking the bank.</p>
        <h3 id="general" class="flex xl:items-center text-lg md:text-xl font-bold py-4 border-b border-t text-gray-900 dark:text-white dark:border-gray-700">
          <svg class="w-5 h-5 shrink-0 text-gray-900 dark:text-white me-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>              
          Can you explain the differences between the various display options available for the iMac?
        </h3>
        <div class="flex items-center text-gray-500 my-4 dark:text-gray-400">Updated November 20 2023 <div class="w-1.5 h-1.5 rounded-full bg-gray-500 mx-2"></div> <div>12:45</div></div>
        <p class="mb-4 text-gray-500 dark:text-gray-400">The 27-inch iMac's 5K Retina display has a higher pixel density compared to the 21.5-inch models, resulting in sharper text, images, and graphics. This higher pixel density provides more detail and clarity, making it ideal for tasks such as photo and video editing, graphic design, and content creation.</p>
        <p class="mb-4 text-gray-500 dark:text-gray-400">The Retina displays models offer excellent color accuracy and wide color gamut support, making them suitable for professional applications that require precise color reproduction, such as graphic design, photography, and video editing.</p>
        <h3 class="flex xl:items-center text-lg md:text-xl font-bold py-4 border-b border-t text-gray-900 dark:text-white dark:border-gray-700">
          <svg class="w-5 h-5 shrink-0 text-gray-900 dark:text-white me-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>              
          Can you describe the Thunderbolt and USB connectivity options in the iMac?
        </h3>
        <div class="flex items-center text-gray-500 my-4 dark:text-gray-400">Updated November 20 2023 <div class="w-1.5 h-1.5 rounded-full bg-gray-500 mx-2"></div> <div>12:45</div></div>
        <p class="mb-4 text-gray-500 dark:text-gray-400">The iMac typically offers a range of Thunderbolt and USB connectivity options, providing users with versatile connectivity for various peripherals and accessories.</p>
        <p class="mb-4 text-gray-500 dark:text-gray-400">Thunderbolt ports are high-speed data and video connectivity ports that offer lightning-fast data transfer speeds and support for various peripherals, displays, and storage devices.</p>
        <p class="mb-4 text-gray-500 dark:text-gray-400">USB-C ports on the iMac may support USB 3.1 Gen 2 or USB 4 standards, offering higher data transfer speeds of up to 10 Gbps or 20 Gbps, respectively. USB-C ports may also support power delivery (PD) for charging compatible devices.</p>
        <h3 id="technical" class="flex xl:items-center text-lg md:text-xl font-bold py-4 border-b border-t text-gray-900 dark:text-white dark:border-gray-700">
          <svg class="w-5 h-5 shrink-0 text-gray-900 dark:text-white me-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>              
          How does the cooling system in the iMac function, especially in high-performance models?
        </h3>
        <div class="flex items-center text-gray-500 my-4 dark:text-gray-400">Updated November 20 2023 <div class="w-1.5 h-1.5 rounded-full bg-gray-500 mx-2"></div> <div>12:45</div></div>
        <p class="mb-4 text-gray-500 dark:text-gray-400">The iMac's cooling system is designed to efficiently dissipate heat generated by its components, particularly in high-performance models where intensive tasks like video editing, gaming, or running demanding software can lead to increased heat production.</p>
        <p class="mb-4 text-gray-500 dark:text-gray-400">The cooling system in the iMac is a crucial component that helps to ensure reliable performance and longevity, particularly in high-performance models where heat dissipation is a critical consideration. Through a combination of efficient airflow design, fan control algorithms, and thermal management solutions, the iMac's cooling system effectively regulates temperatures to keep the system running smoothly under various workloads.</p>
        <h3 id="payment" class="flex xl:items-center text-lg md:text-xl font-bold py-4 border-b border-t text-gray-900 dark:text-white dark:border-gray-700">
          <svg class="w-5 h-5 shrink-0 text-gray-900 dark:text-white me-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>              
          What are the key features of the latest generation of iMac's processors?
        </h3>
        <div class="flex items-center text-gray-500 my-4 dark:text-gray-400">Updated November 20 2023 <div class="w-1.5 h-1.5 rounded-full bg-gray-500 mx-2"></div> <div>12:45</div></div>
        <p class="mb-4 text-gray-500 dark:text-gray-400">As of my last update in January 2022, the latest generation of iMac processors could vary depending on when they were released. However, I can provide you with an overview of the typical key features found in the latest generation of iMac processors up to that point:</p>
        <ol class="my-4 md:my-6 text-gray-500 dark:text-gray-400 space-y-2.5 list-[decimal] list-outside pl-5">
          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Apple Silicon:</span> Fusion Drive combines a large-capacity HDD with a smaller SSD into a single logical volume. The macOS operating system manages this hybrid storage architecture intelligently, ensuring that frequently accessed files and applications are stored on the faster SSD portion, while less frequently accessed data resides on the HDD.
          </li>

          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Unified Memory Architecture:</span> Apple has transitioned its Mac lineup, including the iMac, to its custom-designed Apple Silicon processors. These chips, based on ARM architecture, offer significant performance and efficiency improvements compared to previous Intel-based processors.
          </li>

          <li>
            <span class="font-semibold text-gray-900 dark:text-white">Integrated Graphics:</span> Apple Silicon processors integrate powerful graphics processing units (GPUs) directly onto the same chip. These integrated GPUs deliver impressive graphics performance for tasks such as gaming, video editing, and 3D rendering, without the need for a discrete graphics card.
          </li>
        </ol>
        <p class="mb-4 text-gray-500 dark:text-gray-400">These key features represent the advancements brought about by the latest generation of iMac processors, offering improved performance, efficiency, and integration compared to previous generations.</p>
        <div class="w-full flex justify-center mt-4 md:mt-8">
          <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</button>
        </div>
      </div>
    </div>
  </div>
</section>

<div id="question-modal-2" tabindex="-1" aria-hidden="true" class="fixed antialiased left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
  <div class="relative max-h-full w-full max-w-xl p-4">
    <!-- Modal content -->
    <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
      <!-- Modal header -->
      <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Ask a question</h3>
        <button type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="question-modal-2">
          <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <form class="p-4 md:p-5">
        <div class="mb-4 grid grid-cols-2 gap-4">
          <div class="col-span-2">
            <label for="question" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your question <span class="text-gray-500 dark:text-gray-400">(150-1000 characters)</span></label>
            <textarea id="question" rows="6" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required=""></textarea>
          </div>
          <div class="col-span-2 grid gap-4 md:grid-cols-2">
            <div>
              <label for="question-type" class="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                <span class="me-1">Question type</span>
                <button type="button" data-tooltip-target="tooltip-dark" data-tooltip-style="dark" class="ml-1">
                  <svg aria-hidden="true" class="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Details</span>
                </button>
                <div id="tooltip-dark" role="tooltip" class="tooltip invisible absolute z-10 inline-block max-w-sm rounded-lg bg-gray-900 px-3 py-2 text-xs font-normal text-white opacity-0 shadow-sm dark:bg-gray-700">
                  Choose your question type to get a faster answer.
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </label>
              <select id="question-type" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option value="technical">Technical Question</option>
                <option value="shipment">Shipment Question</option>
                <option value="payment">Payment Issue</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label for="priority-type" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Priority</label>
              <select id="priority-type" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option value="very-high">Very High</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
          <div class="col-span-2">
            <p class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Upload files <span class="text-gray-500 dark:text-gray-400">(Optional)</span></p>
            <div class="flex w-full items-center justify-center">
              <label for="dropzone-file" class="dark:hover:bg-bray-800 flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg class="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>

          <div class="col-span-2">
            <div class="flex items-center">
              <input id="link-checkbox" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">I have read and agree with the <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>.</label>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
          <button type="submit" class="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit question</button>
          <button type="button" data-modal-toggle="question-modal-2" class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>
```

