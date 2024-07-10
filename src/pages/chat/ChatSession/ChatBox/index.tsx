import * as React from 'react';
import { Button, Input } from 'react-chat-elements';
import { ChatContext } from '../../../../context/ChatContext';
import { TMessage, TMessageResponse, TUserInfoDesign } from '../../../../constants/types';
import { AuthContext } from '../../../../context/AuthContext';
import { WebSocketContext } from '../../../../context/WebSocketContext';
import { useParams } from 'react-router-dom';
import { IMessage } from '@stomp/stompjs';

interface IChatBoxProps {
  selectedUser: TUserInfoDesign;
}
const ChatBox: React.FunctionComponent<IChatBoxProps> = (props) => {
  const { setLiveMessageDesign, liveMessageDesign } = React.useContext(ChatContext)!
  const { userInfo } = React.useContext(AuthContext)!;
  const { wsClient, isWsConnected } = React.useContext(WebSocketContext)!;
  const [value, setValue] = React.useState<string>();
  const params = useParams();
  const { sessionId } = params;
  const { selectedUser } = props;
  
  const onSend = () => {
    if (value && wsClient?.connected) {
      wsClient.publish({
        destination: "/message",
        body: JSON.stringify({
          sender: userInfo?.user.username,
          recipient: selectedUser.user.username,
          sessionId: sessionId,
          content: value,
        })
      });

      const temp = {
        data: {
          date: new Date(),
          messageId: userInfo?.user.userId,
          status: 'waiting',
          text: value,
          userId: userInfo?.user.userId
        },
        design: {
          position: "right",
          title: userInfo?.user.nickname
        }
      } as TMessage;
      
      setLiveMessageDesign((prev) => {
        return [
          ...prev,
          temp
        ]
      });
    }
    setValue("");
  }

  React.useEffect(() => {
    if (wsClient && isWsConnected) {
      // Update the message the user just sent
      wsClient.subscribe(`/topic/user/${selectedUser.user.username}`, (res: IMessage) => {
        const messageReponse = JSON.parse(res.body) as TMessageResponse;
        console.log("messageReponse1", messageReponse);
        const newMessage = {
          data: {
            date: messageReponse.createdAt,
            messageId: messageReponse.id,
            status: 'sent',
            text: messageReponse.content, // TODO: When translated let use contentVi and contentKo
            userId: userInfo?.user.userId
          },
          design: {
            position: "right",
            title: userInfo?.user.nickname
          }
        } as TMessage;

        setLiveMessageDesign((prev) => {
          const newLiveMessages = prev.filter(message => message.data.messageId !== userInfo?.user.userId )
          return [
            ...newLiveMessages,
            newMessage
          ]
        })
      });

      // Handle the message received from other user
      wsClient.subscribe(`/topic/user/${userInfo?.user.username}`, (res: IMessage) => {
        const messageReponse = JSON.parse(res.body) as TMessageResponse;
        console.log("messageReponse2", messageReponse);
        const newMessage = {
          data: {
            date: messageReponse.createdAt,
            messageId: messageReponse.id,
            status: 'received',
            text: messageReponse.content, // TODO: When translated let use contentVi and contentKo
            userId: selectedUser.user.userId
          },
          design: {
            position: "left",
            title: selectedUser.user.nickname
          }
        } as TMessage;

        setLiveMessageDesign((prev) => {
          return [
            ...prev,
            newMessage
          ]
        })
      })
    }
  }, [wsClient, isWsConnected, selectedUser, userInfo, setLiveMessageDesign]);

  return <>
    <div>
      <Input
        maxHeight={60}
        placeholder='Type here...'
        multiline={true}
        value={value}
        rightButtons={<Button color='white' backgroundColor='black' text='Send' onClick={onSend} />}
        className='border'
        onChange={(e: any) => {
          setValue(e.target.value)
        }}
      />
    </div>
  </>;
};

export default ChatBox;
