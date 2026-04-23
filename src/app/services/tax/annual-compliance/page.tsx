
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.annualComplainceService.title,
  description: seoData.annualComplainceService.description,
  keywords: seoData.annualComplainceService.keyword,
};

import PageComponent from "@/pages/AnnualComplaince";

export default function Page() {
  return <PageComponent />;
}
