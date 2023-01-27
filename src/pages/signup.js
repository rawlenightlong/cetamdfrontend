import React from 'react';
import '../styling/homePage.scss';
function Signup(props) {
	return (
        <div>
        <form action="/user/signup" method="post">
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
        </form>
      </div>
	);
}

export default Signup;
