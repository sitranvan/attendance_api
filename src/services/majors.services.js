const MajorModels = require('../models/schemas/Major.models')

class MajorsServices {
    async getAllMajor() {
        const majors = await MajorModels.find()
        return majors
    }
}

const majorsServices = new MajorsServices()
module.exports = majorsServices
