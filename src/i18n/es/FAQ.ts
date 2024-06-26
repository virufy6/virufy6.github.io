import {
  BgHeader,
  GlobeIcon,
  MonitorIcon,
  PhoneInHandIcon,
  PrivacyIcon,
  QuestionMarkIcon,
  RecycleIcon,
  SearchIcon,
} from '~/assets/static/images/faq'

export const FAQ = {
  headerSection: {
    img: BgHeader,
    altText: '',
    title: [
      {
        type: 'text',
        text: 'How can we ',
      },
      {
        type: 'span',
        text: 'help ',
      },
      {
        type: 'text',
        text: 'you?',
      },
    ],
    input: {
      placeholder: 'Start typing your search...',
      img: SearchIcon,
      altText: 'search icon',
    },
    texts: [
      {
        type: 'text',
        text: 'Or ',
      },
      {
        type: 'span',
        text: 'choose ',
      },
      {
        type: 'text',
        text: 'an option below to help find what you are looking for.',
      },
    ],
  },
  topicsSection: {
    title: 'FAQ Topics',
    cards: [
      {
        title: 'Virufy App',
        img: PhoneInHandIcon,
        altText: 'phone in hand icon',
      },
      {
        title: 'About Virufy',
        img: GlobeIcon,
        altText: 'globe icon',
      },
      {
        title: 'About AI',
        img: RecycleIcon,
        altText: 'recycle icon',
      },
      {
        title: 'Finances',
        img: MonitorIcon,
        altText: 'monitor icon',
      },
      {
        title: 'Privacy',
        img: PrivacyIcon,
        altText: 'privacy icon',
      },
      {
        title: 'Other',
        img: QuestionMarkIcon,
        altText: 'question mark icon',
      },
    ],
  },
  questionsByTopic: {
    'Virufy App': [
      {
        question: 'When and how will the app give COVID-19 prediction results?',
        answer:
          'Our app is currently for data collection only. We cannot release a COVID-19 prediction app without public health department approvals in each country and clinical studies to validate the AI technology in local conditions. This process can take some weeks or months depending on the speed of the government partner. Virufy welcomes partnerships from health officials and hospitals to bring the technology for free use to the people and to optimize usage of costly PCR tests only when necessary.',
      },
      {
        question:
          'Where can I download the app? Will it be available for iOS and Android?',
        answer:
          'The app will be available for download at https://virufy.org/app, as we need government or medical approval in some countries to put our app into the official app stores. The app can be connected to and from a smartphone. Thus, it is compatible with any operating system including iOS or Android.',
      },
      {
        question: 'Will the application be available for free and worldwide?',
        answer:
          'As a 501(c)(3) non-profit organization, our intention is to make the app free for the benefit of low-income countries. However, we may need to charge a nominal fee to support our operations in case we are not able to raise enough funds.',
      },
      {
        question: 'Do you plan to extend this app in a startup?',
        answer:
          'Virufy is a non-profit. We may partner with companies if needed to accelerate deployment of the app for the benefit of people.',
      },
      {
        question: 'When will the app be available for my country?',
        answer:
          'Virufy strives to comply with data privacy laws which vary by country. We are very happy to extend to your country if we are able to connect with a pro bono data privacy lawyer to review our privacy policy and consent form.',
      },
    ],
    'About Virufy': [
      {
        question: 'How was the initiative created?',
        answer:
          'When the pandemic hit, Virufy’s founder, Amil, knew smartphones were omnipresent and that COVID impacted the nose, throat, and lungs. He hypothesized that breathing and cough sounds could be analyzed with machine learning to detect COVID patterns. Wanting to make a positive impact, he orchestrated a clinical study with 362 patients in an esteemed university hospital. The original team of Virufy, beginning with Stanford graduate AI students, expanded to volunteers from universities around the world.As a One Young World Japan ambassador who has travelled to over a dozen countries, Amil understands the global perspective and how a smartphone-based solution can be used by people all over the world.',
      },
    ],
  },
}
