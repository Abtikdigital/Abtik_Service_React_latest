
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.terms.title,
  description: seoData.terms.description,
  keywords: seoData.terms.keyword,
};

import PageComponent from "@/pages/TermsAndCondition";

export default function Page() {
  return <PageComponent />;
}
