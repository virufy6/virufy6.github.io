import TitleText from '~/components/molecules/TitleText/TitleText'

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
          <iframe
            width="370"
            height="208"
            src="https://www.youtube.com/embed/hvJgwPNYnZo?cc_load_policy=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="align-center mt-[40px] hidden justify-center md:flex xl:hidden">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/hvJgwPNYnZo?cc_load_policy=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="align-center mt-[40px] hidden justify-center xl:flex">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/hvJgwPNYnZo?cc_load_policy=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
