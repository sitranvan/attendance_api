const { Schema, model } = require('mongoose')

const Attendance = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    shift_id: {
        type: Schema.Types.ObjectId,
        ref: 'shift',
        required: true
    },
    module_id: {
        type: Schema.Types.ObjectId,
        ref: 'module',
        required: true
    }
})
module.exports = model('attendance', Attendance)
