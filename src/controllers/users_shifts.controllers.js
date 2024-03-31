const httpStatus = require('../constants/httpStatus')
const { shiftMessage } = require('../constants/message')
const UserShiftModels = require('../models/schemas/UserShift.models')
const usersShiftsServices = require('../services/users_shifts.services')

const createUserShiftController = async (req, res) => {
    const body = req.body
    // Check nếu tồn tại
    const checkEx = await UserShiftModels.findOne({ user_id: body.user_id, shift_id: body.shift_id })
    console.log(checkEx)
    if (checkEx) {
        return res.status(httpStatus.BAD_REQUEST).json({
            message: shiftMessage.USER_EX_SHIFT
        })
    }
    const result = await usersShiftsServices.createUserShift(body)
    return res.json({
        message: shiftMessage.CREATE_USER_SHIFT_SUCCESS,
        data: result
    })
}

module.exports = {
    createUserShiftController
}
