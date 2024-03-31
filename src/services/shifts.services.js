const ShiftModels = require('../models/schemas/Shift.models')

class ShiftsServices {
    async createShift(body) {
        const shift = await ShiftModels.create(body)
        return shift
    }

    async getAllShifts() {
        const shifts = await ShiftModels.find()
        return shifts
    }
}

const shiftsServices = new ShiftsServices()
module.exports = shiftsServices
