import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Button from "~/components/atoms/button/Button"
import Image from "~/assets/static/images/SectionTellYourStoryGetInvolved/SectionTellYourStoryGetInvolved.jpg"

export default function SectionTellYourStoryGetInvolved({
    border,
    alt,
    TextProps
}) {
    return (
        <div className="text-center flex flex-col md:mb-[120px]">
            <div className="flex items-center flex-col">
                <div className="flex md:w-1/2 px-7 flex-col items-center justify-center gap-7">
                    <TitleText
                        //TitleText
                        TitleSize="h1"
                        TitleLabel={TextProps?.titleTellYourStory}
                        TextSize="subtitulo"
                        TextLabel={TextProps?.textTellYourStory}
                        ContainerTextProps="items-start"
                        TextClassProps=""
                        TitleClassProps=""
                        ContainerTitleProps=""

                    />
                </div>
                <div className="flex md:w-1/2 px-7 pb-16 flex-col items-center justify-center gap-7">
                    <TitleText
                        //TitleText
                        TextSize="subtitulo"
                        TextLabel={TextProps?.text2TellYourStory}
                        ContainerTextProps="items-start"
                        TextClassProps=""
                        TitleClassProps=""
                        ContainerTitleProps=""
                        TitleLabel=""
                        TitleSize=""
                    />
                </div>
            </div>
            <div className="flex-col justify-center mb-14">
                <Button size="medium" type="primary" path="/TellYourStory" label={TextProps?.buttonTellYourStory} />
            </div>
            <div className="w-full md:hidden flex items-center justify-end">
                <ImageAtomLocal
                    imagesize="pr100"
                    border={border}
                    src={Image}
                    alt={alt}
                    ImageStyleProps=""
                />
            </div>
            <div className="hidden w-full md:flex items-center justify-center md:pt-10">
                <ImageAtomLocal
                    imagesize="pr70"
                    border={border}
                    src={Image}
                    alt={alt}
                    ImageStyleProps=""
                />
            </div>
        </div>
    )
}
