
import About2 from '@/pages/home/About2';
import Contact from '@/pages/home/Contact';
import { Hero1 } from '@/pages/home/Hero';
import Project from '@/pages/home/Project';
import Skills from '@/pages/home/Skills';







const HomePage = () => {
    return (
        <div className=''>
            <Hero1 />
            <About2 />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
};

export default HomePage;