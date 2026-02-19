'use client';

import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <div className="dark bg-black text-foreground min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
