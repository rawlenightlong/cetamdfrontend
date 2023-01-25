import { createContext, useState, useMemo } from 'react';
import DateSelect from './CreateGig/dateselect';
import GigInfo from './CreateGig/giginfo';
import TimeSelect from './CreateGig/timeselect';
import { formSubmit } from '../functionality/actions';
export const EventContext = createContext({
	eventData: {},
	setEventData: () => {},
});
export const EventCreator = () => {
	let gigInfoDisplay = 'none';
	let dateSelectDisplay = 'none';
	let timeSelectDisplay = 'none';
	const [count, setCount] = useState(0);
	const [eventData, setEventData] = useState({
		eventDate: '',
		eventTime: '',
		eventName: '',
		eventOwner: '',
		venueName: '',
		locationState: '',
		locationCity: '',
	});
	const contextValue = useMemo(
		() => ({ eventData, setEventData }),
		[eventData]
	);

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
		<EventContext.Provider value={{ eventData, setEventData }}>
			<div
				className="eventCreateApp"
				style={{
					textAlign: 'center',
					border: 'solid 1px black',
					padding: '1em',
				}}
			>
				<div>
					<GigInfo displayStyle={gigInfoDisplay} />
					<DateSelect displayStyle={dateSelectDisplay} />
					<TimeSelect displayStyle={timeSelectDisplay} />
				</div>
				<button onClick={() => handleDecrement()}>Previous</button>
				<button onClick={() => handleIncrement()}>Next</button>
				<button onClick={() => formSubmit(eventData)}>Submit</button>
			</div>
		</EventContext.Provider>
	);
};
