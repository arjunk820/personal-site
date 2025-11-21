export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string; // Optional - not all projects have live demos
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Example Project",
    description: "A sample project to demonstrate the structure. Replace this with your actual projects.",
    techStack: ["React", "TypeScript", "Next.js"],
    githubUrl: "https://github.com/arjunk820",
    demoUrl: "https://example.com",
  },
  {
    id: "project-2",
    title: "Another Project",
    description: "Another example project. Add your real projects here with their descriptions and tech stacks.",
    techStack: ["Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/arjunk820",
  },
];

