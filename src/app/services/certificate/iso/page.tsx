
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.isoCertificateService.title,
  description: seoData.isoCertificateService.description,
  keywords: seoData.isoCertificateService.keyword,
};

import PageComponent from "@/pages/IsoCertificate";

export default function Page() {
  return <PageComponent />;
}
