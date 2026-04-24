export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "ML Options Pricer",
    description:
      "A neural network-based options pricing model trained on historical market data, achieving lower RMSE than Black-Scholes on short-dated equity options.",
    tags: ["Python", "PyTorch", "Quantitative Finance", "NumPy"],
    github: "https://github.com",
  },
  {
    title: "Distributed Key-Value Store",
    description:
      "A fault-tolerant distributed KV store implementing the Raft consensus algorithm with log replication, snapshotting, and leader election.",
    tags: ["Go", "Raft", "Distributed Systems", "gRPC"],
    github: "https://github.com",
  },
  {
    title: "LLM Research Assistant",
    description:
      "A RAG-based assistant that ingests academic PDFs and answers questions with citations, built on top of Claude's API with a Next.js frontend.",
    tags: ["TypeScript", "Next.js", "Claude API", "Vector DB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Algo Trading Backtester",
    description:
      "Event-driven backtesting framework supporting multiple asset classes with realistic transaction cost modeling and walk-forward optimization.",
    tags: ["Python", "Pandas", "Finance", "Statistics"],
    github: "https://github.com",
  },
];
