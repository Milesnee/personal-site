export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "openclaw",
    contibutionDescription:
      "Submitted feature request for Feishu interactive card message parsing — identified root cause and proposed fix in parseMessageContent.",
    repoOwner: "openclaw",
    link: "https://github.com/openclaw/openclaw/issues/89715",
  },
  {
    repo: "knowledge-vault",
    contibutionDescription:
      "Maintained personal knowledge archive with 44 structured articles spanning AI agent theory, quantitative finance, and Harness engineering.",
    repoOwner: "milesnee",
    link: "https://github.com/milesnee/knowledge-vault",
  },
  {
    repo: "clawcast-skills",
    contibutionDescription:
      "Published open-source skills (youtube-content, paper-search, aiwiki) on ClawHub for community use.",
    repoOwner: "milesnee",
    link: "https://github.com/milesnee",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
