const AttendanceModels = require('../models/schemas/Attendance.models')
const UserShiftModels = require('../models/schemas/UserShift.models')
const UserModuleModels = require('../models/schemas/UserModule.models')
const attendanceDetailsServices = require('../services/attendance_details.services')
const UserModles = require('../models/schemas/User.modles')
const AttendanceDetailModels = require('../models/schemas/AttendanceDetail.models')
const httpStatus = require('../constants/httpStatus')
const { attendanceMessage } = require('../constants/message')
const sheetsInsert = require('../utils/sheets')

const createAttendanceDetailController = async (req, res) => {
    const body = req.body

    const attendance = await AttendanceModels.findById(body.attendance_id)

    const userShift = await UserShiftModels.findOne({
        user_id: body.user_id, // Change to code
        shift_id: attendance.shift_id
    })
    const userModule = await UserModuleModels.findOne({ user_id: body.user_id, module_id: attendance.module_id })
    const user = await UserModles.findById(body.user_id)

    const attendanceDetail = await AttendanceDetailModels.findOne({
        attendance_id: body.attendance_id,
        user_id: body.user_id
    })

    if (attendanceDetail) {
        return res.status(httpStatus.BAD_REQUEST).json({
            message: attendanceMessage.ATTENDANCE_DETAIL_EXISTED
        })
    }
    if (!user) {
        return res.status(httpStatus.BAD_REQUEST).json({
            message: attendanceMessage.USER_NOT_FOUND
        })
    }
    if (!userShift || !userModule) {
        return res.status(httpStatus.BAD_REQUEST).json({
            message: attendanceMessage.USER_NOT_IN_SHIFT_OR_MODULE
        })
    }
    const result = await attendanceDetailsServices.createAttendanceDetail({
        attendance_id: body.attendance_id,
        user_id: body.user_id,
        status: 'present',
        note: body.note
    })

    await sheetsInsert({ value: user })

    return res.json(result)
}

const getStudentAttendanceDetailController = async (req, res) => {
    const { attendance_id } = req.params
    const result = await attendanceDetailsServices.getStudentAttendanceDetail(attendance_id)
    return res.json({
        data: result
    })
}

const editNoteAttendanceDetailController = async (req, res) => {
    const { note, attendance_id, user_id } = req.body
    await attendanceDetailsServices.editNoteAttendanceDetail(attendance_id, user_id, note)
    return res.json({
        message: 'Ghi chú thành công'
    })
}

const getStudentAttendanceDetailByIdController = async (req, res) => {
    const { attendance_id, user_id } = req.params
    const result = await attendanceDetailsServices.getStudentAttendanceDetailById(attendance_id, user_id)
    return res.json({
        data: result
    })
}

const deleteAttendanceDetailController = async (req, res) => {
    const { attendance_id, user_id } = req.params
    const result = await attendanceDetailsServices.deleteAttendanceDetail(attendance_id, user_id)
    return res.json({
        data: result
    })
}

module.exports = {
    createAttendanceDetailController,
    getStudentAttendanceDetailController,
    editNoteAttendanceDetailController,
    getStudentAttendanceDetailByIdController,
    deleteAttendanceDetailController
}
