const ShiftModels = require('../models/schemas/Shift.models')
const AttendanceModels = require('../models/schemas/Attendance.models')

class ShiftsServices {
    async createShift(body) {
        const shift = await ShiftModels.create(body)
        return shift
    }

    async getAllShifts() {
        const shifts = await ShiftModels.find()
        return shifts
    }

    async checkExistAttendance(shift_id) {
        const shift = await AttendanceModels.findOne({ shift_id })
        return shift
    }
}

const shiftsServices = new ShiftsServices()
module.exports = shiftsServices
