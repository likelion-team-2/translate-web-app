import { Button } from 'antd';
import * as React from 'react';
import { useAuth } from '../../../context/AuthContext';

interface IChatFrameProps {
}

const ChatFrame: React.FunctionComponent<IChatFrameProps> = (props) => {
    const authContext = useAuth();
    const onLogout = () => {
        authContext?.logout()
    }
    return <>
        <Button onClick={onLogout}>Logout</Button>
    </>;
};

export default ChatFrame;
