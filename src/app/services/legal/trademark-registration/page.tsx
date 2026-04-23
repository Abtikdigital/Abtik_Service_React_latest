
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.trademarkService.title,
  description: seoData.trademarkService.description,
  keywords: seoData.trademarkService.keyword,
};

import PageComponent from "@/pages/TrademarkRegistrationAndFillingService";

export default function Page() {
  return <PageComponent />;
}
