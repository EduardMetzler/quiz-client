import axios from 'axios';
import { useEffect } from "react";
import {
  BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import Navbar from "./components/dashboards/Navbar";
import routes from "./routes";
import { isLogined } from "./store/userStore";







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



  const setIsAuthenticate = isLogined(state => state.setIsAuthenticate)
  const isAuthenticate = isLogined(state => state.isAuthenticate)




  axios.defaults.withCredentials = true;
  async function log() {
    const data = await axios.get(`http://localhost:4000/user/logined`);


    setIsAuthenticate(data.data)


  }
  useEffect(() => {
    log()


  }, [])



  return (


    <BrowserRouter>
      <Navbar />

      <div>we</div>  <div>werer</div>  <div>dew</div>

      {
        isAuthenticate === undefined ? "loading" : (

          <Routes>


            {routes.map((route: any) => {
              return route.isProtected ? (
                isAuthenticate ? <Route
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