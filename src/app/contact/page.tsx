
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.contactPage.title,
  description: seoData.contactPage.description,
  keywords: seoData.contactPage.keyword,
};

import PageComponent from "@/pages/Contact";

export default function Page() {
  return <PageComponent />;
}
