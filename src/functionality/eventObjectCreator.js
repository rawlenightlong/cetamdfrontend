export const eventObjectCreator = (eventData) => {
	const eventDateString = eventData.eventDate.toLocaleString('en-US', {
		dateStyle: 'full',
	});
	const eventTimeString = eventData.eventTime.toLocaleString();
	const eventTimeStringCleanup = eventTimeString.split(' ');

	const convertedEvent = {
		event: {
			eventOwner: eventData.eventOwner,
			venueName: eventData.venueName,
			eventName: eventData.eventName,
		},
		location: {
			state: eventData.locationState,
			city: eventData.locationCity,
			venue: eventData.venueName,
			coordinates: eventData.eventCoordinates
		},
		date: {
			stringDateTime: {
				Date: {
					fullDate: eventDateString,
					day: eventDateString.split(' ')[0].split(',')[0],
					month: eventDateString.split(' ')[1],
					year: eventDateString.split(' ')[3],
				},
				Time: {
					fullTime: eventTimeStringCleanup[1] + eventTimeStringCleanup[2],
					hour: eventTimeString.split(':')[0],
					minute: eventTimeString.split(':')[1],
				},
			},
			integerDateTime: {
				Date: {
					fullDate: eventData.eventDate.getTime(),
					day: eventData.eventDate.getDate(),
					month: eventData.eventDate.getMonth() + 1,
					year: eventData.eventDate.getFullYear(),
				},
				Time: {
					fullTime: eventData.eventTime,
					hour: eventData.eventTime.getHours(),
					minute: eventData.eventTime.getMinutes(),
				},
			},
		},
	};
	return convertedEvent;
};
