
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.makeinindiaService.title,
  description: seoData.makeinindiaService.description,
  keywords: seoData.makeinindiaService.keyword,
};

import PageComponent from "@/pages/MakeInIndiaCertificate";

export default function Page() {
  return <PageComponent />;
}
