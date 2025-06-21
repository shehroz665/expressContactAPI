const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Add contact name"],
    },
    email: {
      type: String,
      required: [true, "Please Add contact email"],
    },
    phone: {
      type: String,
      required: [true, "Please Add contact phone"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
