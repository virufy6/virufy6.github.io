import React from 'react'
import Title from '~/components/atoms/Title/Title'
import Text from "~/components/atoms/Text/Text";
import { useI18n } from '~/i18n';

export default function InputText({
  handleAction
}) {
  const { faq: { sectionSearchQuestion } } = useI18n()

  return (
    <div className="w-full h-[300px] lg:h-[557px] bg-slate-100 flex flex-col items-center justify-center">
      <Title
        Text={sectionSearchQuestion.title}
        H={"h2"}
        TitleClassProps={"w-[95%] lg:mb-7 text-center"}
      />
      <Text
        Style="normal"
        Text={sectionSearchQuestion.descriptionFirstSearch}
        TextClassProps="mx-[20px] mt-[30px] mb-7 lg:mb-12 text-center"
      />
      <div className="w-full flex justify-center lg:w-[1000px]">
        <div className="relative w-full">
          <div className='flex justify-center'>

            <svg aria-hidden="true" className="w-5 h-5 absolute left-6 bottom-3 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input onChange={(e) => { e.preventDefault(), handleAction(e.target.value) }} type="search" id="search" className="h-[44px] p-4 pl-10 block w-full mx-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black focus:border-blue-500" placeholder="" required />

          </div>
        </div>
      </div>
      <Text
        Style="normal"
        Text={sectionSearchQuestion.secondDescriptionSearch}
        TextClassProps="mx-[20px] mt-[30px] mb-4 text-center lg:mt-14"
      />
    </div >
  )
}
