import { createContext, useState, useMemo, useEffect } from 'react';
import { EventCreator } from '../components/eventcreator';
import { Form, Link, useLoaderData, redirect } from 'react-router-dom';
import Event from '../components/event';

import '../styling/dashboard.scss';
export const EventContext = createContext({
	eventData: {},
	setEventData: () => {},
});

function Dashboard(props) {
	let counter = 0;
	if (!document.cookie) {
		redirect('/login');
	}
	const gigs = useLoaderData();
	const [toggle, setToggle] = useState(0);
	const [buttonText, setButtonText] = useState('Create New Event');
	const [createDivDisplay, setCreateDivDisplay] = useState('none');
	const [index, setIndex] = useState('-1');
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
		setIndex('6');
		setToggle(1);
	};
	const setPositive = () => {
		setCreateDivDisplay('none');
		setIndex('-1');
		setButtonText('Create New Event');
		setToggle(0);
	};
	return (
		<div className="dashboardDiv">
			<EventContext.Provider value={{ eventData, setEventData }}>
				<div className="dashboardTitle">
					<h1>User Dashboard</h1>
					<div className="dividingBox">
						<div className="showEventCreatorButton" style={{ zIndex: '6' }}>
							<button
								onClick={() => handleButtonPress()}
								className="createButton"
							>
								<span>{buttonText}</span>
							</button>
						</div>
					</div>
				</div>
				<div className="eventCreatorApp" style={{ zIndex: index }}>
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
						<div className="containerHeaders">
							<h3 className="headerName grid1">Event Name:</h3>

							<h3 className="headerVenue grid2">Venue:</h3>

							<h3 className="headerDate grid3">Date:</h3>

							<h3 className="headerTime grid4">Time:</h3>
						</div>
						<div className="gigsContainer">
							{gigs.map((gig) => {
								counter++;
								return (
									<div className="returnedDiv" key={`${counter}`}>
										<div className="dividingLine"></div>
										<Event gig={gig} />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</EventContext.Provider>
		</div>
	);
}

export default Dashboard;
