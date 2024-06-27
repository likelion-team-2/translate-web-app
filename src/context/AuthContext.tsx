import * as React from "react";
import { createContext, useContext } from "react";
import { TUserLoginOutput } from "../constants/types";
import { LS_accessToken, LS_refreshToken, PAGE_DEFAULT, PAGE_LOGIN } from "../constants/constant";
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
    const localToken = localStorage.getItem(LS_accessToken)
    if (!userInfo && !localToken) {
      // navigate(PAGE_LOGIN)
    } else {
      if (userInfo) {
        setToken(userInfo.accessToken)
        localStorage.setItem(LS_accessToken, userInfo.accessToken)
        navigate(PAGE_DEFAULT)
      }
    }
  }, [userInfo, localStorage]);

  const logout = () => {
    setUserInfo(null)
    localStorage.removeItem(LS_accessToken);
    localStorage.removeItem(LS_refreshToken);
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
