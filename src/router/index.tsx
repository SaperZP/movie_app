import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout.tsx";
import MainPage from "../pages/MainPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
