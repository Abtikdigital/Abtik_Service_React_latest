
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.blog.title,
  description: seoData.blog.description,
  keywords: seoData.blog.keyword,
};

import PageComponent from "@/pages/Blog";

export default function Page() {
  return <PageComponent />;
}
