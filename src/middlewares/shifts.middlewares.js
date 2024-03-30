const { checkSchema } = require('express-validator')
const { shiftMessage, userMessage, utilsMessage } = require('../constants/message')
const { isValidObjectId } = require('./utils.middlewares')

const createShiftValidator = checkSchema({
    shift_time: {
        notEmpty: {
            errorMessage: shiftMessage.SHIFT_TIME_NOT_EMPTY
        }
    },
    shift_name: {
        notEmpty: {
            errorMessage: shiftMessage.SHIFT_NAME_NOT_EMPTY
        },
        isLength: {
            errorMessage: shiftMessage.SHIFT_NAME_MIN_LENGTH,
            options: { min: 4 }
        }
    }
})

const createUserShiftValidator = checkSchema({
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
    shift_id: {
        notEmpty: {
            errorMessage: shiftMessage.SHIFT_ID_NOT_EMPTY
        },
        custom: {
            options: async (value) => {
                if (isValidObjectId(value) == false) {
                    throw new Error(utilsMessage.OBJECT_ID_INVALID)
                }
            }
        }
    }
})

module.exports = {
    createShiftValidator,
    createUserShiftValidator
}
