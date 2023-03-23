import { BrowserRouter, Navigate, Route, RouteProps, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import React from "react"


export const ProtectedRoute: React.FC<any> = ({ redirectPath }) => {
    return (
        // <Routes>
        //     <Route
        //         path={"/"}
        //         element={<HomePage />}

        //     />
        // </Routes>
        // < Navigate to="/" />
        <Route
            path={redirectPath}
            element={<HomePage />}

        />
    );
};



