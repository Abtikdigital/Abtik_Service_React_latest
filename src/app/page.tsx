import { Metadata } from "next";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "MSME & Business Loan Consultancy in India | Abtik",
  description: "Expert MSME & business loan consultancy in India. Get support for Startup India, FSSAI, and government grants. Apply now for financial growth!",
  alternates: {
    canonical: "https://abtikservices.com/",
  },
};

const PageComponent = dynamic(() => import('@/components/pages_legacy/Home'));

export default function Page() {
  return <PageComponent />;
}
