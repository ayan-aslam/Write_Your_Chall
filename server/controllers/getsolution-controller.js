const Contact = require("../models/contact-model");

const solutions = async (req, res) => {
  try {
    const response = await Contact.find();
    if (!response) {
      res.status(404).json({ msg: "No solution found" });
      return;
    }
    return res.status(200).json({ msg: "solution found", data: response });
  } catch (error) {
    console.log("solutions", error);
  }
};
module.exports = solutions;
