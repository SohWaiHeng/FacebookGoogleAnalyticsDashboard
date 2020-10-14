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

// const signOut = () => {
//     window.fbAsyncInit = function () {

//         window.FB.init({
//             appId: '1079944885546437',
//             // autoLogAppEvents: true,
//             xfbml: true,
//             status: true,
//             version: 'v8.0'
//         });
//     };

//     (function (d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = "https://connect.facebook.net/en_US/sdk.js";
//         fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));

//     window.FB.getLoginStatus(function(response) {
//         if (response && response.status === 'connected') {
//             window.FB.logout(function(response) {
//                 console.log(response);
//                 return <App />
//             });
//         }
//     });
// }

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
          clientId="366740137830-57qvr0ugck0uvber104q06toadigikt6.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={googleSignIn}
          // onFailure={responseGoogle}
        />
            </div>
            <div className="signout" onClick={logout}>
                SIGN OUT
            </div>
        </Container>
    );
};

export default FBHeader;