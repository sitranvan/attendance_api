const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    code: {
        type: String,
        default: ''
    },
    fullname: {
        type: String,
        default: ''
    },
    gender: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    },
    qr_code: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        default: '' //
    }
    // level: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'level',
    //     default: null
    // },
    // major: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'major',
    //     default: null
    // },
    // class: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'class',
    //     default: null
    // }
})

module.exports = model('User', UserSchema)
