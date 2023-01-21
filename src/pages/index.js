import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import Calendar from "../components/calendar";

function Index(props) {
	const gigs = useLoaderData();
	return (
		<div className="index">
			<Form
				action="/create"
				method="post"
			>
			<h2>Gig Name:</h2>
				<input type="input" name="name" placeholder="" />
			<h2>Location:</h2>
				<input type="input" name="location" placeholder="" />
			<h2>Date:</h2>
			<Calendar/>
			

				<input type="submit" value="Add A Gig" />
			</Form>

			<div className='container'>
				{gigs.map((gig) => {
					return (<div className="card" key={gig._id}>
						<Link to={`/${gig._id}`} className="gig">
							<h2>{gig.name}</h2>
							<h2>{gig.location}</h2>
							<h2>{gig.date}</h2>
							<h2>{gig.time}</h2>
						</Link>
					

					</div>)
				})}
			</div>
		</div>
	);
}

export default Index;
