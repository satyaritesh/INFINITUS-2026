'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { ShimmerButton } from '@/components/ui/shimmer-button';

interface CardProps {
  imageSrc: string;
  title: string;
  initialDescription: string;
  linkTo: string;
  linkTo2?: string; // Optional second link
}

const Card: React.FC<CardProps> = ({ imageSrc, title, initialDescription, linkTo, linkTo2 }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setImageLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <div className='px-[10px] lg:p-0 float'>
      <div
        className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
        onClick={() => setIsClicked(!isClicked)}
      >
        <div className="h-[600px] w-[400px] flex justify-center items-center relative">
          {imageLoading && (
            <div className="absolute inset-0 flex justify-center items-center">
              <BeatLoader color="#ffffff" loading={imageLoading} size={15} />
            </div>
          )}
          <Image
            className={`h-full rounded-2xl w-full object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 ${isClicked ? 'rotate-3 scale-125' : ''} ${imageLoading ? 'hidden' : ''}`}
            src={imageSrc}
            alt=""
            fill
            onLoad={() => setImageLoading(false)}
          />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-t rounded-2xl from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/90 ${isClicked ? 'from-black/70 via-black/80 to-black/90' : ''}`}></div>
        <div className={`absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 ${isClicked ? 'translate-y-0' : ''}`}>
          <p className={`mb-10 text-3xl text-white opacity-0 transition-opacity duration-800 group-hover:opacity-100 ${isClicked ? 'opacity-100' : ''}`}>{initialDescription}</p>
          <div className="flex flex-col gap-4">
            <Link href={linkTo} target='_blank'>
              <ShimmerButton className="shadow-2xl px-8 py-4 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" style={{ transform: 'translateZ(0)' }}>
                <span className="text-center text-lg leading-none font-bold tracking-tight whitespace-pre-wrap text-white lg:text-2xl dark:from-white dark:to-slate-900/10">
                  {linkTo2 ? 'See Rules Book 1' : 'See Rules'}
                </span>
              </ShimmerButton>
            </Link>
            {linkTo2 && (
              <Link href={linkTo2} target='_blank'>
                <ShimmerButton className="shadow-2xl px-8 py-4 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" style={{ transform: 'translateZ(0)' }}>
                  <span className="text-center text-lg leading-none font-bold tracking-tight whitespace-pre-wrap text-white lg:text-2xl dark:from-white dark:to-slate-900/10">
                    See Rules Book 2
                  </span>
                </ShimmerButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
