const levelsServices = require('../services/levels.services') // lưu ý đường dẫn này

const getAllLevelController = async (req, res) => {
    const result = await levelsServices.getAllLevel()
    return res.json({
        data: result
    })
}
const createLevelController = async (req, res) => {
    const body = req.body
    const result = await levelsServices.createLevel(body)
    return res.json({
        message: 'Thêm vai trò thành công', // Sửa ở major và level
        data: result
    })
}


module.exports = {
    getAllLevelController,
    createLevelController
}
