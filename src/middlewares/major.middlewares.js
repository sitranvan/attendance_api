const { checkSchema } = require('express-validator')
const MajorModels = require('../models/schemas/Major.models')
const { majorMessage } = require('../constants/message')

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
    // slug: {
    //     notEmpty: {
    //         errorMessage: roleMessage.SLUG_NOT_EMPTY
    //     },
    //     // Kiểm tra nếu tồn tại slug
    //     custom: {
    //         options: async (value) => {
    //             const role = await RoleModels.findOne({ slug: value })
    //             if (role) {
    //                 throw new Error(roleMessage.SLUG_EXISTED)
    //             }
    //         }
    //     }
    // }
})

module.exports = {
    createMajorValidator
}
