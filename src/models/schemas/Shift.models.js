const { Schema, model } = require('mongoose')

const Shift = new Schema({
    shift_time: {
        type: Date,
        default: ''
    },
    shift_name: {
        type: String,
        default: ''
    },
    days_of_week: {
        type: String,
        default: ''
    }
})
module.exports = model('shift', Shift)
