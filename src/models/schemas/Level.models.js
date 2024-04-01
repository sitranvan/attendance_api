const { Schema, model } = require('mongoose')

const Level = new Schema({
    name: {
        type: String,
        default: ''
    },

    description: {
        type: String,
        default: ''
    }
})
module.exports = model('level', Level)
