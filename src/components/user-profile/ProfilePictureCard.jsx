import { Button } from 'flowbite-react'
import InfoTip from './InfoTip'
import { IMG_PROFILE } from './profileConstants'
import SvgEdit from './SvgEdit'

export default function ProfilePictureCard({ onEditClick }) {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6 xl:mb-0">
      <h2 className="flex items-center text-xl font-bold text-gray-900 dark:text-white">
        Profile picture
        <InfoTip
          label="Profile photo help"
          content="You can change your profile photo here, you can upload a new photo from your computer."
        />
      </h2>

      <div className="mt-4 flex w-full items-center border-b border-gray-200 pb-4 dark:border-gray-700 sm:mt-6 sm:pb-6">
        <img className="me-4 h-24 w-24 shrink-0 rounded-lg" src={IMG_PROFILE} alt="Joseph McFall avatar" />
        <div className="w-full space-y-2">
          <span className="me-2 rounded-sm bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            PRO
          </span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Joseph McFall</h3>
          <span className="text-xl font-normal text-gray-500 dark:text-gray-400">Web Developer</span>
        </div>
      </div>

      <Button
        type="button"
        color="ghost"
        onClick={onEditClick}
      >
        <SvgEdit className="-ms-0.5 me-1.5 h-4 w-4" />
        Edit
      </Button>
    </div>
  )
}
