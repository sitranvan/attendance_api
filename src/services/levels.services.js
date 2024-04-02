const LevelModels = require('../models/schemas/Level.models')

class LevelsServices {
    async getAllLevel() {
        const levels = await LevelModels.find()
        return levels
    }
    async updatelevel(id, body) {
        const levels = await LevelModels.updateOne({ id }, body)
        return levels
    }
}

const levelsServices = new LevelsServices()
module.exports = levelsServices
