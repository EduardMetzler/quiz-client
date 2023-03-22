import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom";

import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {routes.map((route: JSX.IntrinsicAttributes & RouteProps) => {
            return <Route key={route.id} {...route} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
