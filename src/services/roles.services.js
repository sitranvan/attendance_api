const RoleModels = require('../models/schemas/Role.models')

class RolesService {
    async createRole(body) {
        const role = await RoleModels.create(body)
        return role
    }
    async getAllRole() {
        const roles = await RoleModels.find()
        return roles
    }
}

const rolesService = new RolesService()
module.exports = rolesService
