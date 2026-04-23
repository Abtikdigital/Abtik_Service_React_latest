
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.msmeLoans.title,
  description: seoData.msmeLoans.description,
  keywords: seoData.msmeLoans.keyword,
};

import PageComponent from "@/pages/MSMELoans";

export default function Page() {
  return <PageComponent />;
}
