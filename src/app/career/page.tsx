
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.careerPage.title,
  description: seoData.careerPage.description,
  keywords: seoData.careerPage.keyword,
};

import PageComponent from "@/pages/Career";

export default function Page() {
  return <PageComponent />;
}
