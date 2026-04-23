
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData.startupIndiaRegistrationService.title,
  description: seoData.startupIndiaRegistrationService.description,
  keywords: seoData.startupIndiaRegistrationService.keyword,
};

import PageComponent from "@/pages/StartupIndiaCertificate";

export default function Page() {
  return <PageComponent />;
}
