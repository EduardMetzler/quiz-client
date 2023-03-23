import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";

import routes from "./routes";

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
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {routes.map((route: any) => {
            // return route.isProtected ? <ProtectedRoute redirectPath={route.redirectPath} /> : <Route key={route.id} path={route.path} exact render={route.element} {...route} />;
            return <Route key={route.id} {...route} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
{/* <Route key={route.id} {...route} /> */ }