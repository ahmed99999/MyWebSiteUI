import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from '../../services/authService';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return(
        <Route 
            path={path}
            {...rest}
            render={ props =>{
            if (! auth.getCurrentUser() ) return <Redirect to="/login" />;

            if (! auth.getCurrentUser().isAdmin ) return <Redirect to="/movies" />;

            return Component ?  <Component {...props} /> : render(props);
            }}
        />
    );
    
}
 
export default ProtectedRoute;