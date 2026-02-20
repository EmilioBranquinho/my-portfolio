'use client';
export const dynamic = 'force-dynamic';

import { Github } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const searchParams = useSearchParams();

  const frontend = searchParams.get('frontend');
  const mobile = searchParams.get('mobile');
  const backend = searchParams.get('backend');

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">

        {/* Header */}
        <div
          className={`text-center mb-16 ${mounted ? 'float-up-animation' : 'opacity-0'}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore the repositories by stack
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

          {/* Frontend */}
          {frontend && frontend != "undefined" && (
            <ProjectCard
              name="Frontend"
              description="Modern and responsive web interface"
              icon="💻"
              url={frontend}
              color="from-blue-400 to-cyan-400"
              delay={0}
              mounted={mounted}
            />
          )}

          {/* Mobile */}
          {mobile && mobile !== "undefined" && (
            <ProjectCard
              name="Mobile"
              description="Native and smooth mobile application"
              icon="📱"
              url={mobile}
              color="from-purple-400 to-pink-400"
              delay={1}
              mounted={mounted}
            />
          )}

          {/* Backend */}
          {backend && backend !== "undefined" && (
            <ProjectCard
              name="Backend"
              description="Robust and scalable API"
              icon="⚙️"
              url={backend}
              color="from-emerald-400 to-teal-400"
              delay={2}
              mounted={mounted}
            />
          )}

        </div>
      </div>
    </main>
  );
}

/* =========================
   Card Component
========================= */

function ProjectCard({
  name,
  description,
  icon,
  url,
  color,
  delay,
  mounted,
}: {
  name: string;
  description: string;
  icon: string;
  url: string;
  color: string;
  delay: number;
  mounted: boolean;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative ${mounted ? 'float-scale-animation' : 'opacity-0'}`}
      style={{ animationDelay: `${delay * 0.15}s` }}
    >
      <div className="relative h-full">
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${color} blur-xl`}
        />

        <div className="relative h-full p-8 rounded-2xl border-2 border-primary/20  backdrop-blur-xl  transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-2xl">
          <div className="text-6xl mb-6">{icon}</div>

          <h2 className="text-2xl text-white font-bold mb-2">{name}</h2>
          <p className="text-muted-foreground mb-6">{description}</p>

          <div className="flex items-center gap-2 text-accent font-semibold">
            <Github size={20} />
            <span>View on GitHub</span>
          </div>
        </div>
      </div>
    </Link>
  );
}