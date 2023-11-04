const Event = require("../models/events");

// Function to create a new Event
const createEvent = (req, res) => {
  const eventData = req.body;
  console.log({ eventData });

  Event.create(eventData)
    .then((newEvent) => {
      console.log({ message: "Event added successfully", newEvent });
      res.status(200).send("Event made successfully");
    })
    .catch((error) => {
      console.error("An error occurred");
      console.error({ error });
      res.status(500).send("Error creating Event");
    });
};

// Function to view event
const viewEvents = (req, res) => {
  Event.find()
    .then((events) => {
      if (events.length > 0) {
        console.log({ message: "Events retrieved successfully", events });
        res.render("eventlisting", { createdEvents: events }); // Render the "eventlisting.mustache" template with events data
      } else {
        console.log("No events found");
        res.status(404).send("No events found");
      }
    })
    .catch((error) => {
      console.error("An error occurred while retrieving events");
      console.error({ error });
      res.status(500).send("Error retrieving events");
    });
};

// Function to update an existing Event
const updateEvent = (req, res) => {
  const eventData = req.body;
  Event.findOneAndUpdate({ _id: req.params.id }, eventData, { new: true })
    .then((event) => {
      console.log({ message: "Event updated successfully", event });
      res.status(200).send("Event updated successfully");
    })
    .catch((err) => {
      console.error("An error occurred while updating the event:");
      console.error(err);
      res.status(500).send("Error updating event; please try again.");
    });
};

// Function to delete an Event
// Function to delete an Event
const deleteEvent = (req, res) => {
  Event.findOneAndDelete({ _id: req.params.id })
    .then((event) => {
      if (event) {
        console.log({ message: "Event deleted successfully", event });
        res.status(200).send("Event deleted successfully");
      } else {
        console.error("Event not found");
        res.status(404).send("Event not found");
      }
    })
    .catch((err) => {
      console.error("An error occurred while deleting the event:");
      console.error(err);
      res.status(500).send("Error deleting Event; please try again.");
    });
};

module.exports = {
  createEvent,
  viewEvents,
  updateEvent,
  deleteEvent,
};
