import TextinsImg from "~/components/molecules/TextinsImg/TextinsImg"
import { useI18n } from "~/i18n"

//Assets
import AboutUsImage from "~/assets/static/images/textInImage/AboutUs.jpg"
import Section5 from "~/components/organisms/section-5/Section5"
import Card from "~/components/molecules/Card/Card"

import Card1 from "~/assets/static/images/aboutUs/card1.png"
import Card2 from "~/assets/static/images/aboutUs/card2.png"
import Card3 from "~/assets/static/images/aboutUs/card3.png"
import Card4 from "~/assets/static/images/aboutUs/card4.png"
import Card5 from "~/assets/static/images/aboutUs/card5.png"
import Card7 from "~/assets/static/images/aboutUs/card7.png"
import Title from "~/components/atoms/Title/Title"

export default function AboutUs() {

  const {
    AboutUs: { titleImage, sectionOurMissionStory, sectionOurValues, sectionOurCommitmentPrivacy },
  } = useI18n();


  const Cards_Data = [
    {
      route: Card1,
      name: "Transformation",
      text: "We aim to transform expensive healthcare systems by using technology to drive necessary changes.",
    },
    {
      route: Card2,
      name: "Collaboration",
      text: "We commit to making rapid disease detection available to every person in the world, regardless of background.",
    },
    {
      route: Card3,
      name: "Health",
      text: "We commit to always putting the health and well-being of all people across the globe first and foremost.",
    },
    {
      route: Card4,
      name: "Affordability",
      text: "We aim to use technology to make disease prevention and detection free for all people around the world.",
    },
    {
      route: Card5,
      name: "Efficiency",
      text: "We commit to creating intuitive technology that delivers rapid detection, stopping virus spread and saving lives.",
    },
    {
      route: Card7,
      name: "Innovation",
      text: "We aim to ensure rapid detection of dieseases with just one tap on a mobile device.",
    },
  ]

  return (
    <>
      <TextinsImg
        sizeImg="auto"
        borderImg="none"
        src={AboutUsImage}
        altImg="Imagen cabezera"
        Text={titleImage}
      />

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-[1440px] ">
          <Section5
            StylePropsSection="text-center w-[100%] mt-[80px]"
            TitleSize1="h1"
            TitleLabel1={sectionOurMissionStory?.titleMission}
            TextSize1="normal"
            TextLabel1={sectionOurMissionStory?.textMission}
            ContainerTitleProps1="mb-5 mr-[15vw]"
            ContainerTextProps1="mb-4 mr-[15vw] text-left"
            TitleClassProps1="ml-[15vw]"
            TextClassProps1="ml-[15vw]"
            TitleSize2="h1"
            TitleLabel2={sectionOurMissionStory?.titleStory}
            TextSize2="normal"
            TextLabel2={sectionOurMissionStory?.textStory}
            ContainerTitleProps2="mb-5 mr-[15vw] mt-[80px]"
            ContainerTextProps2="mb-4 mr-[15vw] text-left"
            TitleClassProps2="ml-[15vw]"
            TextClassProps2="ml-[15vw]"
          />
          <Title
            H="h1"
            Text={sectionOurValues?.title}
            TitleClassProps="text-center mt-[100px] mb-[60px]"
          />
          <Card
            CardsData={Cards_Data}
            CardClassProps="flex flex-col text-center items-center w-[348px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 mt-4 rounded-[20px] m-[5px] h-[350px] shadow-xl"
          />
          <Section5
            StylePropsSection="text-center w-[100%] mt-[160px] mb-[160px]"
            TitleSize1="h1"
            TitleLabel1={sectionOurCommitmentPrivacy?.title}
            TextSize1="normal"
            TextLabel1={sectionOurCommitmentPrivacy?.text}
            ContainerTitleProps1="mb-5 mr-[15vw]"
            ContainerTextProps1="mb-4 mr-[15vw] text-center"
            TitleClassProps1="ml-[15vw]"
            TextClassProps1="ml-[15vw]"

            TitleSize2
            TitleLabel2
            TextSize2
            TextLabel2
            ContainerTitleProps2
            ContainerTextProps2
            TitleClassProps2
            TextClassProps2
          />
        </div>
      </div>
    </>
  )
}
