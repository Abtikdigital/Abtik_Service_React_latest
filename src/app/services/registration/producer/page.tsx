
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.producerCompanyService.title,
  description: seoData.producerCompanyService.description,
  keywords: seoData.producerCompanyService.keyword,
};

import PageComponent from "@/pages/ProducerCompany";

export default function Page() {
  return <PageComponent />;
}
