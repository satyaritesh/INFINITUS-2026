import React from "react";
import Image from "next/image";
import Link from "next/link";

const SilverSponsorsData = [
  {
    name: "Codegnan",
    image: "/images/sponsers/codegnan.png",
    link: "https://codegnan.com/",
    sponsorsCategory: "",
    alt: "Codegnan LOGO",
  },
  {
    name: "CCE",
    image: "/images/sponsers/CCE LOGO.jpeg",
    link: "https://www.sreedharscce.com",
    sponsorsCategory: "",
    alt: "CCE LOGO",
  },
  {
    name: "Sunsiri",
    image: "/images/sponsers/sunsiri.png",
    link: "https://www.sunsiri.in",
    sponsorsCategory: "",
    alt: "Sunsiri LOGO",
  },
];

export const SponsorSection = () => {
  return (
    <section
      id="Sponsors"
      className="px-2 pb-4 pt-5 sm:px-10 sm:pt-10"
    >
      <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space m-20 sm:m-10'>
        Sponsors
      </h1>
      <div className="flex flex-wrap justify-center gap-10 py-10">
        {SilverSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center justify-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <div className="rounded-3xl bg-white p-4 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <Link href={sponsor.link} target="_blank">
                <Image
                  src={sponsor.image}
                  loading="lazy"
                  alt={sponsor.alt}
                  width={350}
                  height={240}
                  className={`h-[140px] sm:h-[240px] w-[350px] object-contain p-3`}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};