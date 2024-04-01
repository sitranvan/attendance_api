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
    CODE_EXISTED: 'Mã số đã tồn tại trong hệ thống',
    STUDENT_ID_NOT_EMPTY: 'Mã số sinh viên không được bỏ trống',
    STUDENT_ID_INVALID: 'Mã số sinh viên không hợp lệ',
    STUDENT_SUBJECT_EXISTED: 'Sinh viên đã tồn tại trong học phần này',
    USER_ID_NOT_EMPTY: 'Mã người dùng không được bỏ trống'
}

const serverMessage = {
    INTERNAL_SERVER_ERROR: 'Lỗi không xác định',
    NOT_FOUND: 'Không tìm thấy tài nguyên',
    FORBIDDEN: 'Không có quyền truy cập tài nguyên này',
    UNAUTHORIZED: 'Không được phép'
}
const utilsMessage = {
    OBJECT_ID_INVALID: 'Object id không hợp lệ'
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

const moduleMessage = {
    MODULE_NOT_EMPTY: 'Tên học phần không được bỏ trống',
    MODULE_EXISTED: 'Học phần đã tồn tại trong hệ thống',
    MODULE_ID_NOT_EMPTY: 'Mã học phần không được bỏ trống',
    MODULE_ID_INVALID: 'Mã học phần không hợp lệ',
    USER_MODULE_EXISTED: 'Sinh viên đã tồn tại trong môn học này',
    MODULE_CREATED_SUCCESSFULLY: 'Thêm môn thành công',
    MODULE_USER_CREATED_SUCCESSFULLY: 'Thêm sinh viên vào môn học thành công'
}

const shiftMessage = {
    SHIFT_TIME_NOT_EMPTY: 'Thời gian ca học không được bỏ trống',
    SHIFT_NAME_NOT_EMPTY: 'Tên ca học không được bỏ trống',
    SHIFT_NAME_MIN_LENGTH: 'Tên ca học phải chứa ít nhất 4 ký tự',
    SHIFT_ID_INVALID: 'Mã ca học không hợp lệ',
    SHIFT_ID_NOT_EMPTY: 'Mã ca học không được bỏ trống',
    USER_EX_SHIFT: 'Sinh viên đã tồn tại trong ca này',
    CREATE_USER_SHIFT_SUCCESS: 'Thêm sinh viên vào ca thành công'
}
const attendanceMessage = {
    ATTENDANCE_ID_NOT_EMPTY: 'Mã điểm danh không được bỏ trống',
    ATTENDANCE_DETAIL_EXISTED: 'Sinh viên đã điểm danh rồi',
    USER_NOT_FOUND: 'Sinh viên không tồn tại',
    USER_NOT_IN_SHIFT_OR_MODULE: 'Sinh viên không thuộc ca học hoặc học phần này',
    ATTENDANCE_CREATED: 'Tạo ca điểm danh thành công'
}

const majorMessage = {
    MAJOR_NOT_EMPTY: 'Chuyên ngành không được bỏ trống',
    MAJOR_INVALID: 'Chuyên ngành không hợp lệ',
    MAJOR_EXISTED: 'Chuyên ngành đã tồn tại trong hệ thống',
    MAJOR_NOT_FOUND: 'Chuyên ngành không tồn tại trong hệ thống',
    MAJOR_CREATE_SUCCESS: 'Tạo Chuyên ngành thành công',
    MAJOR_UPDATE_SUCCESS: 'Cập nhật Chuyên ngành thành công',
    MAJOR_DELETE_SUCCESS: 'Xóa Chuyên ngành thành công',
    GET_ALL_MAJOR_SUCCESS: 'Lấy danh sách thành công'
}
module.exports = {
    userMessage,
    serverMessage,
    roleMessage,
    scanerMessage,
    moduleMessage,
    utilsMessage,
    shiftMessage,
    attendanceMessage,
    majorMessage
}
