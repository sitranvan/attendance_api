const userMessage = {
    EMAIL_NOT_EMPTY: 'Email không được bỏ trống',
    EMAIL_INVALID: 'Email không hợp lệ',
    PASSWORD_NOT_EMPTY: 'Mật khẩu không được bỏ trống',
    PASSWORD_MIN_LENGTH: 'Mật khẩu tối thiểu 6 ký tự',
    CONFIRM_PASSWORD_NOT_EMPTY: 'Xác nhận mật khẩu không được bỏ trống',
    CONFIRM_PASSWORD_NOT_MATCH: 'Mật khẩu không khớp',
    REGISTER_SUCCESS: 'Đăng ký tài khoản thành công',
    EMAIL_EXISTED: 'Email đã tồn tại trong hệ thống',
    EMAIL_OR_PASSWORD_IS_INCORRECT: 'Email hoặc mật khẩu không chính xác',
    LOGIN_SUCCESS: 'Đăng nhập thành công',
    LOGOUT_SUCCESS: 'Đăng xuất thành công',
    REFRESH_TOKEN_INVALID: 'Refresh token không tồn tại hoặc đã hết hạn',
    REFRESH_TOKEN_NOT_EMPTY: 'Refresh token không được bỏ trống',
    ACCESS_TOKEN_NOT_EMPTY: 'Access token không được bỏ trống',
    REFRESH_TOKEN_SUCCESS: 'Làm mới token thành công',
    GET_ALL_USER_SUCCESS: 'Lấy danh sách người dùng thành công',
    FULLNAME_NOT_EMPTY: 'Họ và tên không được bỏ trống',
    FULLNAME_MIN_LENGTH: 'Họ và tên phải chứa ít nhất 6 ký tự',
    CODE_NOT_EMPTY: 'Mã số không được bỏ trống',
    CODE_INVALID: 'Mã số không hợp lệ',
    CODE_EXISTED: 'Mã số đã tồn tại trong hệ thống'
}

const serverMessage = {
    INTERNAL_SERVER_ERROR: 'Lỗi không xác định',
    NOT_FOUND: 'Không tìm thấy tài nguyên',
    FORBIDDEN: 'Không có quyền truy cập tài nguyên này',
    UNAUTHORIZED: 'Không được phép'
}

const roleMessage = {
    ROLE_NOT_EMPTY: 'Vai trò không được bỏ trống',
    ROLE_INVALID: 'Vai trò không hợp lệ',
    ROLE_EXISTED: 'Vai trò đã tồn tại trong hệ thống',
    ROLE_NOT_FOUND: 'Vai trò không tồn tại trong hệ thống',
    ROLE_CREATE_SUCCESS: 'Tạo vai trò thành công',
    ROLE_UPDATE_SUCCESS: 'Cập nhật vai trò thành công',
    ROLE_DELETE_SUCCESS: 'Xóa vai trò thành công',
    SLUG_NOT_EMPTY: 'Slug không được bỏ trống',
    SLUG_EXISTED: 'Slug đã tồn tại trong hệ thống'
}

const scanerMessage = {
    SCANER_FAIL: 'Điểm danh rồi',
    SCANER_SUCCESS: 'Điểm danh thành công'
}

module.exports = {
    userMessage,
    serverMessage,
    roleMessage,
    scanerMessage
}
