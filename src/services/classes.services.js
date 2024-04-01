const ClassModels = require('../models/schemas/Class.models')
const mongoose = require('mongoose')
class ClassesServices {
    async getAllClass() {
        const classes = await ClassModels.find()
        return classes
    }
    async deleteClass(id) {
        // check id
        const isObjectId = mongoose.Types.ObjectId.isValid(id)
        if (!isObjectId) return null;

        // tìm các sinh viên có level = id
        const refUsers = await ClassModels.find({ class: id })
        if (refUsers && refUsers.length !== 0) { // có sinh viên
            return null;
        }
        else {
            const level = await ClassModels.findOneAndDelete({ id })
            return level
        }
    }
}

const classesServices = new ClassesServices()
module.exports = classesServices
