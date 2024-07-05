import * as React from 'react';
import { Button, Input } from 'react-chat-elements';
import { ChatContext } from '../../../../context/ChatContext';
import { TMessage } from '../../../../constants/types';
import { AuthContext } from '../../../../context/AuthContext';

interface IChatBoxProps {
}
const ChatBox: React.FunctionComponent<IChatBoxProps> = (props) => {
  const { setLiveMessageDesign, liveMessageDesign } = React.useContext(ChatContext)!
  const { userInfo } = React.useContext(AuthContext)!
  const [value, setValue] = React.useState<string>()
  const onSend = () => {
    const temp = {
      data: {
        date: new Date(),
        messageId: "todo",
        status: 'waiting',
        text: value,
        userId: userInfo?.user.userId
      },
      design: {
        position: "right",
        title: userInfo?.user.nickname
      }
    } as TMessage
    setLiveMessageDesign((prev) => {
      return [
        ...prev,
        temp
      ]
    })
  }
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
