export interface NavbarType {
  home: string
  ourTechnology: OurTechnology
  coughCheckApp: CoughCheckApp
  aboutUs: AboutUs
  faq: string
  donate: string
}

export interface OurTechnology {
  section: string
  howItWorks: string
  OurResearch: string
}

export interface CoughCheckApp {
  section: string
  covid19: string
  flu: string
  copd: string
  rsv: string
}

// export interface GetInvolved {
//     section: string
//     donate: string
//     joinOurTeam: string
//     tellYourStory: string
// }

export interface AboutUs {
  section: string
  ourStory: string
  ourPeople: string
  ourSupporters: string
  blog: string
  oneYoungWorld: string
}
