const { Schema, model } = require('mongoose')

const RefreshToken = Schema({
    user_id: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    iat: {
        type: Date,
        required: true
    },
    exp: {
        type: Date,
        required: true
    }
})
module.exports = model('refresh_token', RefreshToken)
