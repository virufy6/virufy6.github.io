import iconDrop from '~/assets/static/icons/dropzone/icon.svg'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import TitleText from '~/components/molecules/TitleText/TitleText'
import Button from '~/components/atoms/button/Button'
import { formIDs } from '~/forms/TellYourStory'
import { useI18n } from '~/i18n'

export default function Forms({}) {
  const {
    tellYourStory: { form },
  } = useI18n()


  return (
    <>
      <form
        action={formIDs.url}
        className="m-auto mt-16 max-w-[1280px] px-5 sm:px-10 lg:items-center"
        target="_blank"
        autoComplete="off"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            {form.name}
          </label>
          <input
						name={formIDs.name}
            type="name"
            id="name"
            className="text-smlock w-full border border-gray-400 bg-white p-2.5 text-gray-900 shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            {form.email}
          </label>
          <input
						name={formIDs.email}
            type="email"
            id="email"
            className="block w-full border border-gray-400 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            {form.message}
          </label>
          <textarea
						name={formIDs.message}
            id="message"
            rows={5}
            className="text-smblock w-full border border-gray-400 bg-white p-2.5 text-gray-900 shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div>    
          <div className="mb-20 flex flex-col items-center justify-center">
            <Button size="medium" type="primary" path="#" label={form.button} />
          </div>
        </div>
      </form>
    </>
  )
}
