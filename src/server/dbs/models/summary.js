const mongoose = require('mongoose')

let summarySchema = new mongoose.Schema({
    id: Number,
    summ: String
})

module.exports = mongoose.model('Summarys', summarySchema)
