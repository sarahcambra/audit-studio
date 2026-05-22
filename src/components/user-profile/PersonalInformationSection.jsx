import { Button, Tooltip } from 'flowbite-react'
import InfoTip from './InfoTip'
import SvgEdit from './SvgEdit'
import { skillChips } from './profileConstants'

export default function PersonalInformationSection({ onEditClick }) {
  return (
    <div className="col-span-2 mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6 xl:mb-0">
      <h2 className="mb-4 flex items-center pb-4 text-xl font-bold text-gray-900 md:mb-6 border-b border-gray-200 dark:border-gray-700 dark:text-white">
        Personal information
        <InfoTip
          label="Privacy note"
          content="This information is presented on your public profile, please specify carefully what you want to display."
        />
      </h2>

      <div className="mb-4 mt-4 grid gap-4 border-b border-gray-200 pb-4 dark:border-gray-700 sm:mb-6 sm:mt-6 sm:grid-cols-2 sm:gap-24 sm:pb-6">
        <div>
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Full name</dt>
            <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">Joseph McFall</dd>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Biography</dt>
            <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
              I am Joseph McFall, a fervent explorer navigating the intricate landscapes of web design, driven by an unyielding passion for Web 3 and Artificial
              Intelligence. From the early days of tinkering with computers to my current standing as a web designer, my journey has been a dynamic evolution marked by
              a relentless pursuit of innovation.
            </dd>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Social</dt>
            <dd className="mb-4 inline-flex items-center space-x-1 sm:mb-5">
              <a
                href="#"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={(e) => e.preventDefault()}
              >
                <span className="sr-only">Facebook</span>
                <span aria-hidden className="text-xs font-semibold">
                  Fb
                </span>
              </a>
              <a
                href="#"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={(e) => e.preventDefault()}
              >
                <span className="sr-only">Instagram</span>
                <span aria-hidden className="text-xs font-semibold">
                  Ig
                </span>
              </a>
              <a
                href="#"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={(e) => e.preventDefault()}
              >
                <span className="sr-only">GitHub</span>
                <span aria-hidden className="text-xs font-semibold">
                  Gh
                </span>
              </a>
            </dd>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Location</dt>
            <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400 sm:mb-5">
              <svg className="mr-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  clipRule="evenodd"
                />
              </svg>
              California, United States of America
            </dd>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Job Title</dt>
            <dd className="flex items-center text-gray-900 dark:text-white">
              <svg className="mr-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-500 dark:text-gray-400">Frontend Developer</span>
            </dd>
          </dl>
        </div>
        <dl>
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Email address</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">helene@company.com</dd>
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Home Adress</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">92 Miles Drive, Newark, NJ 07103, California, United States of America</dd>
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Phone Number</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">+1234 567 890 / +12 345 678</dd>
          <dt className="mb-2.5 font-semibold leading-none text-gray-900 dark:text-white">Software Skills</dt>
          <dd className="mb-4 flex flex-wrap items-center space-x-1 sm:mb-5">
            {skillChips.map((s) => (
              <Tooltip key={s.label} content={s.label} style="dark">
                <button type="button" className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="sr-only">{s.label}</span>
                  <span aria-hidden className="text-[10px] font-bold uppercase text-gray-800 dark:text-gray-200">
                    {s.abbr}
                  </span>
                </button>
              </Tooltip>
            ))}
          </dd>
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Languages</dt>
          <dd className="text-gray-500 dark:text-gray-400">English, French, Spanish</dd>
        </dl>
      </div>

      <Button
        type="button"
        color="light"
        onClick={onEditClick}
      >
        <SvgEdit className="-ms-0.5 me-1.5 h-4 w-4" />
        Edit
      </Button>
    </div>
  )
}
