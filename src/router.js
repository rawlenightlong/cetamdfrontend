import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import {
	createAction,
	updateAction,
	deleteAction,
	// loginAction,
	// signupAction,
} from './functionality/actions';
import { gigsLoader, gigLoader } from './functionality/loaders';
import App from './App';
import Index from './pages/index';
import { Show } from './pages/show';
import Dashboard from './pages/dashboard';
// import Signup from './pages/signup';
// import Login from './pages/login';
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Index />} />
			<Route path="/dashboard" element={<Dashboard />} loader={gigsLoader} />
			<Route path=":id" element={<Show />} loader={gigLoader} />
			<Route path="create" action={createAction} />
			<Route path="update/:id" action={updateAction} />
			<Route path="delete/:id" action={deleteAction} />
		</Route>
	)
);

export default router;
