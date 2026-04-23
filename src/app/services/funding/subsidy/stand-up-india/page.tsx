
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.standupIndiaService.title,
  description: seoData.standupIndiaService.description,
  keywords: seoData.standupIndiaService.keyword,
};

import PageComponent from "@/pages/StandUpIndiaService";

export default function Page() {
  return <PageComponent />;
}
