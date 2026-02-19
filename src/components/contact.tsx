'use client';

import React from "react"

import { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

const socialNetworks = [
  {
    name: 'Github',
    icon: <Github/>,
    url: "https://github.com/EmilioBranquinho"
  }, 
  {
    name: 'Linkedin',
    icon: <Linkedin/>,
    url: "https://www.linkedin.com/in/em%C3%ADlio-branquinho"
  },
  {
    name: 'Instagram',
    icon: <Instagram/>,
    url: "https://www.instagram.com/tffisthishomie"
  }
  
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in-up text-center">
          <p className="text-primary font-semibold text-sm mb-2">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In Touch
            <br />
            <span className="text-muted-foreground">With Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <p className="text-muted-foreground mb-8">
                I'm always open to new opportunities, interesting proposals or to talk about web development. Feel free to contact me!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'emiliohbranquinho@gmail.com',
                  href: 'emiliohbranquinho@gmail.com',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+258 862399225 / 833517395',
                  href: 'tel:+258862399225',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Nampula, Mozambique',
                  href: '#',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="bg-black p-3 rounded-lg group-hover:bg-primary/30 transition-all duration-300">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">My social networks</p>
              <div className="flex gap-4">
                {socialNetworks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="w-12 h-12 bg-black hover:bg-primary/20 border border-border hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 font-semibold text-sm"
                  >
                    {social.icon} 
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-gray-300 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 placeholder-muted-foreground text-black"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 bg-gray-300 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 placeholder-muted-foreground text-black"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-300 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 placeholder-muted-foreground resize-none text-black"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <Send size={18} />
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-20 border-t border-border text-center animate-fade-in-up">
          <p className="text-sm text-muted-foreground/60">
            © 2025 EMHB. all rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
