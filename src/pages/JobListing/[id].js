import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'
import { useI18n } from '~/i18n'

const IdJob = () => {
  const {
    JobDescription: { JobID },
  } = useI18n()
  const router = useRouter()

  const id = router?.query?.id?.toString() ? router?.query?.id?.toString() : "404"
  id == null ? parseInt(id) : null

  const initialProps = {
    id: '',
    title: '',
    summary: '',
    desiredSkills: [''],
    hours: [''],
    minimunQualifications: [''],
    responsabilities: [''],
    questions: [''],
  }

  const [data, setData] = useState(initialProps)

  useEffect(() => {
    id != "404"
      ? setData({
          id: JobID[id].id,
          title: JobID[id].jobTitle,
          summary: JobID[id].jobDescription,
          desiredSkills: JobID[id].desiredSkills,
          hours: JobID[id].hours,
          minimunQualifications: JobID[id].minimumQualifications,
          responsabilities: JobID[id].responsibilities,
          questions: JobID[id].questions,
        })
      : null
  }, [id])

  useEffect(() => {
    console.log('Response API: ', data)
  }, [data])

  return (
    <>
      {id == "404" ? (
        <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
          <Title
            Text="NOT FOUND"
            H={'h4'}
            TitleClassProps={'w-[97%] lg:mb-3 text-center mt-24 '}
          />
        </div>
      ) : 
      <div className="mx-auto flex max-w-[1440px] justify-center">
        <div className="flex max-w-[1100px] flex-col items-center">
          <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-20">
            <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
              <Title
                Text={data.title}
                H={'h4'}
                TitleClassProps={'w-[97%] lg:mb-3 text-start '}
              />
            </div>
          </div>
          <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
            <p>{data.summary}</p>
          </div>
          <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
            <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
              <Title
                Text={'Responsibilities'}
                H={'h4'}
                TitleClassProps={'w-[97%] lg:mb-3 text-start '}
              />
            </div>
          </div>
          <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
            {data?.responsabilities?.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </div>
          <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
            <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
              <Title
                Text={'Minimum Qualifications'}
                H={'h4'}
                TitleClassProps={'w-[97%] lg:mb-3 text-start '}
              />
            </div>
          </div>
          <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
            {data?.minimunQualifications?.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </div>
          <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
            <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
              <Title
                Text={'Desired Skills'}
                H={'h4'}
                TitleClassProps={'w-[97%] lg:mb-3 text-start '}
              />
            </div>
          </div>
          <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
            {data?.desiredSkills?.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </div>
          <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
            <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
              <Title
                Text={'Hours'}
                H={'h4'}
                TitleClassProps={'w-[97%] lg:mb-3 text-start '}
              />
            </div>
          </div>
          <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
            {data?.hours?.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </div>
          <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
            <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
              <Title
                Text={'Questions?'}
                H={'h4'}
                TitleClassProps={'w-[97%] lg:mb-3 text-start '}
              />
            </div>
          </div>
          <div className="m-0 mb-[30px] flex w-full flex-col px-12 text-start">
            {data?.questions?.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </div>
          <div className="mb-16 flex w-full px-12">
            <Button
              size="medium"
              type="primary"
              path="https://docs.google.com/forms/d/e/1FAIpQLSdmlecMmXr3FqO1HajJFBmfpji8Blyjfs9U5jK3WT6BrSmDAA/viewform"
              label="APPLY TO THIS ROLE"
            />
          </div>
        </div>
        <div className="flex w-[340px] justify-center pt-20">
          <Button
            size="medium"
            type="primary"
            path="https://docs.google.com/forms/d/e/1FAIpQLSdmlecMmXr3FqO1HajJFBmfpji8Blyjfs9U5jK3WT6BrSmDAA/viewform"
            label="APPLY TO THIS ROLE"
          />
        </div>
      </div>
      }
      
    </>
  )
}

export default IdJob
