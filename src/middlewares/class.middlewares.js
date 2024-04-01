const { checkSchema } = require('express-validator')
const ClassModels = require('../models/schemas/Class.models')
const { classMessage } = require('../constants/message')

const createClassValidator = checkSchema({
    name: {
        notEmpty: {
            errorMessage: classMessage.CLASS_NOT_EMPTY
        },
        // Kiểm tra nếu tồn tại name
        custom: {
            options: async (value) => {
                const major = await ClassModels.findOne({ name: value })
                if (major) {
                    throw new Error(classMessage.CLASS_EXISTED)
                }
            }
        }
    }
})

module.exports = {
    createClassValidator
}
