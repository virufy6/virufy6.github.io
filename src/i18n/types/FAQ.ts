import type { ImageText, TypeText } from './BaseInterfaces'

export interface FAQ {
  headerSection: FAQHeader
  topicsSection: FAQTopics
  questionsByTopic: QuestionsByTopic
}

interface FAQHeader extends ImageText {
  title: TypeText[]
  texts: TypeText[]
  input: FAQInput
}

interface FAQInput extends ImageText {
  placeholder: string
}

interface FAQTopics {
  title: string
  cards: FAQTopicCard[]
}

export interface FAQTopicCard extends ImageText {
  title: string
}

interface QuestionsByTopic {
  [key: string]: QA[]
}

export interface QA {
  question: string
  answer: string
}
