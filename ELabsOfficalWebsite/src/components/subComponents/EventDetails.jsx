import React from 'react'
import HPCard from '../subComponents/HPCard'
import EventCard from '../subComponents/EventCard'
function EventDetails({eventInfo}) {
    let desc = `Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.
  Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea.`
    return (
        <div className='flex justify-evenly flex-wrap-reverse gap-16 items-center'>
            <HPCard userClass='text-3xl text-wrap' heading={eventInfo.name} subHeading={`${eventInfo.date} | ${eventInfo.venue}`} description={eventInfo.Description} />
            <EventCard />
        </div>
    )
}

export default EventDetails