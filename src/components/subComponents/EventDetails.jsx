import React from "react";
import HPCard from "../subComponents/HPCard";
import EventCard from "../subComponents/EventCard";

function EventDetails({ eventInfo }) {
  return (
    <div className="md:flex scale-80 justify-evenly flex-wrap-reverse gap-12 items-center">
      <HPCard
        userClass="text-3xl text-wrap"
        heading={eventInfo.name || `Event ${eventInfo.id}`}
        subHeading={`${eventInfo.date} | ${eventInfo.venue}`}
        description={eventInfo.Description}
      />
      <EventCard
        imgSource={eventInfo.img}
        eventId={eventInfo.id}
        eventName={eventInfo.name || `Event ${eventInfo.id}`}
      />
    </div>
  );
}

export default EventDetails;
