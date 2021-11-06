import React from 'react';
import { Spinner } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const {user, isLoading}=useAuth()
    if(isLoading){
        return <div className="text-center"><Spinner animation="border" variant="primary"/></div>
    }
    
    return (
        
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivetRoute;