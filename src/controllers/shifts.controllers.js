const shiftsServices = require('../services/shifts.services')

const createShiftController = async (req, res) => {
    const body = req.body
    const result = await shiftsServices.createShift(body)
    return res.json(result)
}

module.exports = {
    createShiftController
}
