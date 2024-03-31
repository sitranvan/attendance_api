const { attendanceMessage } = require('../constants/message')
const attendancesServices = require('../services/attendances.services')

const createAttendanceController = async (req, res) => {
    const body = req.body

    const result = await attendancesServices.createAttendance(body)
    return res.json({
        message: attendanceMessage.ATTENDANCE_CREATED,
        data: result
    })
}
const getAllAttendanceController = async (req, res) => {
    const result = await attendancesServices.getAllAttendance()
    return res.json({
        data: result
    })
}

const getAttendanceByIdController = async (req, res) => {
    const { attendance_id } = req.params
    const result = await attendancesServices.getAttendanceById(attendance_id)
    return res.json({
        data: result
    })
}

const getAllUserAttendanceShiftController = async (req, res) => {
    const { attendance_id } = req.params
    const result = await attendancesServices.getAllUserAttendanceShift(attendance_id)
    return res.json({
        data: result
    })
}

module.exports = {
    createAttendanceController,
    getAllAttendanceController,
    getAllUserAttendanceShiftController,
    getAttendanceByIdController
}
