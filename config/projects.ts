import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "xiao-cheng",
    companyName: "XiaoCheng — AI Awareness Guide",
    type: "Personal",
    category: ["AI Agent", "Open Source", "Research"],
    shortDescription:
      "Open-source AI awareness guidance system helping users build a stable inner core. PERMA model × Chinese philosophical healing framework (庄子→清静经→王阳明). 9 JSON-in/JSON-out primitives with native MCP integration.",
    githubLink: "https://github.com/milesnee",
    techStack: ["Python", "MCP", "OpenClaw", "LLM App Dev", "Prompt Engineering"],
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "XiaoCheng (小澄) is an AI awareness guidance system designed for people overwhelmed by information overload — those who can't stop scrolling, know what they should do but can't start, and feel their attention fragmented.",
        "The core philosophy is subtraction healing (减法疗愈): not cramming more knowledge, but helping users see what's obscuring their natural attention. Built on the theory triangle of Zhuangzi (why let go) → Qingjing Jing (how to let go) → Wang Yangming (what to do after letting go).",
        "The system uses 9 primitives (JSON-in/JSON-out) following the Primitives architecture (L1→L2→MCP), designed as a Builder-mode 6-12 month companion, not a quick-fix tool.",
      ],
      bullets: [
        "Designed 9 JSON-in/JSON-out Primitives following L1→L2→MCP architecture for composable AI guidance.",
        "Integrated PERMA psychological framework with Chinese philosophical healing traditions.",
        "Built on OpenClaw multi-agent orchestration platform with native MCP protocol support.",
        "Open-sourced on GitHub and ClawHub for community-driven development.",
      ],
    },
  },
  {
    id: "enterprise-ai-maturity",
    companyName: "Enterprise AI Agent Maturity & Valuation Research",
    type: "Personal",
    category: ["Research", "AI Agent", "Data"],
    shortDescription:
      "Independent research measuring the correlation between enterprise AI agent adoption maturity and firm valuation. Developed an LLM-based semantic scoring model for quantitative assessment of listed companies' AI agent adoption.",
    techStack: ["Python", "SQL", "LLM App Dev", "Prompt Engineering"],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "This independent research project investigates whether enterprise AI agent adoption maturity is positively correlated with firm valuation (Tobin's Q), addressing a gap in the emerging literature on AI's economic impact.",
        "I developed a novel LLM-based semantic scoring model that quantitatively assesses listed companies' AI agent adoption across multiple dimensions — from infrastructure readiness to organizational transformation.",
        "The initial sample (N=34) shows positive but not yet significant correlations (β = 0.47–0.66), with SaaS sub-sample approaching significance (p = 0.08). The research is expanding to 200+ companies across US, HK, and A-share markets.",
      ],
      bullets: [
        "Developed LLM-based semantic scoring model for quantitative AI agent maturity assessment.",
        "Multiple regression analysis (Tobin's Q): β = 0.47–0.66, positive correlation; SaaS sub-sample p = 0.08.",
        "Research submitted for NTU MSc Enterprise AI program (academic CV completed May 2026).",
        "Expanding sample to 200+ companies across US, HK, and A-share markets.",
      ],
    },
  },
  {
    id: "crypto-data-mcp",
    companyName: "Crypto Data MCP Server",
    type: "Personal",
    category: ["Open Source", "AI Agent", "Data"],
    shortDescription:
      "Open-source MCP Server providing data infrastructure for crypto research and trading AI agents. Built-in lookahead bias detection and temporal validation for quantitative research integrity.",
    githubLink: "https://github.com/milesnee",
    techStack: ["Python", "MCP", "REST API", "PostgreSQL"],
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "The Crypto Data MCP Server provides a standardized data infrastructure for AI-driven cryptocurrency research and trading agents. It implements the Model Context Protocol (MCP) to give trading agents real-time and historical market data, on-chain metrics, and fundamental analysis.",
        "A critical feature is the built-in lookahead bias detection and temporal validation system, ensuring that quantitative research maintains strict temporal integrity — a common pitfall in backtesting crypto strategies.",
        "The server integrates with multiple data sources including on-chain analytics, exchange APIs, and fundamental data feeds, providing a unified interface for multi-agent trading systems.",
      ],
      bullets: [
        "Built MCP Server for standardized crypto data access by AI trading agents.",
        "Implemented lookahead bias detection and temporal validation for research integrity.",
        "Integrated multiple data sources (on-chain, exchange APIs, fundamentals) into unified interface.",
        "Designed for multi-agent orchestration compatibility with OpenClaw platform.",
      ],
    },
  },
  {
    id: "quant-trading",
    companyName: "Quantitative Trading System — Capital Cycle Framework",
    type: "Personal",
    category: ["Data", "Research", "AI Agent"],
    shortDescription:
      "Systematic crypto quantitative trading system built on freqtrade. Capital cycle framework + Chan theory dual-track signals. 58-stock cross-market observation pool with 13+ scoring signals. AI agents for multi-source parallel data analysis.",
    techStack: ["Python", "SQL", "Linux", "Docker", "REST API", "PostgreSQL"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A systematic quantitative trading system for cryptocurrency markets, primarily trading ETHUSDT pairs. Built on the freqtrade framework with a dual-track signal system combining capital cycle theory and Chan theory (缠论).",
        "The system manages a 58-stock cross-market observation pool (US equities, A-shares, HK stocks) with 13+ scoring signals covering valuation, momentum, quality, and catalyst events. Multi-agent orchestration enables parallel data collection from 6+ sources.",
        "Backtested across bull and bear markets with adaptive trend detection: bear market +62% PnL (Sharpe 1.33), bull market +58.6% (Sharpe 1.53), demonstrating robust cross-cycle performance.",
      ],
      bullets: [
        "Built systematic trading system on freqtrade with capital cycle + Chan theory dual-track signals.",
        "Managed 58-stock cross-market observation pool with 13+ scoring signals.",
        "Cross-cycle backtesting: bear market Sharpe 1.33, bull market Sharpe 1.53.",
        "Multi-agent orchestration for parallel data collection from 6+ sources.",
      ],
    },
  },
  {
    id: "zhidaya",
    companyName: "ZhiDaYa — AI-Powered Business Intelligence Platform",
    type: "Professional",
    category: ["AI Agent", "Full Stack", "Web Dev"],
    shortDescription:
      "Founded AI startup building intelligent business solutions. Launched zhidaya.com, an AI-powered job matching and consulting platform. Built multi-agent orchestration system using MCP protocol and proprietary Skill framework.",
    techStack: ["Python", "LLM App Dev", "MCP", "OpenClaw", "Prompt Engineering"],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Founded ZhiDaYa as an AI intelligent business solutions company, focusing on building AI-native products that help businesses leverage multi-agent orchestration for complex workflows.",
        "The core product uses MCP (Model Context Protocol) as the standard interface between AI agents and external tools, with a proprietary Skill framework that encapsulates domain expertise into reusable, composable modules.",
        "The multi-agent orchestration system enables AI agents to collaborate autonomously on complex tasks — from data collection and analysis to report generation and decision support — with built-in approval gates and traceability.",
      ],
      bullets: [
        "Founded AI startup from zero; launched zhidaya.com platform.",
        "Built multi-agent orchestration system using MCP protocol + proprietary Skill framework.",
        "Designed approval gates and traceability for safe agent autonomy.",
        "Applied Harness Engineering principles: environment > code, verification > trust.",
      ],
    },
  },
  {
    id: "data-governance",
    companyName: "Enterprise Data Governance Platform",
    type: "Professional",
    category: ["Data", "Full Stack"],
    shortDescription:
      "Built enterprise data governance from scratch at a state-owned financial institution: standards, quality monitoring, cross-department asset inventory. Unified 30+ heterogeneous data sources and delivered self-service analytics platform (200+ DAU).",
    techStack: ["Python", "SQL", "Power BI", "Apache Superset", "Linux"],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-09-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "As Data Governance Expert and Project Manager at a state-owned financial enterprise, I built the entire data governance system from scratch — establishing data standards, quality monitoring frameworks, and cross-department data asset inventories.",
        "The most impactful work was unifying 30+ heterogeneous data sources spanning finance, risk, and operations departments, improving core data accuracy from 75% to 95%.",
        "Delivered a self-service analytics platform serving 200+ daily active users, transforming data retrieval from a days-long manual process to a minutes-long self-service experience.",
      ],
      bullets: [
        "Built enterprise data governance from scratch: standards, quality monitoring, cross-dept asset inventory.",
        "Unified 30+ heterogeneous data sources (finance, risk, operations); core data accuracy 75% → 95%.",
        "Delivered self-service analytics platform (200+ DAU); data retrieval: days → minutes.",
        "Established data governance as organizational capability, not just a project.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
