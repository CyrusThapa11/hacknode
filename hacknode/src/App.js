import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import "react-datetime/css/react-datetime.css";

//custom imports
import Home from "./Pages/Home";
import UserListing from "./Pages/UserListing";
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import userContext from "./context/userContext";
import SignIn from "./Pages/SignIn";
import Users from "./Components/Users";
import DonorEdit from "./Components/DonorEdit";
import UserEdit from "./Components/UserEdit";
import SingleUser from "./Pages/SingleUser";
import Calender from "./Components/Calender";
import Toast from "./Components/Toast";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  const { appState, dispatch } = useContext(userContext);
  // const Navigate = useNavigate();
  console.log("appState", appState);

  return (
    <BrowserRouter>
      <NavBar />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/userlist"
            element={
              appState.CurrentUser ? <UserListing /> : <Navigate to="/" />
            }
          />
          <Route exact path="/calender" element={<Calender />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/user/:id" element={<SingleUser />} />
          <Route exact path="/donor/profile/:id" element={<DonorEdit />} />
          <Route exact path="/user/profile/:id" element={<UserEdit />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
