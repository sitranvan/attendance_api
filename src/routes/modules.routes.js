const { Router } = require('express')

const wrapRequest = require('../utils/request')
const { validate } = require('../utils/validate')

const { createModuleController, getAllModuleController } = require('../controllers/modules.controllers')
const { createUserModuleController } = require('../controllers/users_modules.controllers')
const { createModuleValidator, createUserModuleValidator } = require('../middlewares/modules.middlewares')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')

const modulesRouter = Router()

modulesRouter.get('/', jwtAuth, authorized('admin'), wrapRequest(getAllModuleController))

modulesRouter.post(
    '/create',
    jwtAuth,
    authorized('admin'),
    validate(createModuleValidator),
    wrapRequest(createModuleController)
)
modulesRouter.post(
    '/users/create',
    jwtAuth,
    authorized('admin'),
    validate(createUserModuleValidator),
    wrapRequest(createUserModuleController)
)
module.exports = modulesRouter
