//Atoms
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import Title from "~/components/atoms/Title/Title"
import Button from "~/components/atoms/button/Button"

//Assets
import ImageSection6 from "~/assets/static/images/section6/1.png"
import { useI18n } from "~/i18n"

export default function Section6() {
  const {home: {sectionOurSupporters}} = useI18n()
  return (
    <div className="mt-20"
    style={{
      width: "100%",
      textAlign: "center",
    }}>
      <div className="mr-[5vw]">
      <Title
        H="h1"
        Text={sectionOurSupporters.title}
        TitleClassProps="ml-[5vw]"      
      />
      </div>
      <div className="mr-[5vw] ml-[5vw]">
      <ImageAtomLocal
        src={ImageSection6}
        imagesize={""}
        border={""}
        alt={""}
        ImageStyleProps={""}
      />
      <Button size="large" type="primary" path="/GetInvolved" label={sectionOurSupporters.button} />
      </div>
    </div>
  )
}