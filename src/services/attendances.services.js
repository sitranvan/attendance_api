const AttendanceModels = require('../models/schemas/Attendance.models')
const AttendanceDetailModels = require('../models/schemas/AttendanceDetail.models')
const UserModuleModels = require('../models/schemas/UserModule.models')
const UserShiftModels = require('../models/schemas/UserShift.models')

class AttendancesServices {
    async createAttendance(body) {
        const attendance = await AttendanceModels.create(body)
        return attendance
    }

    async getAllAttendance() {
        const attendances = await AttendanceModels.find().populate('module_id').populate('shift_id').populate('user_id')
        return attendances
    }
    async getAttendanceById(attendance_id) {
        const attendance = await AttendanceModels.findById(attendance_id)
            .populate('module_id')
            .populate('shift_id')
            .populate('user_id')
        return attendance
    }
    async getAllUserAttendanceShift(attendance_id) {
        const attendanceList = await AttendanceModels.findById(attendance_id).populate('shift_id').populate('module_id')
        const userModuleList = await UserModuleModels.find({ module_id: attendanceList.module_id })
            .populate('user_id')
            .populate('module_id')
        return userModuleList
    }
}

const attendancesServices = new AttendancesServices()
module.exports = attendancesServices
