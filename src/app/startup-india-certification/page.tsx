
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.startupCertificationService.title,
  description: seoData.startupCertificationService.description,
  keywords: seoData.startupCertificationService.keyword,
};

import PageComponent from "@/pages/TaxExemptionCertificate";

export default function Page() {
  return <PageComponent />;
}
