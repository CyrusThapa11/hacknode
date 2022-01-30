const mongoose = require("mongoose");

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://user:user@cluster0.iknif.mongodb.net/hacknode?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
