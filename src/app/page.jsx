import Hero from '@/components/sections/Hero';
import Competencies from '@/components/sections/Competencies';
import Strategies from '@/components/sections/Strategies';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Competencies />
      <Strategies />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
