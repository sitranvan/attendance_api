const httpStatus = require('../constants/httpStatus')
const { serverMessage } = require('../constants/message')
const UserModles = require('../models/schemas/User.modles')

const authorized = (...roles) => {
    return async (req, res, next) => {
        try {
            const { user_id } = req.user

            const user = await UserModles.findById(user_id)

            if (!user || !roles.includes(user.role)) {
                return res.status(httpStatus.FORBIDDEN).json({
                    message: serverMessage.FORBIDDEN
                })
            }
            req.user.role = user.role
            next()
        } catch (err) {
            next(err)
        }
    }
}
module.exports = authorized
