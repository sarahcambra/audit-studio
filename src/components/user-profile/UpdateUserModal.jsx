import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Textarea,
  TextInput,
} from 'flowbite-react'
import { IMG_MODAL_AVATAR, inputCls } from './profileConstants'

export default function UpdateUserModal({ open, onClose }) {
  return (
    <Modal show={open} onClose={onClose} size="5xl" dismissible>
      <ModalHeader>Update user</ModalHeader>
      <ModalBody>
        <form
          action="#"
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            onClose()
          }}
        >
          <Accordion collapseAll={false}>
            <AccordionPanel>
              <AccordionTitle className="text-left font-medium leading-none text-gray-900 dark:text-white">General Information</AccordionTitle>
              <AccordionContent>
                <div className="border-t border-gray-200 p-4 dark:border-gray-700 sm:p-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Label htmlFor="update-file" value="Upload avatar" className="mb-2" />
                      <div className="w-full items-center sm:flex">
                        <img className="mb-4 h-20 w-20 rounded-full sm:mb-0 sm:mr-4" src={IMG_MODAL_AVATAR} alt="User avatar preview" />
                        <div className="w-full">
                          <input
                            id="update-file"
                            type="file"
                            className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
                          />
                          <p className="mb-3 mt-1 text-xs text-gray-500 dark:text-gray-300">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                          <div className="flex flex-wrap gap-2.5">
                            <button
                              type="button"
                              className="inline-flex items-center rounded-lg bg-primary-700 px-3 py-2 text-xs font-medium text-white hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700"
                            >
                              Upload new picture
                            </button>
                            <button
                              type="button"
                              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="modal-first-name" value="First Name" className="mb-2" />
                      <TextInput id="modal-first-name" type="text" defaultValue="Bonnie" placeholder="John" required />
                    </div>
                    <div>
                      <Label htmlFor="modal-last-name" value="Last Name" className="mb-2" />
                      <TextInput id="modal-last-name" type="text" defaultValue="Green" placeholder="Doe" required />
                    </div>
                    <div>
                      <Label htmlFor="modal-email" value="Email" className="mb-2" />
                      <TextInput id="modal-email" type="email" defaultValue="bonnie.green@company.com" required />
                    </div>
                    <div>
                      <Label htmlFor="user-permissions" value="User Permissions" className="mb-2" />
                      <select id="user-permissions" className={inputCls}>
                        <option>Operational</option>
                        <option value="NO">Non Operational</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="job-title" value="Job Title" className="mb-2" />
                      <TextInput id="job-title" defaultValue="Back-end software engineer" required />
                    </div>
                    <div>
                      <Label htmlFor="modal-languages" value="Languages" className="mb-2" />
                      <TextInput id="modal-languages" defaultValue="English, German" required />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="modal-password" value="Password" className="mb-2" />
                      <div className="grid gap-4 sm:grid-cols-2">
                        <TextInput id="modal-password" type="password" placeholder="•••••••••" required />
                        <div>
                          <Label htmlFor="confirm-password" value="Confirm password" className="mb-2" />
                          <TextInput id="confirm-password" type="password" placeholder="•••••••••" required />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel>
              <AccordionTitle className="text-left font-medium leading-none text-gray-900 dark:text-white">Additional Information</AccordionTitle>
              <AccordionContent>
                <div className="border-t border-gray-200 px-4 pt-4 dark:border-gray-700 sm:px-5 sm:pt-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="col-span-2">
                      <Label htmlFor="skills" value="Skills" className="mb-2" />
                      <TextInput id="skills" defaultValue="Tailwind CSS, Flowbite, React" />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="phone-number" value="Phone Number" className="mb-2" />
                      <TextInput id="phone-number" defaultValue="+1631 442 978" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="linkedin" value="Linkedin URL" className="mb-2" />
                      <TextInput id="linkedin" type="url" defaultValue="https://www.linkedin.com/in/bonniegreen/" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="personal-website" value="Personal Website" className="mb-2" />
                      <TextInput id="personal-website" type="url" defaultValue="https://flowbite.com" />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="country" value="Country" className="mb-2 block" />
                      <select id="country" className={inputCls}>
                        <option>United States</option>
                        <option value="au">Australia</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="biography" value="Biography" className="mb-2" />
                      <Textarea
                        id="biography"
                        rows={4}
                        placeholder="Write your biography..."
                        defaultValue="Hello, I'm Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3."
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>

          <div className="mt-6 flex flex-wrap gap-4 border-t border-gray-200 pt-4 dark:border-gray-600">
            <Button type="submit">
              Update user
            </Button>
            <Button type="button" color="failure">
              Delete
            </Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  )
}
