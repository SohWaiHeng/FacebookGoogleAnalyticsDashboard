import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import { renderButton, checkSignedIn, changeStatus } from "./GoogleAuth/authUtils";
import DashBoard from "./Dashboard/dashboard";
import styled from "styled-components";
import BasicDashboard from './Dashboard/Basic/index.js';
import GoogleBtn from './googleBtn.js';
import FacebookBtn from './facebookBtn.js';

var isGoogleSignedIn = false;

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isFacebookSignedIn, setIsFacebookSignedIn] = useState(false);

  const updateSignin = (signedIn) => {
    setIsSignedIn(signedIn);
    if (!signedIn) {
      renderButton();
    }
  };

  const init = () => {
    checkSignedIn()
      .then((signedIn) => {
        updateSignin(signedIn);
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignin);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    window.gapi.load("auth2", init);
  });

  const fbSignIn = () => {
    setIsFacebookSignedIn(true);
    ReactDOM.render(
    <div>
      <BasicDashboard />
      <script><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous"></link></script>
    </div>, document.getElementById('fb'))
  }

  const googleSignIn = () => {
    isGoogleSignedIn = true;
    setIsSignedIn(true);
    ReactDOM.render(
      <div>
        <DashBoard />
        <script><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous"></link></script>
      </div>, document.getElementById('google'))
  }

  return (
    <div className="App">
        <>
          <br></br>
          <br></br>
          <GoogleBtn />
          <br></br>
          <FacebookBtn />
        </>
        <div id='fb'></div>
        <div id='google'></div>
    </div>
  );
}

export default App;
export { isGoogleSignedIn };

const ButtonContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  padding-top: 10vmin;
  margin-top: 0;
`;