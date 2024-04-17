import TextBelowImg from '~/components/molecules/TextinsImg/TextBelowImg'
import ImageinsText from '~/assets/static/images/JobListing/Hero.png'
import TitleText from '~/components/molecules/TitleText/TitleText'
import JobList from '~/components/organisms/JobList/JobList'
import { useI18n } from '~/i18n'

export default function JobListing() {
  const {
    JobListing: { titleImage, title, text },
  } = useI18n()

  return (
    <>
      <TextBelowImg
        sizeImg="auto"
        borderImg="none"
        src={ImageinsText}
        altImg="Imagen cabezera"
        Text={titleImage}
      />
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-[1440px] flex-col items-center justify-center ">
          <TitleText
            TitleSize={'h1'}
            TitleClassProps={''}
            TitleLabel={title}
            ContainerTitleProps={
              'mt-[40px] w-[100%] text-center xl:text-left xl:ml-12'
            }
            TextSize={'normal'}
            TextClassProps={''}
            TextLabel={text}
            ContainerTextProps={'mt-[16px] mb-[40px] mx-8'}
          />

          <JobList />
        </div>
      </div>
    </>
  )
}
