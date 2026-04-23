
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.fssaiLicenseService.title,
  description: seoData.fssaiLicenseService.description,
  keywords: seoData.fssaiLicenseService.keyword,
};

import PageComponent from "@/pages/FssaiLiecence";

export default function Page() {
  return <PageComponent />;
}
