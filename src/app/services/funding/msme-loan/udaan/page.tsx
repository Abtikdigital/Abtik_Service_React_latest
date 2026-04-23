
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.udaanService.title,
  description: seoData.udaanService.description,
  keywords: seoData.udaanService.keyword,
};

import PageComponent from "@/pages/Udaan";

export default function Page() {
  return <PageComponent />;
}
