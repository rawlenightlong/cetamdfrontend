import React from 'react';
import '../styling/homePage.scss';
import {Form} from "react-router-dom"
function Signup(props) {
	return (
        <div>
        <Form action="/signup" method="post">
          <fieldset>
            <legend>New User</legend>
            <label
              >USERNAME: <input type="text" name="username" required />
            </label>
            <label
              >PASSWORD: <input type="password" name="password" required />
            </label>
            <input type="submit" value="Create Account" />
          </fieldset>
        </Form>
      </div>
	);
}

export default Signup;
