const LevelModels = require('../models/schemas/Level.models')
const mongoose = require('mongoose')

class LevelsServices {
    async getAllLevel() {
        const levels = await LevelModels.find()
        return levels
    }
    async deleteLevel(id) {
        // check id


        // tìm các sinh viên có level = id
        const refUsers = await LevelModels.find({ level: id })
        if (refUsers && refUsers.length !== 0) { // có sinh viên
            return null;
        }
        else {
            const level = await LevelModels.findOneAndDelete({ id })
            return level
        }
    }
}

const levelsServices = new LevelsServices()
module.exports = levelsServices
