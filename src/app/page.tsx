import Home from "@/pages/Home";
import type { Metadata } from "next";
import seoData from "@/data/seoData.json";

export const metadata: Metadata = {
  title: seoData?.homepage?.title,
  description: seoData?.homepage?.description,
  keywords: seoData?.homepage?.keyword,
};

export default function Page() {
  return <Home />;
}
