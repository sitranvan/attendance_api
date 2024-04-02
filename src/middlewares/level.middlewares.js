const { checkSchema } = require('express-validator')
const LevelModels = require('../models/schemas/Level.models')
const { levelMessage } = require('../constants/message')

const createLevelValidator = checkSchema({
    name: {
        notEmpty: {
            errorMessage: levelMessage.LEVEL_NOT_EMPTY
        },
        // Kiểm tra nếu tồn tại name
        custom: {
            options: async (value) => {
                const major = await LevelModels.findOne({ name: value })
                if (major) {
                    throw new Error(levelMessage.LEVEL_EXISTED)
                }
            }
        }
    }
})

module.exports = {
    createLevelValidator
}