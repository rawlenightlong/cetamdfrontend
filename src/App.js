import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Header />
			<Navigation />
			<Outlet />
		</div>
	);
}

export default App;
