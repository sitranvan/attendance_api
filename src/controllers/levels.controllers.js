const levelsServices = require('../services/levels.services')

const getAllLevelController = async (req, res) => {
    const result = await levelsServices.getAllLevel()
    return res.json({
        data: result
    })
}

module.exports = {
    getAllLevelController
}
