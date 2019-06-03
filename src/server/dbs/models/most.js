const mongoose = require('mongoose')

let mostSchema = new mongoose.Schema({
    id: Number,
    name: String,
    img: String,
    sex: String,
    birthday: String,
    birthplace: String,
    summary: String,
    filmNum: Number
})

module.exports = mongoose.model('Mosts', mostSchema)
