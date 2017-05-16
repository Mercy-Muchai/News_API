import React from 'react';
import { GoogleLogin } from 'react-google-login-component';

export default class Login extends React.Component {
  constructor(props, context) {
     super(props, context);
   }

  responseGoogle(googleUser) {
    const idToken = googleUser.getAuthResponse().id_token;
    console.log({ accessToken: idToken });
  }

  render() {
    return (
      <div>
        <GoogleLogin
          socialId="275754528132-f3f8gdkjnjsjc8efb5egkm4505ebid9g.apps.googleusercontent.com"
          class="google-login"
          scope="profile"
          responseHandler={this.responseGoogle}
          buttonText="Login With G+"
        />
      </div>
    );
  }

}

