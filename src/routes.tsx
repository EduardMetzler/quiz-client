import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const routes: any = [
  { path: "/", element: <HomePage />, id: "HomePage" },
  { path: "/register", element: <RegisterPage />, id: "RegisterPage" },
  { path: "/login", element: <LoginPage />, id: "LoginPage" }
];

export default routes;
