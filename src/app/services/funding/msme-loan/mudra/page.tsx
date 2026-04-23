
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.mudraloanService.title,
  description: seoData.mudraloanService.description,
  keywords: seoData.mudraloanService.keyword,
};

import PageComponent from "@/pages/MudraLoan";

export default function Page() {
  return <PageComponent />;
}
