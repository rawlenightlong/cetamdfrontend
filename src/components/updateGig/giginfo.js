import { useContext, useEffect } from 'react';
import { ShowContext } from '../../pages/show';
import Autocomplete2 from '../autocomplete2';
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';
import { useState } from 'react';
function GigInfo(props) {
	const { gigInfo, setGigInfo } = useContext(ShowContext);
	const handleInput = (event) => {
		setGigInfo({
			...gigInfo,
			event: { ...gigInfo.event, [event.target.name]: event.target.value },
		});
	};
	return (
		<div style={{ display: props.displayStyle, marginBottom: '5em' }}>
			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<h3>Event Name</h3>
				<input
					type="text"
					name="eventName"
					onChange={handleInput}
					style={{ textAlign: 'center' }}
				/>
				<h3>Event Owner</h3>
				<input
					type="text"
					name="eventOwner"
					onChange={handleInput}
					style={{ textAlign: 'center' }}
				/>
				<h3>Venue Name</h3>

				<Autocomplete2 />
			</form>
		</div>
	);
}

export default GigInfo;
