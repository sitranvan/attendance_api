const rolesService = require('../services/roles.services')

const createRoleController = async (req, res) => {
    const body = req.body
    const result = await rolesService.createRole(body)
    return res.json({
        message: 'Thêm vai trò thành công',
        data: result
    })
}
module.exports = {
    createRoleController
}
