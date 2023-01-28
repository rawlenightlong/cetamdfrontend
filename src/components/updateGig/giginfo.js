import { useContext, useEffect } from 'react';
import { EventContext } from '../../pages/dashboard';
import Autocomplete2 from '../autocomplete2';
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';
import { useState } from 'react';
function GigInfo(props) {
	const { eventData, setEventData } = useContext(EventContext);
	const handleInput = (event) => {
		setEventData({ ...eventData, [event.target.name]: event.target.value });
	};

	setEventData({
		...eventData,
		eventName: props.eventInfo.eventName,
		eventOwner: props.eventInfo.eventOwner,
	});
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
					value={eventData.eventName}
				/>
				<h3>Event Owner</h3>
				<input
					type="text"
					name="eventOwner"
					onChange={handleInput}
					value={eventData.eventOwner}
				/>
				<h3>Venue Name</h3>

				<Autocomplete2 info={props.eventInfo.venueName} />
			</form>
		</div>
	);
}

export default GigInfo;
