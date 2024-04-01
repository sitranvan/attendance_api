const { Router } = require('express')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const wrapRequest = require('../utils/request')
const { scanerQRCodeController } = require('../controllers/scaners.controllers')
const { validate } = require('../utils/validate')
const { createAttendanceDetailValidator } = require('../middlewares/attendances.middlewares')

const scanersRouter = Router()
scanersRouter.post(
    '/',
    jwtAuth,
    authorized('admin', 'teacher'),
    validate(createAttendanceDetailValidator),
    wrapRequest(scanerQRCodeController)
)

module.exports = scanersRouter
