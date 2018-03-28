const mongoose = require('mongoose')
const { Schema } = mongoose;

const drinkSchema = new Schema({
    name: String,
    description: String,
    glass: String,
    img: String, //can add a default img if no image are indicated
    rating: Number,
    visible: Boolean,
    dateAdded: Date,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
})


const Drink = mongoose.model('drinks', drinkSchema)
module.exports = Drink