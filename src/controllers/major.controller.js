const majorService = require('../services/major.services')

const createMajorController = async (req, res) => {
    const body = req.body
    const result = await majorService.createMajor(body)
    return res.json({
        message: 'Thêm vai trò thành công',
        data: result
    })
}
module.exports = {
    createMajorController
}