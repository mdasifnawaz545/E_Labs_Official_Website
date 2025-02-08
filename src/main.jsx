import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layouts/Layout.jsx";
import Home from "./components/mainComponents/Home.jsx";
import Events from "./components/mainComponents/Events.jsx";
import About from "./components/mainComponents/About.jsx";
import Member from "./components/mainComponents/Member.jsx";
import Feedback from "./components/mainComponents/Feedback.jsx";
// import Signup from "./components/mainComponents/Signup.jsx";
// import Login from "./components/mainComponents/Login.jsx";
import StudyMt from "./components/mainComponents/StudyMt.jsx";
import Materials from "./components/mainComponents/Materials.jsx";
import PdfView from "./components/mainComponents/PdfView.jsx";
import Project from "./components/mainComponents/Project.jsx";
import Gallery from "./components/mainComponents/Gallery.jsx";
import AddEvent from "./components/mainComponents/AddEvent.jsx";
import EventRegistration from "./components/subComponents/EventRegistration.jsx";
import SubmissionSuccess from "./components/subComponents/SubmissionSuccess.jsx";
import AddMember from "./components/mainComponents/AddMember.jsx";
import SubmitFeedback from "./components/mainComponents/SubmitFeedback.jsx";

// import PrivateRoute from "./components/subComponents/PrivateRoute.jsx";
// import Profile from "./components/mainComponents/Profile.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="events" element={<Events />}></Route>
      <Route path="members" element={<Member />}></Route>
      <Route path="feedback" element={<Feedback />}></Route>
      {/* <Route path="signup" element={<Signup />}></Route>
      <Route path="login" element={<Login />}></Route> */}
      <Route path="courses" element={<StudyMt />}></Route>
      <Route path="courses/:sec" element={<Materials />}></Route>
      <Route path="courses/:sec/:pdf" element={<PdfView />}></Route>
      <Route path="events" element={<Events />}></Route>
      <Route path="register/:eventid" element={<EventRegistration />}></Route>
      <Route path="/submission-success" element={<SubmissionSuccess />} />
      <Route path="members" element={<Member />}></Route>
      <Route path="feedback" element={<Feedback />}></Route>
      {/* <Route path="signup" element={<Signup />}></Route> */}
      {/* <Route path="login" element={<Login />}></Route> */}
      <Route path="projects" element={<Project />}></Route>
      <Route path="gallery" element={<Gallery />}></Route>
      <Route path="addevent" element={<AddEvent />}></Route>
      <Route path="addmember" element={<AddMember />}></Route>
      <Route path="submitfeedback" element={<SubmitFeedback />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>
);
