import React, { Component, Fragment } from "react";
import { Route } from 'react-router-dom';
import FacebookLogin from "react-facebook-login";
import $ from 'jquery';

// DASHBOARDS

// import BasicDashboard from './Basic/';
// import GoogleAnalytics from './helloanalytic';
// import { Card } from 'reactstrap';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

// $(document).ready(function () {

//   $("#google").load("/helloanalytics.html", '', function(response, status, xhr) {
//     if (status == 'error') {
//         var msg = "Sorry but there was an error: ";
//         $(".content").html(msg + xhr.status + " " + xhr.statusText);
//     }
// })});

// $(document).ready(function (options) {
//   options.async = true
//   $('#run').click(
//     function () {
//       console.log('wtf')
//       $('#google').load('/helloanalytics.html', function () {
//         console.log('html is loaded')
//       });
//       console.log('wtf')
//     }
//   ); //end click
// })

// function load_home() {
//   document.getElementById("content").innerHTML = '<object type="text/html" data="./lol.html" ></object>';
//   return false;
// }

export default class Facebook extends Component {
  state = {
    isLoggedIn: false
    // userID: "",
    // name: "",
    // email: ""
  };

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true
      // userID: response.userID,
      // name: response.name,
      // email: response.email
    });

    console.log(this.state.isLoggedIn)
  };

  componentClicked = () => console.log("clicked");

  render() {
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"></link>
    if (this.state.isLoggedIn) {
      const Dashboards = () => (
        <Fragment>
          {/* <AppSidebar /> */}
          {/* <AppHeader />
          <div className="app-main">
            <div className="app-main__outer">
              <div className="app-main__inner">
                <Route path={`${match.url}/basic`} component={BasicDashboard} />
              </div>
            </div>
          </div> */}
          <BasicDashboard />
        </Fragment>
      )
      return Dashboards();
      // Dashboards = (
      //   <div
      //     style={{
      //       width: "400px",
      //       margin: "auto",
      //       background: "#f4f4f4",
      //       padding: "20px"
      //     }}
      //   >
      //     <img src={this.state.picture} alt={this.state.name} />
      //     <h2>Welcome {this.state.name}</h2>
      //     Email: {this.state.email}
      //   </div>
      // );
    } else {

      return (
        <Fragment>
          <div className="text-center">
            {/* <button id='run'>gg</button>
            <div id="google"></div> */}
            {/* <FacebookLogin
              appId="1079944885546437"
              autoLoad={true}
              fields="name,email"
              callback={this.responseFacebook}
            /> */}
            {/* <div id="topBar"> <a href="#" onClick={load_home()}> HOME </a> </div>
            <div id="content"> </div> */}
            {/* <div>
              <object type="text/html" data="./lol.html">
              </object>
            </div> */}
            <App />
            {/* <GoogleAnalytics /> */}
          </div>
          <script src="jquery-3.5.1.min.js"></script>
        </Fragment>
      )
    }
  }


}
