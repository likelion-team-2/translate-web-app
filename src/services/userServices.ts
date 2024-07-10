
import { TUserChangePassInput, TUserCreateInput, TUserCreateOutput, TUserInfo, TUserLoginInput, IUserLoginOutput, TUserUpdateInput } from "../constants/types";
import { http } from "../http-common";

const get = (identifier: string) => {
  return http.get<TUserInfo>(`/getUser/${identifier}`);
};

const login = (data: TUserLoginInput) => {
  return http.post<TUserLoginInput, IUserLoginOutput>("/v1/api/auth/signin", data);
};

const create = (data: TUserCreateInput) => {
  return http.post<TUserCreateInput, TUserCreateOutput>("/v1/api/auth/signup", data);
};

const update = (data: TUserUpdateInput) => {
  return http.post<TUserUpdateInput, TUserCreateOutput>("/v1/api/auth/update", data);
};

const changePassword = (input: TUserChangePassInput) => {
  return http.patch<TUserChangePassInput, TUserCreateOutput>("/v1/api/user/changepassword", input);
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