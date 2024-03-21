const RoleModels = require('../models/schemas/Role.models')

class RolesService {
    async createRole(body) {
        const role = await RoleModels.create(body)
        return role
    }
}

const rolesService = new RolesService()
module.exports = rolesService
