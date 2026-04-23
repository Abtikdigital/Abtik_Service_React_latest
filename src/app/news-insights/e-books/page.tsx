
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.eBooks.title,
  description: seoData.eBooks.description,
  keywords: seoData.eBooks.keyword,
};

import PageComponent from "@/pages/EBook";

export default function Page() {
  return <PageComponent />;
}
