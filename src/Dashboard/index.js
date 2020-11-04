import React, { Component, Fragment } from "react";
export default class Facebook extends Component {
  state = {
    isLoggedIn: false
  };

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true
    });

    console.log(this.state.isLoggedIn)
  };

  componentClicked = () => console.log("clicked");

  render() {
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"></link>
    if (this.state.isLoggedIn) {
      const Dashboards = () => (
        <Fragment>
          <BasicDashboard />
        </Fragment>
      )
      return Dashboards();
    } else {

      return (
        <Fragment>
          <div className="text-center">
            <App />
          </div>
          <script src="jquery-3.5.1.min.js"></script>
        </Fragment>
      )
    }
  }


}
