const { Schema, model } = require('mongoose')

const Class = new Schema({
    name: {
        type: String,
        default: ''
    },

    description: {
        type: String,
        default: ''
    }
})
module.exports = model('class', Class)
