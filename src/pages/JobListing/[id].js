import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Title from '~/components/atoms/Title/Title'
import { useI18n } from '~/i18n'

const IdJob = () => {
  const {
    JobDescription: { JobID },
  } = useI18n()
  const router = useRouter()

  const id = router?.query?.id?.toString() || '404'

  const initialProps = {
    id: '',
    title: '',
    summary: '',
    desiredSkills: [],
    hours: [],
    minimumQualifications: [],
    responsibilities: [],
    questions: [],
  }

  const [data, setData] = useState(initialProps)
  const [isValidId, setIsValidId] = useState(true)

  useEffect(() => {
    if (id !== '404' && JobID[id]) {
      setData({
        id: JobID[id].id,
        title: JobID[id].jobTitle,
        summary: JobID[id].jobDescription,
        desiredSkills: JobID[id].desiredSkills || [],
        hours: JobID[id].hours || [],
        minimumQualifications: JobID[id].minimumQualifications || [],
        responsibilities: JobID[id].responsibilities || [],
        questions: JobID[id].questions || [],
      })
      setIsValidId(true)
    } else {
      setIsValidId(false)
    }
  }, [id, JobID])

  useEffect(() => {
    console.log('Response API: ', data)
  }, [data])

  const renderQuestions = (questions) => {
    return questions.map((element, index) => {
      const emailRegex = /\S+@\S+\.\S+/
      const emailMatch = element.match(emailRegex)

      if (emailMatch) {
        const parts = element.split(emailRegex)
        return (
          <li
            key={index}
            style={{
              color: 'white',
              listStylePosition: 'inside',
              paddingLeft: '1.2em',
              textIndent: '-1.2em',
            }}
          >
            {parts[0]}
            <a href={`mailto:${emailMatch[0]}`} style={{ color: '#3074DC' }}>
              {emailMatch[0]}
            </a>
            {parts[1]}
          </li>
        )
      }
      return (
        <li
          key={index}
          style={{
            listStylePosition: 'inside',
            paddingLeft: '1.2em',
            textIndent: '-1.2em',
          }}
        >
          {element}
        </li>
      )
    })
  }

  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, #000000 0%, #162B4C 23.5%, #3468B2 90%)',
        color: 'white',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      {!isValidId ? (
        <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
          <Title
            Text="NOT FOUND"
            H={'h4'}
            TitleClassProps={'w-[97%] lg:mb-3 text-center mt-24 '}
          />
        </div>
      ) : (
        <div className="mx-auto flex max-w-[1440px] justify-center">
          <div className="flex max-w-[1100px] flex-col items-center lg:ml-[10rem]">
            <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-20 ">
              <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                <Title
                  Text={data.title}
                  H={'h4'}
                  TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                />
              </div>
            </div>
            <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
              <p>{data.summary}</p>
            </div>
            {data.responsibilities && data.responsibilities.length > 0 && (
              <>
                <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
                  <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                    <Title
                      Text={'Responsibilities'}
                      H={'h4'}
                      TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                    />
                  </div>
                </div>
                <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
                  {data.responsibilities.map((element, index) => (
                    <li
                      key={index}
                      style={{
                        listStylePosition: 'inside',
                        paddingLeft: '1.2em',
                        textIndent: '-1.2em',
                      }}
                    >
                      {element}
                    </li>
                  ))}
                </div>
              </>
            )}
            {data.minimumQualifications &&
              data.minimumQualifications.length > 0 && (
                <>
                  <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
                    <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                      <Title
                        Text={'Minimum Qualifications'}
                        H={'h4'}
                        TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                      />
                    </div>
                  </div>
                  <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
                    {data.minimumQualifications.map((element, index) => (
                      <li
                        key={index}
                        style={{
                          listStylePosition: 'inside',
                          paddingLeft: '1.2em',
                          textIndent: '-1.2em',
                        }}
                      >
                        {element}
                      </li>
                    ))}
                  </div>
                </>
              )}
            {data.desiredSkills && data.desiredSkills.length > 0 && (
              <>
                <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
                  <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                    <Title
                      Text={'Desired Skills'}
                      H={'h4'}
                      TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                    />
                  </div>
                </div>
                <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
                  {data.desiredSkills.map((element, index) => (
                    <li
                      key={index}
                      style={{
                        listStylePosition: 'inside',
                        paddingLeft: '1.2em',
                        textIndent: '-1.2em',
                      }}
                    >
                      {element}
                    </li>
                  ))}
                </div>
              </>
            )}
            {data.hours && data.hours.length > 0 && (
              <>
                <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
                  <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                    <Title
                      Text={'Hours'}
                      H={'h4'}
                      TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                    />
                  </div>
                </div>
                <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
                  {data.hours.map((element, index) => (
                    <li
                      key={index}
                      style={{
                        listStylePosition: 'inside',
                        paddingLeft: '1.2em',
                        textIndent: '-1.2em',
                      }}
                    >
                      {element}
                    </li>
                  ))}
                </div>
              </>
            )}
            {data.questions && data.questions.length > 0 && (
              <>
                <div className="mt-10 flex w-full flex-1 items-center px-2 lg:mt-10">
                  <div className="flex w-full flex-col gap-5 px-10 text-start lg:items-start">
                    <Title
                      Text={'Questions?'}
                      H={'h4'}
                      TitleClassProps={'w-[97%] lg:mb-3 text-start '}
                    />
                  </div>
                </div>
                <div className="m-0 mb-[30px] mt-[30px] flex w-full flex-col px-12 text-start">
                  {renderQuestions(data.questions)}
                </div>
              </>
            )}
            <div className="mb-16 flex w-full px-12">
              <button
                className={`medium primary h-[65px]
                            w-[250px] text-white
                            sm:h-[65px] sm:w-[250px]
                            xl:h-[65px] xl:w-[320px]`}
                style={{
                  borderRadius: '50px',
                  background:
                    'linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)',
                }}
                onClick={() =>
                  (window.location.href =
                    'https://docs.google.com/forms/d/e/1FAIpQLSdmlecMmXr3FqO1HajJFBmfpji8Blyjfs9U5jK3WT6BrSmDAA/viewform')
                }
              >
                Apply to This Role
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default IdJob
