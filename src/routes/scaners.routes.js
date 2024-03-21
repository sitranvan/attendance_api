const { Router } = require('express')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const wrapRequest = require('../utils/request')
const { scanerQRCodeController } = require('../controllers/scaners.controllers')

const scanersRouter = Router()
scanersRouter.post('/', wrapRequest(scanerQRCodeController))

module.exports = scanersRouter
