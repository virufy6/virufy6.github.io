import TitleText from "~/components/molecules/TitleText/TitleText"

export default function Section5({
  StylePropsSection,
  TitleSize1,
  TitleLabel1,
  TextSize1,
  TextLabel1,
  ContainerTitleProps1,
  ContainerTextProps1,
  TitleClassProps1,
  TextClassProps1,
  TitleSize2,
  TitleLabel2,
  TextSize2,
  TextLabel2,
  ContainerTitleProps2,
  ContainerTextProps2,
  TitleClassProps2,
  TextClassProps2,  
}) {
  return (
    <div
      className={StylePropsSection}
    >
      <TitleText
        TitleSize={TitleSize1}
        TitleLabel={TitleLabel1}
        TextSize={TextSize1}
        TextLabel={TextLabel1}
        ContainerTitleProps={ContainerTitleProps1}
        ContainerTextProps={ContainerTextProps1}
        TitleClassProps={TitleClassProps1}
        TextClassProps={TextClassProps1}
      />
      <TitleText
        TitleSize={TitleSize2}
        TitleLabel={TitleLabel2}
        TextSize={TextSize2}
        TextLabel={TextLabel2}
        ContainerTitleProps={ContainerTitleProps2}
        ContainerTextProps={ContainerTextProps2}
        TitleClassProps={TitleClassProps2}
        TextClassProps={TextClassProps2}
      />
    </div>
  )
}