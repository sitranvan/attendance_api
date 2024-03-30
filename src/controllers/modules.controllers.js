const modulesServices = require('../services/modules.services')

const createModuleController = async (req, res) => {
    const body = req.body
    const result = await modulesServices.createModule(body)
    return res.json(result)
}

module.exports = {
    createModuleController
}
