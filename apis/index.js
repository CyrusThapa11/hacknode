// env vars :
const PORT = process.env.PORT || 5000;

//  modules
const express = require("express");
const cors = require("cors");

const moment = require("moment");
const app = express();
app.use(cors());

// custom modules :

require("./db");
const userRoutes = require("./routes/users");
const donaterRoutes = require("./routes/donors");
const Event = require("./models/events");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/donors", donaterRoutes);

app.post("/event", async (req, res) => {
  console.log("req->", req.body.start, req.body.end, req.body.title);
  const newEv = await Event.create(req.body);
  console.log("newEv", newEv);
  res.json({ message: "Added a date", data: newEv });
});
app.get("/event", async (req, res) => {
  // console.log("req->", req.body.start, req.body.end, req.body.title);
  const prevEvents = await Event.find();
  console.log("prevEvents111", prevEvents);
  prevEvents.map((event) => {
    return {
      start: moment(event.start),
      end: moment(event.end),
      title: event.title,
    };
  });

  console.log("prevEvents222", prevEvents);
  res.json({ message: "Added a date", data: prevEvents });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/ `);
});
