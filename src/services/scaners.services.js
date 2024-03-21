const { scanerMessage } = require('../constants/message')
const sheetsInsert = require('../utils/sheets')

class ScanersService {
    data = []
    async getContentQRCode(content) {
        if (this.data.includes(content)) {
            return {
                message: scanerMessage.SCANER_FAIL
            }
        }
        this.data.push(content)
        await sheetsInsert({ value: content })
        return {
            message: scanerMessage.SCANER_SUCCESS
        }
    }
}
const scanersService = new ScanersService()
module.exports = scanersService
