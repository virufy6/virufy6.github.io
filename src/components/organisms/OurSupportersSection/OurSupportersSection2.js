import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import { useI18n } from '~/i18n'

export default function OurSupportersSection({ TextProps }) {
  const {
    OurSupporters: {
      titleImage,
      sectionSupporters,
      sectionOneYoungWorld,
      sectionVolunterStories,
      sectionTeamLeads,
    },
  } = useI18n()

  // Mapping of indices to company names
  const companyNames = [
    'Pillsbury',
    'AWS',
    'FENWICK',
    'Littler',
    'Barda',
    'Xoor',
    'Sherlock Communications',
    'idime',
    'H4R',
    'SPI',
    'Standford Medicine',
    'Service Bots',
    'DevLights',
    'Parrolabs',
    'Stanford Healthcare Innovation Lab',
    'Candido Costa & Cancio',
    'Kurunji Venkatramana Gowda Law College',
    'Compensar',
    'DRIVe',
    'O CJ Partners',
    'nueva eps',
    'nuvu',
    'Locked Jar',
    'CLEVELAND IBN SINA CLINIC',
    'One Yound World',
    'Response Innovation Lab',
    'Arkangel Ai',
  ]

  return (
    <>
      <div className="mt-[80px] w-[100vw] max-w-[1440px] md:hidden">
        {/* Supporters mobile view */}
        <div className="flex w-full flex-wrap justify-center">
          {companyNames.map((companyName, i) => {
            const src = require(`~/assets/static/images/ourSupporters/icon-supports/supporter-${
              i + 1
            }.png`)
            return (
              <div className="mx-1 flex basis-1/4 justify-center" key={i}>
                <ImageAtomLocal
                  imagesize=""
                  alt={companyName}
                  border=""
                  src={src}
                  ImageStyleProps=""
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden w-full max-w-[1440px] md:block">
        <div className="mb-40"></div>

        {/* Supporters */}
        <div className="flex w-full flex-wrap justify-center">
          {companyNames.map((companyName, i) => {
            const src = require(`~/assets/static/images/ourSupporters/icon-supports/supporter-${
              i + 1
            }.png`)
            return (
              <div className="mx-0 flex basis-1/4 justify-center" key={i}>
                <ImageAtomLocal
                  imagesize=""
                  alt={companyName}
                  border=""
                  src={src}
                  ImageStyleProps=""
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
