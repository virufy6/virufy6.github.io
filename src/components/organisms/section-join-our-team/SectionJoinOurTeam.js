import React from "react";
import Title from "~/components/atoms/Title/Title";
import Link from "next/link";
import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Button from "~/components/atoms/button/Button"
import CareerImage from "~/assets/static/images/section-join-our-team/JoinOurTeam1.jpg"
import BecomeAPartner from "~/assets/static/images/section-join-our-team/JoinOurTeam2.jpg"
import Text from "~/components/atoms/Text/Text";

export default function SectionJoinOurTeam({
    ContainerTitleProps,
    ContainerTextProps,
    border,
    alt,
    TextProps
}) {

    const [showModalBecome, setShowModalBecome] = React.useState(false);

    return (
        <>
            <div>
                {showModalBecome ? (
                    <>
                        <div
                            className="items-center justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative mx-auto md:w-[750px] h-[500px] w-[300px]">
                                {/*content*/}
                                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex w-full border-b border-solid border-slate-200 rounded-t">
                                        <Title
                                            H="h5Modals"
                                            Text={TextProps?.titleBecomeAPartner}
                                            TitleClassProps={"mt-[30px] mx-auto mb-[30px]"}
                                        />
                                        <div className="absolute p-6 flex flex-col items-end w-full">

                                            <button
                                                className="bg-gray-300 rounded-full text-black px-1 py-2 hover:bg-gray-400 outline-none ease-linear transition-all duration-150 w-[35px] h-[35px] flex justify-center shadow-xl font-bold"
                                                type="button"
                                                onClick={() => setShowModalBecome(false)}
                                            >X</button>
                                        </div>

                                    </div>
                                    {/*body*/}
                                    <div className="relative px-6 flex flex-col items-center">
                                        <p className="text-lg leading-relaxed">
                                            <Text
                                                Style="small"
                                                Text={TextProps?.text2BecomeAPartner}
                                                TextClassProps="mx-[20px] mt-[20px] mb-4 text-center lg:mt-5"
                                            />
                                        </p>

                                        <form className="mt-5 w-full lg:items-center m-auto" >
                                            <div className="mb-6">
                                                <input placeholder="*Name" type="name" id="name" className="focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-smlock w-full p-2.5 border-gray-400" required></input>
                                            </div>
                                            <div className="mb-6">
                                                <input placeholder="*Email" type="email" id="email" className="focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-sm block w-full p-2.5 border-gray-400" required></input>
                                            </div>
                                            <div className="mb-6">
                                                <textarea placeholder="*Message" id="message" rows={5} className="p-2.5 focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-smblock w-full border-gray-400" required></textarea>
                                            </div>
                                            <div>
                                                <div className="flex flex-col justify-center items-center mb-5">
                                                    <Button size="medium" type="primary" path="#" label="SEND" />
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
            <div className="text-center mb-[40px] flex flex-col">
                <div className="flex w-full px-7 py-16 flex-col items-center justify-center gap-7">
                    <TitleText
                        //TitleText
                        TitleSize="h1"
                        TitleLabel={TextProps?.titleJoinOurTeam}
                        TextSize="subtitulo"
                        TextLabel={TextProps?.textJoinOurTeam}
                        ContainerTextProps="items-start"
                        TextClassProps=""
                        TitleClassProps=""
                        ContainerTitleProps=""

                    />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex w-full lg:w-1/2 lg:px-5">
                        <div className="flex flex-col items-center">
                            <div className="w-full px-7 flex flex-col items-center justify-center gap-7">
                                <TitleText
                                    //TitleText
                                    TitleSize="h2"
                                    TitleLabel={TextProps?.titleCareers}
                                    ContainerTextProps="items-start"
                                    TextClassProps=""
                                    TitleClassProps=""
                                    ContainerTitleProps=""
                                    TextLabel=""
                                    TextSize=""
                                />
                            </div>
                            <div className="w-full flex items-center mx-[auto]">
                                <ImageAtomLocal
                                    imagesize="pr100"
                                    border={border}
                                    src={CareerImage}
                                    alt={alt}
                                    ImageStyleProps=""
                                />
                            </div>
                            <div className="flex w-full px-[20px] items-center">
                                <div className="w-full items-center flex flex-col gap-7 text-gray-700">
                                    <TitleText
                                        TextSize="subtitulo"
                                        TextLabel={TextProps?.textCareers}
                                        ContainerTitleProps={ContainerTitleProps}
                                        ContainerTextProps={ContainerTextProps}
                                        TextClassProps=""
                                        TitleClassProps=""
                                        TitleLabel=""
                                        TitleSize=""
                                    />
                                    <div className="flex-col justify-center mb-14">
                                        <Button size="medium" type="primary" path="/JobListing" label={TextProps?.buttonCareers} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2 lg:px-5">
                        <div className="flex flex-col items-center">
                            <div className="w-full px-7 flex flex-col items-center justify-center gap-7">
                                <TitleText
                                    //TitleText
                                    TitleSize="h2"
                                    TitleLabel={TextProps?.titleBecomeAPartner}
                                    ContainerTextProps="items-start"
                                    TextClassProps=""
                                    TitleClassProps=""
                                    ContainerTitleProps=""
                                    TextLabel=""
                                    TextSize=""
                                />
                            </div>
                            <div className="w-full flex items-center justify-end">
                                <ImageAtomLocal
                                    imagesize="pr100"
                                    border={border}
                                    src={BecomeAPartner}
                                    alt={alt}
                                    ImageStyleProps=""
                                />
                            </div>
                            <div className="flex w-full px-[20px] items-center">
                                <div className="w-full items-center flex flex-col gap-7 text-gray-700">
                                    <TitleText
                                        TextSize="subtitulo"
                                        TextLabel={TextProps?.textBecomeAPartner}
                                        ContainerTitleProps={ContainerTitleProps}
                                        ContainerTextProps={ContainerTextProps}
                                        TextClassProps=""
                                        TitleClassProps=""
                                        TitleLabel=""
                                        TitleSize=""
                                    />
                                    <div className="flex-col justify-center mb-14">
                                        <Link onClick={() => setShowModalBecome(true)} href="">
                                            <Button size="medium" type="primary" path="#" label={TextProps?.buttonBecomeAPartner} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
