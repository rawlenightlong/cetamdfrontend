// const URL = 'https://cetamdapi.onrender.com/gigs/' ;
const URL = 'http://localhost:8888';
export const gigsLoader = async () => {
	const response = await fetch(URL);
	const gigs = await response.json();
	return gigs;
};

export const gigLoader = async ({ params }) => {
	const response = await fetch(URL + params.id);
	const gig = await response.json();
	return gig;
};
