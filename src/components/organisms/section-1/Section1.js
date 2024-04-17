import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Button from "~/components/atoms/button/Button"

export default function Section1({
  TitleSize,
  TitleLabel,
  TextSize,
  TextLabel,
  ContainerTitleProps,
  ContainerTextProps,
  sizeImg,
  border,
  route,
  alt,
  buttons,
  buttonTechnology,
  ImageStyleProps,
  shareButtonLabel = '',
  learnMoreButtonLabel = '',
  researchButtonLabel = ''
}) {
  return (
    <div className="
      w-[100vw]
      max-w-[1440px]
      space-y-4 
      flex 
      flex-col-reverse
      items-center
      lg:flex-row 
      lg:space-x-4 
      lg:space-y-0 
      lg:justify-center 
      lg:items-center
      lg:text-center
      lg:mt-16
      xl:mt-16
    ">
      <div className="
        text-center 
        flex-1 
        grid
        mr-[5vw]
        items-center 
        justify-center
        lg:items-center 
        lg:text-left
        lg:w-[100%]
        lg:mt-6
        md:mt-6
        sm:mt-6
      ">
        <TitleText
          TitleSize={TitleSize}
          TitleLabel={TitleLabel}
          TextSize={TextSize}
          TextLabel={TextLabel}
          ContainerTitleProps={ContainerTitleProps}
          ContainerTextProps={ContainerTextProps}
          TitleClassProps="ml-[5vw]"
          TextClassProps="ml-[5vw] mt-4 mb-4"
        />

        {buttons ?
          <div
            className="ml-[5vw] mt-3 flex items-center flex-col lg:flex-row gap-3 lg:text-left text-center"
          >
            <Button size="medium" type="primary" path="https://virufy.org/study/welcome" label={shareButtonLabel} />
            <Button size="medium" type="secondary" path="/ourTechnology" label={learnMoreButtonLabel} />

          </div> : null
        }

        {buttonTechnology ?
          <div
            className="ml-[5vw] mt-3 flex items-center flex-col lg:flex-row gap-3 lg:text-left text-center"
          >
            <Button size="medium" type="primary" path="/OurResearch" label={researchButtonLabel} />

          </div> : null
        }        
      </div>
      <div
        className="flex justify-center text-center
        w-[100%]
        flex-1 
        lg:mr-[5vw] md:text-left
        lg:mx-[2.5vw]
        xl:mx-[2.5vw]
       ">
        <ImageAtomLocal
          imagesize={sizeImg}
          border={border}
          src={route}
          alt={alt}
          ImageStyleProps={ImageStyleProps}
        />
      </div>

    </div>
  )
}
