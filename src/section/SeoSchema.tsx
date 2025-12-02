import { useLocation } from "react-router-dom";
import seoData from "../data/seoData.json";

const BASE_URL = "https://www.abtikservices.com";

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
    "Abtik Services LLP | Business & MSME Loan and Compliance Services";

  const description =
    seoConfig?.description ||
    "Abtik Services LLP helps startups and MSMEs across India with funding, registration, compliance and growth services.";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Abtik Services LLP",
    url: BASE_URL,
    description:
      "Abtik Services LLP is a business consultancy helping startups and MSMEs with loans, subsidies, registrations and compliance.",
    email: "info@abtikservices.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "313, Patel Ave, Sarkhej - Gandhinagar Hwy, Thaltej",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380054",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/share/1aKQvTf7NU/",
      "https://www.linkedin.com/company/abtik-services/",
      "https://www.instagram.com/abtikservices?igsh=MTk3cWxteWswbTFidQ==",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+91 89281 38434",
        availableLanguage: ["en", "hi"],
      },
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: BASE_URL,
    name: "Abtik Services LLP",
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
      name: "Abtik Services LLP",
    },
  };

  const safeJson = (data: unknown) =>
    JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(webPageSchema) }}
      />
    </>
  );
};

export default SeoSchema;


