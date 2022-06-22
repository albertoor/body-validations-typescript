import { Router } from "express"
import { createPost } from "../controllers/PostController"

const router = Router()

router.post('/create', createPost)

export default router