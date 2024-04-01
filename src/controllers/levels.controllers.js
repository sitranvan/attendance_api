const levelsServices = require('../services/levels.services')

const getAllLevelController = async (req, res) => {
    const result = await levelsServices.getAllLevel()
    return res.json({
        data: result
    })
}

const deleteLevelController = async (req, res) => {
    const id = req.params.id
    const result = await levelsServices.deleteLevel(id)
    return res.json({
        message: 'Xoá thành công',
        data: result
    })
}

module.exports = {
    getAllLevelController, deleteLevelController
}
