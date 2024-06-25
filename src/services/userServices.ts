
import { TUserCreateInput, TUserInfo, TUserLoginInput, TUserLoginOutput } from "../constants/types";
import {http} from "../http-common";

const get = (identifier: string) => {
  return http.get<TUserInfo>(`/getUser/${identifier}`);
};

const login = (data: TUserLoginInput) => {
  return http.post<TUserLoginInput, TUserLoginOutput>("/login", data);
};

const create = (data: TUserCreateInput) => {
  return http.post<TUserCreateInput, TUserLoginOutput>("/createUser", data);
};
const UserService
 = {
  login,
  get,
  create,
};

export default UserService;