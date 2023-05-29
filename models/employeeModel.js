const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  _name: {
    type: String,
    required: [true, "The name of the employee not found  "],
  },
  _email: {
    type: String,
    required: [true, " email not found "],
  },
  _role: {
    type: String,
    required: [true, "no role found "],
  },
  _departments: {
    type: String,
    required: [true, "department not found"],
  },
});

module.exports = mongoose.model("employee", employeeSchema);
