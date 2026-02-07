import React from 'react'
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Proshows: React.FC = () => {
  const urlbackground = '/images/img-bacground.jpg';
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
    visible: { opacity: 1, transition: { duration: 1.6 } },
  };

  return (
    <main>
      <section className="section prowshows bg-cover bg-fixed -z-5" id="proshows" style={{ backgroundImage: `url(${urlbackground})` }} aria-labelledby="proshows-label">
        <motion.div className="container" initial="hidden" animate={controls} variants={fadeInVariants} ref={ref}>
          <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text font-red-rose -mt-4 text-transparent '>Proshows</h1>
          <div className="proshows-list flex flex-col sm:flex-row gap-8 sm:gap-0">
            <div className="wrapper contents sm:block">

              <motion.div initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="proshows-card rounded-3xl order-1 sm:order-none" data-reveal>
                <figure className="card-banner img-holder5 has-before rounded-3xl" style={{ width: "700", height: "1000" }}>
                  <Image src="/images/team/proshow-1.png" width={700} height={1000} loading="lazy" alt="Fashion Show" className="img-cover rounded-3xl" />
                </figure>

                <div className="card-content">
                  <h3 className="h4">
                    <a href="https://www.instagram.com/karthikmusicexp?igsh=MTVtZXU5YXZkd3RybQ==" className="card-title font-space font-semibold text-purple-200">
                      Proshow 1
                    </a>
                  </h3>

                  {/* <p className="card-tag italic">Date</p> */}
                </div>

                <a href="https://www.instagram.com/karthikmusicexp?igsh=MTVtZXU5YXZkd3RybQ==" className="btn-icon" aria-label="See more">
                  <svg xmlns="http://www.w3.org/2000/svg" width={43} height={20} viewBox="0 0 43 20" fill="none">
                    <path d="M0 10H41" stroke="black" strokeWidth={2} />
                    <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth={2} />
                  </svg>
                </a>
              </motion.div>

              <motion.div initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="proshows-card rounded-3xl order-3 sm:order-none" data-reveal>
                <figure className="card-banner img-holder3 has-before rounded-3xl" style={{ width: "700", height: "605" }}>
                  <Image src="/images/team/pro1.jpeg" width={700} height={605} loading="lazy" alt="Shoe Promo" className="img-cover rounded-3xl" />
                </figure>

                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title font-space font-semibold  text-purple-200">
                      Proshow 3
                    </a>
                  </h3>

                  {/* <p className="card-tag italic">Date</p> */}
                </div>

                <a href="#" className="btn-icon" aria-label="See more">
                  <svg xmlns="http://www.w3.org/2000/svg" width={43} height={20} viewBox="0 0 43 20" fill="none">
                    <path d="M0 10H41" stroke="black" strokeWidth={2} />
                    <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth={2} />
                  </svg>
                </a>
              </motion.div>

            </div>

            <div className="wrapper contents sm:block">

              <motion.div initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="proshows-card rounded-3xl order-2 sm:order-none" data-reveal>
                <figure className="card-banner has-before img-holder4 rounded-3xl" style={{ width: "700", height: "1091" }}>
                  <Image src="/images/team/proshow-2.png" width={700} height={1091} loading="lazy" alt="Wedding Shot" className="img-cover rounded-3xl" />
                </figure>

                <div className="card-content">
                  <h3 className="h4">
                    <a href="https://www.instagram.com/djgowthamofficial?igsh=NzM0OXZqazh1ZmFw" className="card-title font-space font-semibold text-purple-200">
                      Proshow 2
                    </a>
                  </h3>

                  {/* <p className="card-tag italic">Date</p> */}
                </div>

                <a href="https://www.instagram.com/djgowthamofficial?igsh=NzM0OXZqazh1ZmFw" className="btn-icon" aria-label="See more">
                  <svg xmlns="http://www.w3.org/2000/svg" width={43} height={20} viewBox="0 0 43 20" fill="none">
                    <path d="M0 10H41" stroke="black" strokeWidth={2} />
                    <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth={2} />
                  </svg>
                </a>
              </motion.div>

              <motion.div initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="proshows-card rounded-3xl order-4 sm:order-none" data-reveal>
                <figure className="card-banner img-holder6 has-before rounded-3xl" style={{ width: "700", height: "850" }}>
                  <Image src="/images/team/pro3.jpeg" width={700} height={850} loading="lazy" alt="Jumbo Barger" className="img-cover rounded-3xl" />
                </figure>

                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title font-space font-semibold text-purple-200">
                      Proshow 4
                    </a>
                  </h3>

                  {/* <p className="card-tag italic">Date</p> */}
                </div>

                <a href="#" className="btn-icon" aria-label="See more">
                  <svg xmlns="http://www.w3.org/2000/svg" width={43} height={20} viewBox="0 0 43 20" fill="none">
                    <path d="M0 10H41" stroke="black" strokeWidth={2} />
                    <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth={2} />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Proshows;
