const mongoose = require('mongoose')

let relationshipSchema = new mongoose.Schema({
    movie_id: Number,
    person_id: Number
})

module.exports = mongoose.model('Relationships', relationshipSchema)
