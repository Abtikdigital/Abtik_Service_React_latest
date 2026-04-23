
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.cashCreditService.title,
  description: seoData.cashCreditService.description,
  keywords: seoData.cashCreditService.keyword,
};

import PageComponent from "@/pages/CashCreditService";

export default function Page() {
  return <PageComponent />;
}
