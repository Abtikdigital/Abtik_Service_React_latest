
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.overdraftService.title,
  description: seoData.overdraftService.description,
  keywords: seoData.overdraftService.keyword,
};

import PageComponent from "@/pages/OverdraftService";

export default function Page() {
  return <PageComponent />;
}
