const { userMessage } = require('../constants/message')
const usersService = require('../services/users.services')
const { hashPassword } = require('../utils/crypto')

const registerController = async (req, res) => {
    const { code, fullname, email, password, role } = req.body

    const result = await usersService.register({
        code,
        fullname,
        email,
        role,
        password: hashPassword(password)
    })
    return res.json({
        message: userMessage.REGISTER_SUCCESS,
        data: result
    })
}

const loginController = async (req, res) => {
    const { user } = req
    const result = await usersService.login({ user_id: user._id, role: user.role, verify: user.verify })

    return res.json({
        message: userMessage.LOGIN_SUCCESS,
        data: {
            ...result,
            user
        }
    })
}

const logoutController = async (req, res) => {
    const { refresh_token } = req.body
    const result = await usersService.logout({ refresh_token })

    return res.json(result)
}

const refreshTokenController = async (req, res) => {
    const { refresh_token } = req.body
    const { user_id, verify, exp } = req.decoded_refresh_token

    const result = await usersService.refreshToken({ user_id, verify, exp, refresh_token })
    return res.json({
        message: userMessage.REFRESH_TOKEN_SUCCESS,
        data: result
    })
}

const getAllUser = async (req, res) => {
    const result = await usersService.getAllUser()
    return res.json({
        message: userMessage.GET_ALL_USER_SUCCESS,
        data: result
    })
}
module.exports = {
    registerController,
    loginController,
    logoutController,
    refreshTokenController,
    getAllUser
}
