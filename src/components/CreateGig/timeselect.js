import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
function TimeSelect(props) {
	const [selectedTime, setSelectedTime] = useState(null);
	function handleTimeSelect(time) {
		setSelectedTime(time);
	}
	return (
		<div style={{ display: props.displayStyle, padding: '5em' }}>
			<div style={{ marginBottom: '2em' }}>
				<h1>Please select a time</h1>
			</div>
			<div style={{ marginBottom: '2em' }}>
				<DatePicker
					selected={selectedTime}
					onChange={handleTimeSelect}
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={15}
					dateFormat="h:mm aa"
					timeCaption="Time"
				/>
			</div>
			<div>
				{selectedTime
					? `Selected time: ${selectedTime.toLocaleTimeString()}`
					: false}
			</div>
		</div>
	);
}

export default TimeSelect;
