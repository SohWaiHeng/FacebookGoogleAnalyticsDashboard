import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import BasicDashboard from './Dashboard/Basic/index.js';

import LoginHOC from 'react-facebook-login-hoc'

const configureLoginProps = {
    scope: 'public_profile',
    xfbml: false,
    cookie: false,
    version: 8.0,
    language: 'en_US',
    appId: 'FACEBOOK_APP_ID'
}

class FacebookBtn extends Component {
    constructor(props) {
        super(props)
        this.status = this.props.fb.status
        this.login = this.props.fb.login
        this.logout = this.props.fb.logout
        this.state = {
            isFBLogIn: false
        }
    }

    getStatus(response) {
        if (response.authResponse) {
            this.responseApi.call(this, response.authResponse)
            this.setState({isFBLogIn: true})
            ReactDOM.render(
                <div>
                    <BasicDashboard />
                    <script><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous"></link></script>
                </div>, document.getElementById('fb')
            )
        }
    }
    responseApi(res) {
        console.log('token:', res.accessToken)
    }
    checkLoginState() {
        this.status(this.getStatus.bind(this))
    };
    loginFacebook() {
        this.login(this.getStatus.bind(this))
    }
    logoutFacebook() {
        this.setState({isFBLogIn: false})
        this.logout();
        ReactDOM.render(
            <div></div>, document.getElementById('fb')
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.state.isFBLogIn?this.logoutFacebook.bind(this):this.loginFacebook.bind(this)}>{this.state.isFBLogIn?'Facebook Logout':'Facebook Login'}</button>
            </div>
        );
    }
}

export default LoginHOC(configureLoginProps)(FacebookBtn);
