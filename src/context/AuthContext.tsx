import * as React from "react";
import { createContext, useContext } from "react";

interface IAuthContext {
}
export const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider: React.FC = ({ children }) => {

  return (
    <AuthContext.Provider
      value={{}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth(): IAuthContext | undefined {
  const authContext = useContext(AuthContext);
  return authContext;
}
