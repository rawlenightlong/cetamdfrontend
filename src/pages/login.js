import React from 'react';
import '../styling/login.scss';
import { Form } from 'react-router-dom';
function Login(props) {
	return (
		<div className="loginFormDiv">
			<Form action="/login" method="post" className="loginForm">
				<fieldset>
					<legend>Login</legend>
					<div className="loginLabels">
						{' '}
						<label className="usernameLabel textInput">
							<input
								type="text"
								name="username"
								required
								placeholder="Username"
								style={{ textAlign: 'center', marginTop: '2em' }}
							/>
						</label>
						<label className="passwordLabel textInput">
							<input
								name="password"
								required
								placeholder="Password"
								type="password"
								style={{ textAlign: 'center' }}
							/>
						</label>
						<input
							type="submit"
							value="Login"
							className="submitLogin"
							disabled
						/>
					</div>
				</fieldset>
			</Form>
		</div>
	);
}

export default Login;
