const { majorMessage } = require('../constants/message')
const majorsService = require('../services/major.services')

const getAllMajor = async (req, res) => {
    const result = await majorsService.getAllMajor()
    return res.json({
        message: majorMessage.GET_ALL_MAJOR_SUCCESS,
        data: result
    })
}

const createMajorController = async (req, res) => {
    const body = req.body
    const result = await majorsService.createMajor(body)
    return res.json({
        message: 'Thêm chuyên ngành thành công',
        data: result
    })
}
const deleteMajorController = async (req, res) => {
    const { id } = req.params
    console.log('id là : ', id)
    const result = await majorsService.deleteMajorById(id)
    return res.json({
        message: 'Xóa thành công',
        data: result
    })
}

module.exports = {
    getAllMajor,
    createMajorController,
    deleteMajorController
}
