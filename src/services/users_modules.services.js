const UserModuleModels = require('../models/schemas/UserModule.models')

class UsersModulesServices {
    async createUserModule(body) {
        const userModule = await UserModuleModels.create(body)
        return userModule
    }
}

const usersModulesServices = new UsersModulesServices()
module.exports = usersModulesServices
