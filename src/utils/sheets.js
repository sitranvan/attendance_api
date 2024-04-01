const { google } = require('googleapis')
const path = require('path')
const { SHEETS_SCOPES, SHEETS_SPREADSHEET_ID, SHEETS_RANGE } = require('../constants/utils')

const sheetsInsert = async ({ value: user }) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: path.resolve('credentials.json'),
        scopes: SHEETS_SCOPES
    })

    const client = await auth.getClient()
    const googleSheets = google.sheets({ version: 'v4', auth: client })

    const { code, fullname } = user

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId: SHEETS_SPREADSHEET_ID,
        range: SHEETS_RANGE,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [[code, fullname]] // Đưa "Xin chao 123" vào trong một mảng con
        }
    })
}

module.exports = sheetsInsert
