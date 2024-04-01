const httpStatus = require('../constants/httpStatus')
const { serverMessage } = require('../constants/message')

const defaultErrorHandler = (err, req, res, next) => {
    let statusCode = httpStatus.INTERNAL_SERVER_ERROR
    let message = serverMessage.INTERNAL_SERVER_ERROR

    if (err instanceof Error) {
        if (err.code === 'ENOENT') {
            // Xử lý lỗi không tìm thấy tệp
            statusCode = httpStatus.NOT_FOUND
            message = serverMessage.NOT_FOUND
        } else if (err.code === 'EACCES') {
            // Xử lý lỗi không có quyền truy cập
            statusCode = httpStatus.FORBIDDEN
            message = serverMessage.FORBIDDEN
        } else {
            // Xử lý các lỗi khác
            message = err.message || message
        }
    } else {
        next()
    }

    res.status(statusCode).json({
        success: false,
        message
    })
}

module.exports = defaultErrorHandler
