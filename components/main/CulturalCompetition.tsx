import React from 'react';
import Card from '../sub/CompetitionCard';
import EventDetails from '../sub/EventDetails';
import FlareCursor from './Cursor';
import Navbar from '@/components/main/Navbar';
import Footer from './Footer';


interface Types {
  types: string
}

const Cultural: React.FC<Types> = ({ types }) => {

  const handleRegisterClick = () => {
  };
  return (
    <div className='max-h-screen'>
      <FlareCursor />
      <h1 className='pt-28 text-center text-3xl sm:text-7xl font-red-rose Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-semibold m-10'>
        {types}
      </h1>
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-center'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            < Card
              imageSrc="/images/Cultural/GlobalBeats.webp"
              title="Your Event Title"
              initialDescription="Cosmic Beats is a high-energy music and dance event that brings rhythm, movement, and passion to the stage. Participants captivate the audience with powerful performances and electrifying beats."
              linkTo={'https://docs.google.com/document/d/1tZlmFjtVttMitLgiyCsQLoz77ZKlS41XwwSWGvOv0Gc/edit?tab=t.0#heading=h.ho2evc94q0fh'}
            />
            <EventDetails
              venue="+91 9963123747"
              date="25-28 February 2026"
              time="1,00,000 /-"
              href='registration link !!!!'
            />
          </div>

          <div>
            < Card
              imageSrc="/images/Cultural/Symphony.webp"
              title="Zenith"
              initialDescription="Symphony is a musical showcase that highlights instrumental and vocal talent. This event celebrates harmony, melody, and musical excellence across genres."
              linkTo={'https://docs.google.com/document/d/1tZlmFjtVttMitLgiyCsQLoz77ZKlS41XwwSWGvOv0Gc/edit?tab=t.pmzkea6f1eh8'}
            />
            <EventDetails
              venue="+91 8886266647"
              date="25-28 February 2026"
              time="48,000 /-"
              href='registration link !!!!'
            />
          </div>

          <div>
            < Card
              imageSrc="/images/Cultural/Behind The Mask.webp"
              title="Your Event Title"
              initialDescription="Behind The Mask explores expression, mystery, and performance. Participants present characters and emotions beyond appearances, highlighting creativity, confidence, and dramatic flair."
              linkTo={'https://docs.google.com/document/d/1tZlmFjtVttMitLgiyCsQLoz77ZKlS41XwwSWGvOv0Gc/edit?tab=t.7890j6houlk8'}
              linkTo2={'https://docs.google.com/document/d/1tZlmFjtVttMitLgiyCsQLoz77ZKlS41XwwSWGvOv0Gc/edit?tab=t.of335xlhi8p'}
            />
            <EventDetails
              venue="+91 6303853941"
              date="25-28 February 2026"
              time="5,000 /-"
              href='registration link !!!!'
            />
          </div>

          <div>
            < Card
              imageSrc="/images/TECHNICAL/Filmathon.webp"
              title="Your Event Title"
              initialDescription="FILMATHON is a high-intensity 28-hour short film competition designed to test participants’ creativity, teamwork, and filmmaking skills under strict time constraints. Teams will conceptualize, shoot, edit, and submit an original short film based on a randomly assigned theme or genre, all within the given time frame. The competition culminates in jury evaluation and audience screenings during INFINITUS’26."
              linkTo={'https://docs.google.com/document/d/1tZlmFjtVttMitLgiyCsQLoz77ZKlS41XwwSWGvOv0Gc/edit?tab=t.vp70m7gbsdp8'} />
            <EventDetails
              venue="+91 6009923073"
              date="25-28 February 2026"
              time="0 /-"
              href='registration link !!!!'
            />
          </div>

        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Cultural;
