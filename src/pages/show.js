import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Map from '../components/map';

function Show(props) {
	const gig = useLoaderData();

	return (
		<div className="gigShowPage">
			<div className="gigInfo">
				<div className="gigEvent">

					

					<div>{gig.event.eventName}</div>
					<div>{gig.event.venueName}</div>

					<Map gig={gig}/>
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

			<div className="gigEdit"></div>
		</div>
	);
}

export default Show;
