import { createContext, useState, useMemo, useEffect } from 'react';
import { EventCreator } from '../components/eventcreator';
import { Form, Link, useLoaderData } from 'react-router-dom';
import Event from '../components/event';

import '../styling/dashboard.scss';
export const EventContext = createContext({
	eventData: {},
	setEventData: () => {},
});

function Dashboard(props) {
	const gigs = useLoaderData();
	const [toggle, setToggle] = useState(0);
	const [buttonText, setButtonText] = useState('Create New Event');
	const [createDivDisplay, setCreateDivDisplay] = useState('none');
	const [eventData, setEventData] = useState({
		eventDate: '',
		eventTime: '',
		eventName: '',
		eventOwner: '',
		venueName: '',
		locationState: 't',
		locationCity: 't',
	});
	const handleButtonPress = () => {
		if (toggle === 1) {
			setPositive();
		}
		if (toggle === 0) {
			setNegative();
		}
	};
	const setNegative = () => {
		setCreateDivDisplay('flex');
		setButtonText('X');
		setToggle(1);
	};
	const setPositive = () => {
		setCreateDivDisplay('none');
		setButtonText('Create New Event');
		setToggle(0);
	};
	return (
		<div className="dashboardDiv">
			<EventContext.Provider value={{ eventData, setEventData }}>
				<div className="dashboardTitle">
					<h1>User Dashboard</h1>
					<div className="dividingBox">
						<div className="showEventCreatorButton">
							<button onClick={() => handleButtonPress()}>{buttonText}</button>
						</div>
					</div>
				</div>
				<div className="eventCreatorApp">
					<div
						className="eventCreatorDiv"
						style={{ display: createDivDisplay }}
					>
						<EventCreator />
						<button onClick={() => handleButtonPress()} className="divCloseOut">
							{buttonText}
						</button>
					</div>
				</div>

				<div className="index">
					<div className="container">
						{gigs.map((gig) => {
							return <Event gig={gig} />;
						})}
					</div>
				</div>
			</EventContext.Provider>
		</div>
	);
}

export default Dashboard;
