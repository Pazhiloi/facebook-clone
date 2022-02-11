import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import {auth, provider} from './firebase'
import { actionTypes } from "./reducer";
import {useStateValue} from './StateProvider'
const Login = () => {
  const [state, dispatch] = useStateValue()
  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(result => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
    })
    .catch(error => alert(error.message))
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.tadviser.ru/images/8/86/Facebook-logo-500x350.png"
          alt=""
        />
        <img
          src="https://e7.pngegg.com/pngimages/943/983/png-clipart-facebook-inc-logo-facebook-blue-text.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
