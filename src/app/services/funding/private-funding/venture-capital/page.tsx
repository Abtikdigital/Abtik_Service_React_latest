
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.ventureCapitalService.title,
  description: seoData.ventureCapitalService.description,
  keywords: seoData.ventureCapitalService.keyword,
};

import PageComponent from "@/pages/VCInvestor";

export default function Page() {
  return <PageComponent />;
}
