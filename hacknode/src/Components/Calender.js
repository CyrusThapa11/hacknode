import React, { useContext, useEffect, useRef, useState } from "react";
import {
  serverTimestamp,
  collection,
  addDoc,
  getFirestore,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Datetime from "react-datetime";
import moment from "moment";
import axios from "axios";
import "./Calender.css";
import { app } from "../FirebaseConfig";
import userContext from "../context/userContext";
import { useCollection } from "react-firebase-hooks/firestore";
import { toast } from "react-toastify";

const Calender = () => {
  const db = getFirestore(app);

  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [title, setTitle] = useState("");
  const [PreviousEvents, setPreviousEvents] = useState([]);
  const calenderRef = useRef(null);

  const [message, setMessage] = useState("");
  const [previousMessages, setPreviousMessages] = useState([]);

  const { appState } = useContext(userContext);

  const messagesRef = collection(db, "messages");

  const q = query(messagesRef, orderBy("timestamp"));
  const [snapshot, loading, error] = useCollection(q);
  let messages_ = [];
  if (snapshot) {
    snapshot.forEach((doc) => {
      messages_.push(doc.data());
    });
    console.log("messages_", messages_);
    // messages_ = messages_.reverse();
    // setPreviousMessages(messages_);
  }

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let cities = [];
    querySnapshot.forEach((doc) => {
      cities.push(doc.data());
    });
  });

  useEffect(() => {
    const getData = async () => {
      const previousEvents = await axios.get("http://localhost:5000/event");
      setPreviousEvents(previousEvents.data.data);
    };
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let calendarApi = calenderRef.current.getApi();
    calendarApi.addEvent({
      start: moment(start).toDate(),
      end: moment(end).toDate(),
      title: title,
    });

    // send it to db :
    const response = await axios.post("http://localhost:5000/event", {
      start,
      end,
      title,
    });
    // console.log("response", response);
  };

  const HandleSendMessage = async () => {
    // post message to fire store
    // console.log("sending message");
    const result = await addDoc(collection(db, "messages"), {
      name: appState.CurrentUser.name,
      timestamp: serverTimestamp(),
      text: message,
    });
    setMessage("");
  };

  return (
    <div>
      <div className="container mt-5 ">
        <div className="row h-100 p-5" style={{ backgroundColor: "#E4FBFF" }}>
          <div className="col-sm-10 col-md-4 chat-container d-flex flex-column justify-content-center align-items-center mb-3">
            <h3>Chat for collaborative donation</h3>
            <div className="chat-box">
              <div className="row">
                {messages_.map((message_) => {
                  return (
                    <div class="message-container ">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Avatar"
                        class="left rounded-circle img-fluid"
                        style={{ width: "100%" }}
                      />
                      <span>{message_.name} - </span>
                      <p>{message_.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="row mt-4 justify-content-center align-items-center">
              <div className="form-group col-sm-8 col-12 ">
                <input
                  type="text"
                  placeholder="Send message"
                  className="form-control"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="form-group col-sm-4 col-12">
                <button
                  className="btn btn-outline-primary"
                  onClick={HandleSendMessage}
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-8  ">
            <FullCalendar
              ref={calenderRef}
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={PreviousEvents}
            />
            <div className="row">
              <div className="col-sm-5 offset-sm-1">
                <div className="form-group">
                  <label HtmlFor="fullName">Start Date</label>

                  <Datetime
                    className="form-control"
                    onChange={(date) => setStart(date)}
                    value={start}
                  />
                </div>
              </div>
              <div className="col-sm-5 offset-sm-1">
                <div className="form-group">
                  <label HtmlFor="fullName">End Date</label>

                  <Datetime
                    className="form-control"
                    onChange={(date) => setEnd(date)}
                    value={end}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-5 offset-sm-1 ">
                <div className="form-group">
                  <label HtmlFor="fullName">Title</label>

                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    className="form-control"
                    value={title}
                  />
                </div>
              </div>
              <div className="col-sm-5 offset-sm-1 ">
                <div className="form-group">
                  <input
                    type="submit"
                    name="title"
                    className=" mt-4 form-control"
                    placeholder="ADD EVENT"
                    onClick={(e) => handleSubmit(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
