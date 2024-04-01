const { Router } = require('express')

const wrapRequest = require('../utils/request')

const { getAllModuleController } = require('../controllers/modules.controllers')

const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const { getAllClassController, deleteClassController } = require('../controllers/classes.controllers')

const classesRouter = Router()

classesRouter.get('/', jwtAuth, authorized('admin'), wrapRequest(getAllClassController))

classesRouter.post('/delete/:id', jwtAuth, authorized('admin'), wrapRequest(deleteClassController))


module.exports = classesRouter
