import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Outlet />
		</div>
	);
}

export default App;
