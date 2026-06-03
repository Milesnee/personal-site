import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "zhidaya",
    position: "Founder & Product Lead",
    company: "ZhiDaYa (AI Application Startup)",
    location: "Shanghai",
    startDate: new Date("2025-10-01"),
    endDate: "Present",
    description: [
      "Founded AI intelligent business solutions company; launched zhidaya.com, an AI-powered job matching and consulting platform.",
      "Built multi-agent orchestration system using MCP protocol and proprietary Skill framework for AI agent collaboration.",
      "Developed quantitative trading data pipeline for AI-driven crypto strategies (ETHUSDT, capital cycle framework + Chan theory).",
    ],
    achievements: [
      "Founded AI startup from zero with multi-agent orchestration as core differentiator.",
      "Applied Harness Engineering: environment > code, verification > trust, Brain/Hands separation.",
      "MBA Guest Lecturer — delivered English presentation 'AI Agent-isation in Finance' (38-slide narrative-driven, May 2026).",
    ],
    skills: ["Python", "LLM App Dev", "MCP", "OpenClaw", "Prompt Engineering"],
  },
  {
    id: "soe-finance",
    position: "Data Governance Expert & Project Manager",
    company: "State-Owned Financial Enterprise",
    location: "Shanghai",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-09-01"),
    description: [
      "Built enterprise data governance from scratch: standards, quality monitoring, cross-department asset inventory.",
      "Unified 30+ heterogeneous data sources across finance, risk, and operations; improved core data accuracy from 75% to 95%.",
      "Delivered self-service analytics platform (200+ DAU), reduced data retrieval from days to minutes.",
    ],
    achievements: [
      "Transformed data governance from a project into an organizational capability.",
      "Achieved 20 percentage-point improvement in core data accuracy (75% → 95%).",
      "Delivered self-service platform serving 200+ daily active users across all departments.",
    ],
    skills: ["Python", "SQL", "Power BI", "Apache Superset"],
  },
  {
    id: "iresearch",
    position: "Data Development Team Lead",
    company: "iResearch (iMedia Asia)",
    location: "Shanghai",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2024-09-01"),
    description: [
      "Led data development team across flagship products: MiniappTracker, OneMedia, AdTracker.",
      "Redesigned AdTracker core data lineage (15-yr ad monitoring data) with zero downtime during architecture modernization.",
      "Built user behavior analytics dashboards, defined KPI framework, significantly improved analytical efficiency.",
    ],
    achievements: [
      "Led team of data developers across 3 flagship analytics products.",
      "Zero-downtime architecture modernization of 15-year advertising monitoring data lineage.",
      "Established KPI framework and analytics dashboards used across the organization.",
    ],
    skills: ["Python", "SQL", "Linux", "PostgreSQL"],
  },
  {
    id: "atzuche",
    position: "Data Product Manager",
    company: "Atzuche (Leading P2P Car Sharing)",
    location: "Shanghai",
    startDate: new Date("2018-09-01"),
    endDate: new Date("2021-09-01"),
    description: [
      "Designed self-service analytics platform (Power BI), 800+ weekly active users across departments.",
      "Built funnel analytics, improved registration conversion from 5% to 10%.",
      "Designed RFM-based user segmentation, optimized coupon targeting for retention and lifetime value.",
    ],
    achievements: [
      "Doubled registration conversion rate (5% → 10%) through funnel analytics optimization.",
      "Built RFM segmentation model that improved coupon targeting ROI and user retention.",
      "Scaled self-service platform to 800+ weekly active users across all departments.",
    ],
    skills: ["Power BI", "SQL", "Python"],
  },
  {
    id: "ibm",
    position: "BI / Data Warehouse Specialist",
    company: "IBM Shanghai & Others",
    location: "Shanghai",
    startDate: new Date("2012-06-01"),
    endDate: new Date("2018-08-01"),
    description: [
      "Core developer for Suncorp (Australia) Cognos BI dashboard delivery and EDW architecture planning.",
      "Designed enterprise data warehouses and BI solutions across multiple organizations.",
    ],
    achievements: [
      "Delivered Cognos BI dashboards for international client (Suncorp, Australia).",
      "Designed enterprise data warehouse architectures for multiple financial institutions.",
    ],
    skills: ["IBM Cognos", "SQL", "Python"],
  },
];

export const featuredExperiences = experiences.slice(0, 3);
