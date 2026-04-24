import { Metadata } from "next";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "FSSAI Food License Registration Online | Abtik Services",
  description: "Apply for FSSAI Food License registration online. Expert support for Basic, State, and Central FSSAI licenses for all food businesses in India.",
  keywords: "FSSAI Registration, Food License India, FSSAI Online, Food Safety Certificate, Abtik Services",
  alternates: {
    canonical: "https://abtikservices.com/fssai-registration",
  },
  robots: "index, follow",
};

const PageComponent = dynamic(() => import('@/components/pages_legacy/FssaiLiecence'));

export default function Page() {
  return <PageComponent />;
}
