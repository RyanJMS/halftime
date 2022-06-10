const mongoose = require("mongoose");
const Player = require("./Player");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  myteam: [{ type: mongoose.Schema.Types.ObjectId, ref: Player }],
  teamName: {
    type: String,
    // required: true,
  },
  teamLogo: {
    type: String,
    // required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
