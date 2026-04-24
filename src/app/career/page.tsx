import { Metadata } from "next";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "Join Abtik – Build Your Career & Future with Us",
  description: "Looking for growth, purpose, and a passionate team? Join Abtik and turn your career into something meaningful and impactful.",
  keywords: "Abtik Startup Advisor pvt ltd",
  alternates: {
    canonical: "https://abtikservices.com/career",
  },
  robots: "index, follow",
};

const PageComponent = dynamic(() => import('@/components/pages_legacy/Career'));

export default function Page() {
  return <PageComponent />;
}
