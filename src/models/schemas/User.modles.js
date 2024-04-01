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
    isBlock: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: '' //
    },
    level: {
        type: String,
        default: ''
    },
    major: {
        type: String,
        default: ''
    },
    class: {
        type: String,
        default: ''
    }
})

module.exports = model('User', UserSchema)
