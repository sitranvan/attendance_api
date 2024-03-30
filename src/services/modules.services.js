const ModuleModels = require('../models/schemas/Module.models')

class ModulesServices {
    async createModule(body) {
        const module = await ModuleModels.create(body)
        return module
    }
}

const modulesServices = new ModulesServices()
module.exports = modulesServices
