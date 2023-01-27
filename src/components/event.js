import { Link } from 'react-router-dom';
function Event(props) {
	const gig = props.gig;
	return (
		<div className="card" key={gig._id}>
			<Link to={`/${gig._id}`} className="gig">
				<h2>{gig.event.eventName}</h2>
			</Link>
			<h2>{gig.event.venueName}</h2>
			<h2>{gig.date.stringDateTime.Date.fullDate}</h2>
			<h2>{gig.date.stringDateTime.Time.fullTime}</h2>
		</div>
	);
}
export default Event;
