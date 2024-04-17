import { StaticImageData } from 'next/image'

interface Card {
  route: StaticImageData
  name: string
  text: string
}

export interface FAQ {
  sectionSearchQuestion: {
    title: string
    descriptionFirstSearch: string
    secondDescriptionSearch: string
  }
  sectionCardsQuestionsTopics: {
    title: string
    cards: Card[]
  }
  frequentQuestions: FrequentQuestion[]
}

export interface FrequentQuestion {
  id: number
  category: string
  faqs: Question[]
}

export interface Question {
  id: number
  title: string
  text: string
}
