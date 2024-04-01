const ClassModels = require('../models/schemas/Class.models')

class ClassesServices {
    async getAllClass() {
        const classes = await ClassModels.find()
        return classes
    }
    async createClass(body) {
        const _class = await ClassModels.create(body)
        return _class
    }
}

const classesServices = new ClassesServices()
module.exports = classesServices
