const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    id:Number,
    title:{type : String},
    author: {type:String},
    price:Number,
    rating: {
        type:Number,
        default:0
    }
})

const Books = mongoose.model("Books",bookSchema)

module.exports=Books;