import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import Link from 'next/link';


interface EventDetailsProps {
  venue: string;
  date: string;
  time: string;
  href: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ venue, date, time, href }) => {
  return (
    <div className="rounded-md px-[20px] lg:p-0">
      <div >
        <p className='font-red-rose py-2 text-center flex items-center justify-center text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text'>
          <BsCalendarDateFill className="mr-4 w-6 h-6 object-cover text-white" />
          Date: {date}
        </p>
        <p className={` ${time === '0 /-' || time === "NA" ? 'invisible' : ''} font-red-rose py-2 text-center flex items-center justify-center text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text`}>
          <FaIndianRupeeSign className="mr-4 w-6 h-6 object-cover text-white" />
          Total Prize pool: Rs. {time}
        </p>
      </div>
      <Link href={href} target='_blank'>
        <div className='w-full h-40 flex justify-center items-center'>
          <button className="group relative p-6 rounded-2xl backdrop-blur-md border-2 border-indigo-400/60 bg-gradient-to-br from-indigo-600/70 via-purple-700/60 to-indigo-800/70 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-300/80 overflow-hidden w-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/20 via-purple-400/30 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center justify-center">
              <p className="text-white font-bold text-xl group-hover:text-gray-100 transition-colors duration-300 drop-shadow-lg uppercase font-red-rose" >
                Register
              </p>
            </div>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default EventDetails;
