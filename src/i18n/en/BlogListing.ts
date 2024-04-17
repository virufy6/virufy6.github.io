import { BlogListing } from '../types/BlogListingType'
import card1 from '~/assets/static/images/Blog Cards Images/card1.jpg'
import card2 from '~/assets/static/images/Blog Cards Images/card2.jpg'
import card3 from '~/assets/static/images/Blog Cards Images/card3.jpg'
import card4 from '~/assets/static/images/Blog Cards Images/card4.jpg'

export const blogListing: BlogListing = {
  healthBlog: {
    title: 'Virufy Health Blog',
    categorySelector: {
      optionSelect: [
        { label: 'Select a Category', value: 1 },
        { label: 'Global Impact', value: 2 },
        { label: 'Technology', value: 3 },
        { label: 'Volunteer Stories', value: 4 },
      ],
    },
    selectCategory: 'Select a category from the drop down menu',
  },
  cardItem: [
    {
      id: 1,
      category: '',
      title: 'How Do We Ensure that Healthcare AI is Useful?',
      image: card1,
      description:
        'In healthcare, predictive models need to be more than good predictors. Stanford scholars suggest a framework for determining a model’s worth.',
      readMore: 'Read More',
    },
    {
      id: 2,
      category: '',
      title: 'Trust is AI’s Most Critical Contribution to Health Care',
      image: card2,
      description:
        "AI can reveal remarkable medical insights, but only if patients and doctors have faith in it. Thus, trust has become AI’s singular goal, says Stanford's James Zou.",
      readMore: 'Read More',
    },
    {
      id: 3,
      category: '',
      title: 'Coronavirus disease (COVID-19): Post COVID-19 condition',
      image: card3,
      description:
        'Most people who develop COVID-19 fully recover, but current evidence suggests approximately 10%-20% of people experience a variety of mid- and long-term effects.',
      readMore: 'Read More',
    },
    {
      id: 4,
      category: '',
      title: 'Trust is AI’s Most Critical Contribution to Health Care',
      image: card4,
      description:
        'The COVID-19 pandemic continues to present considerable public health challenges in the United States and around the globe.',
      readMore: 'Read More',
    },
  ],
}
