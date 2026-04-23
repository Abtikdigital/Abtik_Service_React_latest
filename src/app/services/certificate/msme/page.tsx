
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.msmeCertificateService.title,
  description: seoData.msmeCertificateService.description,
  keywords: seoData.msmeCertificateService.keyword,
};

import PageComponent from "@/pages/MSMECertificate";

export default function Page() {
  return <PageComponent />;
}
