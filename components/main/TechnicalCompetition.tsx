
import React from 'react';
import Card from '../sub/CompetitionCard';
import EventDetails from '../sub/EventDetails';
import FlareCursor from './Cursor';
import Navbar from '@/components/main/Navbar';
import Footer from './Footer';


interface Types {
  types: string
}


const Technical: React.FC<Types> = ({ types }) => {

  return (
    <div className='max-h-screen'>
      <FlareCursor />
      <h1 className='pt-28 text-center text-3xl sm:text-7xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-red-rose m-10'>
        {types}
      </h1>
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-center'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/Inside Google's Lab.png"
              title="Your Event Title"
              initialDescription="This seminar aims to deliver a high-energy, interactive, and concept-driven experience that showcases the cutting-edge technologies being developed inside Google — beyond what most students see or use every day.
Through live demonstrations, thought-provoking discussions, and fun audience games, the session introduces real-world applications of Artificial Intelligence (AI), Augmented Reality (AR), and emerging Google projects — all without requiring laptops or coding participation.
The session is designed specifically for engineering students who already understand core technologies and are curious about what’s next in innovation." linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 6009923073"
              date="25-28 February 2026"
              time="NA"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/Robotics Reimagined.png"
              title="Your Event Title"
              initialDescription="An insightful session conducted by an industry expert, aimed at introducing students to the fundamentals of ROS and its applications. This seminar will provide participants with an in-depth understanding of control systems and real-world applications of ROS in aerial robotics.
The session will bridge the gap between academic learning and industry practices, offering students exposure to the latest developments in drone automation and software integration" linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 6009923073"
              date="25-28 February 2026"
              time="NA"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/Null point CTF.png"
              title="Your Event Title"
              initialDescription="NullPoint CTF is an intensive cybersecurity competition combining a 3-hour educational workshop with a 12-hour CTF hackathon. Students will learn ethical hacking, penetration testing, and security challenge fundamentals before competing to find hidden 'flags' by solving real-world inspired security puzzles across multiple domains. This hands-on approach develops practical cybersecurity skills highly valued in today's tech industry."
              linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 7061828823"
              date="25-28 February 2026"
              time="Sponsored"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/PCB Workshop.png"
              title="PCB Workshop"
              initialDescription="This beginner-friendly, hands-on PCB Workshop introduces students to Printed Circuit Board (PCB) design from scratch using simulation software. Participants will learn PCB basics, electronic symbols, footprints, schematic creation, PCB layout routing and exporting Gerber files.
The workshop aims to equip learners with industry-relevant hardware design skills. By the end of the workshop, participants will complete their own PCB design inside the software, helping them gain confidence in electronics hardware development." linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 7061828823"
              date="25-28 February 2026"
              time="NA"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/Tech Sprint Robotics Reimagined.png"
              title="Your Event Title"
              initialDescription="Workshop session for related to robotics for drones which will cover the robotics frame work using robotics operating system 2 along with tutorials on Gazebo and Rviz simulations" linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 7061828823"
              date="25-28 February 2026"
              time="NA"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/BGMI Master Series.png"
              title="BGMI Master Series"
              initialDescription="BGFS is a Battlegrounds Mobile India tournament conducted exclusively for first-year students. This event provides a platform for freshers to demonstrate their gaming skills, strategic thinking, and team coordination in a competitive environment.Participants will compete for attractive prizes, with the winning team securing a direct entry into the official roster selection process for the current academic year." linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 9315268810"
              date="25-28 February 2026"
              time="30,000 /-"
              href='Registration Link!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/VR Tennis.png"
              title="VR Tennis"
              initialDescription="Sponsored Event Under University Esports Championship" linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 9265025088"
              date="25-28 February 2026"
              time="10,000 /-"
              href='Registration Links!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/Valorant Vanguard Series.png"
              title="Valorant Vanguard Series"
              initialDescription="Valorant Freshers Series is a college esports tournament conducted exclusively for BTech first-year students. This event provides a platform for freshers to showcase their gaming skills, teamwork, and strategic thinking in an intense competitive environment. Participants will compete for attractive prizes, with the winning team earning recognition and a chance to represent the college in higher-level Valorant competitions. Step into the arena and prove your mettle in this thrilling campus showdown." linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 7702068993"
              date="25-28 February 2026"
              time="22,500 /-"
              href='Registration Links!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/Real Cricket.png"
              title="Real Cricket"
              initialDescription="Real Cricket Freshers Series is a competitive mobile cricket tournament organized exclusively for BTech first-year students. The event serves as a platform for freshers to demonstrate their cricketing skills, tactical play, and team coordination in a spirited environment. Participants compete for attractive prizes, with the winning squad getting a chance to enter the official campus esports selection for the academic year. Step onto the digital pitch and showcase your talent in this exciting cricket showdown." linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 9537530501"
              date="25-28 February 2026"
              time="10,000 /-"
              href='Registration Links!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/FPV Race.png"
              title="Your Event Title"
              initialDescription="International FPV Drone Race is a high-speed competitive event conducted at global racing standards, where skilled pilots race FPV drones through a professionally designed track. Following MultiGP-style formats, the event showcases precision flying, advanced drone technology, and real-time competition, making it one of the most exciting technical highlights of the fest.
" linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 9893986159"
              date="25-28 February 2026"
              time="1,00,000 /-"
              href='Registration Links!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/Line Following Bot.png"
              title="Your Event Title"
              initialDescription="The Line Following Bot Race is a speed-based autonomous robotics challenge where participants build a robot capable of tracking and following a line-based path. The bot must complete the predefined track in the least possible time using sensors and programmed logic.
The course may include curves, junctions, and varying speeds to test precision and stability.

" linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 6009923073"
              date="25-28 February 2026"
              time="22,000 /-"
              href='Registration Links!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/Obstacle Course.png"
              title="Your Event Title"
              initialDescription="The Obstacle Course Challenge is an engineering-based robotics competition where teams design and operate a wired or wireless robot to complete a dynamic obstacle track.
The course includes uneven terrains, ramps, turns, and physical objects that test handling, stability,and navigation skills.
Participants must complete the entire track in the shortest possible time, while avoiding penalties.
The track design will be revealed only on the day of competition." linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'} />
            <EventDetails
              venue="+91 7702068993"
              date="25-28 February 2026"
              time="22,000 /-"
              href='Registration Links!!!'
            />
          </div>
          <div>
            < Card
              imageSrc="/images/TECHNICAL/Texpo.png"
              title="Code Chase Competition"
              initialDescription="TEXPO 2026 is the flagship technology expo organized by the HackShastra SRM–AP Chapter and marks the official launch of the HackShastra SRM–AP Student Chapter. The event is designed to bridge student innovation with industry application through a structured online evaluation round followed by a large-scale offline project and industry expo." linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'}
            />
            <EventDetails
              venue="+91 7061828823"
              date="25-28 February 2026"
              time="30,000 /-"
              href='Registration Links!!!'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Technical;
