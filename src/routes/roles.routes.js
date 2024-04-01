const { Router } = require('express')
const { validate } = require('../utils/validate')
const { createRoleValidator } = require('../middlewares/roles.middlewares')
const wrapRequest = require('../utils/request')
const { createRoleController, getAllRoleController } = require('../controllers/roles.controllers')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')

const rolesRouter = Router()

rolesRouter.get('/', jwtAuth, authorized('admin', 'teacher'), wrapRequest(getAllRoleController))

rolesRouter.post(
    '/create',
    jwtAuth,
    authorized('admin', 'teacher'),
    validate(createRoleValidator),
    wrapRequest(createRoleController)
)

module.exports = rolesRouter
