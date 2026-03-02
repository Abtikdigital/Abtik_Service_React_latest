import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import seoData from "../data/seoData.json";

const BASE_URL = "https://abtikservices.com";

// Map exact routes to seoData keys
const pathToSeoKey: Record<string, keyof typeof seoData> = {
  "/": "homepage",
  "/about": "aboutPage",
  "/career": "careerPage",
  "/contact": "contactPage",
  "/news-insights/blogs": "blog",
  "/news-insights/e-books": "eBooks",

  // Funding - schemes and loans
  "/services/funding/seed-fund": "seedFundService",
  "/services/funding/subsidy/pmegp": "pmegpService",
  "/services/funding/subsidy/cmegp": "cmegpService",
  "/services/funding/subsidy/pmfme": "pmfmeService",
  "/services/funding/subsidy/stand-up-india": "standupIndiaService",
  "/services/funding/grants": "grantsService",
  "/services/funding/msme-loans": "msmeLoans",
  "/services/funding/msme-loan/mudra": "mudraloanService",
  "/services/funding/msme-loan/udaan": "udaanService",
  "/services/funding/msme-loan/cgtmse": "cgtmseSerivce",
  "/services/funding/agriculture/naiff-aiff": "naiff_aiffService",
  "/services/funding/agriculture/agrisure": "agrisureService",
  "/services/funding/loans/business-loan": "businessLoanService",
  "/services/funding/loans/lap": "lapService",
  "/services/funding/loans/cash-credit": "cashCreditService",
  "/services/funding/loans/overdraft": "overdraftService",
  "/services/funding/loans/dropline-od": "droplineodService",
  "/services/funding/loans/sme": "smeService",
  "/services/funding/loans/term-loan": "termService",
  "/services/funding/loans/project-funding": "projectfundingService",
  "/services/funding/private-funding/angel-investor": "angelInvestorService",
  "/services/funding/private-funding/venture-capital": "ventureCapitalService",
  "/services/funding/private-funding/nbfc": "nbfcService",

  // Legal
  "/services/legal/trademark-registration": "trademarkService",
  "/services/legal/copyright-protection": "copyrightService",
  "/services/legal/patent-filing": "patentfillingService",

  // Certificates
  "/services/certificate/fssai-licence": "fssaiLicenseService",
  "/services/certificate/startup-india": "startupIndisCertificateService",
  "/services/certificate/tax-exemption-certificate": "taxAssumptionCertificate",
  "/services/certificate/msme": "msmeCertificateService",
  "/services/certificate/make-in-india": "makeinindiaService",
  "/services/certificate/zed": "zedCertificateService",
  "/services/certificate/iso": "isoCertificateService",
  "/services/certificate/trade-licence": "tradeLicenceService",

  // Tax
  "/services/tax/gst-filing": "gstRegistration_fillingService",
  "/services/tax/tds-compliance": "tdsComplianceService",
  "/services/tax/annual-compliance": "annualComplainceService",

  // Registration
  "/services/registration/private-limited": "privatelimitedService",
  "/services/registration/llp": "llpService",
  "/services/registration/proprietorship": "soleproprietorshipService",
  "/services/registration/partnership": "partnershipService",
  "/services/registration/section8company": "section8Company",
  "/services/registration/producer": "producerCompanyService",

  // Legal pages
  "/legal/privacy-policy": "privacyPolicy",
  "/legal/terms-and-conditions": "terms",
};

const resolveSeoConfig = (pathname: string) => {
  // Dynamic content routes
  if (pathname.startsWith("/expandedBlog/")) {
    return (seoData as any).blog;
  }

  if (pathname.startsWith("/files/")) {
    return (seoData as any).eBooks || (seoData as any).homepage;
  }

  const key = pathToSeoKey[pathname];
  if (!key) return undefined;

  return (seoData as any)[key];
};

const SeoSchema = () => {
  const location = useLocation();
  const pathname = location.pathname || "/";

  const seoConfig = resolveSeoConfig(pathname);

  const pageUrl =
    BASE_URL + (pathname === "/" ? "" : pathname.replace(/\/+$/, ""));

  const title =
    seoConfig?.title ||
    "Abtik Startup Advisor pvt ltd | Business & MSME Loan and Compliance Services";

  const description =
    seoConfig?.description ||
    "Abtik Startup Advisor pvt ltd helps startups and MSMEs across India with funding, registration, compliance and growth services.";

  // Use canonical from config only if it's a full URL, otherwise fall back to pageUrl
  const canonicalFromConfig = seoConfig?.canonical;
  const canonicalUrl =
    canonicalFromConfig && /^https?:\/\//.test(canonicalFromConfig)
      ? canonicalFromConfig
      : pageUrl;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Abtik Startup Advisor pvt ltd",
    url: BASE_URL,
    description:
      "Abtik Startup Advisor pvt ltd is a business consultancy helping startups and MSMEs with loans, subsidies, registrations and compliance.",
    email: "info@abtikservices.com",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "313, Patel Ave, Sarkhej - Gandhinagar Hwy, Thaltej",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380054",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "B-209 Shilp Corporate Park, Rajpath Rangoli Rd, Thaltej",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380054",
        addressCountry: "IN",
      },
    ],
    sameAs: [
      "https://www.facebook.com/share/1aKQvTf7NU/",
      "https://www.linkedin.com/company/abtik-services/",
      "https://www.instagram.com/abtikservices?igsh=MTk3cWxteWswbTFidQ==",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+91 84888 00910",
        availableLanguage: ["en", "hi"],
      },
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: BASE_URL,
    name: "Abtik Startup Advisor pvt ltd",
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: pageUrl,
    name: title,
    description,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      url: BASE_URL,
      name: "Abtik Startup Advisor pvt ltd",
    },
  };

  useEffect(() => {
    // Remove any existing schema scripts to avoid duplicates
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => script.remove());

    const safeJson = (data: unknown) =>
      JSON.stringify(data).replace(/</g, "\\u003c");

    // Inject canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute('href', canonicalUrl);
    } else {
      const canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink);
    }

    // Inject schema scripts
    const schemas = [organizationSchema, webSiteSchema, webPageSchema];

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = safeJson(schema);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
      schemaScripts.forEach(script => script.remove());
    };
  }, [pathname, canonicalUrl]);

  return null; // Return null since we're injecting directly into head
};

export default SeoSchema;


