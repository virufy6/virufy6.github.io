import TitleText from "~/components/molecules/TitleText/TitleText"
import Video from "../../atoms/videoAtom/Video"

export default function SectionTellYourStoryGetInvolved({
    TextProps
}) {
    return (
        <div className="text-center flex flex-col md:mb-[70px] md:mt-[70px]">
            <div className="flex items-center flex-col max-w-[1200px] w-[100vw]">
                <div className="flex md:w-1/2 px-7 flex-col items-center justify-center gap-11 mb-10">
                    <TitleText
                        //TitleText
                        TitleSize="h1"
                        TitleLabel={TextProps.title}
                        TextSize="subtitle"
                        TextLabel={TextProps.subtitle}
                        ContainerTextProps="items-start"
                        TextClassProps=""
                        TitleClassProps=""
                        ContainerTitleProps=""

                    />
                </div>
                <div className="flex md:w-3/5 px-7 flex-col items-center justify-center gap-4 mb-5">
                    <TitleText
                        //TitleText
                        TextSize="normal"
                        TextLabel={TextProps.text}
                        ContainerTextProps="text-start"
                        TextClassProps=""
                        TitleClassProps=""
                        ContainerTitleProps=""
                        TitleLabel=""
                        TitleSize=""
                    />
                    <TitleText
                        //TitleText
                        TextSize="normal"
                        TextLabel={TextProps.text2}
                        ContainerTextProps="text-start"
                        TextClassProps=""
                        TitleClassProps=""
                        ContainerTitleProps=""
                        TitleLabel=""
                        TitleSize=""
                    />
                </div>
                <div className="flex md:hidden mt-[40px] align-center justify-center">
                    <Video width="370px" height="208px" url="https://www.youtube.com/watch?v=hvJgwPNYnZo" />
                </div>
                <div className="hidden md:flex xl:hidden mt-[40px] align-center justify-center">
                    <Video width="800px" height="450px" url="https://www.youtube.com/watch?v=hvJgwPNYnZo" />
                </div>
                <div className="hidden xl:flex mt-[40px] align-center justify-center">
                    <Video width="1280px" height="720px" url="https://www.youtube.com/watch?v=hvJgwPNYnZo" />
                </div>
            </div>
            
        </div>
    )
}
