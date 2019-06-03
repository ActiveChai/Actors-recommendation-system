const mongoose = require('mongoose')

let movieSchema = new mongoose.Schema({
    id: Number,
    img: String,
    name: String,
    rating: Number,
    year: Number,
    tags: String,
    summary: String
})

module.exports = mongoose.model('Movies', movieSchema)
