import PostDAO from "../dao/postDAO.js";
import { ok, serverError } from '../helpers/httpResponse.js'

export default class PostController {

    constructor() {
        this.dao = new PostDAO()
    }

    async getPosts(){
        try {
            const posts = await this.dao.getPosts()
            return ok(posts)

        } catch (error) {
            return serverError(error)
        }
    }

    async createPost(postData){
        try{
        const result = await dao.createPost(postData)
        return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async deletePost(postId){
        try {
            const result = await this.dao.deletePost(postId)
            return ok(result)

        } catch (error) {
            return serverError(error)
        }
    }

    async updatePost(postId, postData){
        try {
            const result = await this.dao.updatePost(postId, postData)
            return ok(result)
            
        } catch (error) {
            return serverError(error)
        }
    }
}