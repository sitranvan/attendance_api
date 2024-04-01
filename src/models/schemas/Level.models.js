const { Schema, model } = require('mongoose')

const Level = new Schema({
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

module.exports = model('level', Level)