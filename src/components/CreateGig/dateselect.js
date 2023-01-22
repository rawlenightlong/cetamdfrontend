import React, { useState } from 'react';

function DateSelect(props) {
	const [selectedDate, setSelectedDate] = useState(null);

	function handleDateSelect(date) {
		setSelectedDate(date);
	}

	return (
		<div style={{ display: props.displayStyle }}>
			<div style={{ marginBottom: '2em' }}>
				<h1>Please select a Date</h1>
			</div>
			<div>
				<CalendarTable
					onDateSelect={handleDateSelect}
					selected={selectedDate}
					dateSelectDisplay={props.displayStyle}
				/>
			</div>
			<div>
				{selectedDate
					? `Selected date: ${selectedDate.toLocaleDateString()}`
					: 'Please select a date'}
			</div>
		</div>
	);
}

function CalendarTable({ onDateSelect, selected, dateSelectDisplay }) {
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
		<div
			style={{ display: 'flex', justifyContent: 'center', marginBottom: '5em' }}
		>
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

export default DateSelect;