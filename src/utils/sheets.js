const { google } = require('googleapis')
const path = require('path')
const { SHEETS_SCOPES, SHEETS_SPREADSHEET_ID } = require('../constants/utils')

// Hàm thêm dữ liệu vào Google Sheets
const sheetsInsert = async ({ value: user, sheetNumber = 1 }) => {
    // Tạo một đối tượng xác thực auth từ credentials.json và phạm vi truy cập SHEETS_SCOPES
    const auth = new google.auth.GoogleAuth({
        keyFile: path.resolve('credentials.json'),
        scopes: SHEETS_SCOPES
    })

    // Lấy một đối tượng xác thực client từ auth
    const client = await auth.getClient()

    // Tạo một đối tượng googleSheets để tương tác với dịch vụ Google Sheets với phiên bản v4 và auth client
    const googleSheets = google.sheets({ version: 'v4', auth: client })

    // Giải nén dữ liệu user thành các biến code và fullname
    const { code, fullname } = user

    // Xác định tiêu đề và phạm vi của trang tính
    const sheetTitle = `Trang tính ${sheetNumber}`
    const sheetRange = `${sheetTitle}!A3:B3`

    // Kiểm tra xem trang tính đã tồn tại chưa
    try {
        await googleSheets.spreadsheets.get({
            auth,
            spreadsheetId: SHEETS_SPREADSHEET_ID,
            ranges: sheetRange
        })
    } catch (error) {
        // Nếu không tồn tại, thêm một trang tính mới
        await googleSheets.spreadsheets.batchUpdate({
            auth,
            spreadsheetId: SHEETS_SPREADSHEET_ID,
            resource: {
                requests: [
                    {
                        addSheet: {
                            properties: {
                                title: sheetTitle
                            }
                        }
                    }
                ]
            }
        })
    }

    // Thêm dữ liệu vào trang tính đã tồn tại hoặc mới
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId: SHEETS_SPREADSHEET_ID,
        range: sheetRange,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [[code, fullname]]
        }
    })
}

module.exports = sheetsInsert
