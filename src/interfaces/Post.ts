import { SocialMedia } from '../enums/enums'

export interface Post {
  id: number
  name: string
  date: string
  editable: boolean
  amount: number
  socialMedia: SocialMedia
  contact: string
  category: string
}