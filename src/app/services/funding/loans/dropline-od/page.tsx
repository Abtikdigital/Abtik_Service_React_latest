
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.droplineodService.title,
  description: seoData.droplineodService.description,
  keywords: seoData.droplineodService.keyword,
};

import PageComponent from "@/pages/DroplineOdService";

export default function Page() {
  return <PageComponent />;
}
