import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Primary language for data engineering, AI agent development, quantitative trading, and automation.",
    rating: 5,
    icon: Icons.code,
  },
  {
    name: "SQL",
    description:
      "Deep expertise in complex queries, data warehousing, ETL pipelines, and cross-source data unification.",
    rating: 5,
    icon: Icons.database,
  },
  {
    name: "LLM App Development",
    description:
      "Building production AI applications with LLM orchestration, prompt engineering, and multi-agent systems.",
    rating: 5,
    icon: Icons.brain,
  },
  {
    name: "AI Agent Orchestration",
    description:
      "Designing and operating multi-agent systems using MCP, OpenClaw, and custom Skill frameworks.",
    rating: 5,
    icon: Icons.gitHub,
  },
  {
    name: "Prompt Engineering",
    description:
      "Structured prompt design for function-calling, reasoning chains, and behavior control.",
    rating: 5,
    icon: Icons.code,
  },
  {
    name: "Data Governance",
    description:
      "DAMA framework, data quality management, data standards, data asset management at enterprise scale.",
    rating: 5,
    icon: Icons.shield,
  },
  {
    name: "Power BI",
    description:
      "Self-service analytics platforms, dashboards, and data product design at scale (800+ WAU).",
    rating: 5,
    icon: Icons.chart,
  },
  {
    name: "Quantitative Trading",
    description:
      "Systematic crypto trading with freqtrade, capital cycle framework, and Chan theory signals.",
    rating: 4,
    icon: Icons.trendingUp,
  },
  {
    name: "Data Engineering",
    description:
      "ETL pipelines, data warehouse design, data lineage, and cross-source unification (30+ sources).",
    rating: 5,
    icon: Icons.database,
  },
  {
    name: "IBM Cognos",
    description:
      "Enterprise BI dashboard delivery, EDW architecture, and international client engagement.",
    rating: 4,
    icon: Icons.chart,
  },
  {
    name: "MCP (Model Context Protocol)",
    description:
      "Standard protocol for AI agent-tool interaction; building MCP servers and primitives.",
    rating: 5,
    icon: Icons.code,
  },
  {
    name: "TypeScript / React",
    description:
      "Frontend development for data platforms and AI product interfaces.",
    rating: 3,
    icon: Icons.react,
  },
  {
    name: "Linux / DevOps",
    description:
      "Server administration, Docker containers, systemd services, and CI/CD pipelines.",
    rating: 4,
    icon: Icons.terminal,
  },
  {
    name: "Apache Superset",
    description:
      "Open-source BI platform for analytics dashboards and data visualization.",
    rating: 4,
    icon: Icons.chart,
  },
  {
    name: "Tableau",
    description:
      "Data visualization and exploratory analysis for business intelligence.",
    rating: 4,
    icon: Icons.chart,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
