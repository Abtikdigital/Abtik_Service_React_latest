
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.gstRegistration_fillingService.title,
  description: seoData.gstRegistration_fillingService.description,
  keywords: seoData.gstRegistration_fillingService.keyword,
};

import PageComponent from "@/pages/GstRegistration_Filling";

export default function Page() {
  return <PageComponent />;
}
