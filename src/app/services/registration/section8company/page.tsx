
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.section8Company.title,
  description: seoData.section8Company.description,
  keywords: seoData.section8Company.keyword,
};

import PageComponent from "@/pages/Section8Company";

export default function Page() {
  return <PageComponent />;
}
