const levelService = require('../services/major.services')

const createLevelController = async (req, res) => {
    const body = req.body
    const result = await levelService.createLevel(body)
    return res.json({
        message: 'Thêm vai trò thành công', // Sửa ở major và level
        data: result
    })
}
module.exports = {
    createLevelController
}