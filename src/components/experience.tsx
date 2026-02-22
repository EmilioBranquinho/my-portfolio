'use client';

import { CheckCircle } from 'lucide-react';

interface ExperienceItem {
  id: number;
  // company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    // company: 'TechStart Solutions',
    position: 'Freelancer Full Stack Developer',
    period: '2025 - Present',
    description: 'I created solutions as a freelancer to small and medium companies, creating efficient and scalable web and mobile aplications',
    achievements: [
      'I developed management systems to facilitate work and improve resource control.',
      'Automatized repeatable tasks',
      'Solved people problems using programming',
      'Reduced the time to realize task with efficient softwares',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <p className="text-primary font-semibold text-sm mb-2">My Trajectory</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="border-l-4 border-primary/30 group-hover:border-primary transition-all duration-300 pl-6 py-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                    {/* <p className="text-primary font-semibold">{exp.company}</p> */}
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{exp.description}</p>

                {/* Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Badge
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 border-t border-border">
          {[
            { year: '2019', label: 'Começei minha jornada' },
            { year: '2021', label: 'Primeira promoção' },
            { year: '2023', label: 'Senioridade alcançada' },
          ].map((milestone, index) => (
            <div
              key={milestone.year}
              className="text-center animate-fade-in-up p-4 rounded-lg border border-border bg-black hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <p className="text-2xl font-bold text-primary">{milestone.year}</p>
              <p className="text-sm text-muted-foreground mt-1">{milestone.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
