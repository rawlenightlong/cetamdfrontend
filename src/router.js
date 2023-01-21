import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import App from './App';
import Index from './pages/index';
import Show from './pages/show';
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Index />} />
			<Route path=":id" element={<Show />} />
		</Route>
	)
);

export default router;
