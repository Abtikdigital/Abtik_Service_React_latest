
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.cmegpService.title,
  description: seoData.cmegpService.description,
  keywords: seoData.cmegpService.keyword,
};

import PageComponent from "@/pages/CMEGPService";

export default function Page() {
  return <PageComponent />;
}
