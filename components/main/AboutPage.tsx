import React from 'react';
import Image from 'next/image';
import Footer from './Footer';
import { Tooltip } from '@/components/ui/tooltip-card'
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      <div className="container items-center mx-auto my-10">
        <h1 className=' text-center text-6xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text py-20 font-red-rose'>About Our University</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
          <div className="mx-auto z-50">
            <Image
              src="/images/college.jpeg"
              alt="About Us"
              width={450}
              height={500}
              style={{ width: '550px', height: '600px' }}
              className=" mb-8 w-[300px] h-[300px] object-cover rounded-l rounded-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-red-rose lg:text-5xl font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
              <Tooltip
                containerClassName="text-neutral-600 dark:text-neutral-400"
                content="SRM University is a private research university located in Guntur, Andhra Pradesh, India. It was established in 2017 by the SRM Institute of Science and Technology."
              ><span className="font-bold font-red-rose text-white">SRM &nbsp; University</span></Tooltip>{" "}
              &nbsp; Andhra &nbsp; Pradesh
            </h2>
            <p className="text-2xl lg:text-3xl font-space text-justify">
              SRM University–AP, located in Amaravati, Andhra Pradesh, is a premier private research driven institution envisioned to redefine higher education in India. Backed by the strong legacy of the SRM Group and guided by President Dr. P. Sathyanarayanan and Vice Chancellor Prof. Ch. Satish Kumar, the university seamlessly blends academic excellence, innovation, and global exposure to nurture future ready leaders. With a multidisciplinary learning ecosystem that emphasizes research, entrepreneurship, technology, and creativity, SRM AP offers world class infrastructure, globally trained faculty, and a vibrant, diverse student community from across the country. Recognized through major rankings, accreditations, and academic achievements, the university stands out for its global outlook through international collaborations and exchange programs, a strong focus on cutting edge research and startups, a state of the art campus with modern academic and cultural spaces, holistic student development across academics, culture, sports, and leadership, and deep industry and societal engagement, making SRM AP a true hub of ideas, innovation, and impact.              <br />
            </p>
          </div>
        </div>
        <hr />
        <h1 className=' text-center text-6xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text py-20 font-red-rose'>About Infinitus</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl flex-wrap lg:text-5xl font-semibold mb-2 lg:mb-6 text-left font-red-rose lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
              <Tooltip
                content={
                  <div className="w-[200px] h-[150px] relative">
                    <Image
                      src="/tooltip_image-1.jpeg"
                      alt="Annual Cultural Fest"
                      fill
                      className="object-cover rounded-md rounded-2xl"
                    />
                  </div>
                }
                containerClassName="flex gap-2 items-center flex-wrap"
              >
                <p className='text-white'> SRM &nbsp; University-AP&apos;s &nbsp; </p><p className='Welcome-text font-red-rose'>Annual National Level Techno Cultural Fest</p> &nbsp; <p className='text-white'>!</p>
              </Tooltip>
            </h2>
            <p
              className="text-2xl lg:text-3xl font-space text-justify"
            >
              The 2025 edition of Infinitus marked a defining chapter in the university’s cultural legacy, bringing together an extraordinary gathering of over 10,000 students from diverse backgrounds. With more than 5,000 participants actively competing across events, performances, and showcases, the fest radiated unmatched energy and celebrated the spirit of innovation, creativity, and collaboration shaping the present generation. Infinitus ’25 significantly strengthened its digital presence, achieving an impressive social media outreach of over 15,000 through stories, reels, and live interactions. Adding to its digital success, the Infinitus ’25 website earned recognition from <Link className='relative z-[60] inline Welcome-text' target='_blank' href="https://www.awwwards.com">Awwwards</Link>, marking a milestone in design and digital excellence. The official website continued to serve as a dynamic information hub, attracting more than 5,000 visitors seeking updates, schedules, and highlights. This landmark edition not only celebrated culture and talent but also embraced the future, setting a higher benchmark and redefining expectations for the editions to come.            </p>
          </div>
          <div className="mx-auto z-50">
            <Image
              src="/images/img (1).jpg"
              alt="About Us"
              width={450}
              height={500}
              style={{ width: '550px', height: '600px' }}
              className=" w-[400px] h-[400px] mb-8 object-cover rounded-2xl"
            />
          </div>
        </div>
        <hr />
        <h1 className=' text-center text-6xl font-semibold Welcome-text bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] py-20 font-red-rose'>Director Student Affairs</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
          <div className="mx-auto z-50">
            <Image
              src="/images/director_SA.jpeg"
              alt="About Us"
              width={450}
              height={500}
              style={{ width: '550px', height: '600px' }}
              className="w-[400px] h-[400px] mb-8 object-cover rounded-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] font-red-rose">
              A note from the Director Student Affairs
            </h2>
            <p className="text-2xl lg:text-3xl font-space font-thin text-justify">
              Dear Students,

              It gives me immense pleasure to welcome you all to INFINITUS, the national-level techno-cultural fest of SRM University–AP.

              Infinitus 2026 stands as the ultimate testament to our collective spirit. A national arena where technical ingenuity converges with cultural brilliance. This festival is your platform to lead, to create, and to inspire.

              Dream big. Prepare diligently. Step forward with confidence. Let us make this edition the most memorable one yet.
              <br />
              <br />
              With best wishes  and  regards,
              <br />
              Major General Gurdeep Narang (Veteran) <br />
              Director Student Affairs
            </p>
          </div>
        </div>
        <hr />
        <h1 className=' text-center text-6xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text py-20 font-red-rose'>Associate Director Student Affairs</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] font-red-rose">A note from the Associate Director Student Affairs</h2>
            <p className="text-2xl lg:text-3xl font-space text-justify">
              Infinitus is a celebration of innovation, creativity, and student spirit. It brings together technology and culture on a single platform, encouraging students to explore ideas, showcase talent, and collaborate beyond classrooms.
              <br />
              <br />
              I appreciate the dedication of our student leaders, faculty advisors, and organizing teams in shaping this vibrant fest. I invite everyone to be part of Infinitus and experience the energy, excellence, and enthusiasm of our campus.
              <br />
              <br />
              Warm regards,
              <br />
              Revathi B
              <br />
              Associate Director Student Affairs
            </p>
          </div>
          <div className="mx-auto z-50">
            <Image
              src="/images/revathi.jpeg"
              alt="About Us"
              width={450}
              height={500}
              style={{ width: '550px', height: '600px' }}
              className="mb-8 w-[400px] h-[400px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;