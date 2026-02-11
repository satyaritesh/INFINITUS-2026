'use client';

import React, { useState } from 'react';
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Navbar from '@/components/main/Navbar';
import FlareCursor from "@/components/main/Cursor";
import { AnimatedList } from '@/components/sub/AnimatedList';
import { motion } from 'framer-motion';

export const faqData = [
  {
    "question": "Can SRM-AP students register for competitions through the website?",
    "answer": " Yes, SRM-AP students can also register for competitions through the official website."
  },
  {
    "question": "How do I register for the college fest?",
    "answer": "To register for the college fest, simply visit our website and navigate to the registration page. Fill out the required information and follow the prompts to complete your registration."
  },
  {
    "question": "Will accommodation be provided for participants from other institutions?",
    "answer": "Yes, accommodation will be provided for participants from other institutions at a certain fee per day. An option to avail accommodation will be available during the registration process and must be selected at that time. Accommodation will be allotted on a first-come, first-served basis."
  },
  {
    "question": "Do we get Participation fee refund if we fail to show up?",
    "answer": "In any case if a registered team or participant fails to show up to the competition, their fee will not be refunded."
  },
  {
    "question": "Is transportation provided to and from the venue, or should attendees arrange their own transportation?",
    "answer": "Transportation will not be provided by the University, and transportation expenses will not be covered. However, buses will be available at specific times to the nearby railway station. Further details will be shared at a later stage."
  },
  {
    "question": "What are the registration deadlines?",
    "answer": "Registration deadlines vary depending on the event. Please refer to the specific event details on our website for registration deadlines."
  },
  {
    "question": "Can I register as an individual, or do I need to register as part of a team?",
    "answer": "Teams are requested to make single registration only for SRMAP students. This is not applicable for externals."
  },
  {
    "question": "Is there a registration fee for the college fest?",
    "answer": "Yes, there is a registration fee for certain events. Details regarding registration fees can be found on our website."
  },
  {
    "question": "Can participants from other universities attend the college fest?",
    "answer": "Absolutely! We welcome participants from other universities to join us for the college fest. Please make sure to register on our website to secure your spot."
  },
  {
    "question": "Where can I find information regarding accommodation for participants from other institutions?",
    "answer": "For accommodation-related queries, please contact our Hospitality Head: Wasim – +91 7981031813"
  },
  {
    "question": "Do participants from other universities need to stay on campus during the duration of the fest?",
    "answer": "No it is important they stay during the event time only. Not the entirety of the fest. It is upto them how they want to plan their stay."
  },
  {
    "question": "Are meals provided for participants on campus?",
    "answer": " Yes, meals will be available for participants on campus and will be chargeable."
  },
  {
    "question": "How can I contact the organizers if I have any questions or concerns?",
    "answer": "If you have any questions or concerns, please feel free to reach out to us via the email and contact information provided on the website."
  },
  {
    "question": "What is required for identity verification at the event?",
    "answer": "All participants are mandatorily required to bring a hard copy of their college identity cards along with an Aadhaar Card for the verification process."
  },
  {
    "question": "Is there a provision for on-spot registrations for events?",
    "answer": "Event registration is exclusively through the website, and on-spot registrations are unavailable."
  },
  {
    "question": "Is it possible to exit and re-enter the campus during the fest?",
    "answer": "Participants are requested to strictly adhere to the exit and entry rules and guidelines shared by the University."
  },
  {
    "question": "Can teams be formed with members from different universities for team events?",
    "answer": "No, a team must consist of members from the same organisation."
  },
  {
    "question": "Are participants allowed to bring non-participants as guests to the fest?",
    "answer": "No. Participants from outside the university are not allowed to bring guests without valid passes."
  },
  {
    "question": "Where can participants from other institutions apply for accommodation?",
    "answer": "Participants can opt for accommodation while registering for their respective competitions and at the designated help desk."
  },
  {
    "question": "Will accommodation be provided for the entirety of the event or on a per-day basis?",
    "answer": "Accommodation will be provided on a per/day basis."
  },
  {
    "question": "Where should participants report the loss of personal belongings?",
    "answer": "Participants should report to the Directorate of Student Affairs at the SR Block and contact the help desk for further assistance."
  },
  {
    "question": "Where should participants report in case of emergencies?",
    "answer": "All emergencies should be reported immediately to the Directorate of Student Affairs."
  },
  {
    "question": "Are there any restrictions on items that can be brought onto the campus?",
    "answer": "Yes. Alcohol, intoxicating substances, and items that promote violence are strictly prohibited."
  },
  {
    "question": "Is there a limit to the number of events a participant can take part in?",
    "answer": "No, there is no limit on the number of events a participant may participate in."
  },
  {
    "question": "What is accessible with a pass?",
    "answer": "The fest pass allows access to all events, proshows, and general activities taking place during the fest."
  },
  {
    "question": "Do pass holders need to register for competitions?",
    "answer": "Yes. While a pass holder can view and attend events, proshows, and activities, separate registration is mandatory to participate in any competition."
  },
  {
    "question": "What about participants without a pass?",
    "answer": "Participants without a fest pass may enter only the specific competitions they have registered for and will not have access to other events, proshows, or activities."
  }
];

function Questions() {
  const [openStates, setOpenStates] = useState(Array(faqData.length).fill(false));

  function handleClick(index: number) {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  }

  return (
    <section className='pt-20'>
      <Navbar />
      <FlareCursor />
      <h1 className='m-20 text-center text-5xl md:text-6xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space'>
        Frequently Asked Questions
      </h1>
      <div className='py-6 mx-auto px-3'>
        <motion.div className='mx-auto mx max-w-7xl flex flex-col'>
          <AnimatedList
            items={faqData}
            onItemSelect={(item, index) => handleClick(index)}
            className="w-full z-50"
            renderItem={(faq, index, isSelected) => (
              <div className="z-10">
                <div
                  className={`flex justify-between gap-2 text-[#bdbdbe] hover:text-fuchsia-500 font-extralight font-space bg-black border-[#76767661] border m-5 px-5 py-8 rounded-xl ${isSelected ? 'border-fuchsia-500' : ''}`}
                >
                  <span className="text-3xl font-thin">{faq.question}</span>
                  <span>
                    {openStates[index] ? (
                      <IconChevronUp stroke={1.5} size={24} />
                    ) : (
                      <IconChevronDown size={24} stroke={1.5} />
                    )}
                  </span>
                </div>
                {openStates[index] ? (
                  <div className='flex justify-start py-5'>
                    <p className='text-3xl text-purple-200 font-space px-10 text-wrap'>{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Questions;