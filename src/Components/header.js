import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { signOut } from "../GoogleAuth/authUtils";
import BasicDashboard from '../Dashboard/Basic/index';
import DashBoard from "../Dashboard/dashboard";
import FacebookLogin from 'react-facebook-login';

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

const fbSignIn = () => {
  console.log('yes')
  window.location = '/test'
  
}

const Header = () => {
  return (
    <Container>
      <h1>Google Analytics Dashboard</h1>
      {/* <FacebookLogin
              appId="1079944885546437"
              // autoLoad={true}
              fields="name,email,picture"
              icon="fa-facebook"
              callback={fbSignIn}
              disableMobileRedirect={true}
            /> */}
      <div className="signout" onClick={signOut}>
        SIGN OUT
      </div>
    </Container>
  );
};

export default Header;
