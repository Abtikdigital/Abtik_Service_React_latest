
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.angelInvestorService.title,
  description: seoData.angelInvestorService.description,
  keywords: seoData.angelInvestorService.keyword,
};

import PageComponent from "@/pages/Angelinverstor";

export default function Page() {
  return <PageComponent />;
}
