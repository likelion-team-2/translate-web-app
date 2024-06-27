import * as React from 'react';
import { Body2, Body3 } from '../../../Text';
import DropdownIcon from '../../../Icons/DropdownIcon';
import { TUser } from '../../../../constants/types';
import DMUser from './DMUser';

interface IDirectMessageProps {
    users: TUser[]
}

const DirectMessage: React.FunctionComponent<IDirectMessageProps> = ({ users }) => {
    return <>
        <div className='mt-[12px] flex flex-col'>
            <div className='flex flex-row items-center'>
                <div className='cursor-pointer'>
                    <DropdownIcon />
                </div>
                <Body3 className='text-neutral-White opacity-70'>Direct messages</Body3>
            </div>
            <div className='flex flex-col gap-[8px]'>
                {users.length > 0 && users.map((u, id) => {
                    return <DMUser key={id} user={u} />
                })}
            </div>
        </div>
    </>;
};

export default DirectMessage;