const classesServices = require('../services/classes.services')

const getAllClassController = async (req, res) => {
    const result = await classesServices.getAllClass()
    return res.json({
        data: result
    })
}

const createClassController = async (req, res) => {
    const body = req.body
    const result = await classesServices.createClass(body)
    return res.json({
        message: 'Thêm lớp thành công', // Sửa ở major và level
        data: result
    })
}

module.exports = {
    getAllClassController,
    createClassController
}
