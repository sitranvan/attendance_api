const MajorModels = require('../models/schemas/Major.models')

class MajorService {
    async createMajor(body) {
        const major = await MajorModels.create(body)
        return major
    }
}

const MajorService1 = new MajorService()
module.exports = MajorService1