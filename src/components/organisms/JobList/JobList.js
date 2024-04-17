import React, { useState, useEffect } from 'react'
import Text from '~/components/atoms/Text/Text'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'
import Link from 'next/link'
import { useI18n } from "~/i18n";

export default function JobList() {

  const {
    JobListing: { JobList, modal },
  } = useI18n();
  
  const [showModalConfirmation, setShowModalConfirmation] = React.useState(true)

  return (
    <>
      <div>
        {showModalConfirmation ? (
          <>
            <div className="fixed inset-0 top-60 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1200px]">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200">
                    <Title
                      H="h5Modals2"
                      Text={modal?.text}
                      TitleClassProps={'mt-[30px] mx-auto mb-[30px]'}
                    />
                  </div>
                  {/*body*/}

                  <div className="flex h-[70px] w-full items-center justify-center gap-10">
                    <Link
                      className="flex w-[50px] justify-center rounded border border-blue-500 bg-blue-500 px-6 py-2 text-white outline-none transition-all duration-150 ease-linear hover:bg-blue-600"
                      type="button"
                      href="#"
                      onClick={() => setShowModalConfirmation(false)}
                    >
                      {modal?.yes}
                    </Link>
                    <Link
                      className="flex  w-[50px] justify-center rounded border border-blue-500 bg-gray-200 px-6 py-2 outline-none transition-all duration-150 ease-linear hover:bg-gray-300"
                      type="button"
                      href="/home"
                    >
                      {modal?.no}
                    </Link>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>

      {/* _____________________ */}

      <div className="my-12 mx-8 w-11/12">
        {!JobList ? <p>No data</p> : null}

        {JobList.map(({ category, positions, id }) => (
          <div key={id} className="w-[100%] ">
            <Title
              TitleClassProps={'text-[#3074DC] my-[40px]'}
              Text={category}
              H={'h4'}
            />

            {positions.map(({ title, id }) => (
              <>
                <div key={id} className="mb-[37px] flex w-[100%]">
                  <div className="flex flex-1 items-center justify-start">
                    <Text TextClassProps={''} Text={title} Style={'normal'} />
                  </div>

                  <div className="flex flex-1 justify-end">
                    <Button
                      size="medium"
                      type="primary"
                      path={`/JobListing/${id}`}
                      label="APPLY"
                    />
                  </div>
                </div>
                <hr className="mx-auto my-4 flex h-px w-[100%] rounded border-0 bg-[#BBBBBB]" />
              </>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
