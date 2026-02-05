import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import { Tooltip } from '@/components/ui/tooltip-card';

const About = () => {
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
    <motion.div
      className="container items-center mx-auto my-10"
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      ref={ref}
    >
      <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text text-transparent font-red-rose m-10'>About Infinitus</h1>
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16"
        variants={fadeInVariants}
      >
        <motion.div
          className="mx-auto z-50 "
          variants={fadeInVariants}
        >
          <Image
            src="/images/About Infinitus.jpg"
            alt="About Us"
            width={450}
            height={500}
            style={{ width: '450px', height: '550px' }}
            className="w-full h-auto mb-8 object-cover  rounded-3xl"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          variants={fadeInVariants}
        >
          <h2 className="text-4xl flex-wrap lg:text-5xl flex gap-2 font-space font-semibold mb-2 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
            <Tooltip
              content={
                <div className="w-[200px] h-[150px] relative">
                  <Image
                    src="/tooltip_image-1.jpeg"
                    alt="Annual Cultural Fest"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              }
              containerClassName="flex gap-2 items-center flex-wrap"
            >
              <p className='text-white font-space'> SRM &nbsp; University&apos;s &nbsp; </p><p className='Welcome-text font-space'>Annual National Level Techno Cultural Fest</p> &nbsp; <p className='text-white font-space'>Unveiled!</p>
            </Tooltip>
          </h2>
          <motion.p
            className="text-2xl lg:text-3xl font-space text-justify"
            variants={fadeInVariants}
          >
            The 2025 edition of Infinitus emerged as a defining chapter in the evolving legacy of cultural celebrations, bringing together an extraordinary gathering of 10,000 students from diverse backgrounds. The fest radiated unmatched energy, with over 5,000 participants actively taking part in competitions, performances, and showcases that reflected the spirit of innovation, creativity, and collaboration shaping the present generation.

            Infinitus ’25 strengthened its digital presence like never before, achieving an impressive social media outreach of 15,000, as moments from the fest resonated across platforms through stories, reels, and live interactions. The official website continued to serve as a dynamic information hub, drawing more than 5,000 visitors seeking updates, schedules, and highlights.

            This landmark edition of Infinitus not only celebrated culture and talent but also embraced the future, setting a higher benchmark and redefining expectations for the editions to come.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
