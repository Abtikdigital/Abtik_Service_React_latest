
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.soleproprietorshipService.title,
  description: seoData.soleproprietorshipService.description,
  keywords: seoData.soleproprietorshipService.keyword,
};

import PageComponent from "@/pages/SoleProprietorship";

export default function Page() {
  return <PageComponent />;
}
