const user = require("../Model/UserSchema");

const createUser = async (req, res) => {
  console.log(req);
  const newuser = new user(req.body);
  try {
    await newuser.save();
    res.status(200).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUsers = async (req, res) => {
  const users = await user.find();
  try {
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};
const getSingleUser = async (req, res) => {
  const id = req.params.id;
  const singleUser = await user.findById(id);
  try {
    res.status(200).json(singleUser);
  } catch (err) {
    console.log(err);
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const delteduser = await user.findByIdAndDelete(id);
    res.status(200).json(delteduser);
  } catch (err) {
    console.log(err);
  }
};

const authenticate = async () => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const user = await User.findOne({ username: username });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};
module.exports = { createUser, getUsers, deleteUser, getSingleUser };
