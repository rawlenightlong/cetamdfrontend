import React, { useState } from 'react';
import DateSelect from './CreateGig/dateselect';
import GigInfo from './CreateGig/giginfo';
import TimeSelect from './CreateGig/timeselect';

function EventCreator() {
	const eventObject = {};
	let gigInfoDisplay = 'none';
	let dateSelectDisplay = 'none';
	let timeSelectDisplay = 'none';
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		if (count != 2) {
			setCount(count + 1);
			getAppStage();
		}
	};
	const handleDecrement = () => {
		if (count > 0) {
			setCount(count - 1);
			getAppStage();
		}
	};
	const getAppStage = () => {
		if (count == 0) {
			gigInfoDisplay = 'block';
			dateSelectDisplay = 'none';
			timeSelectDisplay = 'none';
		}
		if (count == 1) {
			gigInfoDisplay = 'none';
			dateSelectDisplay = 'block';
			timeSelectDisplay = 'none';
		}
		if (count == 2) {
			gigInfoDisplay = 'none';
			dateSelectDisplay = 'none';
			timeSelectDisplay = 'block';
		}
	};
	getAppStage();
	return (
		<div
			className="eventCreateApp"
			style={{ textAlign: 'center', border: 'solid 1px black', padding: '1em' }}
		>
			<div>
				<GigInfo displayStyle={gigInfoDisplay} />
				<DateSelect displayStyle={dateSelectDisplay} />
				<TimeSelect displayStyle={timeSelectDisplay} />
			</div>
			<button onClick={() => handleDecrement()}>Previous</button>
			<button onClick={() => handleIncrement()}>Next</button>
			<button>Submit</button>
		</div>
	);
}

export default EventCreator;
