
import { TUserCreateInput, TUserCreateOutput, TUserInfo, TUserLoginInput, TUserLoginOutput, TUserUpdateInput } from "../constants/types";
import { http } from "../http-common";

const get = (identifier: string) => {
  return http.get<TUserInfo>(`/getUser/${identifier}`);
};

const login = (data: TUserLoginInput) => {
  return http.post<TUserLoginInput, TUserLoginOutput>("/signin", data);
};

const create = (data: TUserCreateInput) => {
  return http.post<TUserCreateInput, TUserCreateOutput>("/signup", data);
};

const update = (data: TUserUpdateInput) => {
  return http.post<TUserUpdateInput, TUserCreateOutput>("/update", data);
};
const UserService
 = {
  login,
  get,
  create,
  update,
};

export default UserService;