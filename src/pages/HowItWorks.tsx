//Organismo
import Section1 from '~/components/organisms/section-1/Section1'
import Section8 from '~/components/organisms/section-8/Section8'

import howItWorks1 from '~/assets/static/images/howItWorks/1.jpg'
import howItWorksStep1 from '~/assets/static/images/howItWorks/step1.jpg'
import howItWorksStep2 from '~/assets/static/images/howItWorks/step2.jpg'
import howItWorksStep3 from '~/assets/static/images/howItWorks/step3.jpg'
import { useI18n } from '~/i18n'

export default function HowItWorks() {
  const {
    howItWorks: { sectionShareCougt, sectiontCovidTestExplanation },
  } = useI18n()

  const buttons = sectionShareCougt?.buttons

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-[1440px] flex-col items-center justify-center ">
          <Section1
            //TitleText
            TitleSize="h1"
            TitleLabel={sectionShareCougt?.title} // {subtitle}
            TextSize="normal"
            TextLabel={sectionShareCougt?.textLabel}
            ContainerTitleProps
            ContainerTextProps="items-start h-[100%] mr-4"
            //Image
            border="none"
            route={howItWorks1}
            alt="imagen de algo"
            sizeImg
            //Buttons
            buttons={buttons}
            ImageStyleProps={''}
            buttonTechnology={false}
            shareButtonLabel={buttons?.[0]}
            learnMoreButtonLabel={buttons?.[1]}
          />

          {/* 			<p className="tex		t-gray-300">Section - 8</p> */}
          <Section8
            TitleLabel={sectiontCovidTestExplanation?.title}
            TitleSize="h1"
            ContainerTitleProps="text-center ml-[5vw] mr-[5vw]"
            //Image
            sizeImg="pr90"
            border="none"
            route1={howItWorksStep1}
            route2={howItWorksStep2}
            route3={howItWorksStep3}
            alt="Section 7"
            //TitleText
            TitleSize1="h3"
            TitleLabel1={sectiontCovidTestExplanation?.titleLabelRecording}
            TitleLabel2={sectiontCovidTestExplanation?.titleLabelProcessing}
            TitleLabel3={sectiontCovidTestExplanation?.titleLabelResults}
            TextSize="normal"
            TextLabel1={sectiontCovidTestExplanation?.textLabelRecording}
            TextLabel2={sectiontCovidTestExplanation?.textLabelProcessing}
            TextLabel3={sectiontCovidTestExplanation?.textLabelResults}
            ContainerTextProps=""
            buttonLabel={sectiontCovidTestExplanation.button}
          />
        </div>
      </div>
    </>
  )
}
