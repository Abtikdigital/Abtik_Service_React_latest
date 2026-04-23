
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.tdsComplianceService.title,
  description: seoData.tdsComplianceService.description,
  keywords: seoData.tdsComplianceService.keyword,
};

import PageComponent from "@/pages/TdsCompliance";

export default function Page() {
  return <PageComponent />;
}
