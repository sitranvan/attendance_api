const classesServices = require('../services/classes.services')

const getAllClassController = async (req, res) => {
    const result = await classesServices.getAllClass()
    return res.json({
        data: result
    })
}

const deleteClassController = async (req, res) => {
    const id = req.params.id
    const result = await classesServices.deleteClass(id)
    return res.json({
        message: 'Xoá thành công',
        data: result
    })
}

module.exports = {
    getAllClassController,
    deleteClassController
}
