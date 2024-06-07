import React, { useEffect, useState } from 'react'
import Title from '~/components/atoms/Title/Title'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import VirufyLogo from '~/assets/static/images/logo/virufy.svg'
import Link from 'next/link'
import LinkAtom from '~/components/atoms/LinkAtom/LinkAtom'
import InstagramIcon from '~/assets/static/icons/footer/Instagram1.svg'
import LinkedinIcon from '~/assets/static/icons/footer/Linkedin1.svg'
import Instagram from '~/assets/static/icons/footer/Instagram.svg'
import Linkedin from '~/assets/static/icons/footer/Linkedin.svg'
import Text from '~/components/atoms/Text/Text'
import { useI18n } from '~/i18n'

export default function Footer() {
  const links1 = [
    { label: 'Home', route: '/home' },
    { label: 'Technology', route: '/ai' },
    { label: 'CoughCheck App', route: '/GetInvolved' },
    { label: 'About', route: '/our-story' },
    { label: 'FAQ', route: '/FAQ' },
  ]

  const links2 = [{ label: 'Cookie Policy', route: '#' }]

  const links3 = [{ label: 'Cookie Settings', route: '#' }]

  const links4 = [{ label: 'Privacy Policy', route: '#' }]

  const links5 = [{ label: 'Do Not Sell My Personal Information', route: '#' }]

  const [showModalCookiesSetting, setShowModalCookiesSetting] = useState(false)

  const [showModalCookiesPolicy, setShowModalCookiesPolicy] = useState(false)

  const [showModalMyInformation, setShowModalMyInformation] = useState(false)

  const [showModalPrivacyPolicy, setShowModalPrivacyPolicy] = useState(false)

  const privacyDetails = [
    {
      title: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut fermentum nibh. Ut at purus nec erat tincidunt fermentum et quis enim. Curabitur sagittis quam augue, at dignissim elit suscipit nec. Suspendisse tincidunt ullamcorper quam, nec finibus ligula iaculis in. Integer ornare nibh quis ipsum congue sodales. Aliquam faucibus ex velit, a pretium sapien finibus quis. Phasellus eu metus nibh. Donec porta urna augue, sed fermentum ex finibus et. Aliquam volutpat lorem metus, non aliquet eros sodales sed. Aliquam nec lorem ornare, blandit tellus eget, vehicula felis. Sed pellentesque, justo ut posuere scelerisque, sem eros luctus ipsum, sed malesuada odio leo nec risus. Morbi ac mauris varius, tempus quam quis, pharetra nunc. Curabitur lacinia finibus sapien, id mollis sapien dapibus nec. Vivamus volutpat et lorem in dignissim.',
    },
    {
      title: 'Lorem Ipsum',
      content:
        'Aenean lacinia interdum malesuada. Nam pharetra sem a erat scelerisque, nec iaculis erat venenatis. Donec enim dui, euismod vel magna at, semper vehicula tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus id ultricies leo. Cras aliquet egestas lectus quis porta. Morbi vel augue sed tortor malesuada venenatis at in ipsum. Sed dolor sapien, lobortis ac scelerisque in, semper sit amet ante. Nullam ornare lacus et ante semper, sit amet aliquet libero molestie. Curabitur ornare, ex sit amet aliquet cursus, dolor est pellentesque sapien, nec ornare risus quam sed velit. Pellentesque ante magna, ultricies quis massa vitae, convallis vestibulum urna. Mauris massa metus, volutpat at consequat posuere, mattis eu mauris.',
    },
  ]
  const {
    footer: { sectionPersonalInformation },
  } = useI18n()

  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    {
      links1.map((link, index) => {
        link.route === window.location.pathname
          ? setActiveLink(link.label)
          : ''
      })
    }
  })

  return (
    <>
      <div>
        {showModalCookiesSetting ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1000px]">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200">
                    <Title
                      H="h5Modals"
                      Text=""
                      TitleClassProps={'mt-[30px] mx-auto mb-[30px]'}
                    />
                    <div className="absolute flex w-full flex-col items-end p-6">
                      <button
                        className="flex h-[35px] w-[35px] justify-center rounded-full bg-gray-300 px-1 py-2 font-bold text-black shadow-xl outline-none transition-all duration-150 ease-linear hover:bg-gray-400"
                        type="button"
                        onClick={() => setShowModalCookiesSetting(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {/*body*/}
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>

      {/* _____________________ */}

      <div>
        {showModalPrivacyPolicy ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1000px]">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200">
                    <Title
                      H="h5Modals"
                      Text="Privacy Policy"
                      TitleClassProps={'mt-[30px] mx-auto mb-[30px]'}
                    />
                    <div className="absolute flex w-full flex-col items-end p-6">
                      <button
                        className="flex h-[35px] w-[35px] justify-center rounded-full bg-gray-300 px-1 py-2 font-bold text-black shadow-xl outline-none transition-all duration-150 ease-linear hover:bg-gray-400"
                        type="button"
                        onClick={() => setShowModalPrivacyPolicy(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {/*body*/}

                  <div className="flex w-full items-center justify-center">
                    <div className="w-full px-0 ">
                      <div>
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Argentina
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <a href="https://drive.google.com/file/d/1Fef7l77QP3EZboej6mw_q7fBNrayvs03/view">
                            <p className="mt-3 px-4  py-3">
                              Política de Privacidad
                            </p>
                          </a>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Bolivia
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <a href="https://drive.google.com/file/d/1ZSrRivk4YJyyDioqYeAsz0fgNAP3UwVn/view">
                            <p className="mt-3 px-4  py-3">
                              Política de Privacidad
                            </p>
                          </a>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Brazil
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <a href="https://drive.google.com/file/d/1Zl9QO-Dliik84xjuXCdFGcDOk5GytXr1/view">
                            <p className="mt-3 px-4  py-3">
                              Política de Privacidade
                            </p>
                          </a>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Colombia
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <a href="https://drive.google.com/file/d/1eQOx81C5e5CoESYsEnrE9sWhCkTMDPEq/view">
                            <p className="mt-3 px-4  py-3">
                              Política de Privacidad
                            </p>
                          </a>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Greece
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <a href="https://drive.google.com/file/d/1n8YZTb3bAqLLL5ygVE8-MstdzECcKJ_b/view">
                            <p className="mt-3 px-4  py-3">
                              Πολιτική απορρήτου
                            </p>
                          </a>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Mexico
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <a href="https://drive.google.com/file/d/1Qr3cFttfhjUoKxLcQrVEhsuO-OJ6VE0_/view">
                            <p className="mt-3 px-4  py-3">
                              Aviso De Privacidad
                            </p>
                          </a>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Peru
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <a href="https://drive.google.com/file/d/1UgN2Bu2XIvv2YirLRYloSPlbYln_uzf9/view">
                            <p className="mt-3 px-4  py-3">
                              Política de Privacidad
                            </p>
                          </a>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            United States
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <a href="https://drive.google.com/file/d/1EB_9q8nSxvJXWMtCfxCWmisM-n03TJYz/view">
                            <p className="mt-3 px-4  py-3">Privacy Policy</p>
                          </a>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Europe
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <a href="https://drive.google.com/file/d/1EB_9q8nSxvJXWMtCfxCWmisM-n03TJYz/view">
                            <p className="mt-3 px-4  py-3">Privacy Policy</p>
                          </a>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Japan
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <a href="https://drive.google.com/file/d/11RTMmnHW4SqHNf7htr3xuSi-o2v2vWlp/view">
                            <p className="mt-3 px-4  py-3">
                              プライバシーポリシー
                            </p>
                          </a>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Other Countries
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <a href="https://drive.google.com/file/d/1fUIe6FBss6WrwsrssVr6OM_2uFFVhESD/view">
                            <p className="mt-3 px-4  py-3">Privacy Policy</p>
                          </a>
                        </details>

                        <hr className="border-1 border-gray-400" />
                      </div>
                    </div>
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

      <div>
        {showModalMyInformation ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1000px]">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200">
                    <Title
                      H="h5Modals"
                      Text="Do not sell my personal information "
                      TitleClassProps={
                        'mt-[80px] text-center md:mt-[30px] md:mx-auto mb-[30px]'
                      }
                    />
                    <div className="absolute flex w-full flex-col items-end p-6">
                      <button
                        className="flex h-[35px] w-[35px] justify-center rounded-full bg-gray-300 px-1 py-2 font-bold text-black shadow-xl outline-none transition-all duration-150 ease-linear hover:bg-gray-400"
                        type="button"
                        onClick={() => setShowModalMyInformation(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {/*body*/}

                  {/* <div className="flex w-full items-center justify-center">
                    <div className="w-full px-0 ">
                      <div>
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            California Consumer Privacy Act Rights
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <p className="mt-3 px-4  py-3">
                            California consumers have a right to knowledge,
                            access, and deletion of their personal information
                            under the California Consumer Privacy Act.
                            California consumers also have a right to opt out of
                            the sale of their personal information by a business
                            and a right not to be discriminated against for
                            exercising one of their California privacy rights.
                            Virufy does not sell the personal information of
                            California consumers and does not discriminate in
                            response to privacy rights requests.
                          </p>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Virufy provides notice of our privacy practices in
                            our Privacy Policy
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <p className="mt-3 px-4  py-3">
                            The Privacy Policy includes what personal
                            information and data is collected, the source of the
                            personal information and data collected, how
                            personal information and data is processed and
                            stored, and the purposes of use of personal
                            information. Virufy also discloses what personal
                            information and if so, the categories of third
                            parties to whom data and personal information is
                            disclosed. More information about how Virufy handles
                            personal information in connection with specific
                            Virufy services is presented in service-specific
                            notices at or before your first use of the Virufy
                            web app and available at any time. To view a copy of
                            the latest versions of the service-specific privacy
                            notices and the California-specific disclosures,
                            please see our Privacy Policy.
                          </p>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            How to Exercise the Above Rights
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <p className="mt-3 px-4  py-3">
                            California consumers can exercise their rights to
                            access or delete their information directly or
                            through an authorized agent by contacting Virufy at
                            study@virufy.org. Virufy will ask you for
                            information which we consider necessary to verify
                            your identity for security and to prevent fraud.
                            This information may include name, contact
                            information, and information related to your
                            relationship with Virufy, but the specific
                            information requested may differ depending on the
                            circumstances of your request for your security and
                            to protect privacy rights. If we delete your
                            personal information, we will both render certain
                            personal information about you permanently
                            unrecoverable and also de-identify certain personal
                            information.
                          </p>
                        </details>

                        <hr className="border-1 border-gray-400" />

                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Direct Marketing and Do Not Track
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <p className="mt-3 px-4  py-3">
                            Virufy does not track its customers over time and
                            across third party websites to provide targeted
                            advertising and therefore does not respond to web
                            browsers “do not track” signals. If you arrive at
                            our website by way of a link from a third party site
                            that does respond to “do not track” requests, the
                            recognition of any “do not track” request you have
                            initiated will end as soon as you reach our website.
                            Third parties cannot collect any other personally
                            identifiable information from Virufy’s websites
                            unless you provide it to them directly. This is also
                            described in our Privacy Policy.
                          </p>
                        </details>

                        <hr className="border-1 border-gray-400" />

                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            Notice for Minors
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <p className="mt-3 px-4  py-3">
                            We do not knowingly collect online information from
                            children under the age of 18. If we are notified
                            that we have collected personal information, as
                            defined by the Children’s Online Privacy Protection
                            Act (“COPPA”), of a child under the age of 13, we
                            will delete the information as expeditiously as
                            possible. We never sell the personal information of
                            minors under 18 years of age and would not do so in
                            the future without affirmative authorization of the
                            consumer if between 13 to 16 years of age, or the
                            parent or guardian of a consumer less than 13 years
                            of age.
                          </p>
                        </details>

                        <hr className="border-1 border-gray-400" />
                      </div>
                    </div>
                  </div> */}
                  <div className="flex w-full items-center justify-center">
                    <div className="w-full px-0">
                      {sectionPersonalInformation.map((detail, index) => (
                        <div key={index}>
                          <details className="mb-3 w-full cursor-pointer bg-white">
                            <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                              {detail.title}
                            </summary>
                            <hr className="border-1 mt-3 border-gray-400" />
                            <p className="mt-3 px-4 py-3">{detail.content}</p>
                          </details>
                          <hr className="border-1 mt-3 border-gray-400" />
                          {index < privacyDetails.length - 1 && (
                            <hr className="border-1 border-gray-400" />
                          )}
                        </div>
                      ))}
                    </div>
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

      <div>
        {showModalCookiesPolicy ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1000px]">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200">
                    <Title
                      H="h5Modals"
                      Text="Cookie Policy"
                      TitleClassProps={'mt-[30px] mx-auto mb-[30px]'}
                    />
                    <div className="absolute flex w-full flex-col items-end p-6">
                      <button
                        className="flex h-[35px] w-[35px] justify-center rounded-full bg-gray-300 px-1 py-2 font-bold text-black shadow-xl outline-none transition-all duration-150 ease-linear hover:bg-gray-400"
                        type="button"
                        onClick={() => setShowModalCookiesPolicy(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {/*body*/}

                  <div className="flex w-full items-center justify-center">
                    <div className="w-full px-0 ">
                      <div>
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            1. General
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <p className="mt-3 px-4  py-3">
                            The Covid Detection Foundation (“Virufy”, “we”, “us”
                            or “our”), a California nonprofit corporation
                            located at 4546, El Camino Real, B10 #614, Los
                            Altos, código postal 94022, United States of America
                            respects your privacy and is committed to processing
                            your personal information in accordance with the
                            law. This Cookie Policy (“Policy”) explains how
                            Virufy uses cookies and similar technologies to
                            process your personal information that you provide
                            to us when you visit our website (www.virufy.org)
                            (“Website”) or participate in our research survey
                            for the compilation of a dataset needed for the
                            development of artificial intelligence (AI)
                            algorithms for device-based COVID-19 detection. For
                            users located in Europe:
                            <div className="mt-4">
                              <li>
                                {' '}
                                This cookie policy will be treated under Recital
                                30 of the European General Data Protection
                                Regulation 2016/679 (the “GDPR”) For users
                                located in Spain:
                              </li>
                              <li>
                                This cookie policy will be treated under Recital
                                30 of the European General Data Protection
                                Regulation 2016/679 (the “GDPR”) and under
                                Article 22 of Law 34/2002, of July 11, on
                                information society services and electronic
                                commerce (LSSICE). For users located in
                                Argentina:
                              </li>
                              <li>
                                This cookie policy will be treated under
                                Argentinian Law 25.326 on Protection of Personal
                                Data. For users located in Brazil:
                              </li>
                              <li>
                                This cookie policy will be treated under the
                                General Personal Data Protection Law, number
                                13.709 / 2018 of Brazil (the “LGPD”). For users
                                located in Colombia:
                              </li>
                              <li>
                                This cookie policy will be treated under
                                Colombian law 1581 of 2012. For users located in
                                the United Mexican States:
                              </li>
                              <li>
                                This cookie policy will be considered part of
                                the Virufy Privacy Notice and will be treated
                                under the Federal Law on Protection of Personal
                                Data Held by Private Parties. Whenever reference
                                is made to “Privacy Policy” in the present, the
                                term “Privacy Notice” is understood
                                interchangeably. For users located in Bolivia:
                              </li>
                              <li>
                                This cookie policy will be treated under
                                Bolivian Law For users located in Peru:
                              </li>
                              <li>
                                This cookie policy will be treated under
                                Peruvian Law. Virufy is the “data controller”
                                of, and responsible for, your personal
                                information collected in accordance with this
                                Cookie Policy. For further information about how
                                we use, store, disclose and process personal
                                data that we obtain through or in connection
                                with the use of our Website, please visit our
                                Privacy Policy.
                              </li>
                              <li>
                                When you first access our Website, you will
                                receive a message advising you that cookies and
                                similar technologies are in use. By clicking
                                “Use necessary cookies only” or “Allow all
                                cookies”, you signify that you understand and
                                agree to the use of these technologies, as
                                described in this Cookie Policy
                              </li>
                              <li>
                                If you have any inquiries or complaints
                                regarding our Cookie Policy, please contact us
                                by email at study@virufy.org Our team will reply
                                you within 30 business days upon receipt of your
                                request.
                              </li>
                            </div>
                          </p>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            2. What are Cookies?
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <p className="mt-3 px-4  py-3">
                            Cookies are text files containing small pieces of
                            data that are stored on your computer or mobile
                            device whenever you access a website. They are used
                            to make websites operate or function more
                            efficiently, as well as to provide information to
                            the owners of the website. Cookies enhance user
                            experience by allowing websites to read and write
                            them, enabling them to recognize visitors and
                            remember important information that makes the
                            visitor’s use of the website more convenient.
                            <div className="mt-4">
                              Cookies set by a website owner (in this case,
                              Virufy) are called “first party cookies”. Cookies
                              set by parties other than the website owner are
                              called “third party cookies”. Third party cookies
                              enable third party features or functionality to be
                              provided on or through the Website (e.g.
                              analytics).
                            </div>
                          </p>
                        </details>

                        <hr className="border-1 border-gray-400" />
                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            3. How do we use Cookies
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <p className="mt-3 px-4  py-3">
                            Cookies are messages that web servers pass to web
                            browsers when you visit websites. Cookies are most
                            commonly used to track website activity, to track
                            online shopping, remembering your preferences, and
                            improving your user experience through personalized
                            web pages.
                            <div className="mt-4">
                              We may use the following types of Cookies* to make
                              the website user-friendly:
                            </div>
                            <div className="mt-4">
                              <li>Essential Cookies</li>
                              The Website may use technical cookies to carry out
                              activities that are strictly necessary for the
                              operation or delivery of services. They include,
                              for example, cookies that allow you to access
                              secure areas of the website. We use this cookie to
                              obtain the required consent to process data.
                            </div>
                            <div className="mt-4">
                              <li>Preference Cookies</li>
                              These cookies enable a website to remember
                              information that changes the way the website
                              behaves or looks, like preferred language or the
                              region that you are in.
                            </div>
                            <div className="mt-4">
                              <li>Performance Cookies</li>
                              Also known as analytics cookies, these cookies may
                              be used to collect information about your use of
                              the Website and make the Website more
                              user-friendly. Usage of analytic cookies includes
                              but is not limited to distinguishing users and
                              understanding overall patterns of usage of the
                              Website. We use this information in aggregate form
                              to improve the way our Website works.{' '}
                            </div>
                            <div className="mt-4">
                              <li>Marketing Cookies</li>
                              These cookies are used to track visitors across
                              websites. The intention is to display ads that are
                              relevant and engaging for the individual user and
                              thereby more valuable for publishers and third
                              party advertisers.
                              <hr className="border-0" />
                              These cookies can be deleted or blocked by
                              adjusting your browser settings (see Section 4,
                              How can you control Cookies, below).
                              Alternatively, please follow the links below to
                              opt-out: Google Analytics:
                              https://tools.google.com/dlpage/gaoptout
                            </div>
                          </p>
                        </details>

                        <hr className="border-1 border-gray-400" />

                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            4. How can you control Cookies?
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <p className="mt-3 px-4  py-3">
                            You have the right to decide whether to accept or
                            reject cookies. You do not have to accept cookies
                            and consent can be withdrawn at any time. Please
                            note that essential cookies cannot be rejected as
                            they are strictly necessary to provide you with
                            services of our Website.
                            <div className="mt-4">
                              By using our Cookie Consent Banner, you can select
                              the categories of cookies which you choose to
                              accept or reject. The Cookie Consent Banner can be
                              found in the notification banner and on our
                              Website. You can change or revoke consent for your
                              cookie policies directly from the website by
                              clicking “Cookie settings” at the bottom of the
                              page.
                            </div>
                            <div className="mt-4">
                              If you choose not to click on “Got it!”, or do not
                              close the message, you may still use our Website.
                              You may also refuse to accept cookies from this
                              Website at any time by activating the setting on
                              your browser which allows you to refuse cookies.
                            </div>
                            <div className="mt-4">
                              Please follow the links below to helpful
                              information for the most popular browsers:
                            </div>
                            <div className="mt-4">
                              Apple Safari
                              <hr className="border-0" />
                              Google Chrome
                              <hr className="border-0" />
                              Microsoft Edge
                              <hr className="border-0" />
                              Microsoft Internet Explorer
                              <hr className="border-0" />
                              Mozilla Firefox
                              <hr className="border-0" />
                              Opera
                            </div>
                          </p>
                        </details>

                        <hr className="border-1 border-gray-400" />

                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            5. Amendments to this Cookie Policy
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <p className="mt-3 px-4  py-3">
                            We may update this Cookie Policy from time to time
                            in order to reflect, for example, changes to the
                            cookies we use or for other operational, legal or
                            regulatory reasons. Since we do not collect personal
                            data such as your IP address, email or any other
                            form of contact, thus having no means to reach you
                            for your safety, please therefore re-visit this
                            Cookie Policy regularly to stay informed about our
                            use of cookies and related technologies.
                            <div className="mt-4">
                              The date at the top of this Cookie Policy
                              indicates when it was last updated.
                            </div>
                          </p>
                        </details>

                        <hr className="border-1 border-gray-400" />

                        <details className="mb-3  w-full cursor-pointer bg-white">
                          <summary className="text-dark mt-3 flex justify-between bg-white px-4 py-3 font-bold after:content-['+']">
                            6. How can you contact us with questions?
                          </summary>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <p className="mt-3 px-4  py-3">
                            If you have any concerns relating to our use of
                            cookies or other technologies, please contact us at
                            <hr className="border-0" />
                            study@virufy.org
                          </p>
                        </details>

                        <hr className="border-1 border-gray-400" />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>

      <footer className="bg-black">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col p-4 py-10">
          <div className="absolute mx-12 mt-4 hidden w-56 justify-start lg:flex">
            <Link href="/" onClick={() => setActiveLink('Home')}>
              <ImageAtomLocal
                src={VirufyLogo}
                imagesize="px160"
                alt="Virufy Logo"
                border=""
                ImageStyleProps=""
              />
            </Link>
          </div>
          <ul className="mb-6 hidden flex-wrap text-white lg:flex">
            <li className="mt-8 flex w-full justify-center space-x-6 align-text-bottom xl:space-x-10">
              {links1.map((link, index) => {
                return (
                  // footer links 
                  <Link
                    key={index}
                    className={`${
                      activeLink === link.label
                        ? 'solid relative border-b-2 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                        : 'relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                    }`}
                    href={link.route}
                    onClick={() => setActiveLink(link.label)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </li>
          </ul>
          <div className="flex w-full">
            <hr className="mx-auto my-4 hidden h-px w-11/12 rounded border-0 bg-white lg:block" />
          </div>
          <li className="flex w-full flex-wrap items-center justify-center space-x-2 text-xs font-semibold text-white sm:text-base lg:my-6 lg:space-x-6 lg:no-underline">
            <div onClick={() => setShowModalCookiesPolicy(true)}>
              <LinkAtom Routes={links2} Style={`text-[15px]`} />
            </div>
            <div className="font-bold lg:hidden">|</div>
            <div onClick={() => setShowModalCookiesSetting(true)}>
              <LinkAtom Routes={links3} Style={`text-[15px]`} />
            </div>
            <div className="font-bold lg:hidden">|</div>
            <div onClick={() => setShowModalPrivacyPolicy(true)}>
              <LinkAtom Routes={links4} Style={`text-[15px]`} />
            </div>
            <div className="font-bold lg:hidden">|</div>
            <div onClick={() => setShowModalMyInformation(true)}>
              <LinkAtom Routes={links5} Style={`text-[15px]`} />
            </div>
          </li>
          <div className="mt-8 flex justify-center gap-10 lg:mt-4 lg:gap-7">
            <Link
              href="https://www.instagram.com/virufy/"
              className="lg:hidden"
            >
              <ImageAtomLocal
                src={InstagramIcon}
                imagesize="px30x30"
                alt="Virufy Logo"
                border=""
                ImageStyleProps=""
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/virufy/"
              className="lg:hidden"
            >
              <ImageAtomLocal
                src={LinkedinIcon}
                imagesize="px30x30"
                alt="Virufy Logo"
                border=""
                ImageStyleProps=""
              />
            </Link>
            <Link
              href="https://www.instagram.com/virufy/"
              className="hidden lg:flex"
            >
              <ImageAtomLocal
                src={Instagram}
                imagesize="px30"
                alt="Virufy Logo"
                border=""
                ImageStyleProps=""
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/virufy/"
              className="hidden lg:flex"
            >
              <ImageAtomLocal
                src={Linkedin}
                imagesize="px30"
                alt="Virufy Logo"
                border=""
                ImageStyleProps=""
              />
            </Link>
          </div>
          <div className="align-center mt-10 flex w-full flex-col gap-7 text-white lg:hidden">
            <div className="align-center m-auto max-w-4xl text-center text-[25px]">
              <Text Text="Nonprofit Status" Style="" TextClassProps="" />
            </div>
            <div className="align-center m-auto mx-12 mt-4 max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text="Virufy is a California nonprofit corporation recognized by the United States Internal Revenue Service (IRS) as a tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code."
                Style="normal"
              />
            </div>
            <div className="align-center m-auto mx-12 mt-4 max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text="©2024 Virufy | VIRUFY is a trademark of The Covid Detection Foundation, a California nonprofit corporation | All rights reserved"
                Style="normal"
              />
            </div>
          </div>
          <div className="align-center mt-10 hidden w-full flex-col gap-7 text-white lg:flex">
            <div className="align-center m-auto max-w-4xl text-center font-semibold">
              <Text Text="Nonprofit Status" Style="small" TextClassProps="" />
            </div>
            <div className="align-center m-auto max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text="Virufy is a California nonprofit corporation recognized by the United States Internal Revenue Service (IRS) as a tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code."
                Style="normalCardHome"
              />
            </div>
            <div className="align-center m-auto max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text="©2024 Virufy | VIRUFY is a trademark of The Covid Detection Foundation, a California nonprofit corporation | All rights reserved"
                Style="normalCardHome"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
