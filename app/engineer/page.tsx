"use client";

import Image from "next/image";
import Link from "next/link";
import WaveformBackground from "@/components/WaveformBackground";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import { projects } from "@/lib/projects";
import { experiences } from "@/lib/experience";

export default function EngineerPage() {
  return (
    <div className="relative min-h-screen">
      <WaveformBackground variant="engineer" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-secondary-text/10 overflow-hidden border-2 border-secondary-text/20 relative">
                  <Image
                    src="/images/linkedin.jpeg"
                    alt="Arjun Kantamsetty"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-6xl md:text-7xl font-heading font-bold mb-4 text-primary-text">
                  Arjun Kantamsetty
                </h1>
                <h2 className="text-3xl font-heading text-secondary-text mb-6">
                  Software Engineer
                </h2>
                <p className="text-lg text-secondary-text mb-8 max-w-2xl">
                  Building intelligent, scalable systems and creating music experiences. 
                  Passionate about AI, software engineering, and the intersection of technology and creativity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl font-heading font-bold mb-4 text-primary-text text-center md:text-left">
              Projects
            </h2>
            <p className="text-lg text-secondary-text mb-12 text-center md:text-left">
              A collection of my work in software engineering and AI.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl font-heading font-bold mb-4 text-primary-text text-center md:text-left">
              Experience
            </h2>
            <p className="text-lg text-secondary-text mb-12 text-center md:text-left">
              My professional journey in software engineering and AI.
            </p>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-heading font-bold mb-4 text-primary-text">
              Get In Touch
            </h2>
            <p className="text-lg text-secondary-text mb-8">
              Interested in collaborating or have a question? Feel free to reach out.
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText("arjunkan2003@gmail.com");
                alert("Email copied to clipboard!");
              }}
              className="inline-block px-8 py-4 bg-button-bg text-button-text rounded-lg hover:bg-button-hover transition-colors font-medium text-lg"
            >
              Contact Me
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

