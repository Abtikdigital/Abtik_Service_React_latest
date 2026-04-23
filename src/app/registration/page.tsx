
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.privatelimitedService.title,
  description: seoData.privatelimitedService.description,
  keywords: seoData.privatelimitedService.keyword,
};

import PageComponent from "@/pages/PrivateLimitedService";

export default function Page() {
  return <PageComponent />;
}
