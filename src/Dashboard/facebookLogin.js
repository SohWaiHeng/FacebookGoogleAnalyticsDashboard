import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class FBLogin extends Component {

    responseFacebook(response) {
        console.log(response);
        
    }

    render() {
        return (
            <FacebookLogin
                appId="1079944885546437"
                // autoLoad={true}
                fields="name,email,picture"
                icon="fa-facebook"
                callback={this.responseFacebook}
                disableMobileRedirect={true}
            />
        )
    }
}
