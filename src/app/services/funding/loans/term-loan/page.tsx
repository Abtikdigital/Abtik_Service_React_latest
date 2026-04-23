
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.termService.title,
  description: seoData.termService.description,
  keywords: seoData.termService.keyword,
};

import PageComponent from "@/pages/TermService";

export default function Page() {
  return <PageComponent />;
}
