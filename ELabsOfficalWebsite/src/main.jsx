import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layouts/Layout.jsx'
import Home from './components/mainComponents/Home.jsx'
import Events from './components/mainComponents/Events.jsx'
import About from './components/mainComponents/About.jsx'
import Members from './components/mainComponents/Members.jsx'
import Feedback from './components/mainComponents/Feedback.jsx'
import Signup from './components/mainComponents/Signup.jsx'
import Login from './components/mainComponents/Login.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="/#aboutPage" element={<About />}></Route>
      <Route path="events" element={<Events />}></Route>
      <Route path="members" element={<Members />}></Route>
      <Route path="feedback" element={<Feedback />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider >
  </React.StrictMode>

)
