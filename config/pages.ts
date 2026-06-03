import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "AI Entrepreneur & Multi-Agent Architect.",
    metadata: {
      title: "Miles Ni — AI Entrepreneur & Multi-Agent Architect",
      description:
        "Miles Ni (倪磊) — 14 years of full-stack data experience. Building at the intersection of AI agents, quantitative trading, and mental wellness.",
    },
  },
  skills: {
    title: "Skills",
    description: "AI orchestration, data engineering, quantitative trading, and more.",
    metadata: {
      title: "Skills — Miles Ni",
      description: "Miles Ni's key skills spanning AI agents, data engineering, and quantitative trading.",
    },
  },
  projects: {
    title: "Projects",
    description: "AI agents, open-source tools, quantitative trading, and research.",
    metadata: {
      title: "Projects — Miles Ni",
      description:
        "Miles Ni's projects in AI agent orchestration, quantitative trading, and enterprise AI research.",
    },
  },
  contact: {
    title: "Contact",
    description: "Get in touch.",
    metadata: {
      title: "Contact — Miles Ni",
      description: "Contact Miles Ni — AI entrepreneur based in Shanghai.",
    },
  },
  resume: {
    title: "Resume",
    description: "Full professional resume.",
    metadata: {
      title: "Resume — Miles Ni",
      description: "Miles Ni's professional resume — 14 years of full-stack data and AI experience.",
    },
  },
  experience: {
    title: "Experience",
    description: "From IBM BI specialist to AI startup founder.",
    metadata: {
      title: "Experience — Miles Ni",
      description: "Miles Ni's professional journey — 14 years from IBM to AI entrepreneurship.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions — Miles Ni",
      description: "Miles Ni's open-source contributions.",
    },
  },
  blogs: {
    title: "Blog",
    description:
      "Thoughts on AI agents, Harness engineering, and building in public.",
    metadata: {
      title: "Blog — Miles Ni",
      description: "Miles Ni's blog — thoughts on AI agents, Harness engineering, and the future of work.",
    },
  },
};
