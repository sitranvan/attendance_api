const AttendanceDetailModels = require('../models/schemas/AttendanceDetail.models')

class AttendanceDetailsServices {
    async createAttendanceDetail(body) {
        const attendanceDetail = await AttendanceDetailModels.create(body)
        return attendanceDetail
    }

    async getStudentAttendanceDetail(attendance_id) {
        const userAttendanceDetails = await AttendanceDetailModels.find({ attendance_id }).populate('user_id')
        return userAttendanceDetails
    }

    async editNoteAttendanceDetail(attendance_id, user_id, note) {
        const attendanceDetail = await AttendanceDetailModels.findOne({ attendance_id, user_id })
        if (!attendanceDetail) {
            return null
        }
        attendanceDetail.note = note
        await attendanceDetail.save()
        return attendanceDetail
    }

    async getStudentAttendanceDetailById(attendance_id, user_id) {
        const userAttendanceDetail = await AttendanceDetailModels.findOne({ attendance_id, user_id }).populate(
            'user_id'
        )
        return userAttendanceDetail
    }

    async deleteAttendanceDetail(attendance_id, user_id) {
        const attendanceDetail = await AttendanceDetailModels.findOneAndDelete({ attendance_id, user_id })
        return attendanceDetail
    }
}
const attendanceDetailsServices = new AttendanceDetailsServices()
module.exports = attendanceDetailsServices
