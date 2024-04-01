const { Router } = require('express')

const wrapRequest = require('../utils/request')

const {
    createShiftController,
    getAllShiftsController,
    checkExistAttendanceController
} = require('../controllers/shifts.controllers')
const { createUserShiftController } = require('../controllers/users_shifts.controllers')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const { validate } = require('../utils/validate')
const { createShiftValidator, createUserShiftValidator } = require('../middlewares/shifts.middlewares')

const shiftsRouter = Router()

shiftsRouter.get('/', jwtAuth, authorized('admin', 'teacher'), wrapRequest(getAllShiftsController))

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

shiftsRouter.get('/:shift_id/attendances', jwtAuth, authorized('admin'), wrapRequest(checkExistAttendanceController))
module.exports = shiftsRouter
