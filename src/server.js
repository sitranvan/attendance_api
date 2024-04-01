const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')
const defaultErrorHandler = require('./middlewares/errors.middlewares')
const usersRouter = require('./routes/users.routes')
const connectToDatabase = require('./databases/connect.databases')
const { env } = require('./configs/env')
const rolesRouter = require('./routes/roles.routes')
const { UPLOAD_DIR } = require('./constants/file')
const scanersRouter = require('./routes/scaners.routes')
const modulesRouter = require('./routes/modules.routes')
const shiftsRouter = require('./routes/shifts.routes')
const attendancesRouter = require('./routes/attendances.routes')

const app = express()
const uploadDirectory = UPLOAD_DIR

// Kiểm tra và tạo thư mục upload nếu nó chưa tồn tại
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory)
}

if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory)
}
app.use('/qr_codes', express.static(uploadDirectory))

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

connectToDatabase()

app.use('/api/v1', usersRouter)
app.use('/api/v1/roles', rolesRouter)
app.use('/api/v1/scaners', scanersRouter)
app.use('/api/v1/modules', modulesRouter)
app.use('/api/v1/shifts', shiftsRouter)
app.use('/api/v1/attendances', attendancesRouter)

app.use(defaultErrorHandler)

app.listen(env.port, () => {
    console.log(`Example app listening on port ${env.port}`)
})
