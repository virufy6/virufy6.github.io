import TitleText from "~/components/molecules/TitleText/TitleText"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Button from "~/components/atoms/button/Button"
import ImageSection4 from "~/assets/static/images/section4/1.jpg"

export default function Section4({
  ContainerTitleProps,
  ContainerTextProps,
  border,
  alt,
  TitleSize1,
  TitleSize2,
  TitleLabel1,
  TitleLabel2,
  TextLabel,
  labelButton,
  buttonRoute
}) 
{ console.log(buttonRoute)
  console.log(labelButton);
  return (
    <div className="text-center mt-[100px] mb-[40px] flex flex-col space-y-4 space-x-4 ml-[5vw] mr-[5vw]">
      <TitleText
        TitleSize={TitleSize1}
        TitleLabel={TitleLabel1}
        TextSize={""}
        TextLabel={""}
        ContainerTitleProps={""}
        ContainerTextProps={""}
        TitleClassProps={""}
        TextClassProps={""}
      />
      <div className="flex items-center flex-1 mt-[80px]">
        <div className="flex sm:hidden w-2/5 items-center flex-1">
          <div className="w-full text-left flex flex-col gap-5">
            <TitleText
              TitleSize={TitleSize2}
              TitleLabel={TitleLabel2}
              TextSize="normal"
              TextLabel={TextLabel}
              ContainerTitleProps={ContainerTitleProps}
              ContainerTextProps={ContainerTextProps}
              TitleClassProps={""}
              TextClassProps={""}
            />
          </div>
        </div>
        <div className="hidden sm:flex w-2/5 items-center flex-1">
          <div className="w-full text-left flex flex-col gap-5">
            <TitleText
              TitleSize={TitleSize2}
              TitleLabel={TitleLabel2}
              TextSize="normal"
              TextLabel={TextLabel}
              ContainerTitleProps={ContainerTitleProps}
              ContainerTextProps={ContainerTextProps}
              TitleClassProps={""}
              TextClassProps={""}
            />
            <div className="hidden sm:flex flex-col justify-center">
              <Button size="medium" type="primary" path={buttonRoute} label={labelButton} />
            </div>
          </div>

        </div>
        <div className="w-1/2 flex items-center justify-end">
          <ImageAtomLocal
            imagesize="pr90"
            border={border}
            src={ImageSection4}
            alt={alt}
            ImageStyleProps={""}
          />
        </div>
      </div>
      <div className="flex sm:hidden justify-center">
        <Button size="medium" type="primary" path={buttonRoute} label={labelButton} />
      </div>
    </div >
  )
}
