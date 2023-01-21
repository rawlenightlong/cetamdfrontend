# CETAMD Chronological Event Tracker and Management Database Frontend

This is a CRUD application that allows for management of the user's events/gigs in a chronological order to allow for more efficient and organized scheduling.

# Trello Board
[TRELLO BOARD](https://trello.com/b/YQVXjjG6/cetamd)

### Technologies used:

- HTML
- Cascading Style Sheet (CSS)
- JavaScript
- Express
- MongoDB
- Render
- React

### Wireframes

![Wireframe 1](https://i.imgur.com/OwrOzRO.jpg)
![Wireframe 2](https://i.imgur.com/iuXzxhJ.jpg)


### Daily Plan

| Day | Goal |
|-----|------|
| 1 | Set Up Basic Running front end and back end repos |
| 2 | Render data to screen |
| 3 | Create all forms |
| 4 | Bug testing, add possible stretch goals |
| 5 | Website Styling / Responsive |
| 6 | Final debugging and styling |
| 7 | Presentation Day |

### Project Functions

- Main Page: User can add a new gig/event to their collection and see their current list of gigs scheduled in chronological order. By clicking on each gig they can get addtional information about each gig, such as the gig's address/location, what time it starts at, its name. Additionally, the user can also edit the gig on this page.

### Front End Routes

/gigs - Index Route
/gigs/:id - Show Route


### Components

- Gig component - Contains information related to the gig

- Calendar component - inside of Gig component, used to get date information of the gig
- Google Maps component - inside of Gig component, used to get location information of the gig
- Header component - Contains the app title
- Footer component - Developer credits and website misc info

### Link to Project

[CETAMD App](https://cetamdreact.onrender.com/)

### Plannned future enhancements:

- Adding User Authentication.