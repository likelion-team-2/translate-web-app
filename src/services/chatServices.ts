
import { TGetFriendInput, TGetFriendOutput, TUserInfo } from "../constants/types";
import { http } from "../http-common";

const searchFriend = (input: TGetFriendInput) => {
  return http.get<TGetFriendInput, TGetFriendOutput>(`"/v1/api/chat/search/friend/${input.text}`);
};

const ChatService
  = {
  searchFriend,
};

export default ChatService;