export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  period?: string;
  githubUrl?: string;
  websiteUrl?: string;
  demoUrl?: string;
  award?: string;
}

// Add the newest projects here
export const projects: Project[] = [
  {
    id: "upright",
    title: "Upright",
    description: "Built a posture-monitoring desktop app that collects anonymized session data to deliver posture insights and fine-tune pose estimation models, enabling personalized ergonomics feedback for 100+ users.",
    techStack: ["React", "TypeScript", "Golang", "AWS"],
    period: "Oct. 2025",
    websiteUrl: "https://upright.bio",
    demoUrl: "https://app.arcade.software/share/N9dFjg4aeWhAkvqBv7Iq",
    githubUrl: "https://github.com/arjunk820", // TODO: Add github URL
  },
  {
    id: "opscopilot",
    title: "OpsCopilot",
    description: "Built OpsCopilot, a multi-agent AI system that integrates with incident management and observability tools to help on-call engineers detect, diagnose, and resolve production issues faster.",
    techStack: ["Python", "FastAPI", "Gradio", "Docker", "Kubernetes", "PostgreSQL"],
    period: "Aug. 2025",
    award: "WEX Hackathon Finalist",
  },
  {
    id: "jumbohack",
    title: "TrueCaption",
    description: "Built an end-to-end platform that fine-tuned an ASR model (60% → 95% accuracy) to transcribe STEM lectures with domain-specific terminology, addressing hidden accessibility barriers in education. Presented to an audience of 500+.",
    techStack: ["Hugging Face", "Next.js", "AWS"],
    period: "Feb. 2025",
    award: "JumboHack Overall Winner",
    websiteUrl: "https://truecaption.vercel.app/"
  },
];

