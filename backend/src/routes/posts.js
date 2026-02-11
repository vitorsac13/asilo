import express from "express"
import PostController from "../controllers/postController.js"
import authMiddleware from "../middlewares/authMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"

const postsRouter = express.Router()
const postController = new PostController()

// LISTAR POSTS
postsRouter.get("/", authMiddleware, async (req, res) => {
    const { success, statusCode, body } = await postController.getPosts()
    res.status(statusCode).json({ success, statusCode, body })
})


// CRIAR POST (ADMIN ONLY)
postsRouter.post("/", authMiddleware, adminMiddleware, async (req, res) => {
    const { success, statusCode, body } = await postController.createPost(req.body)
    res.status(statusCode).json({ success, statusCode, body })
})


// ATUALIZAR POST (ADMIN ONLY)
postsRouter.put("/:id", authMiddleware, adminMiddleware, async (req, res) => {
    const { success, statusCode, body } = await postController.updatePost(req.params.id, req.body)
    res.status(statusCode).json({ success, statusCode, body })
})


// DELETAR POST (ADMIN ONLY)
postsRouter.delete("/:id", authMiddleware, adminMiddleware, async (req, res) => {
    const { success, statusCode, body } = await postController.deletePost(req.params.id)
    res.status(statusCode).json({ success, statusCode, body })
})

export default postsRouter