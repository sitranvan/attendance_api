const ClassModels = require('../models/schemas/Class.models')

class ClassesServices {
    async getAllClass() {
        const classes = await ClassModels.find()
        return classes
    }
    async updatelevel(id, body) {
        const levels = await ClassModels.updateOne({ id }, body)
        return levels
    }
}

const classesServices = new ClassesServices()
module.exports = classesServices
