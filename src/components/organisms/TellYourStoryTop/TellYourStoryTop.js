import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Image from "~/assets/static/images/TellYourStoryTop/Image.jpg"
import { useI18n } from "~/i18n"

export default function TellYourStoryTop({
    ContainerTitleProps,
    ContainerTextProps,
    border,
    alt
}) {
    const { tellYourStory: { sectionTellYourStory } } = useI18n()
    return (
        <div className="text-center md:mt-[70px] md:mb-[70px] mb-[40px] flex flex-col md:ml-[5vw] md:mr-[5vw]">
            <div className="flex flex-col md:flex-row-reverse items-center flex-1">
                <div className="w-full md:w-1/2 flex items-center justify-end md:pl-[40px]">
                    <ImageAtomLocal
                        imagesize="pr100"
                        border={border}
                        src={Image}
                        alt={alt}
                        ImageStyleProps=""
                    />
                </div>
                <div className="flex mt-14 md:mt-0 md:hidden w-full md:w-2/5 px-[20px] md:px-[0px] items-center flex-1">
                    <div className="w-full items-center md:items-start md:text-left flex flex-col gap-5">
                        <TitleText
                            TitleSize="h2"
                            TitleLabel={sectionTellYourStory.title}
                            TextSize="normal"
                            TextLabel={sectionTellYourStory.text}
                            ContainerTitleProps={ContainerTitleProps}
                            ContainerTextProps={ContainerTextProps}
                            TextClassProps=""
                            TitleClassProps=""
                        />
                    </div>
                </div>
                <div className="hidden mt-14 md:mt-0 md:flex flex-row w-full md:w-2/5 px-[20px] md:px-[0px] items-center flex-1">
                    <div className="w-full items-center md:items-start md:text-left flex flex-col gap-5">
                        <TitleText
                            TitleSize="h2"
                            TitleLabel={sectionTellYourStory.title}
                            TextSize="subtitulo"
                            TextLabel={sectionTellYourStory.text}
                            ContainerTitleProps={ContainerTitleProps}
                            ContainerTextProps={ContainerTextProps}
                            TextClassProps=""
                            TitleClassProps=""
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}
