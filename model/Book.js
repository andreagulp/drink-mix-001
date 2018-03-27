const mongoose = require('mongoose')
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    description: String,
    cover: String, //can add a default img if no image are indicated
    rating: Number,
    author: String,
    status: String,
    visible: Boolean,
    dateAdded: Date,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
})


const Book = mongoose.model('books', bookSchema)
module.exports = Book