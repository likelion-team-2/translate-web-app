import { Button } from 'antd';
import * as React from 'react';
import { useAuth } from '../../context/AuthContext';
import Layout from '../../components/common/Layout';
import NoContent from './NoContent';

interface IChatFrameProps {
}

const ChatFrame: React.FunctionComponent<IChatFrameProps> = (props) => {
    const authContext = useAuth();
    const onLogout = () => {
        authContext?.logout()
    }
    return <>
        {/* <Button onClick={onLogout}>Logout</Button> */}
        {/* <div>Main content</div> */}
        <NoContent />
    </>;
};

export default ChatFrame;
