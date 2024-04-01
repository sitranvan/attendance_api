const shiftsServices = require('../services/shifts.services')

const createShiftController = async (req, res) => {
    const body = req.body
    const result = await shiftsServices.createShift(body)
    return res.json({
        message: 'Tạo ca điểm danh thành công',
        data: result
    })
}

const getAllShiftsController = async (req, res) => {
    const result = await shiftsServices.getAllShifts()
    return res.json({
        data: result
    })
}
const checkExistAttendanceController = async (req, res) => {
    const { shift_id } = req.params
    const result = await shiftsServices.checkExistAttendance(shift_id)
    return res.json({
        data: result
    })
}

module.exports = {
    createShiftController,
    getAllShiftsController,
    checkExistAttendanceController
}
