import * as React from 'react';
import { MessageBox } from 'react-chat-elements';
import { TMessage } from '../../../../constants/types';

interface IChatMesgProps {
    input: TMessage
}

const ChatMesg: React.FunctionComponent<IChatMesgProps> = ({input}) => {
    return <>
        <div>
            <MessageBox position={input.design.position} type={'text'} id={input.data.messageId} date={input.data.date} focus={false} text={input.data.text} title={input.design.title} titleColor={input.design.position === "left" ? "black" : "white"} status={input.data.status} forwarded={false} notch={false} retracted={false} removeButton={false} replyButton={false} styles={{
                backgroundColor: input.design.position === "left" ? "#E9E9EB" : "#2E9DFB",
                color: `${input.design.position === "left" ? "black"  : "white"}`,
            }}/>
        </div>
    </>;
};

export default ChatMesg;
