import { React, useContext, createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Map from '../components/map';
import { Form } from 'react-router-dom';
import { EventUpdater } from '../components/eventupdater';

export const ShowContext = createContext({
	gigInfo: {},
	setGigInfo: () => {},
});

export const Show = (props) => {
	const gig = useLoaderData();
	const [gigInfo, setGigInfo] = useState({ ...gig });
	return (
		<div className="gigShowPage">
			<div className="gigInfo">
				<div className="gigEvent">
					<div>{gig.event.eventName}</div>
					<div>{gig.event.venueName}</div>

					<Map gig={gig} />
				</div>

				<div className="gigLocation">
					<div>
						{gig.location.city}, {gig.location.state}
					</div>
				</div>

				<div className="gigTime">
					<div>{gig.date.stringDateTime.Date.fullDate}</div>
					<div>{gig.date.stringDateTime.Time.fullTime}</div>
				</div>
			</div>

			<div className="gigDelete">
				<Form action={`/delete/${gig._id}`} method="post">
					<input type="submit" value={`Delete ${gig.event.eventName}`} />
				</Form>
			</div>
			<ShowContext.Provider value={{ gigInfo, setGigInfo }}>
				<div className="gigEdit">
					<EventUpdater />
				</div>
			</ShowContext.Provider>
		</div>
	);
};
