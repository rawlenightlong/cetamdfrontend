const URL = 'https://cetamdapi.onrender.com/gigs/' ;


export const gigsLoader = async () => {
	const authToken = document.cookie.split('; ')
	.find((row) => row.startsWith('token='))
	?.split('=')[1];
	console.log(authToken + "  this is the webtoken")
	const response = await fetch(URL, {headers: new Headers({'Authorization':"Bearer " + authToken})});
	const gigs = await response.json();
	return gigs;
};

export const gigLoader = async ({ params }) => {
	const response = await fetch(URL + params.id);;
	const gig = await response.json();
	return gig;
};
