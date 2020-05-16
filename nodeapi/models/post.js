const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }, 
    photo: {
        data: Buffer,
        contentType: String
    },
    poster: {
        type: ObjectId, 
        ref: "User"
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Post", postSchema)