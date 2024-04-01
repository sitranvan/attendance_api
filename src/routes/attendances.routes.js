const { Router } = require('express')

const wrapRequest = require('../utils/request')

const {
    createAttendanceController,
    getAllAttendanceController,
    getAllUserAttendanceShiftController,
    getAttendanceByIdController
} = require('../controllers/attendances.controllers')
const {
    getStudentAttendanceDetailController,
    createAttendanceDetailController,
    editNoteAttendanceDetailController,
    getStudentAttendanceDetailByIdController,
    deleteAttendanceDetailController
} = require('../controllers/attendance_details.controllers')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const { validate } = require('../utils/validate')
const { createAttendanceValidator, createAttendanceDetailValidator } = require('../middlewares/attendances.middlewares')

const attendancesRouter = Router()

attendancesRouter.post(
    '/create',
    jwtAuth,
    authorized('admin', 'teacher'),
    validate(createAttendanceValidator),
    wrapRequest(createAttendanceController)
)
attendancesRouter.post(
    '/users/create',
    jwtAuth,
    authorized('admin', 'teacher'),
    validate(createAttendanceDetailValidator),
    wrapRequest(createAttendanceDetailController)
)

attendancesRouter.get('/', jwtAuth, authorized('admin', 'teacher'), wrapRequest(getAllAttendanceController))
attendancesRouter.get(
    '/:attendance_id/info',
    jwtAuth,
    authorized('admin', 'teacher'),
    wrapRequest(getAttendanceByIdController)
)

attendancesRouter.get(
    '/:attendance_id/users/shift',
    jwtAuth,
    authorized('admin', 'teacher'),
    wrapRequest(getAllUserAttendanceShiftController)
)
// Lấy ra chi tiết điểm danh

attendancesRouter.get(
    '/:attendance_id/users',
    jwtAuth,
    authorized('admin', 'teacher'),
    wrapRequest(getStudentAttendanceDetailController)
)
attendancesRouter.get(
    '/:attendance_id/:user_id/users',
    jwtAuth,
    authorized('admin', 'teacher'),
    wrapRequest(getStudentAttendanceDetailByIdController)
)
attendancesRouter.put('/note', jwtAuth, authorized('admin', 'teacher'), wrapRequest(editNoteAttendanceDetailController))
attendancesRouter.delete(
    '/:attendance_id/:user_id/users',
    jwtAuth,
    authorized('admin', 'teacher'),
    wrapRequest(deleteAttendanceDetailController)
)
module.exports = attendancesRouter
