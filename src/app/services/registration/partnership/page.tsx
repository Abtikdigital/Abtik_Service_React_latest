
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.partnershipService.title,
  description: seoData.partnershipService.description,
  keywords: seoData.partnershipService.keyword,
};

import PageComponent from "@/pages/PartnershipFirm";

export default function Page() {
  return <PageComponent />;
}
