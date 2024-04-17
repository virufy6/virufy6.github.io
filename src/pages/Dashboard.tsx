//Organismo
import TitleText from '~/components/molecules/TitleText/TitleText'
import Section7 from '~/components/organisms/section-7/Section7'
import { useI18n } from '~/i18n'
export default function Dashboard() {
  const {
    locale,
    dashboard: { tittle, tittleInfo, advertisement, shareYourCough, learnMore },
  } = useI18n()
  

  return (
    <div>
      <div className="flex h-[300px] w-full flex-col items-start justify-center gap-5 bg-slate-100 px-[7%]">
        <TitleText
          //TitleText
          TitleSize="h1"
          TitleLabel={tittle}
          TextSize="normal"
          TextLabel={tittleInfo}
          ContainerTextProps="items-start"
          TextClassProps=""
          TitleClassProps=""
          ContainerTitleProps=""
        />
      </div>
      <div>
        <iframe
          src={`https://virufy-dashboard.vercel.app/${locale}`}
          className="min-h-screen w-full border-none"
        />
        <Section7
          TitleLabel={advertisement}
          Label1={shareYourCough}
          Label2={learnMore}
          Url1="https://virufy.org/study/welcome"
          Url2="/OurTechnology"
        />
      </div>
    </div>
  )
}
