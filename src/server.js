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

const majorRouter = require('./routes/major.routes')
const levelRouter = require('./routes/level.routes')

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
app.use('/api/v1/scaner', scanersRouter) 

app.use('/api/v1/major', majorRouter)
app.use('/api/v1/level', levelRouter)

app.use(defaultErrorHandler)

app.listen(env.port, () => {
    console.log(`Example app listening on port ${env.port}`)
})
