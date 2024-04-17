//Organismo
import Section1 from '~/components/organisms/section-1/Section1'
/* import Section9 from "~/components/organisms/section-9/Section9" */
import CardLargue from '~/components/organisms/section-9/CardLarge'

//image
import imageOurResearch from '~/assets/static/images/OurResearch/image.png'
import microscope from '~/assets/static/images/OurResearch/microscope.png'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'
import { useI18n } from '~/i18n'

export default function OurResearch() {
  const {
    ourResearch: {
      firstCard,
      secondCard,
      thirdCard,
      fourthCard,
      sectionResearch,
      sectionScience,
    },
  } = useI18n()
  const CardsData = [
    {
      route: microscope,
      name: firstCard.universityTitle,
      text: firstCard.description,
    },
    {
      route: microscope,
      name: secondCard.universityTitle,
      text: secondCard.description,
    },
    {
      route: microscope,
      name: thirdCard.universityTitle,
      text: thirdCard.description,
    },
    {
      route: microscope,
      name: fourthCard.universityTitle,
      text: fourthCard.description,
    },
  ]

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-[1440px] flex-col items-center justify-center ">
          <Section1
            //TitleText
            TitleSize="h1"
            TitleLabel={sectionScience.title}
            TextSize="normal"
            TextLabel={sectionScience.textLabel}
            ContainerTitleProps={''}
            ContainerTextProps="items-start h-[100%] mr-4"
            //Image
            sizeImg="pr90"
            border="none"
            route={imageOurResearch}
            buttons={false}
            buttonTechnology={false}
            alt="imagen de algo"
            ImageStyleProps={''}
          />

          <div
            className="
    mb-5 w-[100%] items-center text-center
    "
          >
            <Title
              Text={sectionResearch.titleResearch}
              H="h1"
              TitleClassProps="mt-4"
            />
            <CardLargue
              CardsData={CardsData}
              CardClassProps="flex flex-row text-center items-center justify-center sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/2 mb-4 mt-4 px-5"
            />
            <Title
              Text={sectionResearch.titleWantToLearn}
              H="h2"
              TitleClassProps="mt-4 mb-14"
            />
            <Button
              size="medium"
              type="primary"
              label={sectionResearch.button}
              path="/OurPublications"
            />
          </div>
        </div>
      </div>
    </>
  )
}
