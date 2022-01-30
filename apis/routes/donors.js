const Donater = require("../models/donater");

const router = require("express").Router();
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  const { password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  const oldUser = await Donater.findOne({ email: req.body.email });
  if (oldUser) res.json({ message: "Donor already exists with that email" });

  const donor = new Donater({ ...req.body, password: encryptedPassword });
  try {
    const donater = await donor.save();
    // console.log("donater is ", donater);
    res.json({ donater, message: "Successfully created a Donor" });
  } catch (error) {
    console.log("error", error);
  }
});

router.post("/signin", async (req, res) => {
  const { password, email } = req.body;
  try {
    const donater = await Donater.findOne({ email: email });
    console.log("donater", donater);
    if (!donater) {
      res.json({ message: "No donater exists" });
    } else if ((await bcrypt.compare(password, donater.password)) == false) {
      res.json({ message: "Credentials no not match" });
    } else {
      res.json({ message: "Sucessfully logged in !", data: donater });
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
    const user = await Donater.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log("updated donor:", user);

    res.json({ user, message: "Successfully updated" });
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
