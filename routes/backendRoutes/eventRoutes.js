const express = require("express");
const router = express.Router();

const {createEvent, viewEvents, updateEvent, deleteEvent} = require ("../../controllers/eventsController");

router.post("/", createEvent);
router.get("/", viewEvents);
// router.post('/', updateEvent);
// router.post('/', deleteEvent);
module.exports = router;