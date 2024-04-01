const { moduleMessage } = require('../constants/message')
const modulesServices = require('../services/modules.services')

const createModuleController = async (req, res) => {
    const body = req.body
    const result = await modulesServices.createModule(body)
    return res.json({
        message: moduleMessage.MODULE_CREATED_SUCCESSFULLY,
        data: result
    })
}
const getAllModuleController = async (req, res) => {
    const result = await modulesServices.getAllModule()
    return res.json({
        data: result
    })
}

module.exports = {
    createModuleController,
    getAllModuleController
}
