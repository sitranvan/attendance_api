const LevelModels = require('../models/schemas/Level.models')

class LevelService {
    async createLevel(body) {
        const level = await LevelModels.create(body)
        return level
    }
}

const LevelService = new LevelService()
module.exports = LevelService