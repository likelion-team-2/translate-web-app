import { RouteObject, useRoutes } from "react-router-dom";
import "./App.less";
import AuthProvider from "./context/AuthContext";
import LoginPage from "./pages/login/Login";
import TestPage from "./pages/test";

export default function App() {
  let routes: RouteObject[] = [
    {
      children: [
        {
          path: "/test",
          index: true,
          element: <TestPage />,
        },
        {
          path: "/login",
          index: true,
          element: <LoginPage />,
        },
      ],
    },
    // {
    //   path: "/*",
    //   element: (
    //     <CtsLayout>
    //       <ControlProvider>
    //         <DashboardPage />
    //       </ControlProvider>
    //     </CtsLayout>
    //   ),
    // },
  ];
  let element = useRoutes(routes);
  return <>
    <AuthProvider>
      {element}
    </AuthProvider>
  </>;
}
