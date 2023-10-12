import { Navigate } from "react-router-dom";
import React from "react";
import { isLoggedIn, logout } from "../helpers/AuthService";

const ProtectedRoute = ({element,isAuthenticated}) =>{

    if(!isLoggedIn() && !isAuthenticated){
        logout();
        return <Navigate to="/login" replace/>;
    }
    return element;

}
export default ProtectedRoute;