## Default contact form

Use this example of a contact form coded with Tailwind CSS including the email, subject, and message that can be delivered by clicking on the form submission button.

```html
<section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
```

## Contact form with help center

Use this advanced example of a contact form where you can also set a help center, address location information and a CTA button.

```html
<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md">
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl lg:mb-8 dark:text-white">How can we help you?</h2>
            <label for="search-faq" class="block mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-6 h-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="search-faq" class="block p-4 pl-12 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type keywords to find answers">
            </div>
        </div>
        <div class="grid gap-8 my-8 xl:gap-16 sm:grid-cols-2 md:grid-cols-3">
            <div class="p-4 rounded-lg border border-gray-200 shadow lg:p-8 dark:border-gray-700 dark:bg-gray-800">
                <h3 class="mb-4 text-xl font-extrabold dark:text-white">Billing & Plans</h3>
                <ul role="list" class="mb-4 space-y-3 text-primary-600 dark:text-primary-500">
                    <li>
                        <a href="#" class="hover:underline">Flowbite plans & prices</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Switch plans and add-ons</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">I can't log in to Flowbite</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">The Disney Bundle</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Student Discount on Flowbite</a>
                    </li>
                </ul>
            </div>
            <div class="p-4 rounded-lg border border-gray-200 shadow lg:p-8 dark:border-gray-700 dark:bg-gray-800">
                <h3 class="mb-4 text-xl font-extrabold dark:text-white">Using Flowbite</h3>
                <ul role="list" class="mb-4 space-y-3 text-primary-600 dark:text-primary-500">
                    <li>
                        <a href="#" class="hover:underline">Parental Controls</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Devices to watch Flowbite</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Home location for Live TV</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Live TV Guide</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Fix buffering issues</a>
                    </li>
                </ul>
            </div>
            <div class="p-4 rounded-lg border border-gray-200 shadow lg:p-8 dark:border-gray-700 dark:bg-gray-800">
                <h3 class="mb-4 text-xl font-extrabold dark:text-white">What’s on Flowbite</h3>
                <ul role="list" class="mb-4 space-y-3 text-primary-600 dark:text-primary-500">
                    <li>
                        <a href="#" class="hover:underline">NEW this month!</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Sports Add-on for Live TV</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Watch live sports</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">FX shows & movies</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Super Bowl 2022</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="justify-between items-center mb-8 sm:mb-24 sm:flex">
            <div class="mb-4 sm:mb-0">
                <h3 class="mb-2 text-2xl font-extrabold text-gray-900 dark:text-white">Not what you were looking for?</h3>
                <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Browse through all of our Help Center articles</p>    
            </div>
            <a href="#" class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
            </a>
        </div>
        <div class="grid gap-16 lg:grid-cols-3">
            <div class="hidden lg:block">
                <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Points of contact</h3>
                <h4 class="mb-1 font-medium text-gray-900 dark:text-white">U.S. Flowbite</h4>
                <address class="text-sm font-normal text-gray-500 non-italic">
                    11350 McCormick Rd, EP III, Suite 200,
                    <br>Hunt Valley, MD 21031
                </address>
                <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Information & Sales</h4>
                <p class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a href="#">sales@flowbite.com</a></p>
                <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Support</h4>
                <p class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a href="#">support@flowbite.com</a></p>
                <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Verification of Employment</h4>
                <p class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><a href="#">hr@flowbite.com</a></p>
                <h3 class="mt-5 mb-4 text-lg font-semibold text-gray-900 dark:text-white">Our offices around the world</h3>
                <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Canada</h4>
                <address class="text-sm font-normal text-gray-500 non-italic">
                    5333 Avenue Casgrain #1201,
                    <br>Montréal, QC H2T 1X3
                </address>
                <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">Germany</h4>
                <address class="text-sm font-normal text-gray-500 non-italic">
                    Neue Schönhauser Str. 3-5,
                    <br>10178 Berlin
                </address>
                <h4 class="mt-4 mb-1 font-medium text-gray-900 dark:text-white">France</h4>
                <address class="text-sm font-normal text-gray-500 non-italic">
                    266 Place Ernest Granier,
                    <br>34000 Montpellier
                </address>
            </div>
            <div class="col-span-2">
                <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 lg:mb-8 md:text-4xl dark:text-white">Still need help?</h2>
                <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email address <span class="text-xs text-gray-500">(So we can reply to you)</span></label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
                    </div>
                    <div>
                        <label for="topic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Topic</label>
                        <select id="topic" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select a topic</option>
                            <option value="US">Switch plans and add-ons</option>
                            <option value="CA">Billing & Invoice</option>
                            <option value="FR">I can't log in to Flowbite</option>
                            <option value="DE">Parental controls</option>
                        </select>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        <div class="flex mt-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-checkbox" class="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">By submitting this form, you confirm that you have read and agree to our <a class="font-normal text-gray-900 underline hover:no-underline dark:text-white" href="#">Terms of Service</a> and <a class="font-normal text-gray-900 underline hover:no-underline dark:text-white" href="#">Privacy Statement</a>.</label>
                        </div>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </div>
    </div>
</section>
```

## Contact section with address location

Use this example of a contact form where you can also provide information about your company's headquarters and phone number.

```html
<section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
              <p class="font-light text-gray-600 dark:text-gray-400 sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          </div>
          <div class="grid grid-cols-1 lg:gap-8 lg:grid-cols-3">
              <div class="col-span-2 mb-8 lg:mb-0">
                  <form action="#" class="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2">
                      <div>
                          <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                          <input type="text" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bonnie" required>
                      </div>
                      <div>
                          <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                          <input type="text" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Green" required>
                      </div>
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                          <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
                      </div>
                      <div>
                          <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                          <input type="number" id="phone-number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required>
                      </div>
                      <div class="sm:col-span-2">
                          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                          <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                          <p class="mt-4 text-sm text-gray-500">By submitting this form you agree to our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> and our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
                      </div>
                      <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                  </form>
              </div>
              <div class="grid grid-cols-1 col-span-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                      <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                          <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path></svg>
                      </div>
                      <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Company information:</p>
                      <p class="text-gray-500 dark:text-gray-400">Themesberg LLC <br>Tax id: USXXXXXX</p>
                  </div>
                  <div>
                      <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                          <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                      </div>
                      <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Address:</p>
                      <p class="text-gray-500 dark:text-gray-400">SILVER LAKE, United States 1941 Late Avenue <br> Zip Code/Postal code:03875</p>
                  </div>
                  <div>
                      <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                          <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                      </div>
                      <p class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Call us:</p>
                      <p class="mb-3 text-gray-500 dark:text-gray-400">Call us to speak to a member of our team. We are always happy to help.</p>
                      <p class="font-semibold text-primary-600 dark:text-primary-500">+1 (646) 786-5060</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
```

## Contact section with background image

Use this example to show a visually stunning background image complementary to the contact form and address location.

```html
<section class="bg-white dark:bg-gray-900">
      <div class="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
          <div class="px-4 lg:pt-24 pt-8 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6 ">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Contact Us</h2>
              <p class="mb-16 font-light text-gray-400 sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
          </div> 
      </div>
      <div class="py-16 px-4 mx-auto -mt-96 max-w-screen-xl sm:py-24 lg:px-6 ">
          <form action="#" class="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2">
              <div>
                  <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                  <input type="text" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bonnie" required>
              </div>
              <div>
                  <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                  <input type="text" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Green" required>
              </div>
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
              </div>
              <div>
                  <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                  <input type="number" id="phone-number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required>
              </div>
              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  <p class="mt-4 text-sm text-gray-500">By submitting this form you agree to our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> and our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
          <div class="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                  <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                      <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </div>
                  <p class="mb-2 text-xl font-bold dark:text-white">Email us:</p>
                  <p class="mb-3 text-gray-500 dark:text-gray-400">Email us for general queries, including marketing and partnership opportunities.</p>
                  <a href="mailto:abc@example.com" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">hello@flowbite.com</a>
              </div>
              <div>
                  <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                      <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  </div>
                  <p class="mb-2 text-xl font-bold dark:text-white">Call us:</p>
                  <p class="mb-3 text-gray-500 dark:text-gray-400">Call us to speak to a member of our team. We are always happy to help.</p>
                  <span class="font-semibold text-primary-600 dark:text-primary-500">+1 (646) 786-5060</span>
              </div>
              <div>
                  <div class="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                      <svg class="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                  </div>
                  <p class="mb-2 text-xl font-bold dark:text-white">Support</p>
                  <p class="mb-3 text-gray-500 dark:text-gray-400">Email us for general queries, including marketing and partnership opportunities.</p>
                  <a href="#" class="inline-flex py-2 px-4 text-sm font-medium text-center rounded-lg border text-primary-600 border-primary-600 hover:text-white hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600 dark:focus:ring-primary-800">Support center</a>
              </div>
          </div>
      </div>
  </section>
```

## Contact form with links

This contact form can be used to also show complementary links and select options based on which you can also change the content of the contact form.

```html
<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-md sm:py-16 lg:px-6">
        <h2 class="mb-8 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
        <div class="mb-4">
            <label for="account_1" class="block mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-400">Account recovery type</label>
            <select id="account_1" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer">
                <option>Account Login & Recovery</option>
                <option>Account Password</option>
                <option>Account Type</option>
            </select>
        </div>
        <div>
            <label for="account_2" class="block mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-400">Account recovery type</label>
            <select id="account_2" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer">
                <option>Account Access</option>
                <option>Account Password</option>
                <option>Account Status</option>
            </select>
        </div>
        <h3 class="mt-8 mb-5 text-xl font-extrabold text-gray-900 dark:text-white">Popular guides & tutorials</h3>
        <ul class="space-y-3">
            <li>
                <a href="#" class="font-semibold text-primary-600 hover:underline dark:text-primary-500">I Can't Log In</a>
            </li>
            <li>
                <a href="#" class="font-semibold text-primary-600 hover:underline dark:text-primary-500">I Think My Account Has Been Compromised</a>
            </li>
            <li>
                <a href="#" class="font-semibold text-primary-600 hover:underline dark:text-primary-500">Recover Username or Reset Password</a>
            </li>
            <li>
                <a href="#" class="font-semibold text-primary-600 hover:underline dark:text-primary-500">Troubleshoot the Signup Activation Email</a>
            </li>
            <li>
                <a href="#" class="font-semibold text-primary-600 hover:underline dark:text-primary-500">Activate Account Notifications</a>
            </li>
            <li>
                <a href="#" class="font-semibold text-primary-600 hover:underline dark:text-primary-500">Manage Account Login and Profile</a>
            </li>
            <li>
                <a href="#" class="font-semibold text-primary-600 hover:underline dark:text-primary-500">Set Account Security Options</a>
            </li>
        </ul>
        <h3 class="mt-8 mb-5 text-xl font-extrabold text-gray-900 dark:text-white">Didn't find what you're looking for?</h3>
        <form action="#" class="grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2">
            <div>
                <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                <input type="text" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bonnie" required>
            </div>
            <div>
                <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                <input type="text" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Green" required>
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
            </div>
            <div>
                <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                <input type="number" id="phone-number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                <p class="mt-4 text-sm text-gray-500">By submitting this form you agree to our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> and our <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
    </div>
</section>
```

## Contact form with company information

Use this contact form to show information about your company such as the legal name, tax id, phone number, and also a form where your clients can get in contact.

```html
<section class="bg-white dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div class="grid grid-cols-1 gap-6 text-center sm:gap-16 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <div
          class="inline-flex items-center justify-center w-16 h-16 mx-auto text-gray-500 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-white">
          <svg aria-hidden="true" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            Company information:
          </h3>
          <p class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
            Flowbite LLC<br>Tax id: USXXXXXX
          </p>
        </div>
      </div>

      <div>
        <div
          class="inline-flex items-center justify-center w-16 h-16 mx-auto text-gray-500 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-white">
          <svg aria-hidden="true" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            Address:
          </h3>
          <p class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
            SILVER LAKE, United States<br>1941 Late Avenue<br>Zip Code/Postal code: 03875
          </p>
        </div>
      </div>

      <div class="hidden lg:block">
        <div
          class="inline-flex items-center justify-center w-16 h-16 mx-auto text-gray-500 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-white">
          <svg aria-hidden="true" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            Contact us:
          </h3>
          <p class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
            Email us for general queries, including marketing and partnership opportunities.
          </p>
          <a href="#" title="" class="block mt-1 text-base font-semibold text-gray-900 dark:text-white hover:underline">
            hello@flowbite.com
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-3xl mx-auto mt-8 lg:mt-24">
      <form action="#" class="grid max-w-screen-md grid-cols-1 mx-auto gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            First name
          </label>
          <input type="text" id="first-name"
            class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Bonnie" required>
        </div>

        <div>
          <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Last name
          </label>
          <input type="text" id="last-name"
            class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Green" required>
        </div>

        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input type="email" id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com" required>
        </div>

        <div>
          <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Phone number
          </label>
          <input type="number" id="phone-number"
            class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="+(12) 345 6789" required>
        </div>

        <div>
          <div class="flex items-center gap-1.5 mb-2">
            <label for="country" class="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Country
            </label>
            <button type="button" data-popover-target="country-description" class="w-4 h-4">
              <svg aria-hidden="true" class="text-gray-400 hover:text-gray-900 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Show information</span>
            </button>
            <div data-popover id="country-description" role="tooltip" class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                <div class="p-3 space-y-2">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Country based on fiscal residency</h3>
                    <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
                    <h3 class="font-semibold text-gray-900 dark:text-white">Double citizenship</h3>
                    <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
                    <a href="#" class="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700">Read more <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                </div>
                <div data-popper-arrow></div>
            </div>
          </div>
          <select id="country"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option>Select a country</option>
            <option value="US" selected>United States</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="GB">United Kingdom</option>
            <option value="ES">Spain</option>
            <option value="CA">Canada</option>
            <option value="JP">Japan</option>
            <option value="CN">People's Republic of China</option>
          </select>
        </div>

        <div>
          <div class="flex items-center gap-1.5 mb-2">
            <label for="language" class="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Language
            </label>
            <button type="button" data-popover-target="language-description" class="w-4 h-4">
              <svg aria-hidden="true" class="text-gray-400 hover:text-gray-900 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Show information</span>
            </button>
            <div data-popover id="language-description" role="tooltip" class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                <div class="p-3 space-y-2">
                    <h3 class="font-semibold text-gray-900 dark:text-white">Choosing an international language</h3>
                    <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
                    <a href="#" class="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700">Read more <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                </div>
                <div data-popper-arrow></div>
            </div>
          </div>
          <select id="language"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option>Select a language</option>
            <option value="US" selected>English (US)</option>
            <option value="DE">German</option>
            <option value="FR">French</option>
            <option value="ES">Spanish</option>
            <option value="JP">Japanese</option>
            <option value="NL">Dutch</option>
          </select>
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Your message
          </label>
          <textarea id="message" rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder=""></textarea>
        </div>

        <div class="sm:col-span-2">
          <div class="flex items-start">
            <input type="checkbox" id="terms" value=""
              class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="terms" class="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              I confirm that you have read and agreed to
              <a href="#" title="" class="font-medium text-gray-900 hover:no-underline underline dark:text-white">
                Flowbite's Terms of Service
              </a>
              and
              <a href="#" title="" class="font-medium text-gray-900 hover:no-underline underline dark:text-white">
                Privacy Statement
              </a>.
            </label>
          </div>
        </div>

        <button type="submit"
          class="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
          message</button>
      </form>
    </div>
  </div>
</section>
```
