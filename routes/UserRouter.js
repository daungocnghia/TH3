const express = require("express");
const User = require("../db/userModel");
const router = express.Router();

// GET /user/list
router.get("/list", async (req, res) => {
  try {
    const users = await User.find({}, "_id first_name last_name");
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: "Failed to fetch user list", error: err });
  }
});

// GET /user/:id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "_id first_name last_name location description occupation");
    if (!user) return res.status(400).send({ message: "User not found" });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ message: "Invalid user ID", error: err });
  }
});

module.exports = router;
