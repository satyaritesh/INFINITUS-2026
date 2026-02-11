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
            <h4 className="text-3xl lg:text-3xl mb-4 font-space font-bold">SRM University-Andhra Pradesh</h4>
            <p className='text-xl lg:text-2xl font-light'>
              Neerukonda, Mangalagiri Mandal, Guntur District, Andhra Pradesh, 522240
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
            <h3 className="text-3xl lg:text-4xl font-bold font-space mb-4">Follow us on</h3>
            <div className="flex flex-col gap-4">
              <Link href="https://linktr.ee/srmuapstudentcouncil?utm_source=qr_code" target="_blank" rel="noopener noreferrer" aria-label="Linktree">
                <Image
                  src="/images/footerImages/LINKTREELOGO.jpeg"
                  alt="Linktree"
                  width={200}
                  height={200}
                  className="object-contain w-[150px] h-[150px] mix-blend-screen hover:scale-105 transition-all cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>

      </footer>

      <div className="w-full mx-auto flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 lg:gap-20 lg:-mt-[10rem] -mt-8 select-none">

        {/* 1. SC LOGO */}
        <div className="order-2 lg:order-1 w-1/5 lg:w-auto flex justify-center">
          <Image
            src="/images/footerImages/SCLOGO.jpeg"
            alt="Student Council"
            width={150}
            height={150}
            className="object-contain w-full h-auto max-w-[80px] lg:max-w-[120px] mix-blend-screen"
          />
        </div>

        {/* 2. HACKSRM LOGO */}
        <div className="order-2 lg:order-2 w-1/5 lg:w-auto flex justify-center items-center">
          <Image
            src="/images/footerImages/hacksrm-logo.png"
            alt="HackSRM"
            width={150}
            height={150}
            className="object-contain w-full h-auto max-w-[80px] lg:max-w-[120px] mix-blend-screen"
          />
        </div>

        {/* 3. INFINITUS LOGO (Center) */}
        {/* Mobile: Width 100% to force break line, Order 1 to go top */}
        <div className="order-1 lg:order-3 w-full lg:w-auto flex justify-center lg:mb-0 -mb-10">
          <Image
            src="/images/footerImages/INFINITUS2026LOGO.jpeg"
            alt="INFINITUS"
            width={300}
            height={300}
            className="object-contain w-[60vw] sm:w-[50vw] h-auto lg:w-[180px] lg:h-[180px] mix-blend-screen"
          />
        </div>

        {/* 4. DSA LOGO */}
        <div className="order-2 lg:order-4 w-1/5 lg:w-auto flex justify-center items-center">
          <Image
            src="/images/footerImages/DSALOGO.jpeg"
            alt="DSA"
            width={150}
            height={150}
            className="object-contain w-full h-auto max-w-[80px] lg:max-w-[120px] mix-blend-screen"
          />
        </div>

        {/* 5. SRM AP LOGO */}
        <div className="order-2 lg:order-5 w-1/5 lg:w-auto flex justify-center">
          <Image
            src="/images/footerImages/SRMAPLOGO.jpeg"
            alt="SRM AP"
            width={150}
            height={150}
            className="object-contain w-full h-auto max-w-[80px] lg:max-w-[120px] mix-blend-screen"
          />
        </div>

      </div>

      <div className="w-full text-center flex flex-wrap flex-row items-center justify-center cursor-pointer gap-2 hover:scale-110 -lg:mt-2 px-2">
        <Link href="https://github.com/satyaritesh/INFINITUS-2026" target="_blank" aria-label="GitHub" className="z-50 font-space text-lg lg:text-2xl hover:scale-110">
          <FaGithub className="text-2xl lg:text-3xl" />
        </Link>
        <span className="text-lg lg:text-2xl font-space flex flex-wrap items-center justify-center gap-1">
          Made with ♥️ by <span className="text-purple-400">: </span>
          <Link href="https://www.instagram.com/riteshaests.exe?igsh=MWswZTJlbWFrb2swcA==" target='_blank' className="text-purple-400 z-50 whitespace-nowrap">Satya Ritesh</Link>
          <span className="text-purple-400"> and </span>
          <Link href="https://www.instagram.com/sadhvikbaba?igsh=ZjBqMHcxMXdqMTk5" target='_blank' className="text-purple-400 z-50 whitespace-nowrap">Sadhvik Baba</Link>
        </span>
      </div>

      <div className="w-full text-center flex flex-wrap flex-row items-center justify-center cursor-pointer gap-2 px-2 pb-10">
        <span className="text-lg lg:text-2xl font-space flex flex-wrap items-center justify-center gap-1">
          Special Thanks to ♥️ <span className="text-purple-400">: </span>
          <div className="text-purple-400 z-50 whitespace-nowrap"> Nishant Tiwari </div>
          <span className="text-purple-400"> and </span>
          <div className="text-purple-400 z-50 whitespace-nowrap"> Omkar Ghongade </div>
        </span>
      </div>
    </div>
  );
};

export default Footer;
