import { createContext, useState, useMemo, useEffect } from 'react';
import DateSelectCreate from './CreateGig/dateselect';
import GigInfo from './CreateGig/giginfo';
import TimeSelect from './CreateGig/timeselect';
import { EventContext } from '../pages/dashboard';
import { formSubmit } from '../functionality/actions';
import { useContext } from 'react';
import '../styling/eventCreator.scss';

export const DisabledContext = createContext({
	isDisabled: {},
	setIsDisabled: () => {},
});

export const EventCreator = () => {
	const { eventData, setEventData } = useContext(EventContext);
	let gigInfoDisplay = 'none';
	let dateSelectDisplay = 'none';
	let timeSelectDisplay = 'none';
	const [count, setCount] = useState(0);
	const [isDisabled, setIsDisabled] = useState({
		isDisabled: {
			previous: true,
			next: true,
			submit: true,
		},
	});

	const handleIncrement = () => {
		if (count !== 2) {
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
	const handleFormSubmit = () => {
		formSubmit(eventData);
		setEventData({ ...eventData });
	};
	const getAppStage = () => {
		if (count === 0) {
			gigInfoDisplay = 'block';
			dateSelectDisplay = 'none';
			timeSelectDisplay = 'none';
		}
		if (count === 1) {
			gigInfoDisplay = 'none';
			dateSelectDisplay = 'block';
			timeSelectDisplay = 'none';
		}
		if (count === 2) {
			gigInfoDisplay = 'none';
			dateSelectDisplay = 'none';
			timeSelectDisplay = 'block';
		}
	};
	getAppStage();
	return (
		<div
			className="eventCreateApp"
			style={{
				textAlign: 'center',
				border: 'solid 1px black',
				padding: '1em',
			}}
		>
			{' '}
			<div className="eventCreatorContent">
				<GigInfo displayStyle={gigInfoDisplay} />
				<DateSelectCreate displayStyle={dateSelectDisplay} />
				<TimeSelect displayStyle={timeSelectDisplay} />
			</div>
			<div className="eventCreatorButtons">
				<button onClick={() => handleDecrement()}>Previous</button>
				<button
					onClick={() => handleIncrement()}
					style={{ marginLeft: '1em', marginRight: '1em' }}
				>
					Next
				</button>
				<button onClick={() => handleFormSubmit()}>Submit</button>
			</div>
		</div>
	);
};
