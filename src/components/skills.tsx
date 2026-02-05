'use client';

import React from "react"

import {Code} from "lucide-react";
import {Server} from "lucide-react";
import {Zap} from "lucide-react";
import {Briefcase} from "lucide-react";


interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: <Code size={24} />,
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'TailwindCSS', icon: '🎨' },
      { name: 'Shadcn UI', icon: '🎬' },
      { name: 'Redux', icon: '🔄' },
    ],
  },
  {
    category: 'Backend',
    icon: <Server size={24} />,
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: <Zap size={24} />,
    skills: [
      { name: 'Git', icon: '🔀' },
      { name: 'Vercel', icon: '⬡' },
      { name: 'Linux', icon: '🐧' },
    ],
  },
  {
    category: 'Soft Skills',
    icon: <Briefcase size={24} />,
    skills: [
      { name: 'Communication', icon: '💬' },
      { name: 'Leadership', icon: '👥' },
      { name: 'Problem Solving', icon: '🧩' },
      { name: 'Creativity', icon: '✨' },
      { name: 'Adaptability', icon: '🔄' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in-up text-center">
          <p className="text-primary font-semibold text-sm mb-2">My Knowledge</p>
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className="animate-fade-in-up"
              style={{ animationDelay: `${groupIndex * 0.15}s` }}
            >
              <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary">{skillGroup.icon}</div>
                  <h3 className="text-lg font-bold text-primary">{skillGroup.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-4 rounded-lg border border-border/50 hover:border-primary/50 bg-secondary/30 hover:bg-secondary/60 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-primary/10"
                      style={{ animationDelay: `${groupIndex * 0.15 + skillIndex * 0.05}s` }}
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-medium text-foreground text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 border-t border-border">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Technologies Mastered</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-5xl font-bold text-primary mb-2">3+</div>
            <p className="text-muted-foreground">Programming Languages</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-5xl font-bold text-primary mb-2">30+</div>
            <p className="text-muted-foreground">Open Source Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
