export interface ITestPostData {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export type TUserInfo = {
  email: string
  username: string
  nickname: string
  regionCountry: eRegion
}

export type TRefreshTokenInput = {
  refreshToken: string
}

export type TRefreshToken = {
  accessToken: string
  refreshToken: string
}

export type TRefreshTokenOutput = {
  data: TRefreshToken
}

export type TUserLoginInput = {
  usernameOrEmail: string
  password: string
}

export type TUserLogin= {
  accessToken: string
  refreshToken: string
  user: TUserInfo
}

export type TUserLoginOutput = {
  data: TUserLogin
}

export enum eRefreshTokenError {
  Invalid = 1,
  Expired = 2,
}

export enum eLoginError {
  UserNotFound = 1,
  InvalidPassword = 2,
}

export enum eRegisterError {
  UserNameExited = 1,
  UserNameHasAdmin = 2,
  PassTooShort = 3,
  NickNameHasAdmin = 4,
  EmailExited = 5,
}

export type TUserCreateErrorOutput = {
  errorCode: eRegisterError
}

export type TUserCreateOutput = {
  status: boolean
}

export enum eRegion {
  VN = "Vietnam",
  KR = "Korea"
}

export type TUserUpdateInput = {
  email: string
  username: string
  nickname: string
  regionCountry: eRegion
}

export type TUserChangePassInput = {
  password: string
}

export type TUserCreateInput = {
  email: string
  username: string
  nickname: string
  regionCountry: eRegion
  password: string
}

export interface IIconProps {
  color?: string
  width?: number
  height?: number
}

export type TUser = {
  id: string
  email: string
  username: string
  nickname: string
  regionCountry: eRegion
}