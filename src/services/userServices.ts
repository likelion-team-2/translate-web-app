
import { TUserChangePassInput, TUserCreateInput, TUserCreateOutput, TUserInfo, TUserLoginInput, TUserLoginOutput, TUserUpdateInput } from "../constants/types";
import { http } from "../http-common";

const get = (identifier: string) => {
  return http.get<TUserInfo>(`/getUser/${identifier}`);
};

const login = (data: TUserLoginInput) => {
  return http.post<TUserLoginInput, TUserLoginOutput>("/v1/api/user/signin", data);
};

const create = (data: TUserCreateInput) => {
  return http.post<TUserCreateInput, TUserCreateOutput>("/v1/api/user/signup", data);
};

const update = (data: TUserUpdateInput) => {
  return http.post<TUserUpdateInput, TUserCreateOutput>("/v1/api/user/update", data);
};

const changePassword = (input: TUserChangePassInput) => {
  return http.post<TUserChangePassInput, TUserCreateOutput>("/v1/api/user/changePassword", input);
};
const UserService
 = {
  login,
  get,
  create,
  update,
  changePassword,
};

export default UserService;