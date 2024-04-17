import Card1 from '~/assets/static/images/aboutUs/card1.png'
import Card2 from '~/assets/static/images/aboutUs/card2.png'
import Card3 from '~/assets/static/images/aboutUs/card3.png'
import Card4 from '~/assets/static/images/aboutUs/card4.png'
import Card5 from '~/assets/static/images/aboutUs/card5.png'
import Card7 from '~/assets/static/images/aboutUs/card7.png'

export const faq = {
  sectionSearchQuestion: {
    title: 'How Can We Help?',
    descriptionFirstSearch: 'Enter a keyword or a topic in the search box',
    secondDescriptionSearch:
      'or choose a category to quickly find the help you need',
  },
  sectionCardsQuestionsTopics: {
    title: 'FAQ TOPICS',
    cards: [
      {
        route: Card1,
        name: '',
        text: 'Virufy App',
      },
      {
        route: Card2,
        name: '',
        text: 'About Virufy',
      },
      {
        route: Card3,
        name: '',
        text: 'About AI',
      },
      {
        route: Card4,
        name: '',
        text: 'Finances',
      },
      {
        route: Card5,
        name: '',
        text: 'Privacy',
      },
      {
        route: Card7,
        name: '',
        text: 'Others',
      },
    ],
  },

  frequentQuestions: [
    {
      id: 1,
      category: 'Virufy App',
      faqs: [
        {
          id: 10,
          title: 'When and how will the app give COVID-19 prediction results?',
          text: 'Our app is currently for data collection only. We cannot release a COVID-19 prediction app without public health department approvals in each country and clinical studies to validate the AI technology in local conditions. This process can take some weeks or months depending on the speed of the government partner. Virufy welcomes partnerships from health officials and hospitals to bring the technology for free use to the people and to optimize usage of costly PCR tests only when necessary.',
        },
        {
          id: 11,
          title:
            'Where can I download the app? Will it be available for iOS and Android?',
          text: 'The app will be available for download at https://virufy.org/app, as we need government or medical approval in some countries to put our app into the official app stores. The app can be connected to and from a smartphone. Thus, it is compatible with any operating system including iOS or Android.',
        },
      ],
    },
    {
      id: 2,
      category: 'About Virufy',
      faqs: [
        {
          id: 20,
          title: 'How was this initiative created?',
          text: 'When the pandemic hit, Virufy’s founder, Amil, knew smartphones were omnipresent and that COVID impacted the nose, throat, and lungs. He hypothesized that breathing and cough sounds could be analyzed with machine learning to detect COVID patterns. Wanting to make a positive impact, he orchestrated a clinical study with 362 patients in an esteemed university hospital. The original team of Virufy, beginning with Stanford graduate AI students, expanded to volunteers from universities around the world. As a One Young World Japan ambassador who has travelled to over a dozen countries, Amil understands the global perspective and how a smartphone-based solution can be used by people all over the world.',
        },
        {
          id: 21,
          title: 'What will your organization do?',
          text: 'Virufy aims to build the world’s largest dataset of COVID cough sounds by generating a movement where millions of people collectively contribute their data to fight our common enemy, COVID. As a 501(c)(3) non-profit startup free of institutional red tape and with a diverse team across 20 countries, we are well positioned to make this happen. Once approved by local public health authorities, smartphone app(s) for rapid, no-cost COVID testing will be released in low-income countries. These apps will allow for mass-scale, anonymous testing to slow the virus spread. We hope to unite people across borders in our effort to stop COVID and create a new paradigm for global collaboration. We want to create a future where community spread of infectious diseases is greatly reduced, as the world population is empowered by smartphone apps to detect their illnesses early on.',
        },
      ],
    },
    {
      id: 3,
      category: 'About AI',
      faqs: [
        {
          id: 30,
          title: 'Why are COVID-19 coughs distinguishable?',
          text: 'Similar to other respiratory diseases, COVID-19 damages the throat and lungs, creating detecable differences in cough patterns. Consequently, cough sounds can be analyzed to detect COVID-19​.​ Globally, this idea is being actively researched by several prestigious institutions, including Carnegie Mellon (CMU), MIT, and Cambridge. For example, research done by University of Cambridge showed that a simple binary machine learning classifier is able to classify COVID-19 positive patients through breathing and coughing sounds with high accuracy. Similarly, researchers at CMU identified 18 voice features that distinguish positive COVID-19 patients and trained an academic model to detect COVID-19 with high accuracy.',
        },
        {
          id: 31,
          title: 'How will Virufy’s AI algorithm detect COVID-19?',
          text: 'Based on past research, Virufy is developing an AI algorithm that can be used to accurately predict a COVID-19 infection within minutes based on recordings of cough sounds. However, as opposed to previous COVID-19 cough research that targeted the US population, Virufy aims to collect data from multiple sites across the globe. As a student-run initiative with volunteers spanning several countries, Virufy is developing a COVID-19 diagnostic model with greater racial and spatial inclusivity through data that includes a range of ethnicities and community-specific phonological differences.',
        },
      ],
    },
  ],
}
