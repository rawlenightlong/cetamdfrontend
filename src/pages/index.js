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
				<button className="loginButton">
				<Link to={`/login`}>
				<span>Login</span>
								</Link>
				</button>
				<Link to={`/signup`}></Link>
				<button className="registerButton">
				<Link to={`/signup`}>
				<span>Register</span>
								</Link>
				</button>
			</div>
		</div>
	);
}

export default Index;
