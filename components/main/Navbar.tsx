'use client';
import { slideInFromRight } from "@/public/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 0,
      name: "About",
      link: "/about"
    },
    {
      id: 1,
      name: "Events",
      link: "/events",
    },
    {
      id: 2,
      name: "Team",
      link: "/team",
    },
    {
      id: 3,
      name: "FAQs",
      link: "/faqs",
    },
    {
      id: 4,
      name: "HackSRM",
      link: "https://www.hacksrm.in/",
      target: "_blank"
    },
    {
      id: 5,
      name: "Register",
      link: "/register",
    }
  ];

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNav(false);
      document.body.classList.remove("nav-open");
    }
  };

  const toggleNav = () => {
    setNav(!nav);
    document.body.classList.toggle("nav-open");
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex justify-between items-center w-full h-28 p-5 text-white  z-[9999] fixed top-0 left-0 ${nav ? 'nav-open' : ''}`} style={{ backgroundColor: '#030014' }}>
      <motion.div variants={slideInFromRight(40)} className="py-5 px-3">
        <div className='flex items-center mb-2'>
          <Link href="/">
            <Image src='/img.png' alt='Logo' className='h-13 object-contain w-52' width={208} height={52} />
          </Link>
        </div>
      </motion.div>

      <ul className="hidden md:flex md:justify-center md:align-middle gap-2 ">
        {links.map(({ id, name, link, target }) => (
          <React.Fragment key={id}>
            {link === '/register' ? (
              <li>
                <Link href={"https://www.srmap.edu.in"} target="_blank">
                  <Image
                    src="/images/footerImages/SRMAPLOGO.jpeg"
                    alt="SRM AP Logo"
                    width={60}
                    height={60}
                    className="object-contain mt-2"
                  />
                </Link>
              </li>
            ) : (
              <li
                className="text-3xl nav-links px-4 py-2 cursor-pointer hover:scale-105 capitalize hover:text-white duration-200 font-light bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] font-space font-bold"
              >
                <Link href={link} target={target}>{name}</Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>


      <div onClick={toggleNav} className="cursor-pointer font-space pr-4 z-10 text-white text-2xl md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center top-0 left-0  absolute w-full h-screen bg-gradient-to-b from-black to-black ">
          <li className="px-4 py-6 mt-8">
            <Link href={"https://www.srmap.edu.in"} target="_blank">
              <Image
                src="/images/footerImages/SRMAPLOGO.jpeg"
                alt="SRM AP Logo"
                width={80}
                height={80}
                className="object-contain scale-125"
              />
            </Link>
          </li>
          {links.map(({ id, name, link, target }) => (
            <React.Fragment key={id}>
              {link === '/register' ? (
                <li className="px-4 py-6">
                  <Link onClick={toggleNav} href={link}>
                    <button className="group relative p-6 rounded-2xl backdrop-blur-md border-2 border-indigo-400/60 bg-gradient-to-br from-indigo-600/70 via-purple-700/60 to-indigo-800/70 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-300/80 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/20 via-purple-400/30 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 flex items-center justify-center">
                        <p className="text-white font-bold text-xl group-hover:text-gray-100 transition-colors duration-300 drop-shadow-lg uppercase font-red-rose">
                          Register
                        </p>
                      </div>
                    </button>
                  </Link>
                </li>
              ) : (
                <li className="px-4 cursor-pointer capitalize py-6 font-light text-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] font-space font-bold">
                  <Link onClick={toggleNav} href={link} target={target}>
                    {name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
          
        </ul>
      )}
    </div>
  );
};

export default Navbar;
