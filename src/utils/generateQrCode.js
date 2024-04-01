const path = require('path')

const QRCode = require('qrcode')
const { env } = require('../configs/env')

const generateQrCode = async ({ code, fullname, uploadDirectory }) => {
    try {
        // Tạo nội dung cho mã QR
        const qrContent = `${code}_${fullname}`

        // Tạo đường dẫn và tên file cho QR code
        const qrFileName = `${code}.png`
        const qrFilePath = path.join(uploadDirectory, qrFileName)

        // Tạo QR code và lưu vào thư mục
        await QRCode.toFile(qrFilePath, qrContent)

        // Trả về đường dẫn của file QR code
        const qrFileUrl = `http://localhost:${env.port}/qr_codes/${qrFileName}`
        return qrFileUrl
    } catch (error) {
        console.error('Error generating QR code:', error)
    }
}

module.exports = generateQrCode
