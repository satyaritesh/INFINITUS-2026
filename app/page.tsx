'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/main/Hero';
import Navbar from '@/components/main/Navbar';
import FlareCursor from '@/components/main/Cursor';

const StarsCanvas = dynamic(() => import('@/components/main/StarCanvas'), { ssr: false });
const Gallery = dynamic(() => import('@/components/main/Gallery'), { ssr: false });
const About = dynamic(() => import('@/components/main/About'), { ssr: false });
const PastPerformers = dynamic(() => import('@/components/main/PastPerformers'), { ssr: false });
const Proshows = dynamic(() => import('@/components/main/Proshows'), { ssr: false });
const Footer = dynamic(() => import('@/components/main/Footer'), { ssr: false });
const ZoomParallax = dynamic(() => import('@/components/main/ZoomParallax'), { ssr: false });
const SponsorSection = dynamic(() => import('@/components/main/Sponser').then(mod => mod.SponsorSection), { ssr: false });

const Home: React.FC = () => {
  return (
    <main
      className="h-full w-full bg-[#030014] " >
      <FlareCursor />
      <StarsCanvas />
      <Hero />
      <About />
      <Proshows />
      <Gallery />
      <SponsorSection />
      <PastPerformers />
      <ZoomParallax />
      <Footer />
      <Navbar />
    </main>
  );
};

export default Home;