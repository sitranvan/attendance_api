const { Router } = require('express')

const wrapRequest = require('../utils/request')

const jwtAuth = require('../middlewares/jwtAuth.middlewares')
const authorized = require('../middlewares/authorized.middlewares')

const { getAllMajorController } = require('../controllers/majors.controllers')

const majorsRouter = Router()

majorsRouter.get('/', jwtAuth, authorized('admin'), wrapRequest(getAllMajorController))

module.exports = majorsRouter
