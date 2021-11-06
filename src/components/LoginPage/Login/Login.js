import React from 'react';
import useAuth from '../../../hooks/useAuth';

import './Login.css';
import {
    useHistory,
    useLocation
  } from "react-router-dom";
const Login = () => {
    const { userSignInWithGoogle}=useAuth();
    const location=useLocation();
    const history =useHistory();

    

    return (
        <div className="login">
            <div className="loginpage">
                
            <button onClick={()=>userSignInWithGoogle(location, history)} className="btn btn-primary btn-small" > Google sign in</button>
            </div>
             
        
        
      
        </div>
    );
};

export default Login;