const levelsServices = require('../services/levels.services')

const getAllLevelController = async (req, res) => {
    const result = await levelsServices.getAllLevel()
    return res.json({
        data: result
    })
}
const updatelevelController = async (req, res) => {
    const id = req.params.id
    const data = req.body
    const result = await levelsServices.updateLevel(id, data)
    return res.json({
        message: 'Sửa vai trò thành công',
        data: result
    })
}
module.exports = {
    getAllLevelController,
    updatelevelController
}
