
import About from '@/pages/home/About';
import { Hero } from '@/pages/home/Banner';
import Contact from '@/pages/home/Contact';
import Project from '@/pages/home/Project';
import Skills from '@/pages/home/Skills';







const HomePage = () => {
    return (
        <div className=''>
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />

        </div>
    );
};

export default HomePage;