const { Router } = require('express')

const wrapRequest = require('../utils/request')
const { validate } = require('../utils/validate')

const { getAllModuleController } = require('../controllers/modules.controllers')
const { createClassController } = require('../controllers/classes.controllers')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const { getAllClassController } = require('../controllers/classes.controllers')
const { createClassValidator } = require('../middlewares/class.middlewares')
const classesRouter = Router()

classesRouter.get('/', jwtAuth, authorized('admin'), wrapRequest(getAllClassController))

classesRouter.post(
    '/create',
    jwtAuth,
    authorized('admin'),
    validate(createClassValidator),
    wrapRequest(createClassController)
)

module.exports = classesRouter
