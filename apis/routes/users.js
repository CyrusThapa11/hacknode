const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.post("/signup", async (req, res) => {
  const { password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  const oldUser = await User.findOne({ email: req.body.email });

  if (oldUser) res.json({ message: "User already exists with that email" });
  const newuser_ = new User({ ...req.body, password: encryptedPassword });
  try {
    const user_ = await newuser_.save();
    // console.log("user_ is ", user_);
    res.json({ message: "Successfully created a user", user_ });
  } catch (error) {
    console.log("error", error);
  }
});

router.post("/signin", async (req, res) => {
  const { password, email } = req.body;
  try {
    const user_ = await User.findOne({ email: email });
    if (!user_) {
      res.json({ message: "No user exists" });
    } else if ((await bcrypt.compare(password, user_.password)) == false) {
      res.json({ message: "Credentials no not match" });
    } else {
      res.json({ message: "Sucessfully logged in !", data: user_ });
    }
  } catch (error) {
    console.log("error", error);
  }
});

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  // const { password, email } = req.body;
  console.log("id is ", id);

  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log("updated User", user);

    res.json({ user, message: "Successfully updated" });
  } catch (error) {
    console.log("error", error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    console.log("user_ is ", allUsers);
    req.headers = allUsers._id;
    res.json(allUsers);
  } catch (error) {
    console.log("error", error);
  }
  //   res.send("user_ created");
});

module.exports = router;
