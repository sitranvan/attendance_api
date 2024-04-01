const { Schema, model } = require('mongoose')

const Major = new Schema({
    id: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        default: ''
    }
}
)

module.exports = model('major', Major)