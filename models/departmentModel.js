const mongoose = require("mongoose");

const departmentModel = new mongoose.Schema({
  _name: {
    type: String,
    required: [true, "Name not found "],
  },
});

module.exports = mongoose.model("departmentModel", departmentModel);
