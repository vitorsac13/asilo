import { Mongo } from "../database/mongo.js"
import { ObjectId } from "mongodb"

const collectionName = "post"

export default class MedicoDAO {

  async getPosts() {
    const result = await Mongo.db
      .collection(collectionName)
      .find({})
      .toArray()

    return result
  }

  async createPost(postData) {

    // Gera ID público (opcional)
    const post = {
      _id: new ObjectId(),
      title: postData.title,
      subtitle: postData.subtitle,
      content: postData.content,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const result = await Mongo.db
      .collection(collectionName)
      .insertOne(post)

    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId,
      post
    }
  }

  async updatePost(postId, postData) {

    const updateData = {
      ...postData,
      updatedAt: new Date()
    }

    const result = await Mongo.db
      .collection(collectionName)
      .findOneAndUpdate(
        { _id: new ObjectId(postId) },
        { $set: updateData },
        { returnDocument: "after" } // retorna documento atualizado
      )

    return result
  }

  async deletePost(postId) {
    const result = await Mongo.db
      .collection(collectionName)
      .findOneAndDelete({ _id: new ObjectId(postId) })

    return result
  }
}