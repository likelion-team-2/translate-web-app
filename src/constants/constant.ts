import { randomColor } from "../utils/helper"
import { TUser, eRegion } from "./types"

export const API_URL = "https://jsonplaceholder.typicode.com"
export const LS_accessToken = "@accessToken"
export const LS_refreshToken = "@refreshToken"
export const PAGE_REGISTER = "/register"
export const PAGE_LOGIN = "/login"
export const PAGE_TEST = "/test"
export const PAGE_DEFAULT = "/*"
export const LOGIN_TITLE = 'Log in'
export const LOGIN_SUBTITLE = 'Likelion translate chat helps you connect and improve your business.'
export const LOGIN_BG_IMAGE = '/LoginPage.jpg'
export const LOGO_IMAGE_BLACK = '/LogoBlack.png'
export const LOGO_IMAGE_WHITE = '/LogoWhite.png'
export const THRESH_NO_CONTENT_IMG = '/NoContentImg.png'
export const LOGIN_USER_IDENTIFIER_TITLE = 'Email / Username'
export const LOGIN_USER_IDENTIFIER_PLACEHOLDER = 'Email or Username'
export const LOGIN_PASSWORD_TITLE = 'Password'
export const LOGIN_PASSWORD_PLACEHOLDER = 'Password'
export const LOGIN_WRONG_USER_IDENTIFIER_TEXT = 'Incorrect email or username. Please try again.'
export const LOGIN_WRONG_PASSWORD_TEXT = 'Incorrect password. Please try again.'
export const SPECIAL_CHARACTERS = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
export const PASSWORD_MIN_LENGTH = 8
export const PW_CHECK_MIN_LENGTH_TEXT = 'Must contain at least 8 characters.'
export const PW_CHECK_CAPITAL_TEXT = 'Must contain at least one uppercase letter.'
export const PW_CHECK_NUMBER_TEXT = 'Must contain at least one number.'
export const PW_CHECK_SPECIAL_CHAR_TEXT = 'Must contain at least one special character.'
export const REGISTER_TITLE = 'Sign Up'
export const REGISTER_SUBTITLE = `It's quick and easy.`
export const FORGET_PASS_MODAL_TITLE = 'Forget password'
export const FORGET_PASS_MODAL_CONTENT = 'Coming soon!!!'
export const REGISTER_EMAIL_TITLE = 'Email'
export const REGISTER_EMAIL_PLACEHOLDER = 'Ex: lilkelion@gmail.com'
export const REGISTER_WRONG_EMAIL_TEXT = 'Incorrect email or username. Please try again.'
export const REGISTER_EXISTED_EMAIL_TEXT = 'An account with this email address already exists. Please try again.'
export const REGISTER_USERNAME_TITLE = 'Username'
export const REGISTER_USERNAME_PLACEHOLDER = 'Ex: likelion@gmail.com'
export const REGISTER_WRONG_USERNAME_TEXT = 'An account with this username already exists. Please try again.'
export const REGISTER_NICKNAME_TITLE = 'Nickname'
export const REGISTER_NICKNAME_PLACEHOLDER = 'Ex: likelion24'
export const REGISTER_WRONG_NICKNAME_TEXT = 'An account with this nickname already exists. Please try again.'
export const REGISTER_PASS_TITLE = 'Password'
export const REGISTER_PASS_PLACEHOLDER = 'Password'
export const REGISTER_WRONG_PASS_TEXT = 'Incorrect password. Please try again.'
export const REGISTER_CONFIRM_PASS_TITLE = 'Confirm password'
export const REGISTER_CONFIRM_PASS_PLACEHOLDER = 'Password'
export const REGISTER_WRONG_CONFIRM_PASS_TEXT = 'Confirm password is not match. Please try again.'
export const REGISTER_REGION_TITLE = 'Region'
export const RESP_STATUS_CODE_WRONG_API = 404
export const RESP_STATUS_CODE_USER_ERROR = 409
export const DEFAULT_USER_COLOR = randomColor()
export const PROFILE_MODAL_TITLE = 'User profile'

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