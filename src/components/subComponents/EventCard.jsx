import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function EventCard({ imgSource, eventId, eventName }) {
  return (
    <div className='w-[24rem] scale-90 border border-textColor1 rounded-md h-[24rem] p-4 flex flex-col gap-8'>
      <div className='overflow-hidden w-88 border-textColor2 h-72 rounded-md border'>
        <figure>
          <img src={imgSource} alt={`Event ${eventId}`} />
        </figure>
      </div>
      <div className='flex items-center justify-evenly'>
        <Link to={`/register/${eventId}`}>
          <Button buttonName='Register Now!' />
        </Link>
        <Button buttonName={eventName} />
      </div>
    </div>
  );
}

export default EventCard;
