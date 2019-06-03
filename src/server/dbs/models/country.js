const mongoose = require('mongoose')

let countrySchema = new mongoose.Schema({
    country: String,
    actorNum: Number
})

module.exports = mongoose.model('Countrys', countrySchema)
