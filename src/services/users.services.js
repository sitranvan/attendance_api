const { userMessage } = require('../constants/message')
const { signAccessAndRefreshToken, decodeRefreshToken, signAccessToken, signRefreshToken } = require('../utils/jwt')
const UserModles = require('../models/schemas/User.modles')
const RefreshTokenModels = require('../models/schemas/RefreshToken.models')
const generateQrCode = require('../utils/generateQrCode')
const { UPLOAD_DIR } = require('../constants/file')
const { default: mongoose } = require('mongoose')

class UsersService {
    async register(body) {
        const user_id = new mongoose.Types.ObjectId()
        const uploadDirectory = UPLOAD_DIR
        const qrUrl = await generateQrCode({
            user_id: user_id.toString(),
            uploadDirectory
        })

        const user = await UserModles.create({
            _id: user_id,
            code: body.code,
            fullname: body.fullname,
            role: body.role || 'student',
            email: body.email,
            password: body.password,
            qr_code: qrUrl
        })

        user.password = undefined
        return user
    }

    async login({ user_id, role, verify }) {
        const [access_token, refresh_token] = await signAccessAndRefreshToken({
            user_id,
            role,
            verify
        })
        const { iat, exp } = await decodeRefreshToken(refresh_token)
        await RefreshTokenModels.create({
            user_id,
            token: refresh_token,
            iat,
            exp
        })
        return {
            access_token,
            refresh_token
        }
    }

    async logout({ refresh_token }) {
        await RefreshTokenModels.deleteOne({
            token: refresh_token
        })
        return {
            message: userMessage.LOGOUT_SUCCESS
        }
    }
    async refreshToken({ user_id, role, refresh_token, verify, exp }) {
        const [new_access_token, new_refresh_token] = await Promise.all([
            signAccessToken({ user_id, role, verify }),
            signRefreshToken({ user_id, role, verify }),
            RefreshTokenModels.deleteOne({
                token: refresh_token,
                user_id
            })
        ])
        await RefreshTokenModels.create({
            user_id,
            token: new_refresh_token,
            iat: new Date(Date.now()),
            exp: new Date(Date.now() + exp * 1000)
        })
        return {
            access_token: new_access_token,
            refresh_token: new_refresh_token
        }
    }

    async getAllUser({ role = 'student' }) {
        const users = await UserModles.aggregate([
            {
                $match: {
                    // Lấy ra role là student
                    role
                }
            },
            {
                $lookup: {
                    from: 'roles', // Tên bảng của mô hình Role
                    localField: 'role',
                    foreignField: 'slug',
                    as: 'role_info'
                }
            },
            {
                $unwind: '$role_info' // Mở rộng mảng role_info
            },
            {
                $lookup: {
                    from: 'levels', // Tên bảng của mô hình Level
                    localField: 'level',
                    foreignField: 'name',
                    as: 'level_info'
                }
            },
            {
                $unwind: { path: '$level_info', preserveNullAndEmptyArrays: true } // Mở rộng mảng level_info
            },
            {
                $lookup: {
                    from: 'majors', // Tên bảng của mô hình Major
                    localField: 'major',
                    foreignField: 'name',
                    as: 'major_info'
                }
            },
            {
                $unwind: { path: '$major_info', preserveNullAndEmptyArrays: true } // Mở rộng mảng major_info
            },
            {
                $lookup: {
                    from: 'classes', // Tên bảng của mô hình Class
                    localField: 'class',
                    foreignField: 'name',
                    as: 'class_info'
                }
            },
            {
                $unwind: { path: '$class_info', preserveNullAndEmptyArrays: true } // Mở rộng mảng class_info
            },
            {
                $project: {
                    _id: 1,
                    code: 1,
                    fullname: 1,
                    gender: 1,
                    email: 1,
                    address: 1,
                    avatar: 1,
                    role: 1,
                    major: 1,
                    class: 1,
                    level: 1,
                    qr_code: 1,
                    role_info: 1,
                    level_info: 1,
                    major_info: 1,
                    class_info: 1
                }
            }
        ])

        return users
    }
}

const usersService = new UsersService()
module.exports = usersService
