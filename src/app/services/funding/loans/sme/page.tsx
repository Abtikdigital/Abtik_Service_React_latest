
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.smeService.title,
  description: seoData.smeService.description,
  keywords: seoData.smeService.keyword,
};

import PageComponent from "@/pages/SmeService";

export default function Page() {
  return <PageComponent />;
}
