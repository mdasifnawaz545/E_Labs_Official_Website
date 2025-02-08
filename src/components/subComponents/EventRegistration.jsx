import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "./Button";

function EventRegistration() {
  const events = useSelector((state) => state.eventDetails);
  const { eventid } = useParams();
  const eventInfo = events.find((event) => event.id === parseInt(eventid));
  const navigate = useNavigate();

  if (!eventInfo) {
    return <div>Event not found</div>;
  }

  const { name: eventName, img: imgSource } = eventInfo;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    rollNumber: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted for event:", eventInfo.id, formData);
    navigate("/submission-success", { replace: true });
  };

  return (
    <div className="flex flex-wrap-reverse items-center justify-between px-8">
      <div className="flex-auto max-w-md mx-auto mb-4 mt-8 shadow appearance-none border-textColor1 border-2 rounded-md">
        <h2 className="text-2xl font-bold mb-4 p-6 dark:text-black ">
          Register for {eventName}
        </h2>
        <form onSubmit={handleSubmit} className="px-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-white dark:text-black "
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded bg-black dark:bg-sky-100  text-white dark:text-black "
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-white dark:text-black "
            >
              KIIT Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded bg-black dark:bg-sky-100  text-white dark:text-black "
              required
              pattern=".+@kiit\.ac\.in$"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="year"
              className="block mb-2 text-white dark:text-black "
            >
              Year*
            </label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded bg-black dark:bg-sky-100  text-white dark:text-black "
              required
            >
              <option value="">Select Year</option>
              <option value="4th">4th</option>
              <option value="3rd">3rd</option>
              <option value="2nd">2nd</option>
              <option value="1st">1st (Special Slot)</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="rollNumber"
              className="block mb-2 text-white dark:text-black "
            >
              Roll Number*
            </label>
            <input
              type="text"
              id="rollNumber"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded bg-black dark:bg-sky-100  text-white dark:text-black "
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block mb-2 text-white dark:text-black "
            >
              WhatsApp/Contact Number*
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded bg-black dark:bg-sky-100  text-white dark:text-black "
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="mb-6 flex items-center">
              <Button buttonName="Submit" />
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto w-[24rem] scale-90 border border-textColor1 rounded-md h-[24rem] p-4 flex flex-col gap-8">
        <div className="overflow-hidden w-88 border-textColor2 h-72 rounded-md border">
          <figure>
            <img src={imgSource} alt={eventName} />
          </figure>
        </div>
        <div className="flex items-center justify-evenly">
          <Button buttonName={eventName || "Event"} />
        </div>
      </div>
    </div>
  );
}

export default EventRegistration;
