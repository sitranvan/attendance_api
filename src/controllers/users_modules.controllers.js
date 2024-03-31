const httpStatus = require('../constants/httpStatus')
const { moduleMessage } = require('../constants/message')
const UserModuleModels = require('../models/schemas/UserModule.models')
const usersModulesServices = require('../services/users_modules.services')

const createUserModuleController = async (req, res) => {
    const body = req.body

    const userModule = await UserModuleModels.findOne({ user_id: body.user_id, module_id: body.module_id })
    if (userModule) {
        return res.status(httpStatus.BAD_REQUEST).json({ message: moduleMessage.USER_MODULE_EXISTED })
    }
    const result = await usersModulesServices.createUserModule(body)
    return res.json({
        message: moduleMessage.MODULE_USER_CREATED_SUCCESSFULLY,
        data: result
    })
}

module.exports = {
    createUserModuleController
}
