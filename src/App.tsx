import { RouteObject, useRoutes } from "react-router-dom";
import "./App.less";
import AuthProvider from "./context/AuthContext";
import TestPage from "./pages/test";
import { PAGE_TEST, PAGE_LOGIN } from "./constants/constant";
import Login from "./pages/login";

export default function App() {
  let routes: RouteObject[] = [
    {
      path: PAGE_TEST,
      element: <TestPage />,
    },
    {
      path: "/*",
      element: <div>Default</div>,
    },
    {
      path: PAGE_LOGIN,
      element: <Login />,
    },
  ];
  let element = useRoutes(routes);
  return <>
    <AuthProvider>
      {element}
    </AuthProvider>
  </>;
}
