import * as React from 'react';
import { TUserInfoDesign } from '../../../constants/types';
import DefaultUser from '../../../components/Icons/DefaultUser';
import { Body1 } from '../../../components/Text';

interface IChatHeaderProps {
    user: TUserInfoDesign
}

const ChatHeader: React.FunctionComponent<IChatHeaderProps> = ({ user }) => {
    return <>
        <div className='h-[49px] flex flex-row gap-[8px] items-center px-[20px] w-full border border-t-0 border-l-0 border-r-0'>
            <DefaultUser color={user.design.color} />
            <Body1 className={`text-[#1D1C1D] `}>{user.user.nickname}</Body1>
        </div>
    </>;
};

export default ChatHeader;
