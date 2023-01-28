import { Link } from 'react-router-dom';
function Event(props) {
	const gig = props.gig;
	return (
		<div className="card" key={gig._id}>
			<Link to={`/${gig._id}`} className="gig">
				<h2 className="eventName grid1">{gig.event.eventName}</h2>

				<h2 className="eventVenueName grid2">{gig.event.venueName}</h2>
				<h2 className="eventDate grid3">
					{gig.date.stringDateTime.Date.fullDate}
				</h2>
				<h2 className="eventTime grid4">
					{gig.date.stringDateTime.Time.fullTime}
				</h2>
			</Link>
		</div>
	);
}
export default Event;
