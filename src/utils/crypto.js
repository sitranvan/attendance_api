const { createHash } = require('crypto')

const sha256 = (content) => {
    return createHash('sha256').update(content).digest('hex')
}
const hashPassword = (password) => {
    return sha256(password)
}
module.exports = {
    hashPassword
}
