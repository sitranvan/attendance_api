const ClassModels = require('../models/schemas/Class.models')

class ClassesServices {
    async getAllClass() {
        const classes = await ClassModels.find()
        return classes
    }
}

const classesServices = new ClassesServices()
module.exports = classesServices
