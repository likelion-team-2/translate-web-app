
import { TGetFriendInput, TGetFriendOutput, TGetSessionIdInput, TGetSessionIdOutput, TUserInfo } from "../constants/types";
import { http } from "../http-common";

const searchFriend = (input: TGetFriendInput) => {
  return http.get<TGetFriendInput, TGetFriendOutput>(`"/v1/api/chat/search/friend/${input.text}`);
};

const getSessionId = (input: TGetSessionIdInput) => {
  return http.get<TGetSessionIdInput, TGetSessionIdOutput>(`"/v1/api/chat/get/sessionId/${input.friendId}`);
};

const ChatService
  = {
  searchFriend,
  getSessionId,
};

export default ChatService;