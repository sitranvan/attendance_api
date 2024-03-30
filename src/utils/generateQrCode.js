const path = require('path')

const QRCode = require('qrcode')
const { env } = require('../configs/env')

const generateQrCode = async ({ user_id, uploadDirectory }) => {
    try {
        // Tạo nội dung cho mã QR

        // Tạo đường dẫn và tên file cho QR code
        const qrFileName = `${user_id}.png`
        const qrFilePath = path.join(uploadDirectory, qrFileName)

        // Tạo QR code và lưu vào thư mục
        await QRCode.toFile(qrFilePath, user_id)

        // Trả về đường dẫn của file QR code
        const qrFileUrl = `http://localhost:${env.port}/qr_codes/${qrFileName}`
        return qrFileUrl
    } catch (error) {
        console.error('Error generating QR code:', error)
    }
}

module.exports = generateQrCode
