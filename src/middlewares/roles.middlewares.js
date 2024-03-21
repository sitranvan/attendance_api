const { checkSchema } = require('express-validator')
const RoleModels = require('../models/schemas/Role.models')
const { roleMessage } = require('../constants/message')

const createRoleValidator = checkSchema({
    name: {
        notEmpty: {
            errorMessage: roleMessage.ROLE_NOT_EMPTY
        },
        // Kiểm tra nếu tồn tại name
        custom: {
            options: async (value) => {
                const role = await RoleModels.findOne({ name: value })
                if (role) {
                    throw new Error(roleMessage.ROLE_EXISTED)
                }
            }
        }
    },
    slug: {
        notEmpty: {
            errorMessage: roleMessage.SLUG_NOT_EMPTY
        },
        // Kiểm tra nếu tồn tại slug
        custom: {
            options: async (value) => {
                const role = await RoleModels.findOne({ slug: value })
                if (role) {
                    throw new Error(roleMessage.SLUG_EXISTED)
                }
            }
        }
    }
})

module.exports = {
    createRoleValidator
}
