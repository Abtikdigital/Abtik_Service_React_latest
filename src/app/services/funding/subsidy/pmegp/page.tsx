
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.pmegpService.title,
  description: seoData.pmegpService.description,
  keywords: seoData.pmegpService.keyword,
};

import PageComponent from "@/pages/PMEGPService";

export default function Page() {
  return <PageComponent />;
}
