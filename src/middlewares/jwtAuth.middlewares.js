const { env } = require('../configs/env')
const httpStatus = require('../constants/httpStatus')
const { serverMessage } = require('../constants/message')
const { verifyToken } = require('../utils/jwt')

const jwtAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(httpStatus.UNAUTHORIZED).json({
            message: serverMessage.UNAUTHORIZED
        })
    }
    const token = authHeader.split(' ')[1]
    if (!token) {
        return res.status(httpStatus.UNAUTHORIZED).json({
            message: serverMessage.UNAUTHORIZED
        })
    }

    try {
        const user = await verifyToken({ token, secretOrPublicKey: env.jwtAccessTokenSecret })

        req.user = user
    } catch (err) {
        return res.status(httpStatus.UNAUTHORIZED).json({
            message: serverMessage.UNAUTHORIZED
        })
    }
    next()
}

module.exports = jwtAuth
