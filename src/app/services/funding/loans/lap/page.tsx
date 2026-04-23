
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.lapService.title,
  description: seoData.lapService.description,
  keywords: seoData.lapService.keyword,
};

import PageComponent from "@/pages/LAPService";

export default function Page() {
  return <PageComponent />;
}
