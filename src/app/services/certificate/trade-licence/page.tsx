
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.tradeLicenceService.title,
  description: seoData.tradeLicenceService.description,
  keywords: seoData.tradeLicenceService.keyword,
};

import PageComponent from "@/pages/TradeLicence";

export default function Page() {
  return <PageComponent />;
}
