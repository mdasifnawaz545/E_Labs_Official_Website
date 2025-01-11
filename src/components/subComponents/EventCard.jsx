import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function EventCard({ imgSource, eventId, eventName }) {
  return (
    <div className="w-[24rem] border-2 border-textColor1 rounded-md h-[24rem] p-4 flex flex-col gap-8">
      <div className="overflow-hidden w-88 border-neutral-300 h-72 rounded-md border-2">
        <figure>
          <img src={imgSource} alt={`Event ${eventId}`} />
        </figure>
      </div>
      <div className="flex items-center justify-evenly">
        <Link to={`/register/${eventId}`}>
          <Button buttonName="Register Now!" />
        </Link>
        <Button buttonName={eventName} />
      </div>
    </div>
  );
}

export default EventCard;
