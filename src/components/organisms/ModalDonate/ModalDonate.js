import React from "react";
import DonateModalImg from "~/assets/static/images/Modals/DonateHero.png";
import Paypal from "~/assets/static/images/Modals/Paypal.png";
import Gofoundme from "~/assets/static/images/Modals/Gofoundme.png";
import Title from "~/components/atoms/Title/Title";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";

export default function ModalDonate() {

const [showModal, setShowModal] = React.useState(false);

    return (

<div >
                {showModal ? (
                    <>
                        <div data-controls-modal="your_div_id" data-backdrop="static" data-keyboard="true"
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative mx-auto md:w-[500px] h-[500px] w-[300px]">
                                {/*content*/}
                                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex w-full border-b border-solid border-slate-200 rounded-t">

                                        <ImageAtomLocal imagesize="pr100" border="none" src={DonateModalImg} alt="Logo Virufy" ImageStyleProps="" />

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
   );
}