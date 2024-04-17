import { StaticImageData } from 'next/image'
//---- | ----
// ---- BlogDetail ---

export interface BlogDetailsObject {
    id: string
    title: string
    category: string
    date: string
    autor: string
    image: string | StaticImageData
    description: string
    leaveAComment: string
  }
  
  export interface BlogDetails {
    itemSelected: BlogDetailsObject[]
  }
  