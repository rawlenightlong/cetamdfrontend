import React, { useState } from 'react';

function GigInfo(props) {
	let eventObject = {};
	const [formData, setFormData] = useState({
		eventname: ' ',
		eventowner: ' ',
		venuename: ' ',
	});
	const handleInput = (event) => {
		// eventObject = { [event.target.name]: event.target.value };
		// setFormData({ ...formData, eventObject });
		setFormData({ ...formData, [event.target.name]: event.target.value });
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
				{' '}
				<h3>Event Name</h3>
				<input
					type="text"
					name="eventname"
					onChange={handleInput}
					value={formData.eventname}
				/>
				<h3>Event Owner</h3>
				<input
					type="text"
					name="eventowner"
					onChange={handleInput}
					value={formData.eventowner}
				/>
				<h3>Venue Name</h3>
				<input
					type="text"
					name="venuename"
					onChange={handleInput}
					value={formData.venuename}
				/>
			</form>
		</div>
	);
}

export default GigInfo;
