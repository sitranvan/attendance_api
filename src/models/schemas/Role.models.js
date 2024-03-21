const { Schema, model } = require('mongoose')

const Role = new Schema({
    name: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
})
module.exports = model('role', Role)
