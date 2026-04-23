
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.projectfundingService.title,
  description: seoData.projectfundingService.description,
  keywords: seoData.projectfundingService.keyword,
};

import PageComponent from "@/pages/ProjectFunding";

export default function Page() {
  return <PageComponent />;
}
