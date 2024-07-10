import { HttpStatusCode } from "axios"

export interface ITestPostData {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export type TGetSessionIdInput = {
  friendId: string
}

export type TSession = {
  id: number
}

export type TGetSessionIdOutput = {
  data: TSession
}

export type TGetFriendInput = {
  usernameOrNickname: string
}

export type TGetFriendOutput = {
  data: { data: TUserInfo }
}

export type TUserDesign = {
  color: string
}

export type TUserInfoDesign = {
  user: TUserInfo
  design: TUserDesign
}

export type TUserInfo = {
  userId: string
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

export type TUserLogin = {
  accessToken: string
  refreshToken: string
  user: TUserInfo
}

export interface IUserLoginOutput extends THttpResponse {
  data: {
    data: TUserLogin
  }
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

export enum eVerifyOtpError {
  PassTooShort = 1,
  NewPassTooShort = 2,
  OldPassTooShort = 3,
}

export type TUserCreateErrorOutput = {
  errorCode: eRegisterError
}

export type THttpResponse = {
  status: HttpStatusCode
}

export type TUserCreateOutput = {
  status: boolean
}

export enum eRegion {
  VN = "Vietnam",
  KR = "Korea"
}

export type TVerifyOtpInput = {
  email: string
  newPassword: string
  otp: string
}

export type TVerifyOtpOutput = {
  status: boolean
}

export type TSendOtpInput = {
  email: string
}

export type TSendOtpOutput = {
  status: boolean
}

export type TUserUpdateInput = {
  email: string
  username: string
  nickname: string
  regionCountry: eRegion
}

export type TUserChangePassInput = {
  email: string
  oldPassword: string
  newPassword: string
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

export type TMessage = {
  data: TMessageData
  design: TMessageDesign
}

export type TMessageDesign = {
  position: 'left' | 'right'
  title: string
}

export type TMessageData = {
  messageId: string | number
  date: Date
  status: 'waiting' | 'sent' | 'received' | 'read'
  text: string
  userId: string
}