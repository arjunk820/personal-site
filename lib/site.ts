/**
 * Single source of truth for identity, links, and the headline numbers.
 * Empty strings are treated as "not set" and are skipped in the UI.
 */
export const site = {
  name: "Arjun Kantamsetty",
  role: "Software Engineer",
  // TODO: confirm — resume lists no home base; this is where Codes Health was.
  location: "New York, NY",
  email: "arjunkan2003@gmail.com",

  // One-line positioning, used in the hero and as the meta description.
  tagline: "Passionate about turning ambiguous problems into real software.",

  url: "https://arjunkantamsetty.me",

  links: {
    github: "https://github.com/arjunk820",
    linkedin: "https://linkedin.com/in/arjun-kantamsetty-820",
    soundcloud: "", // TODO: add SoundCloud URL
    instagram: "", // TODO: add Instagram URL
    resume: "", // TODO: copy the PDF into /public and point here, e.g. "/arjun-kantamsetty-resume.pdf"
  },
} as const;

export const education = {
  school: "Tufts University",
  degree: "B.S. Computer Science, Minor in Mathematics",
  period: "Sep. 2021 – May 2025",
  location: "Medford, MA",
};

/** Grouped toolkit. Edit freely — this is the fastest section to keep current. */
export const stack: Array<{ group: string; items: string[] }> = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "Go", "SQL"],
  },
  {
    group: "AI & ML",
    items: ["LangGraph", "LangChain", "Hugging Face", "Ray", "SageMaker", "RAG", "Multi-agent"],
  },
  {
    group: "Infrastructure",
    items: ["AWS", "Kubernetes", "EKS", "AKS", "Karpenter", "Terraform", "Docker", "ArgoCD", "Helm"],
  },
  {
    group: "Product",
    items: ["Next.js", "React", "FastAPI", "PostgreSQL", "S3", "Tailwind"],
  },
];
