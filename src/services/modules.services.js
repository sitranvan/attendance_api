const ModuleModels = require('../models/schemas/Module.models')

class ModulesServices {
    async createModule(body) {
        const module = await ModuleModels.create(body)
        return module
    }

    async getAllModule() {
        const modules = await ModuleModels.find()
        return modules
    }
}

const modulesServices = new ModulesServices()
module.exports = modulesServices
