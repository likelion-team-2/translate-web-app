import * as React from 'react';
import DirectMessage from './DirectMessage';
import { FAKE_LIST_USER } from '../../../constants/constant';

interface ILeftBarProps {
}

const LeftBar: React.FunctionComponent<ILeftBarProps> = (props) => {
    return <>
        <div className='w-[244px] min-h-screen bg-[#3F0E40] px-[20px]'>
            <DirectMessage users={FAKE_LIST_USER}/>
        </div>
    </>;
};

export default LeftBar;
