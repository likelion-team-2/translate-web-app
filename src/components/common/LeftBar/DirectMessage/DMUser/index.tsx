import * as React from 'react';
import { TUserInfo } from '../../../../../constants/types';
import { Body3 } from '../../../../Text';
import DefaultUser from '../../../../Icons/DefaultUser';
import { randomColor } from '../../../../../utils/helper';

interface IDMUserProps {
    user: TUserInfo
}

const DMUser: React.FunctionComponent<IDMUserProps> = ({ user }) => {
    return <>
        <div className='h-[26px] flex flex-row gap-[8px] items-center cursor-pointer w-fit'>
            <DefaultUser color={randomColor()}/>
            <Body3 className='text-neutral-White opacity-70'>{user.nickname}</Body3>
        </div>
    </>;
};

export default DMUser;
