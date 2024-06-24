const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
  try {
    res.status(200).json("welcome to my first mern stack devlopment");
  } catch (error) {
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "email already exits" });
    }
    //for securing password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password,saltRound);

    const userCreated = await User.create({ username, email, phone, password });
    res
      .status(201)
      .json({
        message: "registration successful",
        token: await userCreated.generateToken(),
        userID: userCreated._id.toString(),
      });
  } catch (error) {
    console.log(error);
    // res.status(500).json("internal server error");
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    //const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res
        .status(200)
        .json({
          message: "login successful",
          token: await userExist.generateToken(),
          userID: userExist._id.toString(),
        });
    }else{
        res.status(401).json({message:"invalid email or password"});
    }
  } catch (error) {
    console.log(error);
  }
};

const user = async (req, res) => {
  try{
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData});
  }
  catch(error){
    console.log(`error from the user route ${error}`);
  }
}

module.exports = {user, home, register, login};
