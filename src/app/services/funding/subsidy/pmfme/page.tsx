
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.pmfmeService.title,
  description: seoData.pmfmeService.description,
  keywords: seoData.pmfmeService.keyword,
};

import PageComponent from "@/pages/PMFMEService";

export default function Page() {
  return <PageComponent />;
}
