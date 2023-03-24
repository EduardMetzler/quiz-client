import {
  BrowserRouter,
  Route,
  RouteProps,
  Routes,
  Navigate,
} from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";

import routes from "./routes";
import { isLogined } from "./store/userStore";
import { isAuth } from "./components/isAuth";
import { useEffect, useState } from "react";
import axios from 'axios';






// const ProtectedRoute: React.FC<any> = () => {
//   return (
//     <Route
//       path={"/"}
//       element={HomePage}
//     // {...rest}
//     // render={(props) => {
//     //   return loggedIn ? <Comp {...props} /> : <Redirect to="/" />;
//     // }}
//     />
//   );
// };


function App() {

  const [isAuth, setIsAuth] = useState()


  axios.defaults.withCredentials = true;
  async function log() {
    const data = await axios.get(`http://localhost:4000/user/logined`);
    console.log(data.data)
    setIsAuth(data.data)
    console.log(isAuth)
  }
  useEffect(() => {
    log()

  }, [])



  return (


    <BrowserRouter>

      {
        isAuth === undefined ? "loading" : (

          <Routes>


            {routes.map((route: any) => {
              return route.isProtected ? (
                isAuth ? <Route
                  key={route.id}
                  path={route.path}
                  element={<Navigate to={route.redirectPath} replace={true} />}
                /> : <Route key={route.id} path={route.path} element={route.element} />
              ) : (
                <Route key={route.id} path={route.path} element={route.element} />
              );
            })}
          </Routes>
        )
      }
      {/* <Routes>
        {routes.map((route: any) => {
          return route.isProtected ? (
            <Route
              key={route.id}
              path={route.path}
              element={<Navigate to={route.redirectPath} replace={true} />}
            />
          ) : (
            <Route key={route.id} path={route.path} element={route.element} />
          );
        })}
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;