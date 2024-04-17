//Assets
import ImageSection1 from '~/assets/static/images/section1/1.jpg'

//Organismo
import Section1 from '~/components/organisms/section-1/Section1'
import Section2 from '~/components/organisms/section-2/Section2'
import Section3 from '~/components/organisms/section-3/Section3'
import Section4 from '~/components/organisms/section-4/Section4'
import Section5 from '~/components/organisms/section-5/Section5'
import CardSlider from '~/components/organisms/CardSlider/CardSlider'

import Section6 from '~/components/organisms/section-6/Section6'
import Section7 from '~/components/organisms/section-7/Section7'
import { useI18n } from '~/i18n'

export default function Prueba() {
  const {
    home: { sectionTestOnline, sectionOurFounder,sectionVirufyCommunity, sectionMissionStatement },
  } = useI18n()
  const buttons = sectionTestOnline?.buttons

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex max-w-[1440px] flex-col items-center justify-center ">
        <Section1
          //TitleText
          shareButtonLabel={buttons?.[0]}
          learnMoreButtonLabel={buttons?.[1]}
          TitleSize="h1"
          TitleLabel={sectionTestOnline?.title}
          TextSize="normal"
          TextLabel={sectionTestOnline?.text}
          ContainerTitleProps=""
          ContainerTextProps="items-start h-[100%] mr-2 mt-2"
          //Image
          sizeImg="pr90"
          border="radious"
          route={ImageSection1}
          alt="imagen de algo"
          ImageStyleProps=""
          //Buttons
          buttons={buttons}
          buttonTechnology={false}
        />

        {/* <p className="text-gray-300">Section - 2</p> */}
        <Section2 />

        {/* <p className="text-gray-300">Section - 3</p> */}
        <Section3 />

        {/* <p className="text-gray-300">Section - 4</p> */}
        <Section4
          TitleSize1="h1"
          TitleSize2="h3"
          TitleLabel1={sectionOurFounder.title}
          TitleLabel2={sectionOurFounder.nameFounder}
          TextLabel={sectionOurFounder.description}
          //TODO: Revisar
          labelButton={sectionOurFounder?.button}
          buttonRoute="/OurPeople2"
          ContainerTitleProps
          ContainerTextProps
          border
          alt
        />

        {/* <p className="text-gray-300">Section - 5</p> */}
        <Section5
          StylePropsSection="text-center w-[100%]"
          TitleSize1="h1"
          TitleLabel1={sectionVirufyCommunity.title}
          TextSize1="subtitle"
          TextLabel1={sectionVirufyCommunity.descriptionVirufy}
          ContainerTitleProps1="mb-5 mr-[5vw]"
          ContainerTextProps1="mb-4 mr-[5vw]"
          TitleClassProps1="ml-[5vw]"
          TextClassProps1="ml-[5vw]"
          TitleSize2="h2"
          TitleLabel2={sectionVirufyCommunity.titleBeliefStatement}
          TextSize2="normal"
          TextLabel2={sectionVirufyCommunity.descriptionBeliefStatement}
          ContainerTitleProps2="mb-5 mr-[5vw]"
          ContainerTextProps2="mb-4 mr-[5vw]"
          TitleClassProps2="ml-[5vw]"
          TextClassProps2="ml-[5vw]"
        />

        {/* <p className="text-gray-300">Section - Card Slider</p> */}
        <CardSlider />

        {/* <p className="text-gray-300">Section - 6</p> */}
        <Section6 />

        {/* <p className="text-gray-300">Section - 7</p> */}
        <Section7
          TitleLabel={sectionMissionStatement.title }
          Label1={sectionMissionStatement.buttonShare}
          Label2={sectionMissionStatement.buttonLearn}
          Url1="https://virufy.org/study/welcome"
          Url2="/OurTechnology"
        />
      </div>
    </div>
  )
}
