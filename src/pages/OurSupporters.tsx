import TextinsImg from '~/components/molecules/TextinsImg/TextinsImg'
import ImageinsText from '~/assets/static/images/ourSupporters/ImageinsText.png'
import CardLarge from '~/components/organisms/section-9/CardLarge'

import { useI18n } from '~/i18n'

import Card1 from '~/assets/static/images/ourSupporters/card1.jpg'
import Card2 from '~/assets/static/images/ourSupporters/card2.jpg'
import Card3 from '~/assets/static/images/ourSupporters/card3.jpg'
import Card4 from '~/assets/static/images/ourSupporters/card4.jpg'
import Title from '~/components/atoms/Title/Title'
import Card1TL from '~/assets/static/images/ourSupporters/card1.png'
import Card2TL from '~/assets/static/images/ourSupporters/card2.png'
import Card3TL from '~/assets/static/images/ourSupporters/card3.png'
import Card4TL from '~/assets/static/images/ourSupporters/card4.png'
import Card5TL from '~/assets/static/images/ourSupporters/card5.png'
import Card6TL from '~/assets/static/images/ourSupporters/card6.png'
import Card7TL from '~/assets/static/images/ourSupporters/card7.png'
import Card8TL from '~/assets/static/images/ourSupporters/card8.png'
import Card9TL from '~/assets/static/images/ourSupporters/card9.png'
import Card10TL from '~/assets/static/images/ourSupporters/card10.png'
import Card11TL from '~/assets/static/images/ourSupporters/card11.png'
import Card12TL from '~/assets/static/images/ourSupporters/card12.png'
import Card13TL from '~/assets/static/images/ourSupporters/card13.png'
import Card14TL from '~/assets/static/images/ourSupporters/card14.png'
import Card15TL from '~/assets/static/images/ourSupporters/card15.png'
import Card16TL from '~/assets/static/images/ourSupporters/card16.png'
import Card17TL from '~/assets/static/images/ourSupporters/card17.png'
import Card18TL from '~/assets/static/images/ourSupporters/card18.png'
import Card19TL from '~/assets/static/images/ourSupporters/card19.png'
import Card from '~/components/molecules/Card/Card'

/* import Card1VH from "~/assets/static/images/ourSupporters/card1-VH.png"
import Card2VH from "~/assets/static/images/ourSupporters/card2-VH.png" */

import SectionOneYoungWorld from '~/components/organisms/SectionOneYoungWorld/SectionOneYoungWorld'
import TitleText from '~/components/molecules/TitleText/TitleText'
import CardSliderTall from '~/components/organisms/CardSlider/CardSliderTall'
import OurSupportersSection from '~/components/organisms/OurSupportersSection/OurSupportersSection'

export default function OurSupporters() {
  const {
    OurSupporters: {
      titleImage,
      sectionSupporters,
      sectionOneYoungWorld,
      sectionVolunterStories,
      sectionTeamLeads,
    },
  } = useI18n()

  const CardsData = [
    {
      route: Card1,
      name: sectionOneYoungWorld.cardTitles[0],
      text: sectionOneYoungWorld.cardTexts[0],
    },
    {
      route: Card2,
      name: sectionOneYoungWorld.cardTitles[1],
      text: sectionOneYoungWorld.cardTexts[1],
    },
    {
      route: Card3,
      name: sectionOneYoungWorld.cardTitles[2],
      text: sectionOneYoungWorld.cardTexts[2],
    },
    {
      route: Card4,
      name: sectionOneYoungWorld.cardTitles[3],
      text: sectionOneYoungWorld.cardTexts[3],
    },
  ]

  const CardsDataTL = [
    {
      route: Card1TL,
      name: sectionTeamLeads.names[0],
      text: sectionTeamLeads.texts[0],
    },
    {
      route: Card2TL,
      name: sectionTeamLeads.names[1],
      text: sectionTeamLeads.names[1],
    },
    {
      route: Card3TL,
      name: sectionTeamLeads.names[2],
      text: sectionTeamLeads.names[2],
    },
    {
      route: Card4TL,
      name: sectionTeamLeads.names[3],
      text: sectionTeamLeads.names[3],
    },
    {
      route: Card5TL,
      name: sectionTeamLeads.names[4],
      text: sectionTeamLeads.names[4],
    },
    {
      route: Card6TL,
      name: sectionTeamLeads.names[5],
      text: sectionTeamLeads.names[5],
    },
    {
      route: Card7TL,
      name: sectionTeamLeads.names[6],
      text: sectionTeamLeads.names[6],
    },
    {
      route: Card8TL,
      name: sectionTeamLeads.names[7],
      text: sectionTeamLeads.names[7],
    },
    {
      route: Card9TL,
      name: sectionTeamLeads.names[8],
      text: sectionTeamLeads.names[8],
    },
    {
      route: Card10TL,
      name: sectionTeamLeads.names[9],
      text: sectionTeamLeads.names[9],
    },
    {
      route: Card11TL,
      name: sectionTeamLeads.names[10],
      text: sectionTeamLeads.names[10],
    },
    {
      route: Card12TL,
      name: sectionTeamLeads.names[11],
      text: sectionTeamLeads.names[11],
    },
    {
      route: Card13TL,
      name: sectionTeamLeads.names[12],
      text: sectionTeamLeads.names[12],
    },
    {
      route: Card14TL,
      name: sectionTeamLeads.names[13],
      text: sectionTeamLeads.names[13],
    },
    {
      route: Card15TL,
      name: sectionTeamLeads.names[14],
      text: sectionTeamLeads.names[14],
    },
    {
      route: Card16TL,
      name: sectionTeamLeads.names[15],
      text: sectionTeamLeads.names[15],
    },
    {
      route: Card17TL,
      name: sectionTeamLeads.names[16],
      text: sectionTeamLeads.names[16],
    },
    {
      route: Card18TL,
      name: sectionTeamLeads.names[17],
      text: sectionTeamLeads.names[17],
    },
    {
      route: Card19TL,
      name: sectionTeamLeads.names[18],
      text: sectionTeamLeads.names[18],
    },
  ]

  /*   const cardSliderData = [
      {
        route: Card1VH,
        name: "Annelisse Torrez Daza",
        textLabel: "“Having suffered through COVID myself along with all of my family in a underprivileged country, I knew instantly that I could make a difference and prevent others from facing my same fate by joining Virufy.”",
        country: "Bolivia",
      },
      {
        route: Card2VH,
        name: "Sebastian Pedraza",
        textLabel: "“Virufy unites the power of youth and technology to transform the world. We hope that this solution will reach the whole world and that it will become a support for doctors, especially in low-income countries.”",
        country: "Columbia",
      },
    ] */

  return (
    <>
      <TextinsImg
        sizeImg="auto"
        borderImg="none"
        src={ImageinsText}
        altImg="Imagen cabezera"
        Text={titleImage}
      />

      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-[1440px] flex-col items-center justify-center ">
          <OurSupportersSection TextProps={sectionSupporters} />
        </div>
        <div className="flex w-[100%] flex-col items-center justify-center bg-[#F9FAFB]">
          <div className="mt-[190px] flex max-w-[1440px] flex-col items-center justify-center bg-[#F9FAFB] pb-[362px]">
            <SectionOneYoungWorld TextProps={sectionOneYoungWorld} />

            <Title
              H="h2"
              Text={sectionOneYoungWorld.titleQuestion}
              TitleClassProps="text-center mt-4 mb-[48px]"
            />
            <CardLarge
              CardsData={CardsData}
              CardClassProps="flex flex-row text-center items-center justify-center sm:w-1/1 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 mt-4"
            />

            <TitleText
              TitleSize={'h2'}
              TitleLabel={sectionVolunterStories.title}
              TitleClassProps={'text-center mt-32 '}
              TextSize={'normal'}
              TextLabel={sectionVolunterStories.text}
              TextClassProps={'m-10 '}
              ContainerTitleProps
              ContainerTextProps="max-w-[800px] mb-[80px]"
            />

            {/* DESCOMENTAR CUANDO FUNCIONE EL CMS ////////////////////////////*/}
            {/* <CardSliderTall /> */}
          </div>
        </div>
        <div className="my-[80px] flex max-w-[1440px] flex-col items-center justify-center">
          <Title
            H="h2"
            Text={sectionTeamLeads.title}
            TitleClassProps="text-center mt-[80px]"
          />
          <Card
            CardsData={CardsDataTL}
            CardClassProps="flex flex-col text-center items-center w-[348px] sm:w-1/1 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 mt-4 rounded-[20px] m-[15px] h-[350px] shadow-xl"
          />
        </div>
      </div>
    </>
  )
}
