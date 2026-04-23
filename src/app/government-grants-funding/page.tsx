
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.grantsService.title,
  description: seoData.grantsService.description,
  keywords: seoData.grantsService.keyword,
};

import PageComponent from "@/pages/GrantsService";

export default function Page() {
  return <PageComponent />;
}
