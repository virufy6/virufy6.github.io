import React from "react";
import Title from "~/components/atoms/Title/Title";
import Link from "next/link";
import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Button from "~/components/atoms/button/Button"
import Donate from "~/assets/static/images/section-donate/donate.jpg"
import DonateModalImg from "~/assets/static/images/Modals/DonateHero.png";
import Paypal from "~/assets/static/images/Modals/Paypal.png";
import Gofoundme from "~/assets/static/images/Modals/Gofoundme.png";

export default function SectionDonate({
    ContainerTitleProps,
    ContainerTextProps,
    border,
    alt,
    TextProps
}) {

const [showModal, setShowModal] = React.useState(false);

    return (
        <div className="text-center md:mt-[70px] md:mb-[70px] mb-[40px] flex flex-col md:ml-[5vw] md:mr-[5vw]">
            <div>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative mx-auto md:w-[500px] h-[500px] w-[300px]">
                                {/*content*/}
                                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex w-full border-b border-solid border-slate-200 rounded-t">

                                        <ImageAtomLocal imagesize="pr100" border="none" src={DonateModalImg} alt="Logo Virufy" ImageStyleProps="" />
                                        <div className="absolute p-6 flex flex-col items-end w-full">
                                            <button
                                                className="bg-white rounded-full text-black px-1 py-2 hover:bg-gray-300 outline-none ease-linear transition-all duration-150 w-[35px] h-[35px] flex justify-center shadow-xl font-bold"
                                                type="button"
                                                /* onClick={() => setShowModal(false)} */
                                            >X                                            </button>
                                        </div>

                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex flex-col items-center">
                                        <p className=" mt-2 mb-6 text-lg leading-relaxed">
                                            <Title
                                                Text={"Donate Options"}
                                                H={"h5tepsHome"}
                                                TitleClassProps={"text-center color-black"}
                                            />
                                        </p>
                                         <a href="https://www.paypal.com/us/fundraiser/charity/4348461" target="_blank">
                                            <button
                                                className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300 outline-none mr-1 ease-linear transition-all duration-150 w-[270px] md:w-[450px] flex justify-center mb-3"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <ImageAtomLocal imagesize="px110x27" border="none" src={Paypal} alt="Logo Virufy" ImageStyleProps="" />
                                            </button>
                                        </a>
                                        <a href="https://www.gofundme.com/f/virufy-covid19" target="_blank">
                                            <button
                                                className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300 outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-[270px] md:w-[450px] flex justify-center"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <ImageAtomLocal imagesize="px103x30" border="none" src={Gofoundme} alt="Logo Virufy" ImageStyleProps="" />
                                            </button>
                                        </a>
                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center flex-1">
                <div className="w-full md:w-1/2 flex items-center justify-end md:pl-[40px]">
                    <ImageAtomLocal
                        imagesize="pr100"
                        border={border}
                        src={Donate}
                        alt={alt}
                        ImageStyleProps=""
                    />
                </div>
                <div className="flex mt-14 md:mt-0 md:hidden w-full md:w-2/5 px-[20px] md:px-[0px] items-center flex-1">
                    <div className="w-full items-center md:items-start md:text-left flex flex-col gap-5">
                        <TitleText
                            TitleSize="h2"
                            TitleLabel={TextProps?.title}
                            TextSize="normal"
                            TextLabel={TextProps?.textLabel}
                            ContainerTitleProps={ContainerTitleProps}
                            ContainerTextProps={ContainerTextProps}
                            TextClassProps=""
                            TitleClassProps=""
                        />
                        <div className="flex md:hidden flex-col justify-center">
                            <Button size="medium" type="primary" path="#" label={TextProps?.button} />
                        </div>
                    </div>
                </div>
                <div className="hidden mt-14 md:mt-0 md:flex flex-row w-full md:w-2/5 px-[20px] md:px-[0px] items-center flex-1">
                    <div className="w-full items-center md:items-start md:text-left flex flex-col gap-5">
                        <TitleText
                            TitleSize="h2"
                            TitleLabel={TextProps?.title}
                            TextSize="subtitulo"
                            TextLabel={TextProps?.textLabel}
                            ContainerTitleProps={ContainerTitleProps}
                            ContainerTextProps={ContainerTextProps}
                            TextClassProps=""
                            TitleClassProps=""
                        />
                        <div className="hidden md:flex flex-col justify-center">
                            <Link onClick={() => setShowModal(true)} href="#">
                                <Button size="medium" type="primary" path="#" label={TextProps?.button} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
