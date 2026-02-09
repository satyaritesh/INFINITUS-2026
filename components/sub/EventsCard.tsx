import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ElectricBorder from '@/components/ui/ElectricBorder';

interface EventsCardProps {
  title: string;
  imageSrc: string;
  name: string;
  href: string;
  buttonText?: string;
}

const EventsCard: React.FC<EventsCardProps> = ({ title, imageSrc, name, href, buttonText = 'Continue' }) => {
  return (
    <div>
      <h1 className='text-center sm:text-5xl w-full text-4xl font-semibold text-gray-400 font-red-rose py-10'>{title}</h1>
      <Link href={href}>
        <ElectricBorder
          color="#bf80ff"
          speed={1.4}
          chaos={0.2}
          thickness={4}
          style={{ borderRadius: 16 }}
        >
          <div className="card1 flex items-center h-[500px] transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-3 hover:shadow-[0_25px_60px_-12px_rgba(191,128,255,0.5)] hover:brightness-110 cursor-pointer">
            <Image className='h-[500px] w-full object-cover rounded-lg'
              src={imageSrc}
              width={500}
              height={500}
              alt={`Image for ${name}`}
            />
          </div>
        </ElectricBorder>
      </Link>
      <Link href={href}>
        <div className='w-full h-40 flex justify-center items-center'>
          <button className="group relative p-6 rounded-2xl backdrop-blur-md border-2 border-indigo-400/60 bg-gradient-to-br from-indigo-600/70 via-purple-700/60 to-indigo-800/70 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-300/80 overflow-hidden w-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/20 via-purple-400/30 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center justify-center">
              <p className="text-white font-bold text-xl group-hover:text-gray-100 transition-colors duration-300 drop-shadow-lg uppercase">
                {buttonText}
              </p>
            </div>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default EventsCard;
