
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.businessLoanService.title,
  description: seoData.businessLoanService.description,
  keywords: seoData.businessLoanService.keyword,
};

import PageComponent from "@/pages/BusinessLoanService";

export default function Page() {
  return <PageComponent />;
}
