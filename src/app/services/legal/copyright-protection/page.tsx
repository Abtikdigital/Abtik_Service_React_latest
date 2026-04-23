
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.copyrightService.title,
  description: seoData.copyrightService.description,
  keywords: seoData.copyrightService.keyword,
};

import PageComponent from "@/pages/CopyRightService";

export default function Page() {
  return <PageComponent />;
}
