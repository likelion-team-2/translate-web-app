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

export enum eRegion {
  VN = "Vietnam",
  KR = "Korea"
}

export type TUserCreateInput = {
  email: string
  username: string
  nickname: string
  region: eRegion
  password: string
}