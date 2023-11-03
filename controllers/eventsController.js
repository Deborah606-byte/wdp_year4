const Event = require("../models/events");

// Function to create a new Event
const createEvent = (req, res) => {
    const eventData = req.body;
    console.log({eventData})


    Event.create(eventData)
      .then(newEvent => {
        console.log({ message: "Event added successfully", newEvent });
        res.status(200).send("Event made successfully");
      })
      .catch(error => {
        console.error("An error occurred");
        console.error({ error });
        res.status(500).send("Error creating Event");
      });
  };
  
// Function to view event
const viewEvents = (req, res) => {
    Event.find()
        .then(events => {
            if (events.length > 0) {
                console.log({ message: "Events retrieved successfully", events });
                res.render("eventlisting", { createdEvents: events }); // Render the "eventlisting.mustache" template with events data
            } else {
                console.log("No events found");
                res.status(404).send("No events found");
            }
        })
        .catch(error => {
            console.error("An error occurred while retrieving events");
            console.error({ error });
            res.status(500).send("Error retrieving events");
        });
};

// Function to update an existing Event
const updateEvent = (req, res) => {
    const eventId = req.params.Id; // Retrieve the event ID from the request parameters
    const eventData = req.body; // Retrieve the updated event data
  
    // Use the eventId to locate the event in the database and update its details
    Event.findByIdAndUpdate(eventId, eventData, { new: true }, (err, updatedEvent) => {
      if (err) {
        console.error("An error occurred while updating the event");
        console.error({ error: err });
        res.status(500).send("Error updating Event");
      } else {
        console.log({ message: "Event updated successfully", updatedEvent });
        res.redirect('/manager/dashboard'); // Redirect to the dashboard or a success page
      }
    });
  };
  

  // Function to delete an Event
const deleteEvent = (req, res) => {
    const eventId = req.params.id; // Retrieve the event ID from the request parameters
  
    // Use the eventId to locate and remove the event from the database
    Event.findByIdAndRemove(eventId, (err) => {
      if (err) {
        console.error("An error occurred while deleting the event");
        console.error({ error: err });
        res.status(500).send("Error deleting Event");
      } else {
        console.log("Event deleted successfully");
        res.redirect('/manager/dashboard'); // Redirect to the dashboard or a success page
      }
    });
  };
  

module.exports = {
    createEvent,
    viewEvents,
    updateEvent,
    deleteEvent,
}