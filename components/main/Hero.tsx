'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Timer from '../sub/Timer';
import { motion } from 'framer-motion';
import { fromTop } from '@/public/utils/motion';
import { useRouter } from 'next/navigation';
import { Confetti, type ConfettiRef } from '@/components/ui/confetti';

const Hero: React.FC = () => {
  const background1 = '';
  const router = useRouter();
  const confettiRef = useRef<ConfettiRef>(null);

  const handleRegisterClick = () => {
    // Fire multiple confetti bursts for better visibility
    const fireConfetti = () => {
      confettiRef.current?.fire({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#a855f7', '#06b6d4', '#ec4899', '#8b5cf6', '#3b82f6'],
        startVelocity: 45,
        gravity: 1.2,
        scalar: 1.2
      });
    };

    // Fire first burst immediately
    fireConfetti();

    // Fire second burst after 200ms
    setTimeout(fireConfetti, 200);

    // Fire third burst after 400ms
    setTimeout(fireConfetti, 400);

    // Wait longer for animation to be fully visible before redirect
    setTimeout(() => {
      router.push('/register');
    }, 1000);
  };

  return (
    <section className='flex flex-col items-center justify-center min-h-screen bg-contain bg-center bg-fixed' style={{ backgroundImage: `url(${background1})` }}>
      <div className='mb-20 mt-14'>
        <motion.div variants={fromTop(0.8)} initial="initial" animate="animate">
          <Image
            src="/img.png"
            alt="infinitus logo"
            width={1000}
            height={300}
            priority={true}
            style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0' }}
            className='z-4 relative px-10 float'
          />
        </motion.div>
      </div>
      <div className='flex flex-col items-center justify-center gap-28'>
        <motion.div className='sm:mt-10' variants={fromTop(1.2)} initial="initial" animate="animate">
          <Timer />
        </motion.div>
        <div className="">
          <Confetti
            ref={confettiRef}
            className="absolute pointer-events-none inset-0 z-100 size-full"
          />
          <motion.div
            variants={fromTop(1.8)}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <button
              onClick={handleRegisterClick}
              className="group relative px-12 py-6 rounded-2xl backdrop-blur-md border-2 border-indigo-400/60 bg-gradient-to-br from-indigo-600/70 via-purple-700/60 to-indigo-800/70 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-300/80 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/20 via-purple-400/30 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-center justify-center">
                <p className="text-white font-bold text-2xl sm:text-3xl group-hover:text-gray-100 transition-colors duration-300 drop-shadow-lg uppercase font-red-rose">
                  Register Now
                </p>
              </div>
            </button>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-32 mt-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {/* Powered By */}
          <div className="col-span-2 flex flex-col items-center gap-6">
            <h3 className="text-white/80 text-sm md:text-base font-red-rose uppercase tracking-wider">Powered By</h3>
            <Image
              src="/images/sponsers/Unstop-Logo.png"
              alt="Unstop"
              width={160}
              height={80}
              className="h-16 md:h-24 w-auto object-contain brightness-0 invert hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Technical Title Sponsor */}
          <div className="col-span-1 flex flex-col items-center gap-6">
            <h3 className="text-white/80 text-center text-xs md:text-base font-red-rose uppercase tracking-wider">Technical Title Sponsor</h3>
            <div className="flex flex-row gap-4 md:gap-16 items-center">
              <Image
                src="/images/sponsers/codegnan.png"
                alt="Codegnan"
                width={180}
                height={90}
                className="h-12 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/images/sponsers/sreedhar.png"
                alt="Sreedhar CCE"
                width={180}
                height={90}
                className="h-12 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Cultural Title Sponsor */}
          <div className="col-span-1 flex flex-col items-center gap-6">
            <h3 className="text-white/80 text-center text-xs md:text-base font-red-rose uppercase tracking-wider">Cultural Title Sponsor</h3>
            <Image
              src="/images/sponsers/sunsiri.png"
              alt="Sunsiri"
              width={180}
              height={90}
              className="h-12 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
