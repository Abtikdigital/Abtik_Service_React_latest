
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.cgtmseSerivce.title,
  description: seoData.cgtmseSerivce.description,
  keywords: seoData.cgtmseSerivce.keyword,
};

import PageComponent from "@/pages/CGTMSEService";

export default function Page() {
  return <PageComponent />;
}
