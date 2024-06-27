import { Button, Dropdown, Select } from 'antd';
import * as React from 'react';
import { PAGE_DEFAULT, PAGE_LOGIN, PASSWORD_MIN_LENGTH, PW_CHECK_CAPITAL_TEXT, PW_CHECK_MIN_LENGTH_TEXT, PW_CHECK_NUMBER_TEXT, PW_CHECK_SPECIAL_CHAR_TEXT, REGISTER_CONFIRM_PASS_PLACEHOLDER, REGISTER_CONFIRM_PASS_TITLE, REGISTER_EMAIL_PLACEHOLDER, REGISTER_EMAIL_TITLE, REGISTER_EXISTED_EMAIL_TEXT, REGISTER_NICKNAME_PLACEHOLDER, REGISTER_NICKNAME_TITLE, REGISTER_PASS_PLACEHOLDER, REGISTER_PASS_TITLE, REGISTER_REGION_TITLE, REGISTER_USERNAME_PLACEHOLDER, REGISTER_USERNAME_TITLE, REGISTER_WRONG_CONFIRM_PASS_TEXT, REGISTER_WRONG_EMAIL_TEXT, REGISTER_WRONG_NICKNAME_TEXT, REGISTER_WRONG_USERNAME_TEXT, RESP_STATUS_CODE_USER_ERROR, SPECIAL_CHARACTERS } from '../../../constants/constant';
import InputField from '../components/InputField';
import PasswordInput from '../components/PasswordInput';
import CheckItem from '../components/CheckItem';
import XIcon from '../../../components/Icons/XIcon';
import LoginBodyS from '../../../components/Text/LoginBodyS';
import UserService from '../../../services/userServices';
import { TUserCreateInput, eRegion, eRegisterError } from '../../../constants/types';
import { validateEmail } from '../../../utils/helper';
import { Body1 } from '../../../components/Text';
import { useAuth } from '../../../context/AuthContext';
import LoginTitleS from '../../../components/Text/LoginTitleS';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

interface IRegisterFormProps {
}

export type TOptionType = {
  value: string,
  label: string
}

export const regions: TOptionType[] = [
  {
    value: eRegion.VN,
    label: eRegion.VN,
  },
  {
    value: eRegion.KR,
    label: eRegion.KR,
  },
];

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = (props) => {
  const [isRegisterable, setIsRegisterable] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>('')
  const [emailErrorText, setEmailErrorText] = React.useState<string>(REGISTER_WRONG_EMAIL_TEXT)
  const [isEmailError, setIsEmailError] = React.useState<boolean>(false)
  const [username, setUsername] = React.useState<string>('')
  const [isUsernameError, setIsUsernameError] = React.useState<boolean>(false)
  const [nickname, setNickname] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [confirmPassword, setConfirmPassword] = React.useState<string>('')
  const [checkLength, setCheckLength] = React.useState<boolean>()
  const [checkCapital, setCheckCapital] = React.useState<boolean>()
  const [checkNumber, setCheckNumber] = React.useState<boolean>()
  const [checkSpecial, setCheckSpecial] = React.useState<boolean>()
  const [isMatch, setIsMatch] = React.useState<boolean>(true)
  const [region, setRegion] = React.useState<eRegion>(eRegion.VN)
  const authContext = useAuth();
  const navigate = useNavigate();
  const onRegister = async () => {
    const accountCreate: TUserCreateInput = {
      email,
      username,
      nickname,
      password,
      regionCountry: region,
    }
    try {
      const result = await UserService.create(accountCreate)
      if (result.status) {
        // authContext?.setUserInfo(result)
        navigate(PAGE_LOGIN)
      }
    } catch (error: any | AxiosError) {
      setIsRegisterable(false)
      if (axios.isAxiosError(error)) {
        if (error.response?.status === RESP_STATUS_CODE_USER_ERROR) {
          const errorCode = parseInt(error.message)
          if (errorCode === eRegisterError.UserNameExited) {
            setIsUsernameError(true)
            return
          }
          if (errorCode === eRegisterError.EmailExited) {
            setEmailErrorText(REGISTER_EXISTED_EMAIL_TEXT)
            setIsEmailError(true)
            return
          }
        }
      }
    }
  }

  React.useMemo(() => {
    if (emailErrorText !== REGISTER_WRONG_EMAIL_TEXT) {
      setEmailErrorText(REGISTER_WRONG_EMAIL_TEXT)
    }
    if (email.length > 3) {
      setIsEmailError(!validateEmail(email))
    }
  }, [email])
  React.useMemo(() => {
    if (!isEmailError && email.length > 0 && !isUsernameError && username.length > 0 && password.length > 0 && confirmPassword.length > 0 && isMatch && nickname.length > 0) {
      setIsRegisterable(true)
    }
  }, [isEmailError, email, isUsernameError, username, password, confirmPassword, isMatch])
  React.useMemo(() => {
    setCheckLength(password.length >= PASSWORD_MIN_LENGTH)
    setCheckCapital(password !== password.toLowerCase())
    setCheckNumber(/\d/.test(password))
    setCheckSpecial(SPECIAL_CHARACTERS.test(password))
    if (confirmPassword && confirmPassword.length >= password.length) {
      setIsMatch(password === confirmPassword)
    }
  }, [password, confirmPassword])

  const onChange = (value: string) => {
    setRegion(value as eRegion)
  };
  return <>
    <div className='flex flex-1'>
      <div className='mt-[2rem] flex flex-col flex-1 gap-[0.5rem]'>
        <InputField title={REGISTER_EMAIL_TITLE} isError={isEmailError} hasValue={email.length > 0} onChangeValue={(v: string) => {
          setEmail(v)
        }} errorText={emailErrorText} placeholder={REGISTER_EMAIL_PLACEHOLDER} />
        <InputField title={REGISTER_USERNAME_TITLE} isError={isUsernameError} hasValue={username.length > 0} onChangeValue={(v: string) => {
          setUsername(v)
        }} errorText={REGISTER_WRONG_USERNAME_TEXT} placeholder={REGISTER_USERNAME_PLACEHOLDER} />
        <InputField title={REGISTER_NICKNAME_TITLE} isError={false} hasValue={nickname.length > 0} onChangeValue={(v: string) => {
          setNickname(v)
        }} errorText={REGISTER_WRONG_NICKNAME_TEXT} placeholder={REGISTER_NICKNAME_PLACEHOLDER} />
        <PasswordInput title={REGISTER_PASS_TITLE} hasValue={password.length > 0} onChangeValue={(v: string) => {
          setPassword(v)
        }} placeholder={REGISTER_PASS_PLACEHOLDER} />
        <div className='mt-[0.5rem] flex flex-col gap-[0.5rem]'>
          <CheckItem text={PW_CHECK_MIN_LENGTH_TEXT} isChecked={checkLength} />
          <CheckItem text={PW_CHECK_CAPITAL_TEXT} isChecked={checkCapital} />
          <CheckItem text={PW_CHECK_NUMBER_TEXT} isChecked={checkNumber} />
          <CheckItem text={PW_CHECK_SPECIAL_CHAR_TEXT} isChecked={checkSpecial} />
        </div>
        <PasswordInput title={REGISTER_CONFIRM_PASS_TITLE} hasValue={confirmPassword.length > 0} onChangeValue={(v: string) => {
          setConfirmPassword(v)
        }} placeholder={REGISTER_CONFIRM_PASS_PLACEHOLDER} />
        {!isMatch && <>
          <div className='w-full mt-[0.5rem] bg-sys-alert-light p-[1rem] flex gap-[0.5rem]'>
            <div className='w-[1.5rem] h-[1.5rem]'>
              <XIcon />
            </div>
            <LoginBodyS className='text-sys-alert-bold'>{REGISTER_WRONG_CONFIRM_PASS_TEXT}</LoginBodyS>
          </div>
        </>}
        <div>
          <LoginTitleS>{REGISTER_REGION_TITLE}</LoginTitleS>
          <Select
            placeholder={"Choose " + REGISTER_REGION_TITLE}
            optionFilterProp="label"
            onChange={onChange}
            options={regions}
            className='mt-[0.5rem] h-[3rem]'
          />
        </div>
        <div>
          <Button className='w-full mt-[1rem] h-[4rem] bg-blue-Primary text-[22px] font-6 leading-[32px] !text-neutral-White rounded-[4px] disabled:bg-blue-shade' disabled={!isRegisterable} onClick={onRegister}>Đăng ký</Button>
        </div>
      </div>
    </div>
  </>;
};

export default RegisterForm;
