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
import StudyMt from "./components/mainComponents/StudyMt.jsx";
import Materials from "./components/mainComponents/Materials.jsx";
import PdfView from "./components/mainComponents/PdfView.jsx";
import Project from "./components/mainComponents/Project.jsx";
import Gallery from "./components/mainComponents/Gallery.jsx";
import AddEvent from "./components/mainComponents/AddEvent.jsx";
import AddMember from "./components/mainComponents/AddMember.jsx";
import SubmitFeedback from "./components/mainComponents/SubmitFeedback.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="members" element={<Member />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="courses" element={<StudyMt />} />
      <Route path="courses/:sec" element={<Materials />} />
      <Route path="courses/:sec/:pdf" element={<PdfView />} />
      <Route path="projects" element={<Project />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="addevent" element={<AddEvent />} />
      <Route path="addmember" element={<AddMember />} />
      <Route path="submitfeedback" element={<SubmitFeedback />} />
      <Route path="admin" element={<AdminPanel />} />
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
