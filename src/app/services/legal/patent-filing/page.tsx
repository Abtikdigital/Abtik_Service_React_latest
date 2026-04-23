
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.patentfillingService.title,
  description: seoData.patentfillingService.description,
  keywords: seoData.patentfillingService.keyword,
};

import PageComponent from "@/pages/PatentFilingService";

export default function Page() {
  return <PageComponent />;
}
