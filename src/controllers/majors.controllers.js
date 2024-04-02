const majorsServices = require('../services/majors.services')

const getAllMajorController = async (req, res) => {
    const result = await majorsServices.getAllMajor()
    return res.json({
        data: result
    })
}
const updateMajorController = async (req, res) => {
    const id = req.params.id
    const data = req.body
    const result = await majorsServices.updateMajor(id, data)
    return res.json({
        message: 'sửa chuyên ngành thành công',
        data: result
    })
}
module.exports = {
    getAllMajorController,
    updateMajorController
}
