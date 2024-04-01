const UserShiftModels = require('../models/schemas/UserShift.models')

class UsersShiftsServices {
    async createUserShift(body) {
        const role = await UserShiftModels.create(body)
        return role
    }
}

const usersShiftsServices = new UsersShiftsServices()
module.exports = usersShiftsServices
