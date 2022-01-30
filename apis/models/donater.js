const mongoose = require("mongoose");

const donaterSchema = mongoose.Schema(
  {
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
    city: {
      type: String,
    },
    noOfDonations: {
      type: Number,
      default: 0,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isDoner: {
      type: Boolean,
      default: true,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const Donater = mongoose.model("Donater", donaterSchema);
module.exports = Donater;
