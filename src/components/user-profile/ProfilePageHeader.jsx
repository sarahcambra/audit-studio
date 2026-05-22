import { Link } from 'react-router-dom'

export default function ProfilePageHeader({ title = 'Settings', belowTitle = null }) {
  return (
    <div className="mt-14 px-4 pt-4 sm:mt-16">
      <nav className="mb-4 flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand"
            >
              <svg className="me-2.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z"
                  clipRule="evenodd"
                />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="mx-1 h-4 w-4 text-body-subtle rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
              </svg>
              <span className="ms-1 text-sm font-medium text-body md:ms-2">User</span>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="mx-1 h-4 w-4 text-body-subtle rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
              </svg>
              <span className="ms-1 text-sm font-medium text-body-subtle md:ms-2">{title}</span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-[36px] lg:leading-tight">
        {title}
      </h1>
      {belowTitle != null ? <div className="mt-8 min-w-0 max-w-[min(56rem,calc(100vw-2rem))]">{belowTitle}</div> : null}
    </div>
  )
}
