const scanersService = require('../services/scaners.services')

const scanerQRCodeController = async (req, res) => {
    const { content } = req.query
    const result = await scanersService.getContentQRCode(content)
    return res.json(result)
}

module.exports = {
    scanerQRCodeController
}
