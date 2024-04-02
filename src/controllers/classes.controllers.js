const classesServices = require('../services/classes.services')

const getAllClassController = async (req, res) => {
    const result = await classesServices.getAllClass()
    return res.json({
        data: result
    })
}
const updateClassController = async (req, res) => {
    const id = req.params.id
    const data = req.body
    const result = await classesServices.updateClass(id, data)
    return res.json({
        message: 'Sửa lớp thành công',
        data: result
    })
}
module.exports = {
    getAllClassController,
    updateClassController
}
