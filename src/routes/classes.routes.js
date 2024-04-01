const { Router } = require('express')

const wrapRequest = require('../utils/request')

const { getAllModuleController } = require('../controllers/modules.controllers')

const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const { getAllClassController } = require('../controllers/classes.controllers')

const classesRouter = Router()

classesRouter.get('/', jwtAuth, authorized('admin', 'teacher'), wrapRequest(getAllClassController))

module.exports = classesRouter
