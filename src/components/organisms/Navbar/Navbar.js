import Link from 'next/link'
import Title from '~/components/atoms/Title/Title'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import VirufyLogo from '~/assets/static/images/logo/virufy.svg'
import DonateModalImg from '~/assets/static/images/Modals/DonateHero.png'
import Paypal from '~/assets/static/images/Modals/Paypal.png'
import Gofoundme from '~/assets/static/images/Modals/Gofoundme.png'
import BarsMenu from '~/assets/static/icons/navbar/barsIconMenuWhite.svg'
import CloseMenu from '~/assets/static/icons/navbar/closeIconMenuWhite.svg'
import Select from '~/components/atoms/Select/Select'
import Button from '~/components/atoms/button/Button'
import React, { useState, useEffect } from 'react'
import { useI18n } from '~/i18n'

//Flags
import ENG from '~/assets/static/icons/navbar/flags/Eng.png'
import SPA from '~/assets/static/icons/navbar/flags/Spa.png'
import JPN from '~/assets/static/icons/navbar/flags/Jpn.png'
import POR from '~/assets/static/icons/navbar/flags/Por.png'
import LocaleSelector from '~/components/atoms/Select/LocaleSelector'

export default function Navbar() {
  const options = [
    { label: 'ENG', value: '1' },
    { label: 'ESP', value: '2' },
    { label: 'JPN', value: '3' },
    { label: 'POR', value: '4' },
  ]

  const optionsIcons = {
    en: ENG,
    es: SPA,
    // TODO: Ajustar
    pt: JPN,
    jp: POR,
  }
  const {
    navbar: { home, ourTechnology, coughCheckApp, aboutUs, faq, donate },
  } = useI18n()
  const [navbar, setNavbar] = useState(false)

  const [showModal, setShowModal] = useState(false)

  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    window.location.pathname === '/es/home' ? setActiveLink('home') :
    window.location.pathname === '/es/ai' ? setActiveLink('ourTechnology') :
    window.location.pathname === '/es/publications' ? setActiveLink('ourTechnology') :
    window.location.pathname === '/es/our-story' ? setActiveLink('aboutUs') :
    window.location.pathname === '/es/OurPeople1' ? setActiveLink('aboutUs') :
    window.location.pathname === '/es/OurPeople2' ? setActiveLink('aboutUs') :
    window.location.pathname === '/es/supporters' ? setActiveLink('aboutUs') :
    window.location.pathname === '/es/one-young-world' ? setActiveLink('aboutUs') :
    window.location.pathname === '/es/FAQ' ? setActiveLink('faq') :
    window.location.pathname === '/' ? setActiveLink('home') :
    window.location.pathname === '/home' ? setActiveLink('home') :
    window.location.pathname === '/ai' ? setActiveLink('ourTechnology') :
    window.location.pathname === '/publications' ? setActiveLink('ourTechnology') :
    window.location.pathname === '/our-story' ? setActiveLink('aboutUs') :
    window.location.pathname === '/OurPeople1' ? setActiveLink('aboutUs') :
    window.location.pathname === '/OurPeople2' ? setActiveLink('aboutUs') :
    window.location.pathname === '/supporters' ? setActiveLink('aboutUs') :
    window.location.pathname === '/one-young-world' ? setActiveLink('aboutUs') :
    window.location.pathname === '/FAQ' ? setActiveLink('faq') : setActiveLink('');
  })

    useEffect(()=> { // this closes mobile menu when a link is clicked
        setNavbar(false);   
    },[window.location.pathname])

  return (
    <div className="bg-[#000]">
        <nav className={`sticky z-[100] w-full shadow ${navbar? 'bg-black':'bg-transparent'}`}>
            <div>
                {showModal ? ( // donate modal 
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px]">
                        {/*content*/}
                        <div className="relative flex w-full flex-col rounded-2xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                        {/*header*/}
                        
                        {/* Background img */}
                        <div className="flex w-full rounded-t">
                            <ImageAtomLocal
                            imagesize="pr100"
                            border="none"
                            src={DonateModalImg}
                            alt="Logo Virufy"
                            ImageStyleProps=""
                            />
                            {/* Close button */}
                            <div className="absolute flex w-full flex-col items-end pt-3 pr-5">
                                <button
                                    className="flex justify-center rounded-full font-medium text-white text-xl shadow-xl outline-none transition-all duration-150 ease-linear"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                        {/*body*/}
                        <div className="relative flex flex-col items-center p-6 bg-gradient-to-b from-[#273F6A] to-[#4167AD] rounded-b-2xl">
                            <p className=" mt-2 mb-6 text-lg leading-relaxed">
                            <Title
                                as="span"
                                Text={'Donate Options'}
                                H={''}
                                TitleClassProps={'text-center color-black text-gray-200'}
                            />
                            </p>
                            <a
                            href="https://www.paypal.com/us/fundraiser/charity/4348461"
                            target="_blank"
                            >
                            {/* paypal button */}
                            <button
                                className="mr-1 mb-3 flex w-[270px] justify-center rounded-3xl bg-white px-6 py-[0.9rem] outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                <ImageAtomLocal
                                imagesize="px110x27"
                                border="none"
                                src={Paypal}
                                alt="Logo Virufy"
                                ImageStyleProps=""
                                />
                            </button>
                            </a>
                            <a
                            href="https://www.gofundme.com/f/virufy-covid19"
                            target="_blank"
                            >
                            {/* gofundme button */}
                            <button
                                className="mr-1 mb-1 flex w-[270px] justify-center rounded-3xl bg-white px-6 py-[0.8rem] outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                <ImageAtomLocal
                                imagesize="px103x30"
                                border="none"
                                src={Gofoundme}
                                alt="Logo Virufy"
                                ImageStyleProps=""
                                />
                            </button>
                            </a>
                        </div>
                        {/*footer*/}
                        </div>
                    </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
                ) : null}
            </div>

            <div className="lg:max-w-8lg justify-between px-3 lg:mx-4 lg:flex lg:items-center lg:px-2 xl:mx-9">
                <div>
                <div className="flex items-center justify-between py-3 lg:block lg:py-5">
                    <Link href="/home" className="flex lg:hidden">
                    <ImageAtomLocal
                        imagesize="px100x48"
                        border="none"
                        src={VirufyLogo}
                        alt="Logo Virufy"
                        ImageStyleProps=""
                    />
                    </Link>
                    <Link href="/home" className="hidden lg:flex">
                    <ImageAtomLocal
                        imagesize="px160"
                        border="none"
                        src={VirufyLogo}
                        alt="Logo Virufy"
                        ImageStyleProps=""
                    />
                    </Link>
                    <div className="lg:hidden">
                    {/* // hambuger and x button */}
                    <button 
                        className="rounded-lg p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                        <ImageAtomLocal
                            imagesize="px30"
                            border="none"
                            src={CloseMenu}
                            alt="bars menu"
                            ImageStyleProps=""
                        />
                        ) : (
                        <ImageAtomLocal
                            imagesize="px30"
                            border="none"
                            src={BarsMenu}
                            alt="bars menu"
                            ImageStyleProps=""
                        />
                        )}
                    </button>
                    </div>
                </div>
                </div>
                <div>
                    {/* dropdown for mobile */}
                    <div
                        className={`mt-8 flex-1 justify-self-center pb-3 lg:mt-0 lg:block lg:pb-0 ${
                        navbar ? 'absolute block bg-black text-center w-full left-0 top-6' 
                        : 'hidden'
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-5 lg:space-y-0 xl:space-x-9">
                            <li className="text-white">
                                <div>
                                    <Link
                                        className={`${navbar?'font-bold':''} ${activeLink === 'home'
                                            ? 'py-2 solid border-b-2'
                                            : 'py-2 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'}`}
                                        href="/home"
                                    >
                                        {home}
                                    </Link>
                                </div>
                            </li>
                            {/* technology link */}
                            <li className="text-white">
                                <div>

                                    <Link
                                        className={`${navbar?'font-bold ':''} ${activeLink === 'ourTechnology'
                                            ? 'peer py-2 text-white solid border-b-2'
                                            : 'peer py-2 text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'}`}
                                        href="/ai">
                                        {ourTechnology?.section}
                                    </Link>

                                    <div className={`fixed w-[200px] flex-col drop-shadow-lg text-center ${navbar ? 'flex relative bg-black mt-2 z-10 left-1/2 transform -translate-x-1/2' : 'hidden ml-[-60px]'} hover:flex peer-hover:flex`}>
                                    <Link className="px-5 py-2 pt-5 text-[white] hover:font-bold" href="/ai" >
                                            {ourTechnology?.howItWorks}
                                        </Link>
                                        <Link className="px-5 py-2 text-[white] hover:font-bold" href="/publications">
                                            {ourTechnology?.OurResearch}
                                        </Link>
                                    </div>
                                    
                                </div>
                            </li>

                            {/* coughcheck app link */}
                            <li className="text-white">
                                <div>
                                    <Link className={`${navbar?'font-bold':''} peer py-2 text-white hover:before:scale-x-100 hover:before:origin-left
                                    relative before:w-full before:h-0.5 before:origin-right before:transition-transform
                                    before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0`} href="">
                                        {coughCheckApp?.section}
                                    </Link>

                                    <div className={`fixed w-[200px] flex-col drop-shadow-lg text-center ${navbar ? 'flex relative bg-black mt-2 z-10 left-1/2 transform -translate-x-1/2' : 'hidden ml-[-35px]'} hover:flex peer-hover:flex`}>
                                        <Link className="px-5 py-2 pt-5 text-[white] hover:font-bold" href="/" >
                                            {coughCheckApp?.covid19}
                                        </Link>
                                        <Link className="px-5 py-2 text-[white] hover:font-bold" href="/">
                                            {coughCheckApp?.flu}
                                        </Link>  
                                        <Link className="px-5 py-2 text-[white] hover:font-bold" href="/">
                                            {coughCheckApp?.copd}
                                        </Link>  
                                        <Link className="px-5 py-2 text-[white] hover:font-bold" href="/">
                                            {coughCheckApp?.rsv}
                                        </Link>
                                    </div>
                                </div>
                            </li>

                            {/* about us link */}
                            <li className="text-white">
                                <div>
                                <Link
                                    className={`${navbar?'font-bold':''} ${activeLink === 'aboutUs'
                                        ? 'peer py-2 text-white solid border-b-2'
                                        : 'peer py-2 text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'}
                                        `}
                                    href="/our-story"
                                >
                                    {aboutUs?.section}
                                </Link>

                                <div className={`fixed w-[200px] flex-col drop-shadow-lg text-center ${navbar ? 'flex relative bg-black mt-2 z-10 left-1/2 transform -translate-x-1/2' : 'hidden ml-[-60px]'} hover:flex peer-hover:flex`}>
                                    <Link
                                        className="pt-6 pb-3 text-white hover:font-bold"
                                        href="/our-story"
                                    >
                                    {aboutUs?.ourStory}
                                    </Link>
                                    <Link
                                        className="py-3 text-white hover:font-bold"
                                        href="/OurPeople1"
                                    >
                                    {aboutUs?.ourPeople}
                                    </Link>
                                    <Link
                                        className="py-3 text-white hover:font-bold"
                                        href="/supporters"
                                    >
                                    {aboutUs?.ourSupporters}
                                    </Link>
                                    <Link
                                        className="py-3 text-white hover:font-bold"
                                        href="/one-young-world"
                                    >
                                    {aboutUs?.oneYoungWorld}
                                    </Link>
                                </div>
                                </div>
                            </li>
                            <li className="text-white">
                                <div>
                                <Link
                                    className={`${navbar?'font-bold':''} ${activeLink === 'faq'
                                        ? 'peer py-2 text-white solid border-b-2'
                                        : 'peer py-2 text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'}`}
                                    href="/FAQ"
                                >
                                    {faq}
                                </Link>
                                </div>
                            </li>
                            {/* Remove language dropdown until website can support other languages (ie. Japanese, Spanish) */}
                            {/* <li className="text-[#393939]">
                                <Select Text="" Options={options} optionsIcons={optionsIcons} />
                                <LocaleSelector optionsIcons={optionsIcons}></LocaleSelector>
                            </li> */}
                            <li className="text-[#393939]">
                                <Button
                                    onClick={() => setShowModal(true)}
                                    size="medium"
                                    type="primary"
                                    path="#"
                                    label={donate}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
