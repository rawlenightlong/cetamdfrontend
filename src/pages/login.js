import React from 'react';
import '../styling/homePage.scss';
function Login(props) {
	return (
        <div>
        <form action="/user/login" method="post">
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
        </form>
      </div>
	);
}

export default Login;
