import { Modal } from 'antd';
import * as React from 'react';
import { FORGET_PASS_MODAL_TITLE, FORGET_PASS_MODAL_CONTENT, PROFILE_MODAL_TITLE } from '../../../../../../constants/constant';
import { Body1 } from '../../../../../Text';

interface IProfileModalProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileModal: React.FunctionComponent<IProfileModalProps> = ({ isOpen, setIsOpen }) => {
    return <>
        <Modal title={PROFILE_MODAL_TITLE} open={isOpen} onOk={() => setIsOpen(false)} onCancel={() => setIsOpen(false)}>

        </Modal>
    </>;
};

export default ProfileModal;
