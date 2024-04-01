const { Router } = require('express')
const wrapRequest = require('../utils/request')
const { validate } = require('../utils/validate')
const {
    registerController,
    loginController,
    logoutController,
    refreshTokenController,
    getAllUser,
    getAllAdmin,
    getFullUser
} = require('../controllers/users.controllers')
const {
    registerValidator,
    loginValidator,
    refreshTokenValidator,
    authorizationValidator
} = require('../middlewares/users.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')

const usersRouter = Router()

usersRouter.post('/register', validate(registerValidator), wrapRequest(registerController))
usersRouter.post('/login', validate(loginValidator), wrapRequest(loginController))
usersRouter.post(
    '/logout',
    validate(authorizationValidator),
    validate(refreshTokenValidator),
    wrapRequest(logoutController)
)
usersRouter.post('/refresh-token', validate(refreshTokenValidator), wrapRequest(refreshTokenController))
usersRouter.get('/users', jwtAuth, authorized('admin', 'teacher'), wrapRequest(getAllUser))
usersRouter.get('/admin', jwtAuth, authorized('admin', 'teacher'), wrapRequest(getAllAdmin))
usersRouter.get('/full', jwtAuth, authorized('admin', 'teacher'), wrapRequest(getFullUser))
module.exports = usersRouter
