const mongoose = require('mongoose')

let personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    img: String,
    sex: String,
    birthday: String,
    birthplace: String,
    summary: String
})

module.exports = mongoose.model('Persons', personSchema)
