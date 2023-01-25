import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import '../styling/header.scss';
function Header(props) {
	return (
		<nav className="header">
			<Link to="/">
				<h1>CETAMD</h1>
			</Link>
			<CgProfile className="profileIcon" />
		</nav>
	);
}

export default Header;
