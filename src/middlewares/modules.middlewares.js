const { checkSchema } = require('express-validator')
const ModuleModels = require('../models/schemas/Module.models')
const { moduleMessage, userMessage, utilsMessage } = require('../constants/message')
const { isValidObjectId } = require('./utils.middlewares')

const createModuleValidator = checkSchema(
    {
        name: {
            notEmpty: {
                errorMessage: moduleMessage.MODULE_NOT_EMPTY
            },
            // Kiểm tra nếu tồn tại name
            custom: {
                options: async (value) => {
                    const module = await ModuleModels.findOne({ name: value })
                    if (module) {
                        throw new Error(moduleMessage.MODULE_EXISTED)
                    }
                }
            }
        }
    },
    ['body']
)

const createUserModuleValidator = checkSchema(
    {
        user_id: {
            notEmpty: {
                errorMessage: userMessage.USER_ID_NOT_EMPTY
            },
            custom: {
                options: async (value) => {
                    if (isValidObjectId(value) == false) {
                        throw new Error(utilsMessage.OBJECT_ID_INVALID)
                    }
                }
            }
        },
        module_id: {
            notEmpty: {
                errorMessage: moduleMessage.MODULE_ID_NOT_EMPTY
            },
            custom: {
                options: async (value) => {
                    if (isValidObjectId(value) == false) {
                        throw new Error(utilsMessage.OBJECT_ID_INVALID)
                    }
                }
            }
        }
    },
    ['body']
)

module.exports = {
    createModuleValidator,
    createUserModuleValidator
}
