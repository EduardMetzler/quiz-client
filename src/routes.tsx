import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UserListPage from "./pages/UserListPage";
import QuizCreatePage from "./pages/QuizCreatePage";

export const paths = {
  homePath: "/",
  registerPath: "/register",
  loginPath: "/login",
  dashboardPath: "/dashboard",
  userListPath: "/userList",
  quizCreatePath: "/quizCreate"
};

const routes: any = [
  {
    path: paths.homePath,
    element: <HomePage />,
    isProtected: false,
    redirectPath: paths.homePath,
    id: "HomePage"
  },
  {
    path: paths.registerPath,
    element: <RegisterPage />,
    isProtected: true,
    redirectPath: paths.homePath,
    id: "RegisterPage"
  },
  {
    path: paths.loginPath,
    element: <LoginPage />,
    isProtected: true,
    redirectPath: paths.homePath,
    id: "LoginPage"
  },
  {
    path: paths.dashboardPath,
    element: <DashboardPage />,
    isProtected: false,
    redirectPath: paths.homePath,
    id: "DashboardPage"
  },
  {
    path: paths.userListPath,
    element: <UserListPage />,
    isProtected: false,
    redirectPath: paths.homePath,
    id: "UserListPage"
  },
  {
    path: paths.quizCreatePath,
    element: <QuizCreatePage />,
    isProtected: false,
    redirectPath: paths.homePath,
    id: "QuizCreatePage"
  }
];

export default routes;
