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
            src="/images/About Infinitus.JPG"
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
              <p className='text-white font-space'> SRM &nbsp; University - AP&apos;s &nbsp; </p><p className='Welcome-text font-space'>Annual National Level Techno Cultural Fest</p>
            </Tooltip>
          </h2>
          <motion.p
            className="text-2xl lg:text-3xl font-space text-justify"
            variants={fadeInVariants}
          >
Infinitus is the annual national level techno cultural fest of SRM University AP, bringing together technology, culture, creativity, and innovation on a single grand stage. Conceived as a dynamic platform for expression and excellence, Infinitus attracts students and young innovators from across the country to compete, collaborate, and push boundaries. The fest features a diverse spectrum of flagship tech competitions, hackathons, and innovation challenges, alongside engaging non tech and cultural events spanning music, dance, art, and performance. Elevating the experience are electrifying proshows by celebrated artists, immersive showcases, and a campus that comes alive with energy and enthusiasm. More than just a fest, Infinitus is a celebration of youth, ideas, and ambition, inviting everyone to be part of something truly infinite.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
