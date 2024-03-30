const ShiftModels = require('../models/schemas/Shift.models')

class ShiftsServices {
    async createShift(body) {
        const shift = await ShiftModels.create(body)
        return shift
    }
}

const shiftsServices = new ShiftsServices()
module.exports = shiftsServices
