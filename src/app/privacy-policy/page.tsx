
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.privacyPolicy.title,
  description: seoData.privacyPolicy.description,
  keywords: seoData.privacyPolicy.keyword,
};

import PageComponent from "@/pages/PrivacyPolicy";

export default function Page() {
  return <PageComponent />;
}
