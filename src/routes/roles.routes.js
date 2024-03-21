const { Router } = require('express')
const { validate } = require('../utils/validate')
const { createRoleValidator } = require('../middlewares/roles.middlewares')
const wrapRequest = require('../utils/request')
const { createRoleController } = require('../controllers/roles.controllers')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')

const rolesRouter = Router()

rolesRouter.post(
    '/create',
    jwtAuth,
    authorized('admin'),
    validate(createRoleValidator),
    wrapRequest(createRoleController)
)

module.exports = rolesRouter
