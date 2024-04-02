const { Router } = require("express")
const { getAllMajor, createMajorController, deleteMajorController } = require("../controllers/majors.controllers")
const { createMajorValidator } = require("../middlewares/majors.middlewares")
const wrapRequest = require('../utils/request')
const jwtAuth = require("../middlewares/jwtAuth.middlewares")
const authorized = require("../middlewares/authorized.middlewares")
const { validate } = require("../utils/validate")


const majorsRouter = Router()

majorsRouter.get('/', jwtAuth, authorized('admin'), wrapRequest(getAllMajor))

majorsRouter.post(
    '/create',
    jwtAuth,
    authorized('admin'),
    validate(createMajorValidator),
    wrapRequest(createMajorController)
)

majorsRouter.delete('/:id', jwtAuth, authorized('admin'), wrapRequest(deleteMajorController))

module.exports = majorsRouter
