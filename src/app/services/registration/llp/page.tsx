
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.llpService.title,
  description: seoData.llpService.description,
  keywords: seoData.llpService.keyword,
};

import PageComponent from "@/pages/LlpService";

export default function Page() {
  return <PageComponent />;
}
