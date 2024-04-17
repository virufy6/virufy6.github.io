import Button from "~/components/atoms/button/Button"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import TitleText from "~/components/molecules/TitleText/TitleText"

export default function Section8({
  TitleLabel,
  TitleSize,
  TitleSize1,
  TitleLabel1,
  TitleLabel2,
  TitleLabel3,
  TextSize,
  TextLabel1,
  TextLabel2,
  TextLabel3,
  ContainerTitleProps,
  ContainerTextProps,
  sizeImg,
  border,
  route1,
  route2,
  route3,
  alt,
  buttonLabel
}) {
  return (
    <div className="mt-[80px] mb-[80px] flex flex-col">
      <TitleText
        TitleSize={TitleSize}
        TitleLabel={TitleLabel}
        TextSize={""}
        TextLabel={""}
        ContainerTitleProps={ContainerTitleProps}
        ContainerTextProps={""}
        TitleClassProps={""}
        TextClassProps={""}
      />
      <div className="flex flex-col xl:flex-row mb-4 text-center xl:items-start items-center w-[100%] justify-center mt-[80px] w-100">
        <div className="flex flex-col text-center items-center w-[250px] sm:w-[250px] md:w-[250px] lg:w-[447px] xl:w-[447px] mt-0">
          <ImageAtomLocal
            imagesize={sizeImg}
            border={border}
            src={route1}
            alt={alt}
            ImageStyleProps={""}
          />
          <TitleText
            TitleSize={TitleSize1}
            TitleLabel={TitleLabel1}
            TextSize={TextSize}
            TextLabel={TextLabel1}
            ContainerTitleProps={"mt-[32px]"}
            ContainerTextProps={`mt-[16px] mb-[40px] ${ContainerTextProps}`}
            TitleClassProps={""}
            TextClassProps={"text-[#6D7280]"}            
          />
        </div>
        <div className="flex flex-col text-center items-center w-[250px] sm:w-[250px] md:w-[250px] lg:w-[447px] xl:w-[447px] mb-4 mt-0 ml-3 mr-3">
          <ImageAtomLocal
            imagesize={sizeImg}
            border={border}
            src={route2}
            alt={alt}
            ImageStyleProps={""}
          />
          <TitleText
            TitleSize={TitleSize1}
            TitleLabel={TitleLabel2}
            TextSize={TextSize}
            TextLabel={TextLabel2}
            ContainerTitleProps={"mt-[32px]"}
            ContainerTextProps={` mt-[16px] mb-[40px] ${ContainerTextProps}`}
            TitleClassProps={""}
            TextClassProps={"text-[#6D7280]"}
          />
        </div>
        <div className="flex flex-col text-center items-center w-[250px] sm:w-[250px] md:w-[250px] lg:w-[447px] xl:w-[447px] mb-4 mt-0">
          <ImageAtomLocal
            imagesize={sizeImg}
            border={border}
            src={route3}
            alt={alt}
            ImageStyleProps={""}
          />
          <TitleText
            TitleSize={TitleSize1}
            TitleLabel={TitleLabel3}
            TextSize={TextSize}
            TextLabel={TextLabel3}
            ContainerTitleProps={"mt-[32px]"}
            ContainerTextProps={`mt-[16px] mb-[40px] ${ContainerTextProps}`}
            TitleClassProps={""}
            TextClassProps={"text-[#6D7280]"}
          />
        </div>
      </div>
      <div className="pt-5 text-center">
        <Button
          size="medium"
          type="primary"
          label={buttonLabel}
          path="https://virufy.org/study/welcome"
        />
      </div>
    </div>
  )
}