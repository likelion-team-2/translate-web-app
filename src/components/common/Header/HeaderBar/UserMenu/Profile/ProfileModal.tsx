import { Modal, Select } from 'antd';
import * as React from 'react';
import { FAKE_LIST_USER, PROFILE_MODAL_TITLE, REGISTER_EMAIL_TITLE, REGISTER_NICKNAME_PLACEHOLDER, REGISTER_NICKNAME_TITLE, REGISTER_REGION_TITLE, REGISTER_USERNAME_TITLE, REGISTER_WRONG_NICKNAME_TEXT } from '../../../../../../constants/constant';
import DataField from './DataField';
import InputField from '../../../../../../pages/user/components/InputField';
import { regions } from '../../../../../../pages/user/register';
import LoginTitleS from '../../../../../Text/LoginTitleS';
import { TUserCreateInput, TUserUpdateInput, eRegion } from '../../../../../../constants/types';
import UserService from '../../../../../../services/userServices';
import { AxiosError } from 'axios';

interface IProfileModalProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileModal: React.FunctionComponent<IProfileModalProps> = ({ isOpen, setIsOpen }) => {
    const currentUser = FAKE_LIST_USER[0]
    const [nickname, setNickname] = React.useState<string>(currentUser.nickname)
    const [region, setRegion] = React.useState<eRegion>(currentUser.regionCountry)
    const onChange = (value: string) => {
        setRegion(value as eRegion)
    };
    const onConfirm = async () => {
        setIsOpen(false)
        const accountCreate: TUserUpdateInput = {
            email: currentUser.email,
            username: currentUser.username,
            nickname,
            regionCountry: region,
        }
        try {
            const result = await UserService.update(accountCreate)
        } catch (error: any | AxiosError) { }
    }
    return <>
        <Modal title={PROFILE_MODAL_TITLE} open={isOpen} onOk={onConfirm} onCancel={() => setIsOpen(false)}>
            <DataField title={REGISTER_EMAIL_TITLE} value={currentUser.email} />
            <DataField title={REGISTER_USERNAME_TITLE} value={currentUser.username} />
            <div className='mt-[1rem]'>
                <InputField title={REGISTER_NICKNAME_TITLE} isError={false} hasValue={nickname.length > 0} onChangeValue={(v: string) => {
                    setNickname(v)
                }} errorText={REGISTER_WRONG_NICKNAME_TEXT} placeholder={REGISTER_NICKNAME_PLACEHOLDER} />
            </div>
            <div className='mt-[1rem]'>
                <LoginTitleS>{REGISTER_REGION_TITLE}</LoginTitleS>
                <Select
                    placeholder={"Choose " + REGISTER_REGION_TITLE}
                    optionFilterProp="label"
                    onChange={onChange}
                    options={regions}
                    className='mt-[0.5rem] h-[3rem]'
                    defaultValue={region}
                />
            </div>
        </Modal>
    </>;
};

export default ProfileModal;
