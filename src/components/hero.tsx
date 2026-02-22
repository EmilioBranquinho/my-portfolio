'use client';

import profilePic from '../../public/profile-picture.png'
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const scrollToProjects = () => {
  const target = document.getElementById("projects");
  if (!target) return;

  const start = window.pageYOffset;
  const end =
    target.getBoundingClientRect().top + window.pageYOffset - 80; // offset navbar

  const duration = 1000; // ← controla a lentidão (ms)
  let startTime: number | null = null;

  const easeInOut = (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const animate = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(
      0,
      start + (end - start) * easeInOut(progress)
    );

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};


export default function Hero() {
  return (
    <section id="about" className="bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Conteúdo */}
        <div className="animate-fade-in-up space-y-6">
          <div>
            <p className="text-white font-semibold text-sm mb-2">Hi, welcome to my portfolio</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight ">
              Emílio Branquinho <br />
            </h1>
            <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent text-2xl">
                Web & mobile Full Stack developer
            </span>
          </div>

          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            I transform ideas into incredible digital products. Specialized in creating dynamic, secure and scalable web & mobile applications. Let's build something extraordinary together?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <button onClick={scrollToProjects} className="group bg-primary text-black px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-white/30 transition-all duration-300 transform hover:scale-105">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            {/* <a
              href="mailto:seu.email@exemplo.com"
              className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 text-center justify-center"
            >
              Hire Me
              <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
            </a> */}
            <a
              href="/Emilio Branquinho CV.pdf"
              download
              className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/10 transition-all duration-300 justify-center"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/EmilioBranquinho"
              target='_blank'
              className="bg-primary hover:bg-gray-200 text-black p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/em%C3%ADlio-branquinho"
              target='_blank'
              className="bg-primary hover:bg-gray-200 text-black p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:emiliohbranquinho@gmail.com"
              className="bg-primary hover:bg-gray-200 text-black p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="animate-scale-in flex justify-center items-center md:justify-end">
          <div className="relative w-80 h-80 rounded-full overflow-hidden border  shadow-white border-none shadow-2xl">
            <Image
              src={profilePic}
              alt="Perfil"
              fill
              className="object-cover"
              priority
              quality={100}
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20 pt-16 border-t border-gray-700">
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-3xl md:text-4xl font-bold text-primary">20+</p>
          <p className="text-sm text-gray-300 mt-2">Projects Completed</p>
        </div>
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-3xl md:text-4xl font-bold text-primary">1+</p>
          <p className="text-sm text-gray-300 mt-2">Years of Experience</p>
        </div>
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
          <p className="text-sm text-gray-300 mt-2">Satisfied Clients</p>
        </div>
      </div>
    </section>
  );
}
