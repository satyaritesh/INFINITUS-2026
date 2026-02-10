import React from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import Link from 'next/link';


interface EventDetailsProps {
  venue: string;
  date: string;
  time: string;
  href?: string;
  href2?: string;
  onSrmClick?: () => void;
  onExternalClick?: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ venue, date, time, href = "#", href2, onSrmClick, onExternalClick }) => {
  return (
    <div className="rounded-md px-[20px] lg:p-0 mb-5">
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
      <div className="flex flex-col justify-center items-center mt-4">
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-red-rose mb-4">
          Registration
        </h3>
        <div className="flex flex-row justify-center w-full gap-4">

          {/* SRM AP Button */}
          {onSrmClick ? (
            <div onClick={onSrmClick} className="w-auto transform transition-transform hover:z-10 hover:scale-105 cursor-pointer">
              <button className="group relative px-12 py-5 backdrop-blur-md border-2 border-indigo-400/60 bg-gradient-to-br from-indigo-600/70 via-purple-700/60 to-indigo-800/70 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-300/80 overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)', paddingRight: '40px', borderRadius: '10px 0 0 10px' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/20 via-purple-400/30 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <span className="text-white font-bold text-lg group-hover:text-gray-100 transition-colors duration-300 drop-shadow-lg uppercase font-red-rose">
                    SRM AP
                  </span>
                </div>
              </button>
            </div>
          ) : (
            <Link href={href} target='_blank' className="w-auto transform transition-transform hover:z-10 hover:scale-105">
              <button className="group relative px-12 py-5 backdrop-blur-md border-2 border-indigo-400/60 bg-gradient-to-br from-indigo-600/70 via-purple-700/60 to-indigo-800/70 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-300/80 overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)', paddingRight: '40px', borderRadius: '10px 0 0 10px' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/20 via-purple-400/30 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <span className="text-white font-bold text-lg group-hover:text-gray-100 transition-colors duration-300 drop-shadow-lg uppercase font-red-rose">
                    SRM AP
                  </span>
                </div>
              </button>
            </Link>
          )}

          {/* External Button */}
          {onExternalClick ? (
            <div onClick={onExternalClick} className="w-auto transform transition-transform hover:z-10 hover:scale-105 hover:rounded-r-lg cursor-pointer">
              <button className="group relative px-12 py-5 backdrop-blur-md border border-fuchsia-400/60 bg-gradient-to-br from-fuchsia-600/70 via-purple-700/60 to-fuchsia-800/70 shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-fuchsia-300/80 overflow-hidden"
                style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)', paddingLeft: '40px', borderRadius: '0 10px 10px 0' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-400/20 via-purple-400/30 to-fuchsia-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <span className="text-white font-bold text-lg group-hover:text-gray-100 transition-colors duration-300 drop-shadow-lg uppercase font-red-rose">
                    External
                  </span>
                </div>
              </button>
            </div>
          ) : (
            <Link href={href2 ? href2 : href} target='_blank' className="w-auto transform transition-transform hover:z-10 hover:scale-105 hover:rounded-r-lg">
              <button className="group relative px-12 py-5 backdrop-blur-md border border-fuchsia-400/60 bg-gradient-to-br from-fuchsia-600/70 via-purple-700/60 to-fuchsia-800/70 shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-fuchsia-300/80 overflow-hidden"
                style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)', paddingLeft: '40px', borderRadius: '0 10px 10px 0' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-400/20 via-purple-400/30 to-fuchsia-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <span className="text-white font-bold text-lg group-hover:text-gray-100 transition-colors duration-300 drop-shadow-lg uppercase font-red-rose">
                    External
                  </span>
                </div>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
