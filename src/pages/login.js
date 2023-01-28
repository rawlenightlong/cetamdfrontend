import React from 'react';
import '../styling/homePage.scss';
import {Form} from "react-router-dom"
function Login(props) {
	return (
        <div>
        <Form action="/login" method="post">
          <fieldset>
            <legend>User Login</legend>
            <label
              >Username: <input type="text" name="username" required />
            </label>
            <label
              >Password: <input type="password" name="password" required />
            </label>
            <input type="submit" value="Login" />
          </fieldset>
        </Form>
      </div>
	);
}

export default Login;
