'use client';

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Complete e-commerce platform with checkout, smart cart and advanced admin panel.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description:
      'Real-time dashboard with interactive charts, data analysis and custom reports.',
    image: 'https://images.unsplash.com/photo-1518708323590-c453be3fb52d?w=800&q=80',
    tags: ['React', 'D3.js', 'WebSocket', 'Node.js'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'SaaS App',
    description:
      'Modern SaaS application with robust authentication, team management and external API integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565f900?w=800&q=80',
    tags: ['Next.js', 'Supabase', 'TailwindCSS', 'Vercel'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Mobile App',
    description:
      'Mobile app with scalable architecture, real-time synchronization and complete offline experience.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'AI Chat Application',
    description:
      'Chat application with integrated AI, natural language processing and persistent history.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65b?w=800&q=80',
    tags: ['Next.js', 'OpenAI', 'WebSocket', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Personal Portfolio',
    description: 'Responsive website with modern design, fluid animations and performance optimization.',
    image: 'https://images.unsplash.com/photo-1467621644267-20ea08cad738?w=800&q=80',
    tags: ['Next.js', 'Framer Motion', 'TailwindCSS', 'SEO'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up text-center">
          <p className="text-primary font-semibold text-sm mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Check out some of my most recent and impactful projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                {/* <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 bg-card border border-primary/30 text-foreground py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in-up">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
          >
            View Demo
            <ExternalLink size={20} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            View Code
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
