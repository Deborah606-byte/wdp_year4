const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    enum: ['professional development', 'networking', 'campus events'],
    required: true,
  },
  fullAddress: {
    type: String,
    required: true,
  },
  numberOfSpeakers: {
    type: Number,
    required: true,
  },
  numberOfDays: {
    type: Number,
    required: true,
  },
  eventPoster: {
    data: Buffer,
    contentType: String,
  },

});

module.exports = mongoose.model('Event', EventSchema);
