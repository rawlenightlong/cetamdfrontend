import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { redirect } from 'react-router-dom';
import '../styling/header.scss';
function Header(props) {
	return (
		<nav className="header">
			<Link to="/">
				<h1>CETAMD</h1>
			</Link>
			<a className="iconLink" href="/dashboard">
				<CgProfile
					className="profileIcon"
					onClick={() => {
						redirect('/dashboard');
					}}
				/>
			</a>
		</nav>
	);
}

export default Header;
