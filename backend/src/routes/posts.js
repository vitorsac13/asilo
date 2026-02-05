import express from 'express'
import PostController from '../controllers/postController.js'

const postsRouter = express.Router()

const postController = new PostController()

postsRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await postController.getPosts()

    res.status(statusCode).send({ success, statusCode, body })
})

postsRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await postController.deletePost(req.params.id)
    res.status(statusCode).send({ success, statusCode, body })
})

postsRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await postController.updatePost(req.params.id, req.body)
    res.status(statusCode).send({ success, statusCode, body })
})


export default usersRouter