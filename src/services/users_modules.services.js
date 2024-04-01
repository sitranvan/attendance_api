const UserModuleModels = require('../models/schemas/UserModule.models')

class UsersModulesServices {
    async createUserModule(body) {
        const userModule = await UserModuleModels.create(body)
        return userModule
    }
    async getAllUserByModuleId(module_id) {
        const userModules = await UserModuleModels.find({ module_id }).populate('user_id')
        return userModules
    }
    async checkUserInModule({ user_id, module_id }) {
        const module = await UserModuleModels.findOne({ module_id, user_id })
        return module
    }
}

const usersModulesServices = new UsersModulesServices()
module.exports = usersModulesServices
