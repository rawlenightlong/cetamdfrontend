// const URL = 'https://cetamdapi.onrender.com/gigs/';
const URL = 'http://localhost:8888/gigs';

export const gigsLoader = async () => {
	// const authToken = document.cookie.split('token=')[1]
	// console.log(authToken)
	const response = await fetch(URL);
	const gigs = await response.json();
	return gigs;
};

export const gigLoader = async ({ params }) => {
	const response = await fetch(URL + '/' + params.id);
	const gig = await response.json();
	return gig;
};
