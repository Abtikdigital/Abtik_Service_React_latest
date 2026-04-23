
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.zedCertificateService.title,
  description: seoData.zedCertificateService.description,
  keywords: seoData.zedCertificateService.keyword,
};

import PageComponent from "@/pages/ZedCertificate";

export default function Page() {
  return <PageComponent />;
}
