import { Button, Modal, ModalBody, ModalHeader } from 'flowbite-react'
import { IMG_PROFILE } from './profileConstants'

export default function ProfilePictureModal({ open, onClose }) {
  return (
    <Modal show={open} onClose={onClose} size="md" dismissible>
      <ModalHeader>Update profile picture</ModalHeader>
      <ModalBody>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault()
            onClose()
          }}
          className="space-y-4"
        >
          <div className="w-full sm:flex sm:items-start">
            <img className="mb-4 h-24 w-24 rounded-lg sm:mb-0 sm:mr-4" src={IMG_PROFILE} alt="Profile avatar" />
            <div className="w-full">
              <label htmlFor="profile-file-upload" className="sr-only">
                Upload avatar
              </label>
              <input
                id="profile-file-upload"
                type="file"
                className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
              />
              <p className="mb-3 mt-1 text-xs text-gray-500 dark:text-gray-300">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Upload new picture
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <Button type="submit">
            Save
          </Button>
        </form>
      </ModalBody>
    </Modal>
  )
}
