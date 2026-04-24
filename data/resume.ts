export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export const experience: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Example Corp",
    period: "Jun 2024 – Aug 2024",
    description:
      "Built internal tooling to automate deployment pipelines, reducing release time by 40%. Contributed to a high-throughput data ingestion service handling 1M+ events/day.",
    tags: ["Go", "Kubernetes", "PostgreSQL"],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "University ML Lab",
    period: "Jan 2024 – Present",
    description:
      "Investigating transformer-based time series forecasting for financial data. Co-authoring a paper on attention mechanisms applied to order book dynamics.",
    tags: ["Python", "PyTorch", "Research"],
  },
];

export const education: Education[] = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Your University",
    period: "2022 – 2026",
    details:
      "Relevant coursework: Algorithms, Operating Systems, Machine Learning, Probability & Statistics, Linear Algebra, Financial Mathematics.",
  },
];

export const skills = {
  Languages: ["Python", "Go", "TypeScript", "C++", "SQL"],
  "AI / ML": ["PyTorch", "Transformers", "Scikit-learn", "NumPy", "Pandas"],
  "Quant / Finance": ["Options Pricing", "Backtesting", "Risk Metrics", "Stochastic Calculus"],
  Infrastructure: ["Docker", "Kubernetes", "PostgreSQL", "Redis", "Git"],
};
