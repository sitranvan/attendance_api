const majorsServices = require('../services/majors.services')

const getAllMajorController = async (req, res) => {
    const result = await majorsServices.getAllMajor()
    return res.json({
        data: result
    })
}

module.exports = {
    getAllMajorController
}
