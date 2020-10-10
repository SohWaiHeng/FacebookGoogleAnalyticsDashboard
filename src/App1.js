import React, { Component, useState, useEffect } from 'react';
import { renderButton, checkSignedIn } from "./GoogleAuth/authUtils";
import './App.css';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class App extends Component {

  render() {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isFacebookSignedIn, setIsFacebookSignedIn] = useState(false);

    const responseFacebook = (response) => {
      console.log(response);

      // fbSignIn();

      // const fbSignIn = () => {
      //   setIsFacebookSignedIn(true);
      // }
    }

    const responseGoogle = (response) => {
      console.log(response);

    }

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

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <FacebookLogin
          appId="1079944885546437" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={setIsFacebookSignedIn(true)}
        />
        <br />
        <br />


        <GoogleLogin
          clientId="366740137830-57qvr0ugck0uvber104q06toadigikt6.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      </div>
    );
  }
}

export default App;