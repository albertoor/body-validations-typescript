import { Request, Response } from 'express'
import { validate } from '../lib/validators/TypeValidator'
import { Post } from '../interfaces/Post'
import { SocialMedia } from '../enums/enums'

export function createPost(req: Request, res: Response) {
  const post: Post = req.body
  const validator = validate()

  validator.isNumber(post.id, "id")
  validator.isNumber(post.amount, "amount")
  validator.isString(post.name, "name")
  validator.isBoolean(post.editable, "editable")
  validator.isDate(post.date, "date")
  validator.isInEnum(post.socialMedia, SocialMedia, "social media")
  validator.isEmail(post.contact)
  validator.withPattern(post.category, new RegExp(/^[A-Za-z]+$/), "category")

  const errors = validator.getErrors()

  return res.json({ errors: errors })
}