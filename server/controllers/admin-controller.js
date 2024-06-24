const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "no users found" });
    }
    console.log("hello", users);
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "Usser Deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const updateUserById = async (req, res) => {
  try{
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await User.updateOne({_id:id},{$set:updatedUserData});
    return res.status(200).json(updatedData)
  }
  catch(error){
    console.log(error);
  }
}

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "no contacts found" });
    }
    console.log(contacts);
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById};
