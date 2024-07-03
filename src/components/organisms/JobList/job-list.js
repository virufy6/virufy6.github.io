import React from 'react'
import Text from '~/components/atoms/Text/Text'
import Title from '~/components/atoms/Title/Title'
import ButtonWhite from '~/components/atoms/button/ButtonWhite'
import Link from 'next/link'
import { useI18n } from '~/i18n'
import logo from '~/assets/static/images/logo/virufy.svg'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'

export default function JobList() {
  const {
    JobListing: { JobList, modal },
  } = useI18n()

  const [showModalConfirmation, setShowModalConfirmation] = React.useState(true)

  return (
    <>
      <div>
        {showModalConfirmation ? (
          <>
            <div className="fixed inset-0 top-60 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[420px] w-[300px] md:h-[525px] md:w-[360px]">
                {/*content*/}

                <div className="relative flex w-full flex-col rounded-xl border-0 bg-gradient-to-b from-[black] to-[#4167AD] font-medium text-white shadow-lg outline-none focus:outline-none">
                  {/*header*/}

                  <div className="flex justify-center px-4 pt-4 md:justify-between">
                    <ImageAtomLocal
                      imagesize="px110x27"
                      border="none"
                      src={logo}
                      alt="Logo Virufy"
                      ImageStyleProps="w-16 md:w-12 md:pl-1"
                    />
                    <Link
                      className="hidden md:block"
                      type="button"
                      href="/one-young-world"
                      onClick={() => setShowModalConfirmation(false)}
                    >
                      X
                    </Link>
                  </div>

                  <div className="flex w-full rounded-t text-center md:text-left">
                    <p className="my-10 mx-auto h-[100px] px-6 text-xl">
                      {modal?.text}
                    </p>
                  </div>
                  {/*body*/}

                  <div className="mb-14 h-[100px] flex-col items-center justify-center">
                    <Link
                      className="mx-auto flex w-[260px] justify-center rounded-3xl bg-gradient-to-b from-green-500 to-blue-500 px-6 py-2 font-bold text-white outline-none transition-all duration-150 ease-linear md:w-[320px] md:font-medium"
                      type="button"
                      href="#"
                      onClick={() => setShowModalConfirmation(false)}
                    >
                      {modal?.yes}
                    </Link>
                    <Link
                      className="mx-auto mt-6 flex w-[260px] justify-center rounded-3xl border border-red-500 bg-gray-200 px-6 py-2 font-bold text-red-500 outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[320px] md:font-medium"
                      type="button"
                      href="/one-young-world"
                    >
                      {modal?.no}
                    </Link>
                  </div>
                  {/*buttons*/}
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>

      {/* _________job listings____________ */}

      <div className="mx-auto mb-12 w-11/12">
        {!JobList ? <p>No data</p> : null}

        {JobList.map(({ category, positions, id }) => (
          <div key={id} className="w-[100%] text-left">
            <h2 className="ml-8 mt-10 mb-6 text-sm font-semibold leading-[0rem] text-white md:ml-14 md:text-lg lg:ml-20">
              {category}
            </h2>

            {positions.map(({ title, id }) => (
              <>
                <div
                  key={id}
                  className="mx-auto mb-[12px] flex w-[90%] rounded-md bg-[#16223A]"
                >
                  <div className="flex h-20 flex-1 items-center justify-start md:h-14">
                    <Text
                      TextClassProps={
                        'text-white text-xs sm:text-sm md:text-base px-5'
                      }
                      Text={title}
                      Style={'small'}
                    />
                  </div>

                  <div className="flex flex-1 justify-end">
                    <ButtonWhite path={`/job-listing/${id}`} label="Apply" />
                  </div>
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
