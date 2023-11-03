const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  yearEntering: {
    type: Date,
    required: true
  },
  yearGraduation: {
    type: Date,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
 }
});

module.exports = mongoose.model('User', UserSchema);
