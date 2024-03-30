const { scanerMessage } = require('../constants/message')
const attendanceDetailsServices = require('./attendance_details.services')
class ScanersService {
    data = []
    async getContentQRCode(body) {
        await attendanceDetailsServices.createAttendanceDetail(body)

        // await sheetsInsert({ value: content })
        return {
            message: scanerMessage.SCANER_SUCCESS
        }
    }
}
const scanersService = new ScanersService()
module.exports = scanersService
