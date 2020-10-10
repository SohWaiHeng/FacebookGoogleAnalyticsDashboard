import React, { useState, useEffect } from "react";
import "./App.css";
import { renderButton, checkSignedIn } from "./GoogleAuth/authUtils";
import DashBoard from "./Dashboard/dashboard";
import styled from "styled-components";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import DashboardFB from './Dashboard/dashboardFB';
import BasicDashboard from './Dashboard/Basic/index.js';

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
    return <BasicDashboard />
  }

  const googleSignIn = () => {
    setIsSignedIn(true);
  }

  return (
    <div className="App">
      {(!isSignedIn && !isFacebookSignedIn) ? (
        <>
        <br></br>
        <br></br>
          {/* <Title>Google Analytics Dashboard</Title> */}
          {/* <ButtonContainer> */}
          <GoogleLogin
          clientId="366740137830-57qvr0ugck0uvber104q06toadigikt6.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={googleSignIn}
          // onFailure={responseGoogle}
        />
          {/* </ButtonContainer> */}
          {/* <ButtonContainer> */}
          <br></br>
          <br></br>
          <div>
            <FacebookLogin
              appId="1079944885546437"
              // autoLoad={true}
              fields="name,email,picture"
              icon="fa-facebook"
              callback={fbSignIn}
              disableMobileRedirect={true}
            />
            </div>
          {/* </ButtonContainer> */}
        </>
      ) : (isSignedIn ?
        <DashBoard /> : <BasicDashboard />
        )}
      <script><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"></link></script>
    </div>
  );
}

export default App;

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