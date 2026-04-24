import { Metadata } from "next";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "Privacy Policy | Abtik Services",
  description: "Read the Privacy Policy of Abtik Services to understand how we collect, use, and protect your personal and business information.",
  keywords: "Privacy Policy, Data Protection, Abtik Services, Business Privacy",
  alternates: {
    canonical: "https://abtikservices.com/privacy-policy",
  },
  robots: "index, follow",
};

const PageComponent = dynamic(() => import('@/components/pages_legacy/PrivacyPolicy'));

export default function Page() {
  return <PageComponent />;
}
