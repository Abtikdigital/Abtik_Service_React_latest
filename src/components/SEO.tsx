
"use client";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object;
  ogType?: string;
  ogImage?: string;
}

const SEO = ({ title, description, canonical, schema, ogType = 'website', ogImage = 'https://abtikservices.com/assets/Logo/LogoWithoutBelowContent.png' }: SEOProps) => {
  // In Next.js App Router, metadata should be handled via the Metadata API in page.tsx or layout.tsx.
  // This component is kept for compatibility with the original React codebase but performs no actions.
  return null;
};

export default SEO;
