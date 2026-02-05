import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MyServices: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.4 } },
  };

  return (
    <section className="section servic items-centere bg-fixed bg-center bg-cover" id="service" aria-labelledby="service-lable">
      <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text text-transparent font-red-rose m-10'>National level Competitions</h1>
      <div className="slider">
        <Link href={'/events'}>
          <motion.div initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="slider-track">
            <div className="slide">
              <Image src="/images/walk.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/2.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/3.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/walk.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/caze.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/1.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/2.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/walk.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/4.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/caze.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/1.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/2.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/3.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/4.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/caze.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/walk.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/2.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/caze.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/4.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/1.png" width={340} height={380} alt="Wedding Photography" className="img object-cover" />
            </div>
            <div className="slide">
              <Image src="/images/walk.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/2.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/3.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/4.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/caze.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/walk.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
              <Image src="/images/1.png" width={340} height={380} alt="Wedding Photography" className="img" />
            </div>
          </motion.div>
        </Link>

      </div>
      <div className="slider">
        <Link href={'/events'}>
          <motion.div initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="slider-track1">
            <div className="slide">
              <Image src="/images/TECHNICAL/BGMI Master Series.png" width={340} height={380} alt="BGMI Master Series" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/TECHNICAL/FPV Race.png" width={340} height={380} alt="FPV Race" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/TECHNICAL/Line Following Bot.png" width={340} height={380} alt="Line Following Bot" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/TECHNICAL/Filmathon.webp" width={340} height={380} alt="Filmathon" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/TECHNICAL/Inside Google's Lab.png" width={340} height={380} alt="Inside Google's Lab" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/TECHNICAL/Null point CTF.png" width={340} height={380} alt="Null point CTF" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/TECHNICAL/PCB Workshop.png" width={340} height={380} alt="PCB Workshop" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/NON TECHNICAL/Chaos Hour.png" width={340} height={380} alt="Chaos Hour" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/NON TECHNICAL/Herbal Quest.png" width={340} height={380} alt="Herbal Quest" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/TECHNICAL/Obstacle Course.png" width={340} height={380} alt="Obstacle Course" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/TECHNICAL/Real Cricket.png" width={340} height={380} alt="Real Cricket" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/TECHNICAL/VR Tennis.png" width={340} height={380} alt="VR Tennis" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/Cultural/Anime Hunt.png" width={340} height={380} alt="Anime Hunt" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/Cultural/Behind The Mask.webp" width={340} height={380} alt="Behind The Mask" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/Cultural/GlobalBeats.webp" width={340} height={380} alt="GlobalBeats" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/Cultural/Symphony.webp" width={340} height={380} alt="Symphony" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/Cultural/art heist.png" width={340} height={380} alt="Art Heist" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
            <div className="slide">
              <Image src="/images/Cultural/saga of devine.png" width={340} height={380} alt="Saga of Devine" className="img w-[340px] h-[380px] object-cover object-bottom" />
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default MyServices;
