
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.naiff_aiffService.title,
  description: seoData.naiff_aiffService.description,
  keywords: seoData.naiff_aiffService.keyword,
};

import PageComponent from "@/pages/NAIFF_AIFFService";

export default function Page() {
  return <PageComponent />;
}
