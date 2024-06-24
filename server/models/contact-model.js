const { Schema, model } = require("mongoose");
const { required } = require("../validators/auth-validator");

const contactSchema = new Schema({
  ctf: {
    type: String,
    required: true,
  },
  category: { type: String, required: true },
  chall: { type: String, required: true },
  solution: { type: String, required: true },
});

const Contact = new model("solution", contactSchema);

module.exports = Contact;
