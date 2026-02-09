'use client';
import React from "react";
import Image from 'next/image';

import Navbar from '@/components/main/Navbar';
import Footer from "./Footer";

const teamMembers = [
  { id: 1, name: "Nivedha Sriram", designation: "President", imageSrc: "/images/TEAM IMAGES/President.png", contain: true },
  { id: 2, name: "Sai Nithenn Redhi", designation: "Working President", imageSrc: "/images/TEAM IMAGES/Working President.png" },
  { id: 3, name: "Rishabh Ranjan", designation: "Vice President", imageSrc: "/images/TEAM IMAGES/rishab.png" },
  { id: 4, name: "Sairam Koushal Kadambari", designation: "General Secretary", imageSrc: "/images/TEAM IMAGES/Gensec.png" },
  { id: 5, name: "Leonel", designation: "General Secretary (IR)", imageSrc: "/images/TEAM IMAGES/General Secretary.png" },
  { id: 6, name: "Sri Nandan Talluri", designation: "Treasurer", imageSrc: "/images/TEAM IMAGES/Treasurer.png" },
  { id: 7, name: "Rakesh Settipalli", designation: "Executive , Public Relations", imageSrc: "/images/TEAM IMAGES/PR HEAD.png" },
  { id: 8, name: "Nipun", designation: "Executive, Events ", imageSrc: "/images/TEAM IMAGES/Nipun.jpeg" },
  { id: 9, name: "Sathwik Kompalli", designation: "Executive, Events", imageSrc: "/images/TEAM IMAGES/Cultural-exe.png" },
  { id: 10, name: "Dinesh Reddy Andluru", designation: "Executive, Technical ", imageSrc: "/images/TEAM IMAGES/Technical executive.png" },
  { id: 11, name: "Sai Avinash", designation: "Executive, Writers and Co.", imageSrc: "/images/TEAM IMAGES/avinash.png" },
  { id: 12, name: "Krishna", designation: "Executive, Discipline Committee", imageSrc: "/images/TEAM IMAGES/DC Exe.png" },
  { id: 13, name: "Nakshatra", designation: "Executive, Academics", imageSrc: "/images/TEAM IMAGES/nakstra writers executive.png" },
];

const committees = [
  { id: 9, name: "Technical", imageSrc: "/images/final website photos/Technical.jpeg", head: "Vedansh", coHead: "Tejesh" },
  { id: 6, name: "Non-Technical", imageSrc: "/images/final website photos/Non-Tech.jpeg", head: "Sathwik G", coHead: "Prateek" },
  { id: 10, name: "Culturals", imageSrc: "/images/final website photos/culturals.jpeg", head: "Abhinav", coHead: "Sanjana" },
  { id: 12, name: "Fun Activities", imageSrc: "/images/final website photos/fun activites.jpeg", head: "Prosnita", coHead: "Thanvi" },
  { id: 11, name: "Decor", imageSrc: "/images/final website photos/decor.jpeg", head: "Anjali", coHead: "Humera" },
  { id: 8, name: "Pre-Infinitus", imageSrc: "/images/final website photos/Pre-infinitus.jpeg", head: "Sathwik K", coHead: "Dhanush G" },
  { id: 1, name: "Business Relations", imageSrc: "/images/final website photos/Business Relations.jpeg", head: "Amruth", coHead: "Jathin" },
  { id: 15, name: "Publicity", imageSrc: "/images/final website photos/Publicity Committee.jpeg", head: "Mohnish", coHead: "Raghavi" },
  { id: 13, name: "Outreach", imageSrc: "/images/final website photos/outreach.jpeg", head: "Nameer", coHead: "Hasitha" },
  { id: 17, name: "Registrations", imageSrc: "/images/final website photos/registrations.jpeg", head: "Jashwanth", coHead: "Manish" },
  { id: 14, name: "Hospitality", imageSrc: "/images/final website photos/Hospitality.jpeg", head: "Wasim Raja", coHead: "Nirmal" },
  { id: 7, name: "Post Production", imageSrc: "/images/final website photos/Post Production.jpeg", head: "Praharsha", coHead: "Abhinay" },
  { id: 2, name: "Design", imageSrc: "/images/final website photos/Design.jpeg", head: "Adithya", coHead: "Mihirkanth" },
  { id: 19, name: "Website", imageSrc: "/images/final website photos/website.jpg", head: "Sadhvik", coHead: "Ritesh" },
  { id: 5, name: "Media Production", imageSrc: "/images/final website photos/Media Production.jpeg", head: "Koushik", coHead: "Vasisht" },
  { id: 4, name: "Documentation", imageSrc: "/images/final website photos/Documenttion.jpeg", head: "Shashank", coHead: "MG Preethi" },
  { id: 3, name: "Discipline Committee", imageSrc: "/images/final website photos/Discipline Commitee.jpeg", head: "Roop Sai Karthik", coHead: "Revanth Settipalli" },
  { id: 16, name: "Stalls", imageSrc: "/images/final website photos/stalls.jpeg", head: "Dinesh", },
  { id: 18, name: "HackSRM", imageSrc: "/images/final website photos/HackSRM.jpeg", head: "Nitish Sriram", coHead: "Bhowmik" },
];

const TeamMemberSection = () => {
  return (
    <>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-8 md:px-12 lg:px-20 max-w-screen">
          <div className="max-w-full mx-auto text-center">
            <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-red-rose m-20 sm:m-10'>
              Infinitus Executive Committee
            </h1>
          </div>

          {/* Existing Executive Committee Grid (Keep if needed, otherwise this can be replaced or removed based on user preference. Assuming user wants to replace the 'Amazing Team' section below with the new grid) */}
          <div className="grid max-w-full items-center justify-items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 object-cover mt-8 sm:mt-12 md:mt-16 lg:gap-x-8">
            {teamMembers.map(member => (
              <div key={member.id} className="w-full mb-8">
                <div className="relative rounded-md flex items-center justify-center px-10">
                  <Image
                    className="object-cover object-top h-[500px] w-full rounded-2xl"
                    src={member.imageSrc}
                    alt={member.name}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex justify-between align-middle px-10">
                  <p className="mt-2 text-3xl text-center text-gray-200 font-space">{member.name}</p>
                  <p className="mt-2 text-3xl text-center text-green-200 italic">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>


          <h1 className='text-center text-4xl sm:text-7xl pt-24 font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-red-rose m-6 sm:m-10'>
            Meet Our Amazing Team
          </h1>

          <div className="grid max-w-full items-center justify-items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-8 sm:mt-12 md:mt-16 lg:gap-x-8">
            {committees.map((committee) => (
              <TeamCard
                key={committee.id}
                heading={committee.name}
                imageUrl={committee.imageSrc}
                member1={committee.head}
                member2={committee.coHead}
                role1="" // Not used in new layout logic directly passed
                role2="" // Not used
              />
            ))}
          </div>

        </div>
      </section>
      <Navbar />
      <Footer />
    </>
  );
};

export default TeamMemberSection;



interface TeamCardProps {
  heading: string;
  imageUrl: string;
  member1: string;
  member2?: string;
  role1: string;
  role2: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  heading,
  imageUrl,
  member1,
  member2,
}) => {
  return (
    <div className="w-full mb-8">
      {/* Heading */}
      <div className="max-w-full mx-auto text-center">
        <h2 className='text-center text-4xl pt-8 font-semibold text-transparent bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text font-red-rose m-4 lg:text-5xl'>
          {heading}
        </h2>
      </div>

      {/* Image */}
      <div className="relative rounded-md flex items-center justify-center px-4">
        <Image
          className="object-cover object-center h-[400px] w-full rounded-2xl"
          src={imageUrl}
          alt={heading}
          width={500}
          height={500}
        />
      </div>

      {/* Head and Co-Head Section */}
      <div className="flex justify-between w-full px-4 mt-4">
        {/* Left Side: Head */}
        <div className="text-left flex flex-col items-start w-1/2 pr-2">
          <p className="sm:text-3xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space break-words lg:text-4xl">{member1}</p>
          <p className="sm:text-2xl text-green-200 italic font-bold sm:-mt-2 lg:mt-2">Head</p>
        </div>

        {/* Right Side: Co-Head */}
        {member2 && <div className="text-right flex flex-col items-end w-1/2 pl-2">
          <p className="sm:text-3xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space break-words lg:text-4xl">{member2}</p>
          <p className="sm:text-2xl text-green-200 italic font-bold sm:-mt-2 lg:mt-2">Co-Head</p>
        </div>}
      </div>
    </div>
  );
};
