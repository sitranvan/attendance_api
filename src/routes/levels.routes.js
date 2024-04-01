const { Router } = require('express')

const wrapRequest = require('../utils/request')

const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')
const { getAllLevelController } = require('../controllers/levels.controllers')

const levelsRouter = Router()

levelsRouter.get('/', jwtAuth, authorized('admin', 'teacher'), wrapRequest(getAllLevelController))

module.exports = levelsRouter
