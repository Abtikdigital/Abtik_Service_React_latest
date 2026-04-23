
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.agrisureService.title,
  description: seoData.agrisureService.description,
  keywords: seoData.agrisureService.keyword,
};

import PageComponent from "@/pages/AgrisureService";

export default function Page() {
  return <PageComponent />;
}
