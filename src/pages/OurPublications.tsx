/* import Section9 from "~/components/organisms/section-9/Section9" */
import CardLargue from "~/components/organisms/section-9/CardLarge";

//image
import notebook from "~/assets/static/images/OurPublications/notebook1.png";
import Title from "~/components/atoms/Title/Title";
import Button from "~/components/atoms/button/Button";
import { useI18n } from "~/i18n";
export default function OurPublications() {
  const {
    ourPublications: {
      publicationCarts,
      helpText,
      buttonText,
    },
  } = useI18n();

  const CardsData = [
    {
      route: notebook,
      text: publicationCarts?.cardStudy,
    },
    {
      route: notebook,
      text: publicationCarts?.cardVoice,
    },
    {
      route: notebook,
      text: publicationCarts?.cardSensibility,
    },
    {
      route: notebook,
      text: publicationCarts?.cardInvestigation,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-[1440px] flex-col items-center justify-center ">
          <div
            className="
    mb-5 w-[100%] items-center text-center
    "
          >
            <Title
              Text={publicationCarts?.title}
              H="h1"
              TitleClassProps="mt-12 mb-12"
            />
            <CardLargue
              CardsData={CardsData}
              CardClassProps="flex flex-row text-center items-center justify-center sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/2 mb-4 mt-4 px-5"
            />
            <Title
              Text={helpText}
              H="h3"
              TitleClassProps="mt-14 mb-14"
            />
            <Button
              size="medium"
              type="primary"
              label={buttonText}
              path="https://virufy.org/study/welcome"
            />
          </div>
        </div>
      </div>
    </>
  );
}
