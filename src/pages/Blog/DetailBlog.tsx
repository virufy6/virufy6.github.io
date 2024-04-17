import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import Image1 from '~/assets/static/images/Blog Cards Images/card1.jpg'
import React from 'react'
import Title from '~/components/atoms/Title/Title'
import Text from '~/components/atoms/Text/Text'
import Button from '~/components/atoms/button/Button'
import LeaveAComment from '~/components/organisms/LeaveAComment/LeaveAComment'

export default function DetailBlog() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-20 lg:max-w-[1440px]">
          <div className="flex w-full flex-col gap-5 text-start lg:items-start">
            <Title
              Text={'How Do We Ensure that Healthcare AI is Useful?'}
              H={'h4'}
              TitleClassProps={'w-[97%] lg:mb-3 text-start '}
            />
            <Text
              Text={'March 8, 2023 | Katherine Miller'}
              Style="subtitle"
              TextClassProps={'w-[97%] lg:mb-7 text-start text-blue-600'}
            />
          </div>
        </div>
        <div className="mt-12 mb-8 flex w-[100vw] max-w-[1440px] flex-col items-center justify-center lg:flex-row">
          <div className="flex w-full items-center justify-end lg:mb-[20px]">
            <ImageAtomLocal
              imagesize="pr100"
              border=""
              src={Image1}
              alt=""
              ImageStyleProps=""
            />
          </div>
        </div>
        <div className="ml-2 mb-[30px] flex max-w-[1440px] flex-col">
          <Text
            Style="subtitle"
            Text="In the big scheme of healthcare operations, predictive models play a role not unlike that of blood tests, X-rays, or MRIs: They influence decisions about whether an intervention is appropriate."
            TextClassProps="w-[97%] lg:mb-3 text-start "
          />
          <Text
            Style="subtitle"
            Text="her to act,” says Nigam Shah, Chief Data Scientist for Stanford Health Care and a Stanford HAI faculty member. But those probability estimates are only useful to healthcare providers if they trigger decisions that are more beneficial than not."
            TextClassProps="w-[97%] lg:mb-3 text-start "
          />
          <Text
            Style="subtitle"
            Text="In the big scheme of healthcare operations, predictive models play a role not unlike that of blood tests, X-rays, or MRIs: They influence decisions about whether an intervention is appropriate."
            TextClassProps="w-[97%] lg:mb-3 text-start "
          />
          <Text
            Style="subtitle"
            Text="In the big scheme of healthcare operations, predictive models play a role not unlike that of blood tests, X-rays, or MRIs: They influence decisions about whether an intervention is appropriate."
            TextClassProps="w-[97%] lg:mb-3 text-start "
          />
          <Text
            Style="subtitle"
            Text="In the big scheme of healthcare operations, predictive models play a role not unlike that of blood tests, X-rays, or MRIs: They influence decisions about whether an intervention is appropriate."
            TextClassProps="w-[97%] lg:mb-3 text-start "
          />
          <Text
            Style="subtitle"
            Text="In the big scheme of healthcare operations, predictive models play a role not unlike that of blood tests, X-rays, or MRIs: They influence decisions about whether an intervention is appropriate."
            TextClassProps="w-[97%] lg:mb-3 text-start "
          />
        </div>
      </div>

      <Title
        Text="Leave a comment"
        H={'h3'}
        TitleClassProps={'w-[100%] mt-8 text-center '}
      />
      <LeaveAComment idBlog="" />

      <div className="flex flex-col items-center bg-[#EEEEEE]">
        <div className="mt-14 flex w-[100vw] max-w-[1300px] flex-col items-center xl:mt-0 xl:flex-row xl:justify-between">
          <div className="flex xl:hidden">
            <Title
              H="h6"
              Text="How Do We Ensure that Healthcare AI is Useful?"
              TitleClassProps="text-center"
            />
          </div>
          <div className="hidden xl:flex">
            <Title
              H="h5tepsHome"
              Text="Get the latest in Virufy’s Health Blog"
              TitleClassProps="text-center"
            />
          </div>
          <div className="mb-8 mt-7 w-full max-w-[1000px] px-7 xl:w-1/3">
            <input
              type="name"
              id="name"
              className="text-smlock w-full border border-gray-400 bg-white p-2.5 text-gray-900 shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></input>
          </div>
          <div className="mb-14 flex flex-col items-center justify-center xl:mb-0">
            <Button size="medium" type="primary" path="#" label="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  )
}
