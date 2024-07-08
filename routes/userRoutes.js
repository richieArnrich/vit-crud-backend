const express = require("express");

const userController = require("../controllers/userControllers");

const router = express.Router();
router.post("/createuser", userController.createUser);
router.get("/getusers", userController.getUsers);
router.delete("/deleteuser/:id", userController.deleteUser);
router.get("/getsingleuser/:id", userController.getSingleUser);
module.exports = router;
