import TitleText from "../../molecules/TitleText/TitleText"
import TitleTextImg from "../../molecules/TitleTextImg/TitleTextImg"
import Video from "../../atoms/videoAtom/Video"

import Step1 from "../../../assets/static/images/section2/step1.jpg"
import Step2 from "../../../assets/static/images/section2/step2.jpg"
import Step3 from "../../../assets/static/images/section2/step3.jpg"
import { useI18n } from "~/i18n"

export default function Section2() {
    const { home: { sectionTestExplain } } = useI18n()
    return (
        <div className="flex"
            style={{
                width: "100vw",
                maxWidth: "1440px"
            }}>
            <div style={{
                width: "100vw",
            }}>
                <div style={{
                    textAlign: "center",
                    margin: "100px 0 70px 0"
                }}>
                    <TitleText
                        TitleSize="h1"
                        TitleLabel={sectionTestExplain.title}
                        TextSize=""
                        TextLabel=""
                        ContainerTextProps=""
                        ContainerTitleProps=""
                        TitleClassProps=""
                        TextClassProps=""
                    />
                </div>
                <div className="flex sm:hidden justify-evenly items-start" >
                    <div className="w-[100px] flex sm:w-[200px] lg:w-[300px] flex-col gap-8 text-center">
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h6"
                            TitleLabel={sectionTestExplain.firstStep}
                            ImgRoute={Step1}
                            ImgBorder="circular"
                            ImgAlt="1. Record your cough"
                            imagesize="px80"
                            TextSize=""
                            TextLabel=""
                        />
                    </div>
                    <div className="w-[100px] flex sm:w-[200px] lg:w-[300px] flex-col gap-8 text-center">
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h6"
                            TitleLabel={sectionTestExplain.secondStep}
                            ImgRoute={Step2}
                            ImgBorder="circular"
                            ImgAlt="2. AI analyzed for COVID patterns"
                            imagesize="px80"
                            TextSize=""
                            TextLabel=""
                        />
                    </div>
                    <div className="w-[100px] flex sm:w-[200px] lg:w-[300px] flex-col gap-8 text-center">
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h6"
                            TitleLabel={sectionTestExplain.stepThree}
                            ImgRoute={Step3}
                            ImgBorder="circular"
                            ImgAlt="3. COVID risk status reported"
                            imagesize="px80"
                            TextSize=""
                            TextLabel=""
                        />
                    </div>
                </div>
                <div className="hidden sm:flex lg:hidden justify-evenly" >
                    <div className="w-[100px] flex items-center sm:w-[150px] lg:w-[300px] flex-col gap-8 text-center">
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h6"
                            TitleLabel={sectionTestExplain.firstStep}
                            ImgRoute={Step1}
                            ImgBorder="circular"
                            ImgAlt="1. Record your cough"
                            imagesize="px120"
                            TextSize=""
                            TextLabel=""
                        />
                    </div>
                    <div className="w-[100px] flex items-center sm:w-[150px] lg:w-[300px] flex-col gap-8 text-center">
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h6"
                            TitleLabel={sectionTestExplain.secondStep}
                            ImgRoute={Step2}
                            ImgBorder="circular"
                            ImgAlt="2. AI analyzed for COVID patterns"
                            imagesize="px120"
                            TextSize=""
                            TextLabel=""
                        />
                    </div>
                    <div className="w-[100px] flex items-center sm:w-[150px] lg:w-[300px] flex-col gap-8 text-center">
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h6"
                            TitleLabel={sectionTestExplain.stepThree}
                            ImgRoute={Step3}
                            ImgBorder="circular"
                            ImgAlt="3. COVID risk status reported"
                            imagesize="px120"
                            TextSize=""
                            TextLabel=""
                        />
                    </div>
                </div>
                <div className="hidden lg:flex justify-evenly" >
                    <div className="w-[100px] flex lg:w-[300px] flex-col gap-8 text-center">
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h5tepsHome"
                            TitleLabel={sectionTestExplain.firstStep}
                            ImgRoute={Step1}
                            ImgBorder="circular"
                            ImgAlt="1. Record your cough"
                            imagesize="px300"
                            TextSize=""
                            TextLabel=""
                        />
                    </div>
                    <div className="w-[100px] flex lg:w-[300px] flex-col gap-8 text-center">
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h5tepsHome"
                            TitleLabel={sectionTestExplain.secondStep}
                            ImgRoute={Step2}
                            ImgBorder="circular"
                            ImgAlt="2. AI analyzed for COVID patterns"
                            imagesize="px300"
                            TextSize=""
                            TextLabel=""
                        />
                    </div>
                    <div className="w-[100px] flex lg:w-[300px] flex-col gap-8 text-center">
                        <TitleTextImg
                            Order={["Image", "Title"]}
                            TitleSize="h5tepsHome"
                            TitleLabel={sectionTestExplain.stepThree}
                            ImgRoute={Step3}
                            ImgBorder="circular"
                            ImgAlt="3. COVID risk status reported"
                            imagesize="px300"
                            TextSize=""
                            TextLabel=""
                        />
                    </div>
                </div>
                <div className="flex sm:hidden mt-[40px] align-center justify-center">
                    <Video width="370px" height="208px" url="https://youtu.be/hvJgwPNYnZo" />
                </div>
                <div className="hidden sm:flex md:hidden mt-[40px] align-center justify-center">
                    <Video width="600px" height="338px" url="https://youtu.be/hvJgwPNYnZo" />
                </div>
                <div className="hidden md:flex xl:hidden mt-[40px] align-center justify-center">
                    <Video width="800px" height="450px" url="https://youtu.be/hvJgwPNYnZo" />
                </div>
                <div className="hidden xl:flex mt-[40px] align-center justify-center">
                    <Video width="1280px" height="720px" url="https://youtu.be/hvJgwPNYnZo" />
                </div>
            </div>

        </div >
    )
}
