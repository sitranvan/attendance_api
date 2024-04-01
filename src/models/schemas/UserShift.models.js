const { Schema, model } = require('mongoose')

const UserShift = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    shift_id: {
        type: Schema.Types.ObjectId,
        ref: 'shift',
        required: true
    }
})
module.exports = model('users_shifts', UserShift)
