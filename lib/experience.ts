export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: "WEX",
    role: "AI Infrastructure Engineer",
    period: "May 2025 – Present",
    location: "Portland, ME",
    description: [
      "Architected core components of a distributed training platform using JupyterHub, Ray, Kubernetes, and SageMaker, helping scale training and inference workloads across AKS and EKS.",
      "Implemented an end-to-end observability stack with Helm, Kubernetes, and ArgoCD, delivering visibility across all environments for services supporting millions of customers — executed 3× faster than comparable organization initiatives.",
      "Led several company-wide trainings on building AI applications with RAG and multi-agent workflows, equipping both technical and non-technical teams with the skills to securely integrate AI into internal workflows; trained over 200 engineers across multiple departments.",
    ],
  },
  {
    company: "BPRHub",
    role: "AI Engineering Intern",
    period: "Feb. 2025 - Jul. 2025",
    location: "San Francisco, CA",
    description: [
      "Built Octo, a production-grade agentic AI system for a manufacturing compliance platform, accelerating manufacturing policy audits and boosting compliance through integrated evaluation and optimization pipelines by 45%",
      "Achieved a 25x speedup in RAG inference by semantic chunking, optimized batching, and embedding model evaluation, and benchmarking vector database performance for low-latency retrieval.",
    ],
  },
  {
    company: "Levo.ai",
    role: "Software Engineering Intern",
    period: "Aug. 2024 – Jan. 2025",
    location: "Austin, TX",
    description: [
      "Leveraged LLMs to enhance the readability of API documentation by 30%, improving client comprehension and streamlining developer onboarding.",
      "Integrated AI-driven documentation enhancements into existing engineering workflows, enabling faster product adoption and reducing support overhead for technical teams.",
    ],
  },
];

