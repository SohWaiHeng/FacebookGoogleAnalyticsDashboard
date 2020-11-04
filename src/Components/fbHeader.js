import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import App from '../App.js';
import { signOut } from "../GoogleAuth/authUtils";
import GoogleLogin from 'react-google-login';
import DashBoard from '../Dashboard/dashboard';

const Container = styled.div`
  height: 10vh;
  background: #1c2e42;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  h1 {
    padding-left: 20px;
    color: #d1d8e0;
  }

  .signout {
    padding-right: 20px;
    color: #e0d5d1;
    cursor: pointer;
  }
`;

const logout = () => {
    // window.FB.getLoginStatus(() => {
    window.FB.logout(function (response) {
        console.log("Logged Out!");
        // const location = useLocation();
        // console.log(location.pathname);
        window.location = "/";
    });
    // })
}

const googleSignIn = () => {
    ReactDOM.render( <DashBoard />, document.getElementById('google'));
}

const FBHeader = () => {
    return (
        <Container>
            <h1>Analytics Dashboard</h1>
            <div>
            <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={googleSignIn}
        />
            </div>
            <div className="signout" onClick={logout}>
                SIGN OUT
            </div>
        </Container>
    );
};

export default FBHeader;