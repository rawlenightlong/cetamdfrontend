import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';
import { useState, useContext } from 'react';
import { ShowContext } from '../pages/show';

export default function Autocomplete2(props) {
	const { gigInfo, setGigInfo } = useContext(ShowContext);
	const [address, setAddress] = useState(gigInfo.venueName);

	const handleSelect = async (value) => {
		const results = await geocodeByAddress(value);
		console.log(results);
		const latLng = await getLatLng(results[0]);
		setAddress(value);
		setGigInfo({ ...gigInfo, eventCoordinates: latLng, venueName: value });
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
