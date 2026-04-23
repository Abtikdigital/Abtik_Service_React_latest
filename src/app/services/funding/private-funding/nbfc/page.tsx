
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.nbfcService.title,
  description: seoData.nbfcService.description,
  keywords: seoData.nbfcService.keyword,
};

import PageComponent from "@/pages/NBFC";

export default function Page() {
  return <PageComponent />;
}
