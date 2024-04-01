const { Router } = require('express')
const { validate } = require('../utils/validate')

const wrapRequest = require('../utils/request')

const { getAllModuleController } = require('../controllers/modules.controllers')
const { createLevelValidator } = require('../middlewares/levels.middlewares') // mot hoi sua
const { createLevelController } = require('../controllers/levels.controllers')
const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const { getAllLevelController } = require('../controllers/levels.controllers')

const levelsRouter = Router()

levelsRouter.get('/', jwtAuth, authorized('admin'), wrapRequest(getAllLevelController))

levelsRouter.post(
    '/create',
    jwtAuth,
    authorized('admin'),
    validate(createLevelValidator),
    wrapRequest(createLevelController)
)

module.exports = levelsRouter
