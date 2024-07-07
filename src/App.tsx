import { RouteObject, useRoutes } from "react-router-dom";
import "./App.less";
import 'react-chat-elements/dist/main.css'
import AuthProvider from "./context/AuthContext";
import TestPage from "./pages/test";
import { PAGE_TEST, PAGE_SIGN_IN, LOGIN_TITLE, LOGIN_SUBTITLE, PAGE_SIGN_UP, REGISTER_SUBTITLE, REGISTER_TITLE, PAGE_DEFAULT } from "./constants/constant";
import LoginPage from "./pages/user";
import LoginForm from "./pages/user/login";
import RegisterForm from "./pages/user/register";
import ChatFrame from "./pages/chat";
import Layout from "./components/common/Layout/Layout";
import { ChatProvider } from "./context/ChatContext";

export default function App() {
  let routes: RouteObject[] = [
    {
      path: PAGE_TEST,
      element: <TestPage />,
    },
    {
      path: PAGE_DEFAULT,
      element:
        <Layout>
          <ChatFrame />
        </Layout>
      ,
    },
    {
      path: PAGE_SIGN_IN,
      element: <LoginPage Element={LoginForm} title={LOGIN_TITLE} subtitle={LOGIN_SUBTITLE} />,
    },
    {
      path: PAGE_SIGN_UP,
      element: <LoginPage Element={RegisterForm} title={REGISTER_TITLE} subtitle={REGISTER_SUBTITLE} />,
    },
  ];
  let element = useRoutes(routes);
  return <>
    <AuthProvider>
      <ChatProvider>
        {element}
      </ChatProvider>
    </AuthProvider>
  </>;
}
