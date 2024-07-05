import * as React from 'react';
import { ChatContext } from '../../../context/ChatContext';
import ChatHeader from './header';
import ChatBox from './ChatBox';
import ChatMesg from './ChatMesg';

interface IChatSessionProps {
}

const ChatSession: React.FunctionComponent<IChatSessionProps> = (props) => {
    const { selectedUser, messageDesign, liveMessageDesign } = React.useContext(ChatContext)!
    return <div className='flex flex-col flex-1 p-[8px] w-full'>
        {
            selectedUser &&
            <div className='flex flex-col flex-1 justify-between'>
                <ChatHeader user={selectedUser} />
                <div className='flex flex-col-reverse gap-[8px]'>
                    <ChatBox />
                    <div>
                        {liveMessageDesign.map((m, id) => {
                            return <ChatMesg key={id} input={m} />
                        })}
                    </div>
                    <div>
                        {messageDesign.map((m, id) => {
                            return <ChatMesg key={id} input={m} />
                        })}
                    </div>
                </div>
            </div>
        }
    </div>;
};

export default ChatSession;
