import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/StartUpIndia/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/StartUpIndia/Group 1000007811.png";
import {
    Mail,
    MapPin,
    Phone,
  
    Headset,
    ArrowUpRight,
    ArrowRight,
    CheckCircle,
    FileText,
    DollarSign,
    TrendingUp,
    Users,
  
    Shield,
    Banknote,
   
    Umbrella,
} from "lucide-react";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const CGTMSE = () => {
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
            question: "1. What is CGTMSE scheme?",
            answer:
                "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) is a scheme launched by Government of India to provide collateral-free credit guarantee to micro and small enterprises. It guarantees loans up to ₹2 crore without requiring collateral security from borrowers.",
        },
        {
            question: "2. What is the maximum loan amount covered under CGTMSE?",
            answer:
                "CGTMSE covers loans up to ₹2 crore for micro and small enterprises. The scheme provides guarantee coverage of 85% for loans up to ₹5 lakh and 75% for loans above ₹5 lakh but up to ₹2 crore, enabling easier access to credit.",
        },
        {
            question: "3. Who is eligible for CGTMSE guarantee?",
            answer:
                "Micro and small enterprises engaged in manufacturing, service, and retail trade activities are eligible. The borrower should be a new enterprise or existing enterprise requiring additional credit. The enterprise should not be in default to any bank or financial institution.",
        },
        {
            question: "4. What is the guarantee fee for CGTMSE?",
            answer:
                "CGTMSE charges an annual guarantee fee ranging from 0.75% to 1.5% of the guaranteed amount, depending on the loan amount and type of enterprise. There's also a one-time guarantee fee of 1% to 1.5% of the sanctioned amount.",
        },
        {
            question: "5. What documents are required for CGTMSE coverage?",
            answer:
                "Required documents include loan application, project report, memorandum of association/partnership deed, financial statements, identity and address proof, Udyam Registration certificate, and bank statements. Specific documents may vary based on the lending institution's requirements.",
        },
        {
            question: "6. Can existing loans be covered under CGTMSE?",
            answer:
                "No, CGTMSE coverage is only available for fresh loans or additional credit facilities. Existing loans cannot be converted to CGTMSE guaranteed loans. However, existing enterprises can apply for additional credit under the scheme for business expansion or working capital needs.",
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

    // What is CGTMSE
    const refCGTMSE = useRef(null);
    const isInViewCGTMSE = useInView(refCGTMSE, { once: true, amount: 0.1 });

    // Guarantee Structure
    const refGuaranteeStructure = useRef(null);
    const isInViewGuaranteeStructure = useInView(refGuaranteeStructure, { once: true, amount: 0.1 });

    // CGTMSE Benefits
    const refCGTMSEBenefits = useRef(null);
    const isInViewCGTMSEBenefits = useInView(refCGTMSEBenefits, { once: true, amount: 0.1 });

    // Abtik Process
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
            title: "Loan Application Assistance",
            description:
                "We help you prepare comprehensive loan applications and project reports that meet CGTMSE guidelines and lending institution requirements.",
        },
        {
            icon: Users,
            title: "Bank Coordination",
            description:
                "Our team coordinates with empaneled banks and financial institutions to ensure smooth processing of your CGTMSE guaranteed loan application.",
        },
        {
            icon: Headset,
            title: "Guarantee Process Support",
            description:
                "We provide complete guidance through the CGTMSE guarantee approval process and help with documentation and compliance requirements.",
        },
    ];

    // Benefits
    const refBenefits = useRef(null);
    const isInViewBenefits = useInView(refBenefits, { once: true, amount: 0.4 });
    const [benefitsCols, setBenefitsCols] = useState(1);
    useEffect(() => {
        const updateCols = () => {
            setBenefitsCols(window.innerWidth >= 768 ? 3 : 1);
        };
        updateCols();
        window.addEventListener("resize", updateCols);
        return () => window.removeEventListener("resize", updateCols);
    }, []);
    const getBenefitsDelay = (index: number) => {
        const row = Math.floor(index / benefitsCols);
        return 0.5 + row * 0.5;
    };
    const benefitsData = [
        {
            icon: DollarSign,
            title: "Up to ₹2 Crore Guarantee",
            description:
                "Access collateral-free loans up to ₹2 crore with CGTMSE guarantee coverage, eliminating the need for third-party guarantees or collateral security.",
        },
        {
            icon: TrendingUp,
            title: "High Guarantee Coverage",
            description:
                "Benefit from 85% guarantee coverage for loans up to ₹5 lakh and 75% coverage for loans above ₹5 lakh, reducing lender risk and improving approval chances.",
        },
        {
            icon: Shield,
            title: "No Collateral Required",
            description:
                "Start or expand your business without pledging any collateral or third-party guarantees, making credit accessible for small enterprises.",
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

    return (
        <Mainlayout>
            {/* Hero Section */}
            <section
                ref={refHero}
                className="flex justify-center items-center h-[70vh] sm:h-[80vh] lg:h-[85vh] xl:h-screen 
                    lg:justify-end lg:items-center bg-center bg-cover 
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
                          main-heading"
                        style={{ fontFamily: "Anton" }}
                    >
                        Secure{" "}
                        <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                            CGTMSE Guarantee
                        </span>{" "}
                        for Collateral-Free Loans
                    </h1>
                    <p
                        className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0"

                           style={{fontFamily:"Montserrat Alternates"}}
                    >
                        Get collateral-free business loans up to ₹2 crore with CGTMSE guarantee coverage.
                        Eliminate the need for third-party guarantees and access credit easily
                        for your micro and small enterprise growth.
                    </p>
                    <div className="pt-2 sm:pt-4">
                        <button
                            onClick={handleOpenDialog}
                            className="custom-btn 
                              text-sm sm:text-base md:text-lg
                              px-6 sm:px-8 md:px-10 lg:px-12
                              py-3 sm:py-3.5 md:py-4
                               transition-transform duration-300
                              shadow-lg hover:shadow-xl"
                        >
                            Apply for CGTMSE
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
                className="flex flex-col md:flex-row gap-8 bg-[#f7f7f7] py-16 px-7 md:px-14"
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: getTouchDelay(0) }}
                    className="w-full md:w-[300px] flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                    <h3
                        className="text-lg sm:text-xl font-semibold text-gray-800 mb-4"
                        style={{ fontFamily: "Montserrat Alternates" }}
                    >
                        Get in Touch
                    </h3>
                    <div className="space-y-4">
                        <a
                            href="tel:+919876543210"
                            className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                            aria-label="Call us at +91 98765 43210"
                        >
                            <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                <Phone className="w-5 h-5 text-white" />
                            </span>
                            <div>
                                <p className="text-base text-gray-700 font-semibold">
                                    Call Anytime
                                </p>
                                <p className="text-xs text-gray-600">+91 98765 43210</p>
                            </div>
                        </a>
                        <a
                            href="mailto:info@abtik.com"
                            className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                            aria-label="Email us at info@abtik.com"
                        >
                            <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                <Mail className="w-5 h-5 text-white" />
                            </span>
                            <div>
                                <p className="text-base text-gray-700 font-semibold">
                                    Write Email
                                </p>
                                <p className="text-xs text-gray-600">info@abtik.com</p>
                            </div>
                        </a>
                        <a
                            href="https://www.google.com/maps?q=123+Business+Hub,+New+Delhi,+India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
                            aria-label="Visit us at 123 Business Hub, New Delhi, India"
                        >
                            <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                <MapPin className="w-5 h-5 text-white" />
                            </span>
                            <div>
                                <p className="text-base text-gray-700 font-semibold ">
                                    Visit Us Anytime
                                </p>
                                <p className="text-xs text-gray-600">
                                    123 Business Hub,
                                    <br />
                                    New Delhi, India
                                </p>
                            </div>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInViewTouch ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: getTouchDelay(1) }}
                    className="flex-grow bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] rounded-2xl flex items-center justify-center h-full"
                >
                    <img
                        src={Image1}
                        alt="CGTMSE illustration"
                        className="max-h-80 w-full rounded-lg object-contain p-4"
                    />
                </motion.div>
            </motion.section>

            {/* What is CGTMSE */}
            <motion.section
                ref={refCGTMSE}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewCGTMSE ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-4xl p-8 md:p-12 space-y-4 text-center">
                    <h2
                        className="sub-heading text-white text-left"
                        style={{ fontFamily: "Anton" }}
                    >
                        What Is CGTMSE Scheme?
                    </h2>
                    <p className="paragraph !text-white mx-auto text-left"
                      style={{fontFamily:"Montserrat Alternates"}}
                    >
                        Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) is a unique scheme
                        launched by the Government of India to provide collateral-free credit guarantee to micro
                        and small enterprises. The scheme guarantees loans up to ₹2 crore without requiring any
                        collateral security or third-party guarantees, making credit accessible to entrepreneurs
                        who lack traditional security arrangements but have viable business propositions.
                    </p>
                </div>
            </motion.section>

            {/* CGTMSE Guarantee Structure Section */}
            <motion.section
                ref={refGuaranteeStructure}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewGuaranteeStructure ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                    style={{ fontFamily: "Anton" }}
                >
                    CGTMSE Guarantee Coverage Structure
                </h2>

                <div className="mt-8 bg-white rounded-4xl p-4 md:p-8 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Small Loans Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewGuaranteeStructure ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Banknote className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-3"
                                    style={{ fontFamily: "Montserrat Alternates" }}
                                >
                                    Loans up to ₹5 Lakh
                                </h3>
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-2xl font-bold">85% Guarantee</p>
                                    <p className="text-xs opacity-90">Coverage percentage</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs text-gray-700">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Maximum guarantee coverage for small loans</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Ideal for micro enterprises and startups</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Lower guarantee fee structure</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Faster approval process</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Large Loans Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewGuaranteeStructure ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl border-2 border-blue-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                                    <Umbrella className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-3"
                                    style={{ fontFamily: "Montserrat Alternates" }}
                                >
                                    Loans above ₹5 Lakh
                                </h3>
                                <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] text-white p-3 rounded-xl">
                                    <p className="text-2xl font-bold">75% Guarantee</p>
                                    <p className="text-xs opacity-90">Up to ₹2 crore</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-xs text-gray-700">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Substantial guarantee coverage for larger loans</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Suitable for small enterprise expansion</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Technology upgradation support</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Working capital and term loan coverage</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* CGTMSE Benefits Section */}
            <motion.section
                ref={refCGTMSEBenefits}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewCGTMSEBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                    style={{ fontFamily: "Anton" }}
                >
                    CGTMSE Benefits & Eligibility
                </h2>
                <div className="mt-8 bg-white rounded-4xl p-4 md:p-12 space-y-6 shadow-md">
                    <p className="text-sm md:text-base text-gray-600 text-center"
                      style={{fontFamily:"Montserrat Alternates"}}
                    >
                        CGTMSE provides comprehensive credit guarantee support, enabling micro and small enterprises
                        to access formal banking credit without traditional collateral security requirements.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewCGTMSEBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800"
                                style={{ fontFamily: "Montserrat Alternates" }}
                            >
                                Key Benefits
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Collateral-free loans up to ₹2 crore.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>High guarantee coverage (75-85%).</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>No third-party guarantees required.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Faster loan processing and approval.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Available for both term loans and working capital.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewCGTMSEBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="space-y-4"
                        >
                            <h3
                                className="text-lg font-semibold text-gray-800"
                                style={{ fontFamily: "Montserrat Alternates" }}
                            >
                                Eligibility Criteria
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Micro and small enterprises as per MSMED Act.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Manufacturing, service, and retail trade activities.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>New enterprises or existing requiring additional credit.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Should not be in default to any financial institution.</span>
                                </li>
                                <li className="grid grid-cols-[20px_1fr] gap-2 items-start">
                                    <CheckCircle className="w-5 h-5 text-[#3CA2E2]" />
                                    <span>Valid Udyam Registration certificate required.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Abtik Process Section */}
            <motion.section
                ref={refProcess}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewProcess ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8"
            >
                <h2 className="sub-heading text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                    style={{ fontFamily: "Anton" }}
                >
                    How Abtik Helps You Get CGTMSE Guarantee
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2"
                                style={{ fontFamily: "Montserrat Alternates" }}
                            >
                                {process.title}
                            </h3>
                            <p className="text-sm text-gray-600">{process.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
                ref={refBenefits}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="px-7 md:px-14 bg-[#f7f7f7] py-8 "
            >
                <h2 className="sub-heading text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]"
                    style={{ fontFamily: "Anton" }}
                >
                    Why Choose Abtik for CGTMSE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {benefitsData?.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: getBenefitsDelay(index) }}
                            className="bg-white p-6 rounded-4xl shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="mb-4 inline-block p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            <h3
                                className="text-lg font-semibold text-gray-800 mb-2"
                                style={{ fontFamily: "Montserrat Alternates" }}
                            >
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-gray-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                ref={refFAQ}
                initial={{ y: 100, opacity: 0 }}
                animate={isInViewFAQ ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="bg-[#f7f7f7]  py-8 md:py-16 space-y-6"
            >
                <h1 className="sub-heading bg-gradient-to-t text-center  bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent"
                    style={{ fontFamily: "Anton" }}
                >
                    Frequently Asked Questions
                </h1>
                <div
                    className="px-6  md:px-24 space-y-4 "
                    style={{ fontFamily: "Montserrat Alternates" }}
                >
                    {faq.map((data, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInViewFAQ ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.1, delay: getFaqDelay(index) }}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
                        >
                            <h2
                                className={`p-2.5 px-4 relative cursor-pointer flex items-center justify-between  text-base font-medium ${isExpanded.isOpen && isExpanded.index === index
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
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded.isOpen && isExpanded.index === index
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
    );
};

export default memo(CGTMSE);
