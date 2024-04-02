const { attendanceMessage } = require('../constants/message')
const AttendanceModels = require('../models/schemas/Attendance.models')
const ModuleModels = require('../models/schemas/Module.models')
const ShiftModels = require('../models/schemas/Shift.models')
const UserModles = require('../models/schemas/User.modles')
const attendancesServices = require('../services/attendances.services')

const createAttendanceController = async (req, res) => {
    const body = req.body
    // Tìm bản ghi có sheet_number lớn nhất trong AttendanceModels
    console.log(body)
    const user = await UserModles.findById(body.user_id)
    const module = await ModuleModels.findById(body.module_id)
    const strName = user.fullname + ' ' + module.name

    const result = await attendancesServices.createAttendance({
        user_id: body.user_id,
        module_id: body.module_id,
        shift_id: body.shift_id,
        sheet_number: strName
    })
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
