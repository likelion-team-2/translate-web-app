import * as React from 'react';
import SearchOutline from '../../../Icons/SearchOutline';
import { Neutral } from '../../../../constants/colors';
import { Body2 } from '../../../Text';
import { FAKE_LIST_USER, LOGO_IMAGE_WHITE } from '../../../../constants/constant';
import UserMenu from './UserMenu';
import Search from 'antd/es/input/Search';
import ChatService from '../../../../services/chatServices';
import axios, { AxiosError } from 'axios';
import { TUserInfo } from '../../../../constants/types';
import { Select, SelectProps } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface IHeaderBarProps {
}

const HeaderBar: React.FunctionComponent<IHeaderBarProps> = (props) => {
    const [searchText, setSearchText] = React.useState<string>('');
    const [friends, setFriends] = React.useState<SelectProps['options']>([]);
    const [choose, setChoose] = React.useState<string>();

    const onChange = (value: string) => {
        const currText = value
        setSearchText(currText)
    }

    const handleChange = (newValue: string) => {
        setChoose(newValue);
    };

    React.useEffect(() => {
        const interval = setTimeout(async () => {
            if (searchText.trim() !== '' && searchText.length >= 3) {
                try {
                    //search by name
                    // const result = await ChatService.searchFriend({ text: searchText })
                    // setFriends(result.data)
                    const result = FAKE_LIST_USER
                    const converted = result.map((i) => {
                        return {
                            label: i.username,
                            value: i.userId
                        }
                    })
                    console.log("----", converted)
                    setFriends(converted)
                } catch (error: any | AxiosError) {
                    if (axios.isAxiosError(error)) {
                        //   setIsEnable(false)
                        //   if (error.response?.status === HttpStatusCode.NotFound) {
                        //     const errorCode = parseInt(error.response.data)
                        //     if (errorCode === eLoginError.UserNotFound) {
                        //       setIsError(true)
                        //       return
                        //     }
                        //     if (errorCode === eLoginError.InvalidPassword) {
                        //       setIsPassError(true)
                        //       return
                        //     }
                        //   }
                    }
                }
            }
        }, 300);
        return () => clearTimeout(interval);
    }, [searchText]);
    return <>
        <div className='w-full h-full flex flex-1 flex-col items-center relative justify-center'>
            <div className='w-full flex flex-row justify-between flex-1 items-center px-[16px]'>
                <div className="w-[150px] h-fit">
                    <img src={LOGO_IMAGE_WHITE} alt="logo" />
                </div>
                <div className='w-[714px] flex flex-row justify-center items-center bg-[#5D3D5E] rounded-[6px] gap-[8px] cursor-pointer'>
                    <Select
                        className='w-full'
                        showSearch
                        value={choose}
                        placeholder={"Search friends"}
                        defaultActiveFirstOption={false}
                        suffixIcon={<SearchOutlined style={{fontSize: '16px'}}/>}
                        filterOption={false}
                        onSearch={onChange}
                        onChange={handleChange}
                        notFoundContent={null}
                        options={(friends || []).map((d) => ({
                            value: d.value,
                            label: d.label,
                        }))}
                    />
                </div>
                <UserMenu />
            </div>
        </div>
    </>;
};

export default HeaderBar;
