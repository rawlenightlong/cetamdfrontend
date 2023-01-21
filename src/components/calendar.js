import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

function Calendar() {
	//-----------------------////////
	// Component State
	//-----------------------////////
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	//-----------------------////////
	// Component Handlers
	//-----------------------////////
	function handleDateSelect(date) {
		setSelectedDate(date);
	}

	function handleTimeSelect(time) {
		setSelectedTime(time);
	}

	function handleSubmit() {
		if (selectedDate && selectedTime) {
			const date = new Date(
				selectedDate.getFullYear(),
				selectedDate.getMonth(),
				selectedDate.getDate(),
				selectedTime.getHours(),
				selectedTime.getMinutes()
			);
			console.log(date); ////////////////This is where the data is exported
		}
	}
	//-----------------------////////
	// Component Itself
	//-----------------------////////
	return (
		<div>
			<div>
				<CalendarTable
					onDateSelect={handleDateSelect}
					selected={selectedDate}
				/>
			</div>
			<div>
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
				<button onClick={handleSubmit}>Submit</button>
			</div>
			<div>
				{selectedDate
					? `Selected date: ${selectedDate.toLocaleDateString()}`
					: 'Please select a date'}
			</div>
			<div>
				{selectedTime
					? `Selected time: ${selectedTime.toLocaleTimeString()}`
					: 'Please select a time'}
			</div>
		</div>
	);
}
//-----------------------////////
// Calendar Sub Component
//-----------------------////////
function CalendarTable({ onDateSelect, selected }) {
	const [currentDate, setCurrentDate] = useState(new Date());

	function handlePreviousMonth() {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
		);
	}

	function handleNextMonth() {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
		);
	}

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>
							<button onClick={handlePreviousMonth}>{'<'}</button>
						</th>
						<th colSpan="5">
							{currentDate.toLocaleString('default', { month: 'long' })}{' '}
							{currentDate.getFullYear()}
						</th>
						<th>
							<button onClick={handleNextMonth}>{'>'}</button>
						</th>
					</tr>
					<tr>
						<th>Sun</th>
						<th>Mon</th>
						<th>Tue</th>
						<th>Wed</th>
						<th>Thu</th>
						<th>Fri</th>
						<th>Sat</th>
					</tr>
				</thead>
				<tbody>
					{[...Array(6)].map((_, i) => (
						<tr key={i}>
							{[...Array(7)].map((_, j) => {
								const date = new Date(
									currentDate.getFullYear(),
									currentDate.getMonth(),
									i * 7 +
										j -
										(new Date(
											currentDate.getFullYear(),
											currentDate.getMonth(),
											1
										).getDay() -
											1)
								);
								return (
									<td
										key={j}
										onClick={() => onDateSelect(date)}
										className={
											selected &&
											date.toDateString() === selected.toDateString()
												? 'selected'
												: ''
										}
									>
										{date.getMonth() === currentDate.getMonth()
											? date.getDate()
											: ''}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Calendar;
