const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
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
    isGroup: Boolean,
    noOfPeople: Number,
    itemsRequired: [String],
    isDoner: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    urgent: {
      type: Number,
    },
    city: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
