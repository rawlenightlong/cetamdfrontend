import { useContext } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { EventContext } from '../../pages/dashboard';
function TimeSelect(props) {
	const { eventData, setEventData } = useContext(EventContext);
	function handleTimeSelect(time) {
		// setSelectedTime(time);
		setEventData({ ...eventData, eventTime: time });
	}
	return (
		<div
			style={{ display: props.displayStyle, padding: '5em' }}
			className="timeSelect"
		>
			<div style={{ marginBottom: '2em' }}>
				<h1>Please select a time</h1>
			</div>
			<div
				style={{ marginBottom: '2em', textAlign: 'center' }}
				className="timePicker"
			>
				<DatePicker
					selected={eventData.eventTime}
					onChange={handleTimeSelect}
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={15}
					dateFormat="h:mm aa"
					timeCaption="Time"
				/>
			</div>
			<div>
				{eventData.eventTime
					? `Selected time: ${eventData.eventTime.toLocaleTimeString()}`
					: false}
			</div>
		</div>
	);
}

export default TimeSelect;
