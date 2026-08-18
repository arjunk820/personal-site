export interface Project {
  id: string;
  title: string;
  /** Short hook shown under the title — one clause, no period. */
  tagline: string;
  description: string;
  techStack: string[];
  period?: string;
  award?: string;
  /** Featured projects span the full grid width and lead the section. */
  featured?: boolean;
  links?: Array<{ label: string; url: string }>;
  /** See the note on Experience.draft — renders a loud "NEEDS CONTENT" badge. */
  draft?: boolean;
}

// Featured first, then newest first.
export const projects: Project[] = [
  {
    id: "image-to-sim",
    // TODO: if the hackathon project had an actual name, use it here.
    title: "Image → Simulation",
    tagline: "one photograph, turned into robot training data",
    description:
      "A pipeline that transforms a single image into a physics-aware simulation. Vision-based object detection reads the scene, a world model generates the 3D environment, and grasp feasibility analysis filters for what a robot could actually pick up — synthesizing usable robot training data from an ordinary photo.",
    techStack: ["Claude Vision", "Marble API", "TypeScript", "Rapier"],
    period: "Mar. 2026",
    award: "World Labs × Lovable Hackathon — 1st Place",
    featured: true,
    // TODO: add Devpost / demo video / repo links — a first-place project with
    // nothing to click is the biggest miss on this page.
    links: [],
  },
  {
    id: "upright",
    title: "Upright",
    tagline: "posture monitoring that learns your desk setup",
    description:
      "A posture-monitoring desktop app that collects anonymized session data to deliver personalized posture insights, shipped to 500+ weekly active users.",
    techStack: ["React", "TypeScript", "Go", "AWS"],
    period: "Oct. 2025 – Mar. 2026",
    links: [
      { label: "Site", url: "https://upright.bio" },
      { label: "Demo", url: "https://app.arcade.software/share/N9dFjg4aeWhAkvqBv7Iq" },
      // TODO: point at the actual repo, or delete this link.
      { label: "Code", url: "https://github.com/arjunk820" },
    ],
  },
  {
    id: "opscopilot",
    title: "OpsCopilot",
    tagline: "multi-agent incident response for on-call engineers",
    description:
      "A multi-agent AI system that plugs into incident management and observability tooling to help on-call engineers detect, diagnose, and resolve production issues faster.",
    techStack: ["Python", "Go", "Gradio", "Docker", "Kubernetes", "PostgreSQL"],
    period: "Aug. 2025",
    award: "WEX Hackathon Finalist",
  },
  {
    id: "truecaption",
    title: "TrueCaption",
    tagline: "ASR that actually understands STEM lectures",
    description:
      "An end-to-end platform built around a fine-tuned ASR model (60% → 95% accuracy) that transcribes STEM lectures with domain-specific terminology, addressing a hidden accessibility barrier in education. Presented to an audience of 500+.",
    techStack: ["Hugging Face", "Next.js", "AWS"],
    period: "Feb. 2025",
    award: "JumboHack — Best Overall Hack & Education Track Winner",
    links: [{ label: "Site", url: "https://truecaption.vercel.app/" }],
  },
];
