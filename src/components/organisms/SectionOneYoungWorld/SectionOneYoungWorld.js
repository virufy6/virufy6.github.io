import TitleText from '~/components/molecules/TitleText/TitleText'
import Video from '../../atoms/videoAtom/Video'

export default function SectionTellYourStoryGetInvolved({ TextProps }) {
  return (
    <div className="flex flex-col text-center md:mb-[70px] md:mt-[70px]">
      <div className="flex w-[100vw] max-w-[1200px] flex-col items-center">
        <div className="mb-10 flex flex-col items-center justify-center gap-11 px-7 md:w-1/2">
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
        <div className="mb-5 flex flex-col items-center justify-center gap-4 px-7 md:w-3/5">
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
        <div className="align-center mt-[40px] flex justify-center md:hidden">
          <Video
            width="370px"
            height="208px"
            url="https://www.youtube.com/watch?v=hvJgwPNYnZo"
          />
        </div>
        <div className="align-center mt-[40px] hidden justify-center md:flex xl:hidden">
          <Video
            width="800px"
            height="450px"
            url="https://www.youtube.com/watch?v=hvJgwPNYnZo"
          />
        </div>
        <div className="align-center mt-[40px] hidden justify-center xl:flex">
          <Video
            width="1280px"
            height="720px"
            url="https://www.youtube.com/watch?v=hvJgwPNYnZo"
          />
        </div>
      </div>
    </div>
  )
}
