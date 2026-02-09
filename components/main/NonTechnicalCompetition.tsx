
import React from 'react';
import Card from '../sub/CompetitionCard';
import EventDetails from '../sub/EventDetails';
import FlareCursor from './Cursor';
import Navbar from '@/components/main/Navbar';
import Footer from './Footer';


interface Types {
  types: string
}


const NonTechnical: React.FC<Types> = ({ types }) => {

  const handleRegisterClick = () => {
  };
  return (
    <div className='max-h-screen'>
      <FlareCursor />
      <h1 className='pt-28 text-center text-7xl sm:text-5xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-red-rose m-10'>
        {types}
      </h1>
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-center'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/charmistry.png"
              title="Your Event Title"
              initialDescription="A hands-on creative session where participants learn to craft customized
phone charms using Mouldit clay

              " linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.0'} />
            <EventDetails
              venue="+91 7061828823"
              date="25-28 February 2026"
              time="2500 /-"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/Cultural/art heist.png"
              title="Your Event Title"
              initialDescription="A story-driven escape challenge inspired by
Ocean&apos;s Eleven and museum heist scenarios.Teams solve themed puzzles to steal the “Golden Canvas” without triggering alarms."

              linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.4btmhywne3gf'}
            />
            <EventDetails
              venue="+91 8247426373"
              date="25-28 February 2026"
              time="10,000 /-"
              href='https://unstop.com/p/case-study-infinitus-2024-srm-university-srmap-andhra-pradesh-928211'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/NON TECHNICAL/among us.png"
              title="Your Event Title"
              initialDescription="Experience a real-life Among Us, where trust & teamwork are vital & deception decides destiny!. Crewmates complete tasks to survive, while hidden Imposters deceive and eliminate without being caught." linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.9484451xu8z2'} />
            <EventDetails
              venue="+91 9537530501"
              date="25-28 February 2026"
              time="0 /-"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/NON TECHNICAL/escape room.png"
              title="Your Event Title"
              initialDescription="Experience the thrill and challenge of a haunted escape room! Teams must unlock four different locks to escape the horror-themed room before time runs out" linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.vf6x1ppiyqrx'} />
            <EventDetails
              venue="+91 6300357731"
              date="25-28 February 2026"
              time="5,000 /-"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/NON TECHNICAL/cube clash.png"
              title="Dance Competition"
              initialDescription="Two competitions for participants. One 3 x 3 cube clash and another mosaic challenge" linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.w0e7omequrp9'} />
            <EventDetails
              venue="+91 9265025088"
              date="25-28 February 2026"
              time="0 /-"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/bizathon.png"
              title="Your Event Title"
              initialDescription="A one-day, high-energy entrepreneurial hackathon that blends innovation, humor, and chaos.Rounds are a mix up of Shark Tank, Hackathon, Meme Fest & Stand-Up Comedy, offering students an unforgettable mix of learning and laughter."
              linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.fz9dsg3fdek7'} />
            <EventDetails
              venue="+91 7061828823"
              date="25-28 February 2026"
              time="8,000 /-"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/NON TECHNICAL/blind hunt.png"
              title="Blind Hunt"
              initialDescription="An interactive photography-based competition designed to test coordination, communication, and
creative instinct. Teams of two where each team is given a specific visual theme such as Color, Symmetry,
or Nature and teams are assigned distinct color palettes or visual categories to capture
within a fixed time limit.
" linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.8tdxvn50wxqa'} />
            <EventDetails
              venue="+91 6300357731"
              date="25-28 February 2026"
              time="16,000 /-"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/NON TECHNICAL/chronicle of crimes.png"
              title="Chronicle of Crimes"
              initialDescription="A multi-stage competition that challenges
participants to think like detectives.
" linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.m7eaolgdp99q'} />
            <EventDetails
              venue="+91 9023230922"
              date="25-28 February 2026"
              time="12,000 /-"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/Cultural/saga of devine.png"
              title="Your Event Title"
              initialDescription="The event “Saga of the Divine” celebrates the grandeur of ancient gods
and mythology bybringing to life majestic styles and mythical tales through a captivating fashion walk.The event will be a vibrant cultural spectacle that highlights artistry, storytelling, and fashion
innovation."
              linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.to4q5ce4dsgf'}
            />
            <EventDetails
              venue="+91 9182012021"
              date="25-28 February 2026"
              time="15,000 /-"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/NON TECHNICAL/global fusion.png"
              title="Global Fusion"
              initialDescription="The event tests participants on quick thinking, global awareness, teamwork, speech clarity, and crisis handling." linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.n2rx4qc15xkq'} />
            <EventDetails
              venue="+91 9537530501"
              date="25-28 February 2026"
              time="4,500"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/NON TECHNICAL/Herbal Quest.png"
              title="Your Event Title"
              initialDescription="Herbal Quest is a simple nature-based treasure hunt where teams
explore campus plants and complete herbal-themed tasks
" linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.xey80b9ai4r5'} />
            <EventDetails
              venue="+91 9023230922"
              date="25-28 February 2026"
              time="0 /-"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/Cultural/Anime Hunt.png"
              title="Your Event Title"
              initialDescription="An anime themed Treasure hunt where you have to find 4 poneglyphs
and through that find the hidden, also some hidden side
quests that can help along the way. This event will have
clues for multiple anime not just one piece
"
              linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.2a2v1e16gyxu'}
            />
            <EventDetails
              venue="+91 7032749777"
              date="25-28 February 2026"
              time="5,000 /-"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/NON TECHNICAL/Chaos Hour.png"
              title="Your Event Title"
              initialDescription="Chaos Hour blends fun, mindfulness, and connection - transforming “wellness” from a quiet idea into a dynamic, laughter-filled experience.
Along with another online event Reel-A-Live, where anyone can express themselves through 30-second reels on Instagram, celebrating individuality, humor, and positivity.
" linkTo={'https://docs.google.com/document/d/1RujM3_pJty5f-lyL_tgv6Q6y9krVIbzXfVutLw2KF9g/edit?tab=t.vc3zuptpuyy'} />
            <EventDetails
              venue="+91 9315268810"
              date="25-28 February 2026"
              time="NA"
              href='Registration Link!!!'

            />
          </div>
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default NonTechnical;
