import { StaticImageData } from 'next/image'

//---- | ----
// ---- BlogListing ---

export interface BlogObjects {
  id: number
  category: string
  title: string
  image: string | StaticImageData
  description: string
  readMore: string
}
export interface BlogListing {
  healthBlog: HealthBlog
  cardItem: BlogObjects[]
}

//---- | ----
// ---- Category select ---

export interface HealthBlog {
  title: string
  categorySelector: OptionList
  selectCategory: string
}

export interface Selector {
  label: string
  value: number
}

export interface OptionList {
  optionSelect: Selector[]
}
