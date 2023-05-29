const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  _jobTitle: {
    type: String,
    required: [true, "The name of the employee "],
  },
  _jobDescription: {
    type: String,
    required: [true, "The passport number of the employee "],
  },
  _clientName: {
    type: String,
    required: [true, "The nationality of the employee "],
  },
  _clientEmail: {
    type: String,
    required: [true, "The type of visa the employee holds	"],
  },
  _clientPhone: {
    type: String,
    required: [true, "The type of visa the employee holds	"],
  },
  _companyName: {
    type: String,
    required: [true, "The type of visa the employee holds	"],
  },
  _companyURL: {
    type: String,
    required: [true, "The type of visa the employee holds	"],
  },
  _meetingDate: {
    type: String,
    required: [true, "The type of visa the employee holds	"],
  },
  _status: {
    type: String,
    required: [true, "The type of visa the employee holds	"],
  },
  _source: {
    type: String,
    required: [true, "The type of visa the employee holds	"],
  },
  _createdBy: {
    type: String,
    required: [true, "The type of visa the employee holds	"],
  },
  _assignedTo: {
    type: String,
    required: [true, "The type of visa the employee holds	"],
  },
  _createdAt: {
    type: String,
    required: [true, "The type of visa the employee holds	"],
  },
  _updatedAt: {
    type: String,
    required: [true, "The type of visa the employee holds	"],
  },
});

module.exports = mongoose.model("lead", leadSchema);
