const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  email: { type: String, require: true },
  pincode: { type: Number, require: true },
  gender: { type: String, require: true },
  age: { type: Number, require: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;