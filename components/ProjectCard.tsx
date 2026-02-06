import { Project } from "@/lib/projects";
import Link from "next/link"; // TODO: Remove if not needed

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-secondary-text/20 rounded-lg p-6 hover:shadow-lg transition-shadow bg-background/95 backdrop-blur-sm">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-2xl font-heading font-bold text-primary-text">{project.title}</h3>
        {project.award && (
          <span className="px-2 py-1 bg-button-bg text-button-text text-xs font-medium rounded whitespace-nowrap ml-2">
            {project.award}
          </span>
        )}
      </div>
      {project.period && (
        <p className="text-sm text-secondary-text/70 mb-2">{project.period}</p>
      )}
      <p className="text-secondary-text mb-4">{project.description}</p>
      
      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-secondary-text/10 text-sm rounded-full text-secondary-text"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.githubUrl || project.websiteUrl || project.demoUrl) && (
        <div className="flex flex-wrap gap-4">
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary-text transition-colors font-medium"
            >
              Website →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary-text transition-colors font-medium"
            >
              GitHub →
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary-text transition-colors font-medium"
            >
              Demo →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

