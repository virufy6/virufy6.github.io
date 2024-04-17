import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'
import LeaveAComment from "~/components/organisms/LeaveAComment/LeaveAComment"
import Text from "~/components/atoms/Text/Text";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from 'next-share'
import { useI18n } from "~/i18n"
import Image from 'next/image'
const IdBlog = () => {

  const [isLoading, setLoading] = useState(false);
  const router = useRouter()
  const { id } = router.query
  const idBlog = id ?? '1'
  const { blogDetails: { itemSelected } } = useI18n()
  const detailSelected = itemSelected?.find((item) => item?.id === idBlog)
  useEffect(() => {
    if (!Array.isArray(itemSelected)) {
      setLoading(true)
    }
  }, [itemSelected])

  return (
    <>
      {isLoading ? <p className="text-center text-2xl">Loading...</p> : null}

      <div className="px-1 md:px-4 flex flex-col items-center">
        <div className="flex mt-10 lg:mt-20 w-full lg:max-w-[1440px] px-2 items-center flex-1">
          <div className="w-full lg:items-start text-start flex flex-col gap-5">
            <Title
              Text={detailSelected?.title}
              H={"h4"}
              TitleClassProps={"w-[97%] lg:mb-3 text-start "}
            />
            <div className="text-[#3074DC] text-[1.125rem] leading-[1.75rem] md:text-[1.3rem] md:leading-[1.70rem] lg:text-[1.6rem] lg:leading-[1.80rem] xl:text-[1.8rem] xl:leading-[1.90rem] flex gap-2 items-center">
              {/* <Date
                dateString={data.publishedDate} /> */}
              <Text
                Text={`${detailSelected?.date} | ${detailSelected?.autor}`}
                Style="subtitle"
                TextClassProps={"text-start"}
              />
            </div>
            <div className=" mt-4 flex flex-col gap-4 sm:flex-row">
              <div className="flex">
                <FacebookShareButton style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "#3b5998", paddingRight: "9.5px", color: "white" }} url={'https://virufy.netlify.app/es/Blog/' + router.query.id}>
                  <FacebookIcon size={32} round />
                  Share
                </FacebookShareButton>
              </div>
              <div className="flex">
                <TwitterShareButton style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "#00aced", paddingRight: "7px", color: "white" }} url={'https://virufy.netlify.app/es/Blog/' + router.query.id} >
                  <TwitterIcon size={32} round />
                  Tweet
                </TwitterShareButton>
              </div>
              <div className="flex">
                <LinkedinShareButton style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "#007fb1", paddingRight: "9.5px", color: "white" }} url={'https://virufy.netlify.app/es/Blog/' + router.query.id}>
                  <LinkedinIcon size={32} round />
                  Share
                </LinkedinShareButton>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1440px] w-[100vw] mt-12 mb-8">
          <div className="w-full flex items-center justify-end lg:mb-[20px]">

            <Image
              src={detailSelected?.image}
              alt=""
              width={800}
              height={600}
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>
        </div>
        <div className="flex flex-col ml-2 max-w-[1440px] mb-[30px]">
          <Text key={detailSelected?.id}
            Style="normal"
            Text={detailSelected?.description}
            TextClassProps="w-[97%] lg:mb-3 text-start "
          />

          <div className=" mt-12 flex flex-col gap-4 sm:flex-row">
            <div className="flex">
              <FacebookShareButton style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "#3b5998", paddingRight: "9.5px", color: "white" }} url={'https://virufy.netlify.app/es/Blog/' + router.query.id} title={'data.title'}>
                <FacebookIcon size={32} round />
                Share
              </FacebookShareButton>
            </div>
            <div className="flex">
              <TwitterShareButton style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "#00aced", paddingRight: "7px", color: "white" }} url={'https://virufy.netlify.app/es/Blog/' + router.query.id} title={'data.title'} >
                <TwitterIcon size={32} round />
                Tweet
              </TwitterShareButton>
            </div>
            <div className="flex">
              <LinkedinShareButton style={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "#007fb1", paddingRight: "9.5px", color: "white" }} url={'https://virufy.netlify.app/es/Blog/' + router.query.id} title={'data.title'}>
                <LinkedinIcon size={32} round />
                Share
              </LinkedinShareButton>
            </div>
          </div>
        </div>


        <Title
          Text={detailSelected?.leaveAComment}
          H={"h3"}
          TitleClassProps={"w-[100%] mt-8 text-center "}
        />

        <LeaveAComment idBlog={`${detailSelected.id} - ${detailSelected.title}`} />

        <div className="w-full flex flex-col items-center bg-[#EEEEEE]">
          <div className="max-w-[1300px] w-[100vw] mt-14 xl:mt-0 flex flex-col xl:flex-row items-center xl:justify-between">
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
            <div className="mb-8 px-7 mt-7 w-full max-w-[1000px] xl:w-1/3">
              <input type="name" id="name" className="focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-smlock w-full p-2.5 border-gray-400" required></input>
            </div>
            <div className="flex flex-col justify-center items-center mb-14 xl:mb-0">
              <Button size="medium" type="primary" path="#" label="Sign Up" />
            </div>
          </div>
        </div >
      </div >


    </>
  )
}

export default IdBlog