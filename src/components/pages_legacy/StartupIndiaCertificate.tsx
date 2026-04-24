"use client";
import Mainlayout from "../../section/Mainlayout";
import BgImage from "../../assets/Hero/bgImg.svg";
import Contact from "../../section/Contact";
import Image1 from "../../assets/Services/StartupIndia.webp";
import {
  Mail,
  User,
  Phone,
  Package,
  ArrowUpRight,
  ArrowRight,
  CheckCircle,
  FileText,
  Clock,
  Shield,
  Briefcase,
  Zap,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import SEO from "../SEO";

const StartupIndiaCertificate = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };
  const [isExpanded, setIsExpanded] = useState({
    isOpen: false,
    index: -1,
  });

  const faq = [
    {
      question: "1. What is Startup India registration?",
      answer:
        "Startup India registration is a government initiative to recognize and support startups in India. It provides various benefits including tax exemptions, easier compliance, and access to funding and networking opportunities.",
    },
    {
      question: "2. Who is eligible for Startup India registration?",
      answer:
        "An entity shall be considered a startup if it's incorporated as a private limited company, partnership firm, or limited liability partnership in India, is less than 10 years old, and has an annual turnover not exceeding ₹100 crores.",
    },
    {
      question: "3. What are the tax benefits of Startup India registration?",
      answer:
        "Registered startups can apply for income tax exemption for 3 consecutive years and exemption on capital gains. They also get easier access to government tenders and funding through various schemes.",
    },
    {
      question: "4. What documents are required for registration?",
      answer:
        "Key documents include certificate of incorporation, brief description of business innovation, founders' details, pitch deck or business plan, and proof of innovation or scalability.",
    },
    {
      question: "5. How long does the registration process take?",
      answer:
        "The DPIIT recognition process typically takes 10 to 15 working days once the application is submitted with all required documents and details correctly.",
    },
    {
      question:
        "6. Is it mandatory to have a recommendation letter for registration?",
      answer:
        "No, as per latest guidelines, a recommendation letter from an incubator or industry association is no longer mandatory for Startup India registration.",
    },
  ];

  const toggleIsExpanded = (index: number) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  // Hero
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

  // Get In Touch
  const refTouch = useRef(null);
  const isInViewTouch = useInView(refTouch, { once: true, amount: 0.1 });
  const [touchCols, setTouchCols] = useState(1);
  useEffect(() => {
    const updateCols = () => {
      setTouchCols(window.innerWidth >= 768 ? 2 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getTouchDelay = (index: number) => {
    const row = Math.floor(index / touchCols);
    return 0.5 + row * 0.5;
  };

  // What is Startup India
  const refStartupInfo = useRef(null);
  const isInViewStartupInfo = useInView(refStartupInfo, { once: true, amount: 0.1 });

  // DPIIT Benefits
  const refBenefits = useRef(null);
  const isInViewBenefits = useInView(refBenefits, { once: true, amount: 0.1 });

  // Process Steps
  const refProcess = useRef(null);
  const isInViewProcess = useInView(refProcess, { once: true, amount: 0.1 });
  const [processCols, setProcessCols] = useState(1);
  useEffect(() => {
    const updateCols = () => {
      setProcessCols(window.innerWidth >= 768 ? 3 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getProcessDelay = (index: number) => {
    const row = Math.floor(index / processCols);
    return 0.5 + row * 0.5;
  };

  const processData = [
    {
      icon: FileText,
      title: "Document Preparation",
      description:
        "Gather required documents including COI, innovation brief, and founder details for DPIIT recognition application.",
    },
    {
      icon: Briefcase,
      title: "Online Application Filing",
      description:
        "Expert filing of Startup India application on the official portal with proper innovation highlights and business plan.",
    },
    {
      icon: Zap,
      title: "Recognition & Certificate",
      description:
        "Successful DPIIT recognition and issuance of Startup India certificate to unlock all government benefits.",
    },
  ];

  // Key Features
  const refFeatures = useRef(null);
  const isInViewFeatures = useInView(refFeatures, { once: true, amount: 0.1 });
  const [featuresCols, setFeaturesCols] = useState(1);
  useEffect(() => {
    const updateCols = () => {
      setFeaturesCols(window.innerWidth >= 768 ? 3 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getFeaturesDelay = (index: number) => {
    const row = Math.floor(index / featuresCols);
    return 0.5 + row * 0.5;
  };

  const featuresData = [
    {
      icon: Clock,
      title: "Easy & Fast Registration",
      description: "Quick online process for DPIIT recognition with expert assistance for smooth certificate issuance.",
    },
    {
      icon: Package,
      title: "Access to Funding",
      description: "Unlock eligibility for Startup India Seed Fund Scheme and other government funding opportunities.",
    },
    {
      icon: Shield,
      title: "Self certification Compliance",
      description: "Self certify under 6 labor & 3 environmental laws for easier business compliance.",
    },
  ];

  // FAQ
  const refFAQ = useRef(null);
  const isInViewFAQ = useInView(refFAQ, { once: true, amount: 0.4 });
  const getFaqDelay = (index: number) => {
    const row = Math.floor(index / 1);
    return 0.2 + row * 0.1;
  };

  // Contact
  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, { once: true, amount: 0.4 });

  // === Main JSX ===
  return (
    <>
      <SEO 
        title="Startup India DPIIT Recognition Online | Abtik"
        description="Get DPIIT recognition for your startup online with Abtik. Unlock tax benefits, patent rebates, and easier compliance under the Startup India initiative. Apply now!"
        canonical="https://abtikservices.com/startup-india-registration/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Startup India Registration",
            "description": "Get DPIIT recognition for your startup under the Startup India initiative. Unlock tax benefits, patent rebates, and easier compliance.",
            "provider": {
              "@type": "FinancialService",
              "name": "Abtik Startup Advisor Pvt Ltd"
            },
            "areaServed": "IN"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://abtikservices.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Startup India Registration",
                "item": "https://abtikservices.com/startup-india-registration/"
              }
            ]
          }
        ]}
      />

      <Mainlayout>
        {/* Hero Section */}
        <section
          ref={refHero}
          className="flex justify-center items-center h-[70vh] sm:h-[80vh] lg:h-[85vh] xl:h-[80vh] 2xl:h-[75vh]
          lg:justify-end lg:items-center bg-center bg-cover 
          w-full max-w-[1920px] mx-auto
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14
          relative overflow-hidden"
          style={{
            backgroundImage: `url(${ BgImage.src })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/20 lg:bg-transparent"></div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInViewHero ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none lg:w-1/2 
            space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8
            text-center lg:text-left"
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
             font-bold leading-tight text-white font-1 lg:text-inherit tracking-wide main-heading"
            >
              Startup India Registration — DPIIT Recognition
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
             leading-relaxed sm:leading-relaxed md:leading-relaxed
             text-white lg:text-white
             paragraph !text-white
             max-w-none sm:max-w-lg font-3 md:max-w-xl lg:max-w-none mx-auto lg:mx-0"
            >
              Get DPIIT recognized and unlock a world of government benefits, tax exemptions,
              and funding opportunities for your startup with Abtik Startup Advisor pvt ltd Team's expert assistance.
            </p>
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleOpenDialog}
                className="custom-btn text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Register Your Startup
              </button>
            </div>
          </motion.div>
        </section>

        {/* Get In Touch Section */}
        <motion.section
          ref={refTouch}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#f7f7f7] py-16"
        >
          <div className="w-full max-w-[1920px] mx-auto px-7 md:px-14 flex flex-col md:flex-row gap-8 box-border">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: getTouchDelay(0) }}
              className="w-full md:w-[320px] flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 box-border"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 font-2">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                  aria-label="Visit us at 123 Business Hub, New Delhi, India"
                >
                  <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                    <User className="w-5 h-5 text-white" />
                  </span>
                  <div>
                    <p className="text-base text-gray-700 font-semibold font-2">
                      Abtik Startup Advisor pvt ltd Team
                    </p>
                    <p className="text-xs text-gray-600 font-3">
                      Abtik Startup Advisor pvt ltd Team
                      <br />
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+91 89281 38434"
                  className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                  aria-label="Call us at +91 89281 38434"
                >
                  <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </span>
                  <div>
                    <p className="text-base text-gray-700 font-semibold font-2">
                      Call Anytime
                    </p>
                    <p className="text-xs text-gray-600 font-3">
                      <a href="tel:+91 89281 38434">+91 89281 38434</a>
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:info@abtikservices.com"
                  className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                  aria-label="Email us at info@abtikservices.com"
                >
                  <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </span>
                  <div>
                    <p className="text-base text-gray-700 font-semibold font-2">
                      Write Email
                    </p>
                    <p className="text-xs text-gray-600 font-3">
                      <a href="mailto:info@abtikservices.com">
                        info@abtikservices.com
                      </a>
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: getTouchDelay(1) }}
              className="flex-grow grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] rounded-4xl overflow-hidden"
            >
              <div className="flex flex-col justify-evenly p-8 md:p-12 box-border">
                <h2 className="sub-heading text-white font-1">
                  Startup India Registration
                </h2>
                <p className="font-3 text-white">
                  Empowering Businesses through Comprehensive Solutions From Fund
                  Management to Legal Empowering.
                </p>
              </div>
              <div className="w-full flex items-center justify-center p-8">
                <img src={Image1.src} alt="Startup India DPIIT Recognition Certificate" className="w-full h-auto rounded-4xl object-contain shadow-2xl" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* What is Startup India */}
        <motion.section
          ref={refStartupInfo}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewStartupInfo ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#f7f7f7] py-8"
        >
          <div className="w-full max-w-[1920px] mx-auto px-7 md:px-14">
            <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
              <h2 className="sub-heading font-2 text-white text-left">
                What Is Startup India Registration?
              </h2>
              <p className="paragraph font-3 !text-white mx-auto text-left">
                Startup India is a flagship initiative of the Government of India, intended to
                build a strong ecosystem that is conducive for the growth of startup businesses,
                to drive sustainable economic growth and generate large scale employment opportunities.
                Recognition by the Department for Promotion of Industry and Internal Trade (DPIIT)
                allows startups to access tax benefits, easier compliance, intellectual property protection,
                and easier access to funding.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          ref={refFeatures}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewFeatures ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#f7f7f7] py-8"
        >
          <div className="w-full max-w-[1920px] mx-auto px-7 md:px-14">
            <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
              Key Features of Startup India Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuresData?.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInViewFeatures ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: getFeaturesDelay(index) }}
                  className="bg-white p-6 rounded-4xl shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="mb-4 inline-block p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-3 text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* DPIIT Benefits Section */}
        <motion.section
          ref={refBenefits}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#f7f7f7] py-8"
        >
          <div className="w-full max-w-[1920px] mx-auto px-7 md:px-14">
            <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
              DPIIT Recognition Benefits
            </h2>
            <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
              <p className="text-sm md:text-base font-3 text-gray-600 text-center">
                Recognition by DPIIT unlocks a plethora of benefits for startups, enabling them to
                save costs, access capital, and focus on innovation and growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-gray-800 font-2">
                    Tax & Financial Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 font-3">
                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                      <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                      <span>3 years income tax holiday (80-IAC)</span>
                    </li>
                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                      <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                      <span>Exemption from Angel Tax (Section 56)</span>
                    </li>
                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                      <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                      <span>Up to 80% rebate on patent filings</span>
                    </li>
                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                      <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                      <span>Access to ₹10,000 Cr Fund of Funds</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-gray-800 font-2">
                    Ease of Compliance
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 font-3">
                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                      <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                      <span>Self certification under labor & env laws</span>
                    </li>
                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                      <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                      <span>No inspection for first 3 years</span>
                    </li>
                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                      <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                      <span>Easier winding up in 90 days</span>
                    </li>
                    <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                      <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                      <span>Priority in government procurement (GeM)</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          ref={refProcess}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewProcess ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#f7f7f7] py-8"
        >
          <div className="w-full max-w-[1920px] mx-auto px-7 md:px-14">
            <h2 className="sub-heading font-2 text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
              Our Process for Startup India Registration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {processData?.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInViewProcess ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: getProcessDelay(index) }}
                  className="bg-white p-6 rounded-4xl shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="mb-4 inline-block p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
                    <process.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-2">
                    {process.title}
                  </h3>
                  <p className="text-sm font-3 text-gray-600">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          ref={refFAQ}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewFAQ ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#f7f7f7] py-8 md:py-16"
        >
          <div className="w-full max-w-[1920px] mx-auto space-y-6">
            <h2 className="sub-heading font-2 bg-gradient-to-t text-center bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="px-6 md:px-24 space-y-4 font-3">
              {faq.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInViewFAQ ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.1, delay: getFaqDelay(index) }}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
                >
                  <h2
                    className={`p-2.5 px-4 relative cursor-pointer flex items-center justify-between text-base font-medium ${
                      isExpanded.isOpen && isExpanded.index === index
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                    onClick={() => toggleIsExpanded(index)}
                  >
                    <span>{data.question}</span>
                    <button className="border-2 p-1 transition-all duration-300 hover:scale-105 h-8 w-8 flex justify-center items-center border-[#052EAA] rounded-lg text-[#052EAA]">
                      {isExpanded.isOpen && isExpanded.index === index ? (
                        <ArrowRight className="w-5 h-5" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5" />
                      )}
                    </button>
                  </h2>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded.isOpen && isExpanded.index === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="p-4 bg-gradient-to-t rounded-b-lg from-[#052EAA] to-[#3CA2E2] text-white">
                      {data.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={refContact}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewContact ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Contact />
        </motion.section>
      </Mainlayout>
    </>
  );
};

export default memo(StartupIndiaCertificate);
