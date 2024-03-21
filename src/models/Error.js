const httpStatus = require('../constants/httpStatus')

class ErrorWithStatus {
    message
    status
    constructor({ message, status }) {
        this.message = message
        this.status = status
    }
}
// Các lỗi liên quan đến validation
class EntityError extends ErrorWithStatus {
    errors
    constructor({ message = 'Lỗi ', errors }) {
        super({ message, status: httpStatus.UNPROCESSABLE_ENTITY })
        this.errors = errors
    }
}

module.exports = {
    ErrorWithStatus,
    EntityError
}
