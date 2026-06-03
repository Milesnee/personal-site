import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ContributionCard from "@/components/contributions/contribution-card";
import { contributionsUnsorted } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: `Contributions — Miles Ni`,
  description:
    "Open-source contributions and community involvement by Miles Ni.",
};

export default function ContributonsPage() {
  return (
    <PageContainer
      title="Contributions"
      description="Open-source contributions and community involvement."
    >
      <ContributionCard
        contributions={contributionsUnsorted}
      />
    </PageContainer>
  );
}
