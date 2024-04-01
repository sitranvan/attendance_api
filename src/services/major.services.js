const MajorModels = require("../models/schemas/Major.models")


class MajorsService {
    async getAllMajor() {
        const major = await MajorModels.find()
        return major
    }
    async createMajor(body) {
        const major = await MajorModels.create(body)
        return major
    }
    async deleteMajorById(majorId) {
        const major = await MajorModels.findByIdAndDelete(majorId)
        return major
    }
}

const majorsService = new MajorsService()
module.exports = majorsService
