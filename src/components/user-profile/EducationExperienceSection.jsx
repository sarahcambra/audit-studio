import { Button } from 'flowbite-react'
import InfoTip from './InfoTip'
import SvgEdit from './SvgEdit'

function DateBadge({ children }) {
  return (
    <div className="inline-flex items-center">
      <span className="me-2 flex items-center rounded-sm bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
        <svg className="me-1 h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
        {children}
      </span>
    </div>
  )
}

export default function EducationExperienceSection({ onEditClick }) {
  return (
    <div className="col-span-2 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6">
      <h2 className="mb-4 flex items-center border-b border-gray-200 pb-4 text-xl font-bold text-gray-900 dark:border-gray-700 dark:text-white md:mb-6">
        Education & experience
        <InfoTip
          label="Education note"
          content="This information is presented on your public profile, please specify carefully what you want to display."
        />
      </h2>

      <div className="mb-4 mt-4 grid gap-6 border-b border-gray-200 pb-4 dark:border-gray-700 sm:mb-6 sm:mt-6 sm:pb-6 md:grid-cols-2 md:gap-24">
        <div>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white sm:mb-6">Experience</h3>
          <ul className="list-none space-y-0">
            <li className="border-b border-gray-200 pb-4 dark:border-gray-700">
              <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold dark:bg-gray-700">Fg</div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-semibold text-gray-900 dark:text-white">Figma</p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Web Developer, New York, USA</p>
                </div>
                <DateBadge>2015 - Present</DateBadge>
              </div>
            </li>
            <li className="border-b border-gray-200 py-4 dark:border-gray-700">
              <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold dark:bg-gray-700">Sk</div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-semibold text-gray-900 dark:text-white">Skype</p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Web Designer, Palo Alto, USA</p>
                </div>
                <DateBadge>2011 - 2015</DateBadge>
              </div>
            </li>
            <li className="pt-4">
              <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold dark:bg-gray-700">Am</div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-semibold text-gray-900 dark:text-white">Amazon</p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Web Designer, Palo Alto, USA</p>
                </div>
                <DateBadge>2009 - 2011</DateBadge>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white sm:mb-6">Education</h3>
          <ul className="list-none space-y-0">
            <li className="border-b border-gray-200 pb-4 dark:border-gray-700">
              <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold uppercase text-gray-900 dark:bg-gray-700 dark:text-white">
                  SU
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-semibold text-gray-900 dark:text-white">Stanford University</p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Computer Science and Engineering</p>
                </div>
                <DateBadge>2009 - 2014</DateBadge>
              </div>
            </li>
            <li className="border-gray-200 py-4 dark:border-gray-700 md:border-b">
              <div className="items-center space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold uppercase text-gray-900 dark:bg-gray-700 dark:text-white">
                  TJ
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-semibold text-gray-900 dark:text-white">Thomas Jeff High School</p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">Secondary School Certificate</p>
                </div>
                <DateBadge>2005 - 2009</DateBadge>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Button type="button" onClick={onEditClick} color="ghost">
        <SvgEdit className="-ms-0.5 me-1.5 h-4 w-4" />
        Edit
      </Button>
    </div>
  )
}
