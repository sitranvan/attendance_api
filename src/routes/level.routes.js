const { Router } = require('express')
const { validate } = require('../utils/validate')
const { createLevelValidator } = require('../middlewares/level.middlewares') // mot hoi sua
const wrapRequest = require('../utils/request')
const { createLevelController } = require('../controllers/level.controller')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')

const levelRouter = Router()

levelRouter.post(
    '/create',
    jwtAuth,
    authorized('admin'),
    validate(createLevelValidator),
    wrapRequest(createLevelController)
)

module.exports = levelRouter