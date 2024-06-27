import { randomColor } from "../utils/helper"
import { TUser, eRegion } from "./types"

export const API_URL = "https://jsonplaceholder.typicode.com"
export const LS_accessToken = "@accessToken"
export const LS_refreshToken = "@refreshToken"
export const PAGE_REGISTER = "/register"
export const PAGE_LOGIN = "/login"
export const PAGE_TEST = "/test"
export const PAGE_DEFAULT = "/*"
export const LOGIN_TITLE = 'Đăng nhập'
export const LOGIN_SUBTITLE = 'Vui lòng đăng nhập để tiếp tục'
export const LOGIN_BG_IMAGE = '/LoginPage.jpg'
export const LOGO_IMAGE_BLACK = '/LogoBlack.png'
export const LOGO_IMAGE_WHITE = '/LogoWhite.png'
export const THRESH_NO_CONTENT_IMG = '/NoContentImg.png'
export const LOGIN_USER_IDENTIFIER_TITLE = 'Tên đăng nhập'
export const LOGIN_USER_IDENTIFIER_PLACEHOLDER = 'Email hoặc Username'
export const LOGIN_PASSWORD_PLACEHOLDER = 'Mật khẩu'
export const LOGIN_WRONG_USER_IDENTIFIER_TEXT = 'Tên đăng nhập không chính xác. Vui lòng kiểm tra và nhập lại.'
export const LOGIN_WRONG_PASSWORD_TEXT = 'Mật khẩu không chính xác. Vui lòng kiểm tra và nhập lại.'
export const LOGIN_PASSWORD_TITLE = 'Mật khẩu'
export const SPECIAL_CHARACTERS = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
export const PASSWORD_MIN_LENGTH = 8
export const PW_CHECK_MIN_LENGTH_TEXT = 'Mật khẩu cần có 8 ký tự trở lên.'
export const PW_CHECK_CAPITAL_TEXT = 'Mật khẩu cần có ít nhất một chữ cái viết hoa.'
export const PW_CHECK_NUMBER_TEXT = 'Mật khẩu cần có ít nhất một chữ số.'
export const PW_CHECK_SPECIAL_CHAR_TEXT = 'Mật khẩu cần có ít nhất một ký tự đặc biệt.'
export const REGISTER_TITLE = 'Tạo tài khoản'
export const REGISTER_SUBTITLE = 'Thuận lợi và tiện dụng'
export const FORGET_PASS_MODAL_TITLE = 'Quên mật khẩu'
export const FORGET_PASS_MODAL_CONTENT = 'Tính năng đang phát triển'
export const REGISTER_EMAIL_TITLE = 'Email'
export const REGISTER_EMAIL_PLACEHOLDER = 'Ex: lilkelion@gmail.com'
export const REGISTER_WRONG_EMAIL_TEXT = 'Tài khoản email không chính xác. Vui lòng kiểm tra và nhập lại.'
export const REGISTER_EXISTED_EMAIL_TEXT = 'Tài khoản email đã tồn tại. Vui lòng thử email khác.'
export const REGISTER_USERNAME_TITLE = 'Username'
export const REGISTER_USERNAME_PLACEHOLDER = 'Ex: likelion@gmail.com'
export const REGISTER_WRONG_USERNAME_TEXT = 'Username đã tồn tại. Vui lòng nhập lại.'
export const REGISTER_NICKNAME_TITLE = 'Nickname'
export const REGISTER_NICKNAME_PLACEHOLDER = 'Ex: likelion24'
export const REGISTER_WRONG_NICKNAME_TEXT = 'Nickname đã tồn tại. Vui lòng nhập lại.'
export const REGISTER_PASS_TITLE = 'Mật khẩu'
export const REGISTER_PASS_PLACEHOLDER = 'Mật khẩu'
export const REGISTER_WRONG_PASS_TEXT = 'Mật khẩu không phù hợp. Vui lòng kiểm tra và nhập lại.'
export const REGISTER_CONFIRM_PASS_TITLE = 'Xác nhân mật khẩu'
export const REGISTER_CONFIRM_PASS_PLACEHOLDER = 'Mật khẩu'
export const REGISTER_WRONG_CONFIRM_PASS_TEXT = 'Mật khẩu không trùng khớp. Vui lòng kiểm tra và nhập lại.'
export const REGISTER_REGION_TITLE = 'Khu vực'
export const RESP_STATUS_CODE_WRONG_API = 404
export const RESP_STATUS_CODE_USER_ERROR = 409
export const DEFAULT_USER_COLOR = randomColor()

export const FAKE_LIST_USER: TUser[] = [
    {
        id: "id1",
        email: "1@gmail.com",
        nickname: "nickname1",
        region_country: eRegion.VN,
        username: "username1"
    },
    {
        id: "id2",
        email: "2@gmail.com",
        nickname: "nickname2",
        region_country: eRegion.VN,
        username: "username2"
    },
    {
        id: "id3",
        email: "3@gmail.com",
        nickname: "nickname3",
        region_country: eRegion.VN,
        username: "username3"
    },
    {
        id: "id4",
        email: "4@gmail.com",
        nickname: "nickname4",
        region_country: eRegion.KR,
        username: "username4"
    },
    {
        id: "id5",
        email: "5@gmail.com",
        nickname: "nickname5",
        region_country: eRegion.KR,
        username: "username5"
    },
    {
        id: "id6",
        email: "6@gmail.com",
        nickname: "nickname6",
        region_country: eRegion.KR,
        username: "username6"
    }
]