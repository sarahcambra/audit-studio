import { inputCls, tabLinks } from './profileConstants'

export default function ProfileSettingsTabs() {
  return (
    <div className="col-span-2 mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 xl:mb-0">
      <div className="sm:hidden">
        <label htmlFor="tabs-mobile" className="sr-only">
          Menu
        </label>
        <select id="tabs-mobile" className={inputCls} defaultValue="Overview">
          {tabLinks.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <ul className="hidden text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:flex sm:space-x-4">
        {tabLinks.map((t, i) => (
          <li key={t}>
            <a
              href="#"
              className={`inline-block rounded-lg px-4 py-3 ${
                i === 0
                  ? 'active bg-primary-700 text-white dark:bg-primary-600'
                  : 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
              }`}
              {...(i === 0 ? { 'aria-current': 'page' } : {})}
              onClick={(e) => e.preventDefault()}
            >
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
