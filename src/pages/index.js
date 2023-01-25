import React from 'react';
import '../styling/homePage.scss';
function Index(props) {
	return (
		<div className="homeBody">
			<div className="homeText">
				<h1>Your new best friend</h1>
				<h2>Welcome to the newest event planner catered to artists</h2>
			</div>
			<div className="buttonDiv">
				<button className="loginButton">
					<span>Login</span>
				</button>
				<button className="registerButton">
					<span>Register</span>
				</button>
			</div>
		</div>
	);
}

export default Index;
