import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { signOut } from "../GoogleAuth/authUtils";
import BasicDashboard from '../Dashboard/Basic/index';
import DashBoard from "../Dashboard/dashboard";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { isGoogleSignedIn } from '../App';

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

var googleButtonText = isGoogleSignedIn? "Signed In" : "SIGN IN WITH GOOGLE";
var facebookTextButton = "SIGN IN WITH FACEBOOK";
var googleDisabled = isGoogleSignedIn? true :false;
var facebookDisabled = false;

const fbLogIn = () => {
  facebookTextButton = 'Signed In';
  facebookDisabled = true;
  ReactDOM.render(<BasicDashboard />, document.getElementById('fb'));
}

const googleSignIn = () => {
  googleButtonText = 'Signed In';
  googleDisabled = true;
  ReactDOM.render(<DashBoard />, document.getElementById('google'));
}

const Header = () => {

  return (
    <Container>
      {console.log(isGoogleSignedIn)}
      <h1>Analytics Dashboard</h1>
      <FacebookLogin
        appId={process.env.FACEBOOK_APP_ID}
        fields="name,email,picture"
        icon="fa-facebook"
        callback={fbLogIn}
        disableMobileRedirect={true}
        isDisabled={facebookDisabled}
        textButton={facebookTextButton}
      />
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText={googleButtonText}
        onSuccess={googleSignIn}
        disabled={googleDisabled}
      // onFailure={responseGoogle}
      />
      <div className="signout" onClick={signOut}>
        SIGN OUT
      </div>
    </Container>
  );
};

export default Header;
export { fbLogIn };
