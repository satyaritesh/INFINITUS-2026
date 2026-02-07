import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { ThreeDMarquee } from '../ui/3d-marquee';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })


    const pictures = [
        "/glimpse/1.jpeg",
        "/glimpse/2.jpeg",
        "/glimpse/3.jpeg",
        "/glimpse/4.jpeg",
        "/glimpse/5.jpeg",
        "/glimpse/6.jpeg",
        "/glimpse/7.jpeg",
        "/glimpse/8.jpeg",
        "/glimpse/9.jpeg",
        "/glimpse/10.jpeg",
        "/glimpse/11.jpeg",
        "/glimpse/12.jpeg",
        "/glimpse/13.jpeg",
        "/glimpse/14.jpeg",
        "/glimpse/15.jpeg",
        "/glimpse/16.jpeg",
    ]

    return (
        <div ref={container} >
            <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text font-red-rose text-transparent  m-10'>Glimpses of Infinitus 2025</h1>
            <div className='relative'>
                <ThreeDMarquee images={pictures} />
            </div>
        </div>
    )
}
