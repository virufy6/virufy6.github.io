import advisor1 from '~/assets/static/images/cards/advisor1.jpg'
import advisor2 from '~/assets/static/images/cards/advisor2.jpg'
import advisor3 from '~/assets/static/images/cards/advisor3.jpg'

export const home = {
  sectionTestOnline: {
    title: 'An online Covid-19 test is possible',
    text: 'Virufy is a nonprofit research organization developing artificial intelligence (AI) technology to rapidly screen for COVID-19 from cough patterns, through use of a smartphone at no cost.',
    buttons: ['share your cough', 'learn more'],
  },
  sectionTestExplain: {
    title: 'How our online Covid-19 test works',
    firstStep: '1. Record your cough',
    secondStep: '2. AI analyzed for COVID patterns',
    stepThree: '3. COVID risk status reported',
  },
  sectionCovidMap: {
    title: 'COVID-19 map',
    text: "Contribute in the fight against COVID-19 by recording your cough through our mobile App to improve our predictive model. View our COVID-19 Dashboard and see how many people in your country have already 'shared their cough'!",
    button: 'Our Data',
  },
  sectionOurFounder: {
    title: 'Meet Our Founder',
    nameFounder: 'Amil Khanzada',
    description:
      'MBA Candidate, Haas School of Business Master of Engineering Candidate, Department of Electrical Engineering and Computer Sciences',
    button: 'read more',
  },
  sectionVirufyCommunity: {
    title: 'The Virufy Community',
    descriptionVirufy:
      'Virufy was founded in March 2020. Today, Virufighters across five continents are committed to making disease screening instant and free of charge through innovative technology.',
    titleBeliefStatement:
      'We believe that together we can help improve the world',
    descriptionBeliefStatement:
      'People all over the world support and work with us to combat this type of disease but many people like you can help us too',
  },
  sectionOurSupporters: {
    title: 'Our Supporters',
    button: 'Become  a supporter',
  },
  sectionMissionStatement: {
    title: 'Let’s help the world and save many lives by recording your cough',
    buttonShare: 'share your cough',
    buttonLearn: 'learn more',
  },
  cardsTestimonials: [
    {
      id: 1,
      name: 'Francisco Perez',
      testimonial:
        'To teach the most effective way to support the people we love.',
      picture: advisor2,
    },
    {
      id: 2,
      name: 'Rosa Frank',
      testimonial:
        'To teach the most effective way to support the people we love.',
      picture: advisor1,
    },
    {
      id: 3,
      name: 'Clara Diaz',
      testimonial:
        'To teach the most effective way to support the people we love.',
      picture: advisor3,
    },
  ],
}
