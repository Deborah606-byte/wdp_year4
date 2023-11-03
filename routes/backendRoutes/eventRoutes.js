const express = require("express");
const router = express.Router();

const {
  createEvent,
  viewEvents,
  updateEvent,
  deleteEvent,
} = require("../../controllers/eventsController");

// Define routes
router.post("/", createEvent);
router.get("/", viewEvents);
router.post("/updateEvent/:id", updateEvent); // Corrected route definition

module.exports = router;
