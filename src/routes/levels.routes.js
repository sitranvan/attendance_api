const { Router } = require('express')

const wrapRequest = require('../utils/request')
const { validate } = require('../utils/validate')
const { getAllModuleController } = require('../controllers/modules.controllers')

const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const { getAllLevelController, updatelevelController } = require('../controllers/levels.controllers')
const { createLevelValidator } = require('../middlewares/level.middlewares')
const levelsRouter = Router()

levelsRouter.get('/', jwtAuth, authorized('admin'), wrapRequest(getAllLevelController))
levelsRouter.post(
    '/update/:id',
    jwtAuth,
    authorized('admin'),
    validate(createLevelValidator),
    wrapRequest(updatelevelController)
)

module.exports = levelsRouter
