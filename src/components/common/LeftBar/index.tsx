import * as React from 'react';
import DirectMessage from './DirectMessage';
import { FAKE_LIST_USER } from '../../../constants/constant';
import { TUserInfoDesign } from '../../../constants/types';
import { randomColor } from '../../../utils/helper';

interface ILeftBarProps {
}

const LeftBar: React.FunctionComponent<ILeftBarProps> = (props) => {
    const [users, setUsers] = React.useState<TUserInfoDesign[]>()
    React.useEffect(()=>{
        const temp: TUserInfoDesign[] = [];
        FAKE_LIST_USER.map((u, i) => {
            temp.push({
                user: u,
                design: {
                    color: randomColor()
                }
            })
        })
        setUsers(temp)
    },[])
    return <>
        <div className='w-[244px] flex h-full bg-[#3F0E40] px-[20px]'>
            {users && <DirectMessage users={users}/>}
        </div>
    </>;
};

export default LeftBar;
