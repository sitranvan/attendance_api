const { Router } = require('express')

const wrapRequest = require('../utils/request')
const { validate } = require('../utils/validate')
const { getAllModuleController } = require('../controllers/modules.controllers')

const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const { getAllClassController, updatelevelController } = require('../controllers/classes.controllers')
const { createLevelValidator } = require('../middlewares/level.middlewares')
const classesRouter = Router()

classesRouter.get('/', jwtAuth, authorized('admin'), wrapRequest(getAllClassController))
classesRouter.post(
    '/update/:id',
    jwtAuth,
    authorized('admin'),
    validate(createLevelValidator),
    wrapRequest(updatelevelController)
)

module.exports = classesRouter
