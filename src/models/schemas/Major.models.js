const { Schema, model } = require('mongoose')

const Major = new Schema({
    name: {
        type: String,
        default: ''
    },

    description: {
        type: String,
        default: ''
    }
})
module.exports = model('major', Major)
