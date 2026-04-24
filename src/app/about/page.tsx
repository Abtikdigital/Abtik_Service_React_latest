import { Metadata } from "next";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "About us | Providing Business loans for startup ahmedabad",
  description: "Helping startups in Ahmedabad access the right business loans, funding support, and expert guidance to grow fast and fearlessly.",
  keywords: "startup loan, msme loan, working capital business loan, private loan, abtik startup advisor pvt ltd, unsecured loan.",
  alternates: {
    canonical: "https://abtikservices.com/about",
  },
  robots: "index, follow",
};

const PageComponent = dynamic(() => import('@/components/pages_legacy/About'));

export default function Page() {
  return <PageComponent />;
}
