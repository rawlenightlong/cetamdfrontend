import React from 'react';
import '../styling/register.scss';
function Signup(props) {
	return (
		<div className="registerFormDiv">
			<form action="/user/signup" method="post" className="registerForm">
				<fieldset>
					<legend>Register</legend>
					<div className="registerLabels">
						<label className="textInput">
							<input
								type="text"
								name="username"
								required
								placeholder="Username"
								style={{ textAlign: 'center', marginTop: '2em' }}
							/>
						</label>
						<label className="textInput">
							<input
								type="password"
								name="password"
								required
								placeholder="Password"
								style={{ textAlign: 'center' }}
							/>
						</label>
						<input
							type="submit"
							value="Create Account"
							className="submitRegister"
						/>
					</div>
				</fieldset>
			</form>
		</div>
	);
}

export default Signup;
