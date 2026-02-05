import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000' }} className="text-gray-200 relative z-[100] flex flex-col pb-10 w-full">
      <hr />
      <footer className="pt-8 z-50 ">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between">
          <div className="mb-8 lg:mb-0 lg:mr-4">
            <h4 className="text-3xl lg:text-3xl mb-4 font-space font-bold">SRM University, Andhra Pradesh</h4>
            <p className='text-xl lg:text-2xl font-light'>
              Registered Address: 54-15-4C, R K GALLERIA, SERVICE ROAD, BANK COLONY, SRINIVASA
              <br />
              NAGAR, KRISHNA, ANDHRA PRADESH, 520008, VIJAYAWADA (URBAN), Andhra Pradesh,
              <br />
              PIN: 520008
            </p>
          </div>

          <div className="mb-8 lg:mb-0 lg:mr-8">
            <h4 className="text-3xl lg:text-4xl font-bold font-space mb-4">Contact Us</h4>
            <div className="flex flex-col gap-1">
              <div className='text-xl lg:text-2xl font-light flex flex-row items-center whitespace-nowrap gap-2'>
                <span>Nivedha Sriram:</span>
                <a href="tel:+919606185754">+91 9606185754</a>
              </div>
              <div className='text-xl lg:text-2xl font-light flex flex-row items-center whitespace-nowrap gap-2'>
                <span>Nithenn Redhi:</span>
                <a href="tel:+917893842614">+91 7893842614</a>
              </div>
              <div className='text-xl lg:text-2xl font-light flex flex-row items-center whitespace-nowrap gap-2'>
                <span>Rishabh:</span>
                <a href="tel:+918757318759">+91 8757318759</a>
              </div>
              <div className='text-xl lg:text-2xl font-light flex flex-row items-center whitespace-nowrap gap-2'>
                <span>Rakesh Settipalli:</span>
                <a href="tel:+919515736339">+91 9515736339</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl lg:text-4xl font-bold font-space mb-4">Follow us on Social Media</h3>
            <div className="social-links flex flex-col gap-4">

              <Link href="https://www.instagram.com/srmuapstudentcouncil?igsh=MWJpaW9ldnprbHNvaQ==" target='_blank' rel="noopener noreferrer" aria-label="Instagram" className="z-50 font-space text-2xl hover:scale-105 transition-all flex items-center">
                <FaInstagram className="text-4xl lg:text-5xl mr-3" />
                <span>Student Council</span>
              </Link>
              <Link href="https://www.instagram.com/srmuap.infinitus/" target='_blank' rel="noopener noreferrer" aria-label="Instagram" className="z-50 font-space text-2xl hover:scale-105 transition-all flex items-center">
                <FaInstagram className="text-4xl lg:text-5xl mr-3" />
                <span>SRMAP INFINITUS</span>
              </Link>

              <Link href="https://www.linkedin.com/in/hack-srm-0a5624274/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="z-50 font-space text-2xl hover:scale-105 transition-all flex items-center">
                <FaLinkedin className="text-4xl lg:text-5xl mr-3" />
                <span>HackSRM LinkedIn</span>
              </Link>

              <Link href="https://www.instagram.com/infinitus.hacksrm/" target='_blank' rel="noopener noreferrer" aria-label="Instagram" className="z-50 font-space text-2xl hover:scale-105 transition-all flex items-center">
                <FaInstagram className="text-4xl lg:text-5xl mr-3" />
                <span>HackSRM Instagram</span>
              </Link>

            </div>
          </div>
        </div>

      </footer>

      <div className="w-full flex justify-center items-end select-none pointer-events-none overflow-hidden">
        <div style={{ maskImage: 'linear-gradient(to bottom, transparent, black)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)' }} className="w-full flex justify-center ">
          <Image
            src="/img.png"
            alt="INFINITUS"
            width={1000}
            height={300}
            className="object-contain w-[70vw] sm:w-[50vw] mt-2"
          />
        </div>
      </div>

      <div className="w-full text-center mt-8 flex flex-row items-center justify-center cursor-pointer gap-2 hover:scale-110 whitespace-nowrap">
        <Link href="https://github.com/sadhvikbaba" target="_blank" aria-label="GitHub" className="z-50 font-space text-lg lg:text-2xl hover:scale-110">
          <FaGithub className="text-2xl lg:text-3xl" />
        </Link>
        <span className="text-lg lg:text-2xl font-space flex items-center gap-1">
          Made with ♥️ by <span className="text-purple-400">: </span>
          <Link href="https://www.instagram.com/riteshaests.exe?igsh=MWswZTJlbWFrb2swcA==" target='_blank' className="text-purple-400 z-50">Satya Ritesh</Link>
          <span className="text-purple-400"> and </span>
          <Link href="https://www.instagram.com/sadhvikbaba?igsh=ZjBqMHcxMXdqMTk5" target='_blank' className="text-purple-400 z-50">Sadhvik Baba</Link>
        </span>
      </div>

      <div className="w-full text-center flex flex-row items-center justify-center cursor-pointer gap-2 hover:scale-110 whitespace-nowrap">
        <span className="text-lg lg:text-2xl font-space flex items-center gap-1">
          Special Thanks to ♥️ <span className="text-purple-400">: </span>
          <div  className="text-purple-400 z-50"> Nishant Tiwari </div>
          <span className="text-purple-400"> and </span>
          <div className="text-purple-400 z-50"> Omkar Ghongade </div>
        </span>
      </div>
    </div>
  );
};

export default Footer;
