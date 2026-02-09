import React from 'react'
import EventsCard from '../sub/EventsCard'
import Navbar from '@/components/main/Navbar';
import FlareCursor from "@/components/main/Cursor";

function Events() {
  const eventData = [
    { title: "Cultural Events", imageSrc: "/images/eventThumnails/cultural.png", name: "Cultural Events", href: "/events/cultural" },
    { title: "Technical Events", imageSrc: "/images/eventThumnails/tech events.png", name: "Technical Event", href: "/events/technical" },
    { title: "Non Technical Events", imageSrc: "/images/eventThumnails/non tech.png", name: "Technical Event", href: "/events/nontechnical" },
    { title: "APEX TRAILS 2.0", imageSrc: "/images/eventThumnails/apex trails.png", name: "APEX TRIALS 2.0", href: "/events/apex-trials", buttonText: "Continue" }
  ];
  return (
    <div className='pt-20'>
      <FlareCursor />
      <h1 className=' text-center text-7xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-red-rose py-20'>Events</h1>
      <div className='flex justify-center items-center px-4 w-full '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-28 gap-x-[16rem] max-w-7xl'>
          {eventData.map((event, index) => (
            <EventsCard key={index} title={event.title} imageSrc={event.imageSrc} name={event.name} href={event.href} buttonText={event.buttonText} />
          ))}
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Events
