import { RouteObject, useRoutes } from "react-router-dom";
import "./App.less";
import AuthProvider from "./context/AuthContext";
import TestPage from "./pages/test";
import { PAGE_TEST, PAGE_LOGIN, LOGIN_TITLE, LOGIN_SUBTITLE, PAGE_REGISTER, REGISTER_SUBTITLE, REGISTER_TITLE, PAGE_DEFAULT } from "./constants/constant";
import LoginPage from "./pages/user";
import LoginForm from "./pages/user/login";
import RegisterForm from "./pages/user/register";
import ChatFrame from "./pages/user/chat";

export default function App() {
  let routes: RouteObject[] = [
    {
      path: PAGE_TEST,
      element: <TestPage />,
    },
    {
      path: PAGE_DEFAULT,
      element: <ChatFrame />,
    },
    {
      path: PAGE_LOGIN,
      element: <LoginPage Element={LoginForm} title={LOGIN_TITLE} subtitle={LOGIN_SUBTITLE} />,
    },
    {
      path: PAGE_REGISTER,
      element: <LoginPage Element={RegisterForm} title={REGISTER_TITLE} subtitle={REGISTER_SUBTITLE} />,
    },
  ];
  let element = useRoutes(routes);
  return <>
    <AuthProvider>
      {element}
    </AuthProvider>
  </>;
}
