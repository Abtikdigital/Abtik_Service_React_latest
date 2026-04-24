import { Metadata } from "next";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "Apply for Business Loans with Abtik – Contact Us Today",
  description: "Need fast and reliable funding? Reach out to Abtik for MSME loans, startup support, and capital guidance tailored to you.",
  keywords: "Abtik Startup Advisor pvt ltd",
  alternates: {
    canonical: "https://abtikservices.com/contact",
  },
  robots: "index, follow",
};

const PageComponent = dynamic(() => import('@/components/pages_legacy/Contact'));

export default function Page() {
  return <PageComponent />;
}
