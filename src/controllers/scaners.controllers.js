const scanersService = require('../services/scaners.services')

const scanerQRCodeController = async (req, res) => {
    const body = req.body
    const result = await scanersService.getContentQRCode(body)
    return res.json(result)
}

module.exports = {
    scanerQRCodeController
}
