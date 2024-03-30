const { checkSchema } = require('express-validator')
const { userMessage, utilsMessage, moduleMessage, shiftMessage, attendanceMessage } = require('../constants/message')
const { isValidObjectId } = require('./utils.middlewares')

const createAttendanceValidator = checkSchema({
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

const createAttendanceDetailValidator = checkSchema({
    attendance_id: {
        notEmpty: {
            errorMessage: attendanceMessage.ATTENDANCE_ID_NOT_EMPTY
        },
        custom: {
            options: async (value) => {
                if (isValidObjectId(value) == false) {
                    throw new Error(utilsMessage.OBJECT_ID_INVALID)
                }
            }
        }
    },
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
    }
})

module.exports = {
    createAttendanceValidator,
    createAttendanceDetailValidator
}
