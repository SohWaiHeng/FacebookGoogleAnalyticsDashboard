import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BasicDashboard from './Dashboard/Basic/index.js'
import * as serviceWorker from './serviceWorker';

import { useState, useEffect } from "react";
import "./App.css";
import { renderButton, checkSignedIn } from "./GoogleAuth/authUtils";
import DashBoard from "./Dashboard/dashboard";
import styled from "styled-components";
import FacebookLogin from 'react-facebook-login';
import DashboardFB from './Dashboard/dashboardFB';
// import BasicDashboard from './Dashboard/Basic/index.js';

// function App() {
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const [isFacebookSignedIn, setIsFacebookSignedIn] = useState(false);

//   const updateSignin = (signedIn) => {
//     setIsSignedIn(signedIn);
//     if (!signedIn) {
//       renderButton();
//     }
//   };

//   const init = () => {
//     checkSignedIn()
//       .then((signedIn) => {
//         updateSignin(signedIn);
//         window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignin);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   useEffect(() => {
//     window.gapi.load("auth2", init);
//   });

//   const fbSignIn = () => {
//     setIsFacebookSignedIn(true);
//   }

//   return (
//     <div className="App">
//       {(!isSignedIn && !isFacebookSignedIn) ? (
//         <>
//           <Title>Google Analytics Dashboard</Title>
//           <ButtonContainer>
//             <div id="signin-button"></div>
//           </ButtonContainer>
//           <ButtonContainer>
//             <FacebookLogin
//               appId="1079944885546437"
//               // autoLoad={true}
//               fields="name,email,picture"
//               icon="fa-facebook"
//               callback={fbSignIn}
//               // disableMobileRedirect={true}
//             />
//           </ButtonContainer>
//         </>
//       ) : (!isFacebookSignedIn ?
//         <DashBoard /> : <BasicDashboard />
//         )}
//       <script><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"></link></script>
//     </div>
//   );
// }

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

ReactDOM.render(
  // <React.StrictMode>
    <div>
      <App />
      {/* <BasicDashboard /> */}
      <script><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous"></link></script>
    </div>,
  // {/* </React.StrictMode>, */}
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
