export interface ITestPostData {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export type TUserInfo = {
  username: string
  email: string
}

export type TUserLoginInput = {
  identifier: string
  password: string
}

export type TUserLoginOutput = {
  accessToken: string
  refreshToken: string
  user: TUserInfo
}

export enum eRegisterError {
  UserNameExited = 1,
  UserNameHasAdmin = 2,
  PassTooShort = 3,
  PassHasAdmin = 4,
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

export type TUserCreateInput = {
  email: string
  username: string
  nickname: string
  region_country: eRegion
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
  region_country: eRegion
}