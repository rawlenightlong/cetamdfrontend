import { createContext, useState, useMemo, useEffect } from 'react';
import DateSelectUpdate from './updateGig/dateselect';
import GigInfo from './updateGig/giginfo';
import TimeSelect from './updateGig/timeselect';
import { ShowContext } from '../pages/show';
import { formUpdate } from '../functionality/actions';
import { useContext } from 'react';
import '../styling/eventCreator.scss';

export const DisabledContext = createContext({
	isDisabled: {},
	setIsDisabled: () => {},
});

export const EventUpdater = (props) => {
	const { gigInfo, setGigInfo } = useContext(ShowContext);

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
	const handleFormUpdate = () => {
		formUpdate(gigInfo, gigInfo._id);
		setGigInfo({ ...gigInfo });
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
				<DateSelectUpdate displayStyle={dateSelectDisplay} />
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
				<button onClick={() => handleFormUpdate()}>Submit</button>
			</div>
		</div>
	);
};
