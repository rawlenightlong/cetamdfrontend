import { useState, useContext } from 'react';
import { ShowContext } from '../../pages/show';
function DateSelectUpdate(props) {
	const { gigInfo, setGigInfo } = useContext(ShowContext);

	function handleDateSelect(date) {
		setGigInfo({ ...gigInfo, eventDate: date });
	}

	return (
		<div style={{ display: props.displayStyle }}>
			<div>
				<h1 style={{ fontSize: '1.5em' }}>Please select a Date</h1>
			</div>
			<div>
				<CalendarTable
					onDateSelect={handleDateSelect}
					selected={gigInfo.eventDate}
				/>
			</div>
			<div>
				{gigInfo.eventDate
					? `Selected date: ${gigInfo.eventDate.toLocaleDateString('en-US', {
							dateStyle: 'full',
					  })}`
					: 'Please select a date'}
			</div>
		</div>
	);
}

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
		<div
			style={{ display: 'flex', justifyContent: 'center' }}
			className="dateSelect"
		>
			<table>
				<thead>
					<tr className="dateSelectHeadRow">
						<th style={{ height: '1em' }}>
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

export default DateSelectUpdate;
