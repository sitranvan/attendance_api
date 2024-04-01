const { Schema, model } = require('mongoose')

const Module = new Schema({
    name: {
        type: String,
        default: ''
    },

    description: {
        type: String,
        default: ''
    }
})
module.exports = model('module', Module)
