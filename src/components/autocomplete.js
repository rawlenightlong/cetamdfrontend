import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';
import { useState, useContext } from 'react';
import { EventContext } from '../pages/dashboard';

export default function Autocomplete(props) {
	const { eventData, setEventData } = useContext(EventContext);
	const [address, setAddress] = useState('');
	const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

	const handleSelect = async (value) => {
		const results = await geocodeByAddress(value);
		console.log(results);
		const latLng = await getLatLng(results[0]);
		setAddress(value);
		setCoordinates(latLng);
		setEventData({ ...eventData, eventCoordinates: latLng, venueName: value });
	};

	return (
		<>
			<div>
				<PlacesAutocomplete
					value={address}
					onChange={setAddress}
					onSelect={handleSelect}
				>
					{({
						getInputProps,
						suggestions,
						getSuggestionItemProps,
						loading,
					}) => {
						return (
							<div>
								<input {...getInputProps({})} />

								<div>
									{loading ? <div>...loading</div> : null}

									{suggestions.map((suggestion, index) => {
										const style = {
											backgroundColor: suggestion.active ? '#41b636' : '#fff',
										};

										return (
											<div
												key={index}
												{...getSuggestionItemProps(suggestion, { style })}
											>
												{suggestion.description}
											</div>
										);
									})}
								</div>
							</div>
						);
					}}
				</PlacesAutocomplete>
			</div>
		</>
	);
}
