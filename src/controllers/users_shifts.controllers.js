const usersShiftsServices = require('../services/users_shifts.services')

const createUserShiftController = async (req, res) => {
    const body = req.body
    const result = await usersShiftsServices.createUserShift(body)
    return res.json(result)
}

module.exports = {
    createUserShiftController
}
