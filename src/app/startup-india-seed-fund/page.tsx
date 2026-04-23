
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.seedFundService.title,
  description: seoData.seedFundService.description,
  keywords: seoData.seedFundService.keyword,
};

import PageComponent from "@/pages/SeedFundService";

export default function Page() {
  return <PageComponent />;
}
