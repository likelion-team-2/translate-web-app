import * as React from 'react';
import { Button, Modal } from 'antd';
import { useMutation } from '@apollo/client';
import InputField from '../components/InputField';
import PasswordInput from '../components/PasswordInput';
import { LOGIN_USER_IDENTIFIER_TITLE, LOGIN_WRONG_USER_IDENTIFIER_TEXT, LOGIN_PASSWORD_TITLE, PASSWORD_MIN_LENGTH, LOGIN_USER_IDENTIFIER_PLACEHOLDER, LOGIN_PASSWORD_PLACEHOLDER, PAGE_REGISTER, FORGET_PASS_MODAL_TITLE, FORGET_PASS_MODAL_CONTENT, PAGE_DEFAULT } from '../../../constants/constant';
import { useAuth } from '../../../context/AuthContext';
import UserService from '../../../services/userServices';
import { TUserInfo, TUserLoginInput, TUserLoginOutput } from '../../../constants/types';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../../components/Input/TextInput';
import { Body1 } from '../../../components/Text';
import axios, { AxiosError } from 'axios';

interface ILoginFormProps {
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  const [userIdentifier, setUserIdentifier] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [hasUserIdentifierValue, setHasUserIdentifierValue] = React.useState<boolean>(false)
  const [hasPasswordValue, setHasPasswordValue] = React.useState<boolean>(false)
  const [isError, setIsError] = React.useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  //   const [login] = useMutation<TLoginResult, TLoginInput>(USER_LOGIN);
  const authContext = useAuth();
  const onChangeUserIdentifier = (v: string) => {
    setUserIdentifier(v)
  }

  const onChangePassword = (v: string) => {
    setPassword(v)
  }
  React.useMemo(() => {
    setHasUserIdentifierValue(userIdentifier.length > 0)
  }, [userIdentifier])
  React.useMemo(() => {
    setHasPasswordValue(password.length > 0)
  }, [password])

  const onClick = async () => {
    setIsError(false);
    const accountLogin: TUserLoginInput = {
      identifier: userIdentifier,
      password: password,
    }
    try {

      const result = await UserService.login(accountLogin)
      if (result) {
        authContext?.setUserInfo(result)
        navigate(PAGE_DEFAULT)
      }
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        console.log("login error: ", error)
      }
    }
  }

  const navigate = useNavigate();
  const onCreate = () => {
    navigate(PAGE_REGISTER)
  }

  const onForget = () => {
    setIsModalOpen(true)
  }
  return <div className='flex flex-1'>
    <Modal title={FORGET_PASS_MODAL_TITLE} open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
      <Body1>{FORGET_PASS_MODAL_CONTENT}</Body1>
    </Modal>
    <div className='mt-[2rem] flex flex-col flex-1 gap-[0.5rem]'>
      <InputField title={LOGIN_USER_IDENTIFIER_TITLE} isError={isError} hasValue={hasUserIdentifierValue} onChangeValue={onChangeUserIdentifier} errorText={LOGIN_WRONG_USER_IDENTIFIER_TEXT} placeholder={LOGIN_USER_IDENTIFIER_PLACEHOLDER} />
      <PasswordInput title={LOGIN_PASSWORD_TITLE} hasValue={hasPasswordValue} onChangeValue={onChangePassword} placeholder={LOGIN_PASSWORD_PLACEHOLDER} />
      <div>
        <Button className='w-full mt-[1.5rem] h-[4rem] bg-blue-Primary text-[22px] font-6 leading-[32px] text-neutral-White rounded-[4px] disabled:bg-blue-shade disabled:text-neutral-White' disabled={!(hasPasswordValue && hasUserIdentifierValue && password.length > PASSWORD_MIN_LENGTH)} onClick={onClick}>Đăng nhập</Button>
      </div>
      <div className='w-full flex flex-row justify-center underline cursor-pointer text-blue-D30' onClick={onForget}>
        <Body1>Quên mật khẩu?</Body1>
      </div>
      <div className='w-full h-[2px] bg-blue-L30 mt-[24px]' />
      <div className='w-full flex flex-row justify-center'>
        <Button className='w-[240px] mt-[1.5rem] h-[4rem] bg-turquoise-D30 text-[22px] font-6 leading-[32px] text-neutral-White rounded-[4px]' onClick={onCreate}>Tạo tài khoản</Button>
      </div>
    </div>
  </div>;
};

export default LoginForm;
