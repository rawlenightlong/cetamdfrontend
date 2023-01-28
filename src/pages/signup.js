import React from 'react';
import '../styling/register.scss';
import { Form } from 'react-router-dom';
function Signup(props) {
	return (
		<div className="registerFormDiv">
			<Form action="/signup" method="post" className="registerForm">
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
							disabled
						/>
					</div>
				</fieldset>
			</Form>
		</div>
	);
}

export default Signup;
