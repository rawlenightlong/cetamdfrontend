import { Link } from 'react-router-dom';
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
				<Link to={`/login`} style={{ textDecoration: 'none' }}>
					<button className="loginButton">
						<span>Login</span>
					</button>
				</Link>
				<Link to={`/signup`} style={{ textDecoration: 'none' }}>
					<button className="registerButton">
						<span>Register</span>
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Index;
