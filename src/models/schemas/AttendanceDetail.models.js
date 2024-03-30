const { Schema, model } = require('mongoose')

const AttendanceDetail = new Schema(
    {
        attendance_id: {
            type: Schema.Types.ObjectId,
            ref: 'attendance',
            required: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        status: {
            type: String,
            enum: ['absent', 'present'],
            required: true,
            default: 'absent'
        },
        note: {
            type: String,
            default: ''
        }
    },
    {
        timestamps: true
    }
)
module.exports = model('attendance_details', AttendanceDetail)
