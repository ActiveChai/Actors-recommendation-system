const mongoose = require('mongoose')

let reactorSchema = new mongoose.Schema({
    actor: String,
    PA: Number,
    PE: Number,
    PD: Number,
    PH: Number,
    PG: Number,
    PB: Number,
    PK: Number,
    NA: Number,
    NB: Number,
    NJ: Number,
    NH: Number,
    PF: Number,
    NI: Number,
    NC: Number,
    NG: Number,
    NE: Number,
    ND: Number,
    NN: Number,
    NK: Number,
    NL: Number,
    PC: Number,
    count: Number
})

module.exports = mongoose.model('Reactors', reactorSchema)
