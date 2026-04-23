import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Hero/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/Services/Fssai.webp";
import {
  Mail,
  User,
  Phone,
  Package,
  Headset,
  ArrowUpRight,
  ArrowRight,
  CheckCircle,
  FileText,
  Clock,
  Shield,
  Utensils,
  Award,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";

const FssaiLiecence = () => {
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
      question: "1. What is FSSAI license?",
      answer:
        "FSSAI license is a mandatory certification for all food business operators (FBOs) in India. It ensures that the food being sold or processed meets the safety standards set by the Food Safety and Standards Authority of India.",
    },
    {
      question: "2. Who needs an FSSAI license?",
      answer:
        "Any person or entity involved in the food business, including manufacturers, traders, wholesalers, retailers, distributors, food transporters, and importers, needs to register for an FSSAI license.",
    },
    {
      question: "3. What are the types of FSSAI licenses?",
      answer:
        "There are three types: 1. Basic Registration (for turnover up to ₹12 lakhs), 2. State License (for turnover between ₹12 lakhs and ₹20 crores), and 3. Central License (for turnover above ₹20 crores or for large scale importers/exporters).",
    },
    {
      question: "4. What documents are required for FSSAI registration?",
      answer:
        "Documents typically include a photo ID, list of food products, proof of possession of premises, partnership deed or COI, and a detailed food safety management plan.",
    },
    {
      question: "5. How long is an FSSAI license valid?",
      answer:
        "An FSSAI license can be issued for a period ranging from 1 to 5 years, depending on the operator's preference. It must be renewed before its expiry to avoid penalties.",
    },
    {
      question: "6. What is the penalty for not having an FSSAI license?",
      answer:
        "Operating a food business without an FSSAI license can lead to legal action, including imprisonment and fines ranging from thousands to lakhs of rupees, depending on the severity of the violation.",
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

  // What is FSSAI
  const refFssaiInfo = useRef(null);
  const isInViewFssaiInfo = useInView(refFssaiInfo, { once: true, amount: 0.1 });

  // License Types
  const refTypes = useRef(null);
  const isInViewTypes = useInView(refTypes, { once: true, amount: 0.1 });

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
      title: "Document Collection",
      description:
        "Gather all necessary documents including identity proof, premises proof, and food category list for your FSSAI application.",
    },
    {
      icon: Utensils,
      title: "Online Application",
      description:
        "Our experts will file your application on the FosCos portal with precision, ensuring all details meet FSSAI standards.",
    },
    {
      icon: Award,
      title: "License Issuance",
      description:
        "After successful verification by the food safety department, your FSSAI license or registration certificate will be issued.",
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
      title: "Fast Track Processing",
      description: "Quick processing of your FSSAI registration to get your business up and running without delays.",
    },
    {
      icon: Package,
      title: "Expert Guidance",
      description: "Complete support in selecting the right food categories and ensuring compliance with FSSAI regulations.",
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Ensure your food business is 100% compliant with Indian food safety laws and avoid heavy penalties.",
    },
  ];

  // === Main JSX ===
  return (
    <>
      <HeadProvider>
        <Title>{seoData?.fssaiLicenseService?.title}</Title>
        <Meta name="description" content={seoData?.fssaiLicenseService?.description} />
        <Meta name="keywords" content={seoData?.fssaiLicenseService?.keyword} />
        <Meta name="robots" content={seoData?.fssaiLicenseService?.robots} />
        <link rel="canonical" href={seoData?.fssaiLicenseService?.canonical} />
      </HeadProvider>

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
            backgroundImage: `url(${BgImage})`,
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
             font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight
             text-white lg:text-inherit tracking-wide
             main-heading font-1"
            >
              FSSAI Food License Registration Online
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
             leading-relaxed sm:leading-relaxed md:leading-relaxed
             text-white lg:text-white
             paragraph !text-white
             max-w-none font-3 sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0"
            >
              Ensure food safety and legal compliance for your business with a mandatory FSSAI license.
              Abtik provides expert assistance for Basic, State, and Central FSSAI registrations.
            </p>
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleOpenDialog}
                className="custom-btn text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Get FSSAI License
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
                  FSSAI Food License
                </h2>
                <p className="font-3 text-white">
                  Empowering Businesses through Comprehensive Solutions From Fund
                  Management to Legal Empowering.
                </p>
              </div>
              <div className="w-full flex items-center justify-center p-8">
                <img src={Image1} className="w-full h-auto rounded-4xl object-contain shadow-2xl" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* What is FSSAI Section */}
        <motion.section
          ref={refFssaiInfo}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewFssaiInfo ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#f7f7f7] py-8"
        >
          <div className="w-full max-w-[1920px] mx-auto px-7 md:px-14">
            <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
              <h2 className="sub-heading font-2 text-white text-left">
                Why Do You Need an FSSAI License?
              </h2>
              <p className="paragraph font-3 !text-white mx-auto text-left">
                FSSAI registration or license is more than just a legal requirement; it's a mark of quality
                that builds trust with your customers. It ensures that the food products handled by your business
                are safe for consumption and comply with the high standards of food hygiene and safety in India.
                Whether you are a startup or an established business, having an FSSAI license is crucial for
                brand building and legal security.
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
              Key Features of FSSAI Registration
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
              Our FSSAI Registration Process
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
            <h1 className="sub-heading font-2 bg-gradient-to-t text-center bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent">
              Frequently Asked Questions
            </h1>
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

export default memo(FssaiLiecence);
