const LevelModels = require('../models/schemas/Level.models')

class LevelsServices {
    async getAllLevel() {
        const levels = await LevelModels.find()
        return levels
    }
    async createLevel(body) {
        const level = await LevelModels.create(body)
        return level
    }
}

const levelsServices = new LevelsServices()
module.exports = levelsServices
