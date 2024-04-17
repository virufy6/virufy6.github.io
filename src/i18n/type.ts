import { StaticImageData } from 'next/image'
import { Home } from './types/Home'
import { FAQ } from './types/FAQ'
import { NavbarType } from './types/NavbarType'
import { BlogListing } from './types/BlogListingType'
import { BlogDetails } from './types/BlogDetailsType'
import { Footer } from './types/Footer'

export type I18nData = {
  locale: string
  home: Home
  AboutUs?: AboutUs
  GetInvolved_?: GetInvolved
  howItWorks?: HowItWorks
  dashboard?: DashBoard
  JobListing: JobListing
  JobDescription?: {
    JobID: object[] | any[]
  }
  ourPublications?: OurPublications
  ourTechnology?: OurTechnology
  ourResearch?: OurResearch
  tellYourStory: TellYourStory
  OurPeople1?: OurPeople1
  OurPeople2?: OurPeople2
  OurSupporters?: OurSupporters
  blogListing?: BlogListing
  blogDetails?: BlogDetails
  faq: FAQ
  navbar?: NavbarType
  footer: Footer
}

// ---- How It Works ----
export interface HowItWorks {
  sectionShareCougt: SectionShareCougt
  sectiontCovidTestExplanation: SectiontCovidTestExplanation
}

export interface SectionShareCougt {
  title: string
  textLabel: string
  buttons: string[]
}
export interface SectiontCovidTestExplanation {
  title: string
  titleLabelRecording: string
  titleLabelProcessing: string
  titleLabelResults: string
  textLabelRecording: string
  textLabelProcessing: string
  textLabelResults: string
  button: string
}
// ---- | ----

// ---- Job Listing ----
export interface JobListing {
  JobList: object[] | any[]
  titleImage: string;
  title: string;
  text: string;
  modal: { 
    text: string;
    yes: string;
    no: string;
   }
}
// ---- | ----

// ---- Job Description ----
export interface JobDescription {
  jobTitle: string
  jobDescription: string
  responsibilitiesSection: ResponsibilitiesSection
  qualificationsSection: QualificationsSection
  skillsSection: SkillsSection
  questions: string
  contactEmail: string
}

export interface ResponsibilitiesSection {
  responsibilities: string
  responsibilityDefine: string
  responsibilityAnalize: string
  responsibilityRequest: string
  responsibilityTask: string
  responsibilityDevelop: string
  responsibilityJob: string
}

export interface QualificationsSection {
  minimumQualifications: string
  qualificationOld: string
  qualificationWork: string
  qualificationTittle: string
  qualificationPhoto: string
  qualificationLanguage: string
}

export interface SkillsSection {
  desiredSkills: string
  skillExperience: string
  skillDetail: string
  skillComunication: string
  skillResponsability: string
}
// ---- | ----

// ---- Our Publications ---
export interface OurPublications {
  publicationCarts: PublicationCards
  helpText: string
  buttonText: string
}
export interface PublicationCards {
  title: string
  cardStudy: string
  cardVoice: string
  cardSensibility: string
  cardInvestigation: string
}
//---- | ----

// ---- Our Technology ---
export interface AboutVirufySection {
  title: string
  recordingYourCough: string
  recordingDescription: string
  processingYourCough: string
  processingDescription: string
  resultsYourCough: string
  resultDescription: string
  button: string
}

export interface OurTechnology {
  title: string
  titileDescription: string
  buttonResearchLabel: string
  aboutVirufySection: AboutVirufySection
  collectedDataTitle: string
  collectedDataText: string
  dashboardButtonLabel: string
}

// ---- Get Involved ----
export interface GetInvolved {
  sectionDonate: sectionDonate
  sectionJoinOurTeam: sectionJoinOurTeam
  sectionTellYouStory: sectionTellYouStory
}

export interface sectionDonate {
  title: string
  textLabel: string
  button: string
}
export interface sectionJoinOurTeam {
  titleJoinOurTeam: string
  textJoinOurTeam: string
  titleCareers: string
  textCareers: string
  buttonCareers: string
  titleBecomeAPartner: string
  textBecomeAPartner: string
  text2BecomeAPartner: string
  buttonBecomeAPartner: string
}

export interface sectionTellYouStory {
  titleTellYourStory: string
  textTellYourStory: string
  text2TellYourStory: string
  buttonTellYourStory: string
}
// ---- | ----

// ---- About Us ---
export interface AboutUs {
  titleImage: string
  sectionOurMissionStory: sectionOurMissionStory
  sectionOurValues: sectionOurValues
  sectionOurCommitmentPrivacy: sectionOurCommitmentPrivacy
}

export interface sectionOurMissionStory {
  titleMission: string
  textMission: string
  titleStory: string
  textStory: string
}

export interface sectionOurValues {
  title: string
  Transformation: string
  textTransformation: string
  Collaboration: string
  textCollaboration: string
  Health: string
  textHealth: string
  Affordability: string
  textAffordability: string
  Efficiency: string
  textEfficiency: string
  Innovation: string
  textInnovation: string
}

export interface sectionOurCommitmentPrivacy {
  title: string
  text: string
}
//---- | ----

// ---- OurPeople1 ---
export interface OurPeople1 {
  titleImage: string
  sectionMeetOurFounder: sectionMeetOurFounder
  sectionAdvisors: sectionAdvisors
}

export interface sectionMeetOurFounder {
  titleMeetOurFounder: string
  titleAmil: string
  textAmil: string
  button: string
}

export interface sectionAdvisors {
  title: string
}

//---- | ----

// ---- OurPeople2 ---

export interface OurPeople2 {
  titleImage: string
  sectionAmil: sectionAmil
}

export interface sectionAmil {
  titleAmil: string
  textAmil: string[]
  titlePublications: string
  listPublications: string[]
}

//---- | ----

// ---- OurResearch ----
export interface OurResearch {
  firstCard: Card
  secondCard: Card
  thirdCard: Card
  fourthCard: Card
  sectionScience: SectionScience
  sectionResearch: SectionResearch
}

export interface Card {
  universityTitle: string
  description: string
}

export interface SectionResearch {
  titleResearch: string
  titleWantToLearn: string
  button: string
}

export interface SectionScience {
  title: string
  textLabel: string
}
//---- | ----

// ---- Tell Your Story ----
export interface TellYourStory {
  sectionTellYourStory: SectionTellYourStory
  form: Form
}

export interface Form {
  name: string
  email: string
  message: string
  uploadPhoto: string
  titleFiles: string
  button: string
}

export interface SectionTellYourStory {
  title: string
  text: string
}
//---- | ----

// ---- Our Supporters ----
export interface OurSupporters {
  titleImage: string
  sectionSupporters: sectionSupporters
  sectionOneYoungWorld: sectionOneYoungWorld
  sectionVolunterStories: sectionVolunterStories
  sectionTeamLeads: sectionTeamLeads
}

export interface sectionSupporters {
  title: string
  Transformers: string
  Innovators: string
  Creators: string
  Collaborators: string
  Drivers: string
  Boosters: string
}

export interface sectionOneYoungWorld {
  title: string
  subTitle: string
  text: string
  text2: string
  titleQuestion: string
  cardTitles: string[]
  cardTexts: string[]
}

export interface sectionVolunterStories {
  title: string
  text: string
}

export interface sectionTeamLeads {
  title: string
  names: string[]
  texts: string[]
}
//---- | ----

// ---- Our Supporters ----
export interface OurSupporters {
  titleImage: string
  sectionSupporters: sectionSupporters
  sectionOneYoungWorld: sectionOneYoungWorld
  sectionVolunterStories: sectionVolunterStories
  sectionTeamLeads: sectionTeamLeads
}

export interface sectionSupporters {
  title: string
  Transformers: string
  Innovators: string
  Creators: string
  Collaborators: string
  Drivers: string
  Boosters: string
}

export interface sectionOneYoungWorld {
  title: string
  subTitle: string
  text: string
  text2: string
  titleQuestion: string
  cardTitles: string[]
  cardTexts: string[]
}

export interface sectionVolunterStories {
  title: string
  text: string
}

export interface sectionTeamLeads {
  title: string
  names: string[]
  texts: string[]
}
// ---- DashBoard ----

export interface DashBoard {
  tittle: string
  tittleInfo: string
  advertisement: string
  shareYourCough: string
  learnMore: string
}
