export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  /** Optional one-line framing of what the company does, for readers who don't know it. */
  context?: string;
  description: string[];
  tags?: string[];
  /**
   * Marks an entry as unfinished. Draft entries render with a loud amber
   * "NEEDS CONTENT" badge so a placeholder can never ship unnoticed.
   */
  draft?: boolean;
}

// Newest first.
export const experiences: Experience[] = [
  {
    company: "Codes Health",
    role: "Software Engineer",
    period: "Mar. 2026 – Jul. 2026",
    location: "New York, NY",
    context: "The modern medical record retrieval engine.",
    description: [
      "Designed a granular RBAC system strengthening PHI security for 150+ internal employees by parameterizing resource permissions and migrating users into 10+ least-privilege roles.",
      "Architected an automated provider matching pipeline combining exact geographic matching with fuzzy address normalization across 6,000+ providers, reducing turnaround time on 50% of all matters.",
      "Developed an end-to-end provider-specific authorization system spanning internal and customer applications — configurable requirements, secure S3-backed document storage, and validation workflows — cutting record turnaround by 4 days on 15% of all matters.",
    ],
    tags: ["TypeScript", "PostgreSQL", "AWS S3", "RBAC", "PHI / HIPAA"],
  },
  {
    company: "WEX",
    role: "AI Infrastructure Engineer",
    period: "May 2025 – Mar. 2026",
    location: "Portland, ME",
    context: "Global payments platform processing billions in transaction volume.",
    description: [
      "Led development of an auto-adjudication API processing 15K insurance claims/day, improving date-of-service accuracy from 70% → 85% and eliminating millions of manual reviews annually — work that earned the 2026 BIG Innovation Award.",
      "Enabled distributed model training across EKS, AKS, and SageMaker using autoscaling Kubernetes infrastructure (Karpenter, Ray) to orchestrate CPU/GPU workloads.",
      "Implemented an end-to-end observability stack with Helm, Kubernetes, and ArgoCD, delivering visibility across all environments for services supporting millions of customers — executed 3× faster than comparable organization initiatives.",
      "Led company-wide trainings on building AI applications with RAG and multi-agent workflows, equipping technical and non-technical teams to securely integrate AI into internal workflows; trained over 200 engineers across multiple departments.",
    ],
    tags: ["Kubernetes", "Karpenter", "Ray", "SageMaker", "ArgoCD", "Helm", "Python"],
  },
  {
    company: "BPRHub",
    role: "AI Engineering Intern",
    period: "Feb. 2025 – Jul. 2025",
    location: "San Francisco, CA",
    context: "Compliance platform for manufacturers.",
    description: [
      "Built a production-grade agentic AI system for a manufacturing compliance platform that automatically generates pre-filled documents, accelerating client policy-audit timelines by 45%.",
      "Achieved a 25× speedup in RAG inference through semantic chunking, optimized batching, embedding model evaluation, and vector database benchmarking for low-latency retrieval.",
    ],
    tags: ["Python", "Agents", "RAG", "Vector DBs"],
  },
  {
    company: "Levo.ai",
    role: "Software Engineering Intern",
    period: "Aug. 2024 – Jan. 2025",
    location: "Austin, TX",
    context: "API security and discovery platform.",
    description: [
      "Built an LLM-powered pipeline to clarify API schemas for security documentation, improving readability by 30% and reducing onboarding time for cybersecurity teams and client developers.",
    ],
    tags: ["Python", "LLMs", "API Security"],
  },
];
