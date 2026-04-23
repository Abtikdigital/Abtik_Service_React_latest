
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.aboutPage.title,
  description: seoData.aboutPage.description,
  keywords: seoData.aboutPage.keyword,
};

import PageComponent from "@/pages/About";

export default function Page() {
  return <PageComponent />;
}
