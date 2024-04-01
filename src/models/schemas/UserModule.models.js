const { Schema, model } = require('mongoose')

const UserModule = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    module_id: {
        type: Schema.Types.ObjectId,
        ref: 'module',
        required: true
    }
})
module.exports = model('users_modules', UserModule)
