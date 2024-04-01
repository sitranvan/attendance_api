const { Router } = require('express')
const { validate } = require('../utils/validate')
const { createMajorValidator } = require('../middlewares/major.middlewares') // mot hoi sua
const wrapRequest = require('../utils/request')
const { createMajorController } = require('../controllers/major.controller')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')

const majorRouter = Router()

majorRouter.post(
    '/create',
    jwtAuth,
    authorized('admin'),
    validate(createMajorValidator),
    wrapRequest(createMajorController)
)

module.exports = majorRouter