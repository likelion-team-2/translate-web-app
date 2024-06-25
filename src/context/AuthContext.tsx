import * as React from "react";
import { createContext, useContext } from "react";
import { TUserLoginOutput } from "../constants/types";
import { LS_ACCESS_TOKEN, LS_REFRESH_TOKEN, PAGE_LOGIN, PAGE_TEST } from "../constants/constant";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  userInfo: TUserLoginOutput | null;
  setUserInfo: React.Dispatch<React.SetStateAction<TUserLoginOutput | null>>;
  token: string;
  logout: () => void
}
export const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState<TUserLoginOutput | null>(null);
  const [token, setToken] = React.useState<string>('');
  const navigate = useNavigate();
  React.useEffect(() => {
    const localToken = localStorage.getItem(LS_ACCESS_TOKEN)
    if (!userInfo && !localToken) {
      navigate(PAGE_LOGIN)
    } else {
      if (userInfo) {
        setToken(userInfo.accessToken)
        localStorage.setItem(LS_ACCESS_TOKEN, userInfo.accessToken)
        navigate(PAGE_TEST)
      }
    }
  }, [userInfo, localStorage]);

  const logout = () => {
    setUserInfo(null)
    localStorage.removeItem(LS_ACCESS_TOKEN);
    localStorage.removeItem(LS_REFRESH_TOKEN);
    navigate(PAGE_LOGIN)
  }

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        token,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth(): IAuthContext | undefined {
  const authContext = useContext(AuthContext);
  return authContext;
}
