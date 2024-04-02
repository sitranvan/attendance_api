const { majorMessage } = require('../constants/message')
const MajorModels = require('../models/schemas/Major.models')
const { checkSchema } = require('express-validator')

const createMajorValidator = checkSchema({
    name: {
        notEmpty: {
            errorMessage: majorMessage.MAJOR_NOT_EMPTY
        },
        // Kiểm tra nếu tồn tại name
        custom: {
            options: async (value) => {
                const major = await MajorModels.findOne({ name: value })
                if (major) {
                    throw new Error(majorMessage.MAJOR_EXISTED)
                }
            }
        }
    }
})
module.exports = {
    createMajorValidator
}
