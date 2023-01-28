import { redirect, json } from 'react-router-dom';
import { eventObjectCreator } from './eventObjectCreator';

const URL = 'https://cetamdapi.onrender.com' ;
const signupURL = 'https://cetamdapi.onrender.com/auth/';
// const URL = 'http://localhost:8888';

export const createAction = async ({ request }) => {
	const formData = await request.formData();
	const newGig = {
		event: formData.get('event'),
		location: formData.get('location'),
		date: formData.get('date'),
	};
	await fetch(URL + '/gigs', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newGig),
	});
	return redirect('/');
};

export const updateAction = async ({ request, params }) => {
	const formData = await request.formData();
	const updatedGig = {
		event: formData.get('event'),
		location: formData.get('location'),
		date: formData.get('date'),
	};
	await fetch(URL + '/gigs/' + params.id, {
		method: 'put',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(updatedGig),
	});
	return redirect('/dashboard');
};
export const deleteAction = async ({ params }) => {
	await fetch(URL + '/gigs/' + params.id, {
		method: 'delete',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return redirect('/dashboard');
};

export const formSubmit = async (eventData) => {
	let convertedObject = eventObjectCreator(eventData);
	await fetch(URL, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(convertedObject),
	});

	window.location.reload(false);

	return redirect('/');
};

export const formUpdate = async (eventData, id) => {
	await fetch(URL + '/gigs/' + id, {
		method: 'put',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(eventData),
	});
	window.location.reload(false);
};

// export const signupAction = async ({params, request}) => {
// 	const formData = await request.formData()
// 	const response = await fetch(signupURL + "signup", {
// 		method: 'post',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({username:formData.get("username"), password: formData.get("password")}),
// 	});
// 	console.log(formData.get("username"))
// 	console.log(await response.json())
// 	return redirect('/');
// };

// export const loginAction = async ({params, request}) => {
// 	const formData = await request.formData()
// 	const response = await fetch(signupURL + "login", {
// 		method: 'post',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({username:formData.get("username"), password: formData.get("password")}),
// 	});
// 	const newToken = await response.json()
// 	console.log(newToken)
// 	document.cookie = `token=${newToken}`
// 	return redirect('/dashboard')
// };
