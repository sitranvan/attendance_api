const { Router } = require('express')

const wrapRequest = require('../utils/request')

const { createShiftController } = require('../controllers/shifts.controllers')
const { createUserShiftController } = require('../controllers/users_shifts.controllers')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const { validate } = require('../utils/validate')
const { createShiftValidator, createUserShiftValidator } = require('../middlewares/shifts.middlewares')

const shiftsRouter = Router()

shiftsRouter.post(
    '/create',
    jwtAuth,
    authorized('admin'),
    validate(createShiftValidator),
    wrapRequest(createShiftController)
)
shiftsRouter.post(
    '/users/create',
    jwtAuth,
    authorized('admin'),
    validate(createUserShiftValidator),
    wrapRequest(createUserShiftController)
)
module.exports = shiftsRouter
