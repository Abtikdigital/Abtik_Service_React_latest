import { Metadata } from "next";
import dynamic from 'next/dynamic';
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "abtikservices.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const canonicalUrl = `${protocol}://${host}/`;

  return {
    title: "Expert MSME & Business Loan Consultant in India | Abtik",
    description: "Expert MSME & business loan consultancy in India. Get Startup India registration, FSSAI licensing, and government grant support. Apply now for financial growth!",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const PageComponent = dynamic(() => import('@/components/pages_legacy/Home'));

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "Abtik Startup Advisor Pvt Ltd",
      "description": "Leading MSME & Business Loan Consultancy in India. Expert support for Startup India registration, FSSAI, and government grants.",
      "url": "https://abtikservices.com",
      "telephone": "+918928138434",
      "email": "info@abtikservices.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "areaServed": "IN"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Abtik",
      "url": "https://abtikservices.com",
      "logo": "https://abtikservices.com/assets/Logo/LogoWithoutBelowContent.png",
      "sameAs": [
        "https://www.facebook.com/abtikservices",
        "https://www.instagram.com/abtikservices",
        "https://www.linkedin.com/company/abtikservices"
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageComponent />
    </>
  );
}
