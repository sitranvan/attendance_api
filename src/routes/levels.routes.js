const { Router } = require('express')

const wrapRequest = require('../utils/request')

const { getAllModuleController } = require('../controllers/modules.controllers')

const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const { getAllLevelController, deleteLevelController } = require('../controllers/levels.controllers')

const levelsRouter = Router()

levelsRouter.get('/', jwtAuth, authorized('admin'), wrapRequest(getAllLevelController))
levelsRouter.post('/delete/:id', jwtAuth, authorized('admin'), wrapRequest(deleteLevelController))

module.exports = levelsRouter
