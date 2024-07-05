/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { TMessage, TMessageData, TMessageDesign, TUserInfo, TUserInfoDesign } from '../constants/types';
import NoContent from '../pages/chat/NoContent';
import ChatSession from '../pages/chat/ChatSession';
import { useNavigate } from 'react-router-dom';
import { FAKE_MESSAGE, PAGE_CHAT_SESSION } from '../constants/constant';
import ChatService from '../services/chatServices';
import { AuthContext, useAuth } from './AuthContext';

export interface IChatContext {
  selectedUser: TUserInfoDesign | null
  setSelectedUser: React.Dispatch<React.SetStateAction<TUserInfoDesign | null>>
  messageDesign: TMessage[]
  liveMessageDesign: TMessage[]
  setLiveMessageDesign: React.Dispatch<React.SetStateAction<TMessage[]>>
}

export const ChatContext = React.createContext<IChatContext | null>(null);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedUser, setSelectedUser] = React.useState<TUserInfoDesign | null>(null);
  const [messageData, setMessageData] = React.useState<TMessageData[]>([]);
  const [messageDesign, setMessageDesign] = React.useState<TMessage[]>([]);
  const [liveMessageDesign, setLiveMessageDesign] = React.useState<TMessage[]>([]);
  const navigate = useNavigate();
  const { userInfo } = React.useContext(AuthContext)!
  React.useMemo(() => {
    if (messageData.length === 0 || userInfo === null) return
    const convertData = [] as TMessage[]
    messageData.map((m, _id) => {
      const temp = {
        data: m,
        design: {
          title: userInfo.user.nickname,
          position: userInfo.user.userId === m.userId ? "right" : "left"
        }
      } as TMessage
      convertData.push(temp)
    })
    setMessageDesign(convertData)
  }, [messageData, userInfo])

  const getSessionId = async () => {
    if (!selectedUser) return
    try {
      const result = await ChatService.getSessionId({ friendId: selectedUser?.user.userId })
      if (result) {
        navigate(PAGE_CHAT_SESSION + "/" + result.data.id)
      }
    } catch (error) {

    }
  }

  const getMessage = () => {
    setMessageData([])
    setMessageData(FAKE_MESSAGE)
  }

  React.useEffect(() => {
    if (selectedUser) {
      // getSessionId()
      getMessage()
      navigate(PAGE_CHAT_SESSION + "/" + 1)
    }
  }, [selectedUser])

  const data = {
    selectedUser,
    setSelectedUser,
    messageDesign,
    liveMessageDesign,
    setLiveMessageDesign,
  };
  return <ChatContext.Provider value={data}>{children}</ChatContext.Provider>;
};
