
import React from 'react';
import EventCreator from '../components/eventcreator';
import { Form, Link, useLoaderData } from "react-router-dom";
import Calendar from "../components/calendar";


function Index(props) {
	const gigs = useLoaderData();
	return (<>
		<EventCreator />
			<div className="index">
				<div className='container'>
					{gigs.map((gig) => {
						return (<div className="card" key={gig._id}>
									<Link to={`/${gig._id}`} className="gig">
								<h2>{gig.event.eventName}</h2>
								
							</Link>
							<h2>{gig.event.venueName}</h2>
							<h2>{gig.date.stringDateTime.Date.fullDate}</h2>
							<h2>{gig.date.integerDateTime.Time.fullTime}</h2>
						</div>)
					})}
				</div>
		</div>
		</>
		);
}

export default Index;
