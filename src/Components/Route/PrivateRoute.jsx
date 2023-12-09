import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvides';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {loading,user}= useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children;
    }
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;