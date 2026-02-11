"use client";
import React, { useState } from 'react';
import Card from '../sub/CompetitionCard';
import EventDetails from '../sub/EventDetails';
import FlareCursor from './Cursor';
import Navbar from '@/components/main/Navbar';
import Footer from './Footer';
import CategoryPopup from '../sub/CategoryPopup';


interface Types {
  types: string
}

const Cultural: React.FC<Types> = ({ types }) => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const popups = {
    globalBeats: {
      imageSrc: "/images/Cultural/GlobalBeats.png",
      title: "Cosmic Beats Categories",
      buttons: [
        { label: "Contemporary Solo", href: "https://unstop.com/p/global-beats-contemporary-solo-infinitus-2026-srm-university-srmap-andhra-pradesh-1638025" },
        { label: "Contemporary Duo", href: "https://unstop.com/p/global-beats-contemporary-duo-infinitus-2026-srm-university-srmap-andhra-pradesh-1638028" },
        { label: "Contemporary Group", href: "https://unstop.com/p/global-beats-contemporary-group-infinitus-2026-srm-university-srmap-andhra-pradesh-1638030" },
        { label: "Classical Solo", href: "https://unstop.com/p/global-beats-classical-solo-infinitus-2026-srm-university-srmap-andhra-pradesh-1637974" },
        { label: "Classical Group", href: "https://unstop.com/p/global-beats-classical-group-infinitus-2026-srm-university-srmap-andhra-pradesh-1638013" }
      ]
    },
    symphony: {
      imageSrc: "/images/Cultural/Symphony.png",
      title: "Symphony Categories",
      buttons: [
        { label: "Solo Western", href: "https://unstop.com/p/symphony-solo-western-infinitus-2026-srm-university-srmap-andhra-pradesh-1638039" },
        { label: "Solo Eastern", href: "https://unstop.com/p/symphony-solo-eastern-infinitus-2026-srm-university-srmap-andhra-pradesh-1638036" },
        { label: "Instrumental", href: "https://unstop.com/p/symphony-instrumental-infinitus-2026-srm-university-srmap-andhra-pradesh-1638032" },
        { label: "Battle of Bands", href: "https://unstop.com/p/symphony-battle-of-bands-infinitus-2026-srm-university-srmap-andhra-pradesh-1638041" }
      ]
    },
    behindTheMask: {
      imageSrc: "/images/Cultural/Behind The Mask.png",
      title: "Behind The Mask Categories",
      buttons: [
        { label: "Prop To Plot", href: 'https://unstop.com/p/behind-the-mask-prop-to-plot-infinitus-2026-srm-university-srmap-andhra-pradesh-1638043' },
        { label: "Solo Spotlight", href: 'https://unstop.com/p/behind-the-mask-solo-spotlight-infinitus-2026-srm-university-srmap-andhra-pradesh-1638042' }
      ]
    },
    globalBeatsSRM: {
      imageSrc: "/images/Cultural/GlobalBeats.png",
      title: "Cosmic Beats Categories",
      buttons: [
        { label: "Contemporary Solo", href: "https://forms.gle/3pVoNyFTW6Rv6tGx6" },
        { label: "Contemporary Duo", href: "https://forms.gle/3pVoNyFTW6Rv6tGx6" },
        { label: "Contemporary Group", href: "https://forms.gle/3pVoNyFTW6Rv6tGx6" },
        { label: "Classical Solo", href: "https://forms.gle/3pVoNyFTW6Rv6tGx6" },
        { label: "Classical Group", href: "https://forms.gle/3pVoNyFTW6Rv6tGx6" }
      ]
    },
    symphonySRM: {
      imageSrc: "/images/Cultural/Symphony.png",
      title: "Symphony Categories",
      buttons: [
        { label: "Solo Western", href: "https://forms.gle/3pVoNyFTW6Rv6tGx6" },
        { label: "Solo Eastern", href: "https://forms.gle/3pVoNyFTW6Rv6tGx6" },
        { label: "Instrumental", href: "https://forms.gle/3pVoNyFTW6Rv6tGx6" },
        { label: "Battle of Bands", href: "https://forms.gle/3pVoNyFTW6Rv6tGx6" }
      ]
    },
    behindTheMaskSRM: {
      imageSrc: "/images/Cultural/Behind The Mask.png",
      title: "Behind The Mask Categories",
      buttons: [
        { label: "Prop To Plot", href: 'https://forms.gle/3pVoNyFTW6Rv6tGx6' },
        { label: "Solo Spotlight", href: 'https://forms.gle/3pVoNyFTW6Rv6tGx6' }
      ]
    }
  };

  const currentPopup = activePopup ? popups[activePopup as keyof typeof popups] : null;

  return (
    <div className='max-h-screen'>
      <FlareCursor />
      <CategoryPopup
        isOpen={!!activePopup}
        onClose={() => setActivePopup(null)}
        imageSrc={currentPopup?.imageSrc || ""}
        buttons={currentPopup?.buttons || []}
        title={currentPopup?.title}
      />

      <h1 className='pt-28 text-center text-3xl sm:text-7xl font-red-rose Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-semibold m-10'>
        {types}
      </h1>
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-center'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            < Card
              imageSrc="/images/Cultural/GlobalBeats.png"
              title="Your Event Title"
              initialDescription="Cosmic Beats is a high-energy music and dance event that brings rhythm, movement, and passion to the stage. Participants captivate the audience with powerful performances and electrifying beats."
              linkTo={'https://www.canva.com/design/DAHA5uO2W6k/zqXGXdRmnY6uNpVEVC3PNQ/edit?utm_content=DAHA5uO2W6k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'}
            />
            <EventDetails
              venue="+91 9963123747"
              date="25-28 February 2026"
              time="1,00,000 /-"
              href='https://forms.gle/3pVoNyFTW6Rv6tGx6'
              onSrmClick={() => setActivePopup('globalBeatsSRM')}
              onExternalClick={() => setActivePopup('globalBeats')}
            />
          </div>

          <div>
            < Card
              imageSrc="/images/Cultural/Symphony.png"
              title="Zenith"
              initialDescription="Symphony is a musical showcase that highlights instrumental and vocal talent. This event celebrates harmony, melody, and musical excellence across genres."
              linkTo={'https://www.canva.com/design/DAHA5uXqSnA/I3mrAcUkYRBPXI-6qqyjiA/edit?utm_content=DAHA5uXqSnA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'}
            />
            <EventDetails
              venue="+91 8886266647"
              date="25-28 February 2026"
              time="48,000 /-"
              href='#'
              onSrmClick={() => setActivePopup('symphonySRM')}
              onExternalClick={() => setActivePopup('symphony')}
            />
          </div>

          <div>
            < Card
              imageSrc="/images/Cultural/Behind The Mask.png"
              title="Your Event Title"
              initialDescription="Behind The Mask explores expression, mystery, and performance. Participants present characters and emotions beyond appearances, highlighting creativity, confidence, and dramatic flair."
              linkTo={'https://www.canva.com/design/DAHA5p8Fu9s/fFKYQzrCBHX8D_I3SiJoMw/edit?utm_content=DAHA5p8Fu9s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'}
              linkTo2={'https://www.canva.com/design/DAHA5jrTI3U/FS2kYEM3rLinp9ELokykSA/edit?utm_content=DAHA5jrTI3U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'}
            />
            <EventDetails
              venue="+91 6303853941"
              date="25-28 February 2026"
              time="5,000 /-"
              href='#'
              onSrmClick={() => setActivePopup('behindTheMaskSRM')}
              onExternalClick={() => setActivePopup('behindTheMask')}
            />
          </div>

          <div>
            < Card
              imageSrc="/images/TECHNICAL/Filmathon.png"
              title="Your Event Title"
              initialDescription="FILMATHON is a high-intensity 28-hour short film competition designed to test participants’ creativity, teamwork, and filmmaking skills under strict time constraints. Teams will conceptualize, shoot, edit, and submit an original short film based on a randomly assigned theme or genre, all within the given time frame. The competition culminates in jury evaluation and audience screenings during INFINITUS’26."
              linkTo={'https://www.canva.com/design/DAHA5jgQetQ/kQlZrlAeyTHsfsv_bNKx8A/edit?utm_content=DAHA5jgQetQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'} />
            <EventDetails
              venue="+91 6009923073"
              date="25-28 February 2026"
              time="0 /-"
              href="https://forms.gle/3pVoNyFTW6Rv6tGx6"
              href2='https://unstop.com/p/filmathon-infinitus-2026-srm-university-srmap-andhra-pradesh-1638045'
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
