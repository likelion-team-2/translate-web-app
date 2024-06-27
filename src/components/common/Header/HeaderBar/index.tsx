import * as React from 'react';
import SearchOutline from '../../../Icons/SearchOutline';
import { Neutral } from '../../../../constants/colors';
import { Body2 } from '../../../Text';
import { LOGO_IMAGE_WHITE } from '../../../../constants/constant';
import UserMenu from './UserMenu';

interface IHeaderBarProps {
}

const HeaderBar: React.FunctionComponent<IHeaderBarProps> = (props) => {
    return <>
        <div className='w-full h-full flex flex-1 flex-col items-center relative justify-center'>
            <div className='w-full flex flex-row justify-between flex-1 items-center px-[16px]'>
                <div className="w-[150px] h-fit">
                    <img src={LOGO_IMAGE_WHITE} alt="logo" />
                </div>
                <div className='w-[714px] flex flex-row justify-center items-center bg-[#5D3D5E] rounded-[6px] gap-[8px] cursor-pointer'>
                    <SearchOutline color={Neutral.White} />
                    <Body2 className='text-neutral-White'>Search friends</Body2>
                </div>
                <UserMenu />
            </div>
        </div>
    </>;
};

export default HeaderBar;
