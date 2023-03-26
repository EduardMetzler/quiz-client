import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UserListPage from "./pages/UserListPage";
import QuizCreatePage from "./pages/QuizCreatePage";
import AllQuizMaterialPage from "./pages/AllQuizMaterial";
import OneQuizMaterialPage from "./pages/OneQuizMaterialPage";

export const paths = {
  homePath: "/",
  registerPath: "/register",
  loginPath: "/login",
  dashboardPath: "/dashboard",
  userListPath: "/userList",
  quizCreatePath: "/quizCreate",
  allQuizMaterialsPath: "/allQuizMaterials",
  oneQuizMaterialsPath: "/allQuizMaterials/:id"


};

const routes: any = [
  {
    path: paths.homePath,
    element: <HomePage />,
    isProtected: false,
    redirectPath: null,
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
    redirectPath: null,
    id: "DashboardPage"
  },
  {
    path: paths.userListPath,
    element: <UserListPage />,
    isProtected: false,
    redirectPath: null,
    id: "UserListPage"
  },
  {
    path: paths.quizCreatePath,
    element: <QuizCreatePage />,
    isProtected: false,
    redirectPath: null,
    id: "QuizCreatePage"
  },
  {
    path: paths.allQuizMaterialsPath,
    element: <AllQuizMaterialPage />,
    isProtected: false,
    redirectPath: null,
    id: "AllQuizMaterialPage"
  },
  {
    path: paths.oneQuizMaterialsPath,
    element: <OneQuizMaterialPage />,
    isProtected: false,
    redirectPath: null,
    id: "oneQuizMaterialPage"
  }
];

export default routes;