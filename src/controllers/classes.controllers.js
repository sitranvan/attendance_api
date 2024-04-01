const classesServices = require('../services/classes.services')

const getAllClassController = async (req, res) => {
    const result = await classesServices.getAllClass()
    return res.json({
        data: result
    })
}

module.exports = {
    getAllClassController
}
