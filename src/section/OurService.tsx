"use client";
import { useNavigate } from "@/utils/hooks/useNavigate";;
import Image1 from "../assets/Services/Grants.webp";
import Image2 from "../assets/Services/StartupIndia.webp";
import Image3 from "../assets/Services/MsmeCertificate.webp";
import Image4 from "../assets/Services/SeedFund.webp";
import Image5 from "../assets/Services/TrademarkRegistration.webp";
import Image6 from "../assets/Services/IsoCertificate.webp";
import Image7 from "../assets/Services/ZedCertificate.webp";
import Image8 from "../assets/Services/PmegpLoan.webp";
import Image9 from "../assets/Services/Gst&Compliance.webp";
import Image10 from "../assets/Services/MsmeLoan.webp";
import Image11 from "../assets/Services/NaifLoan.webp";
import Image12 from "../assets/Services/NbfcLoan.webp";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";

const services = [
  {
    title: "Grants",
    description:
      "We assist in finding and applying for suitable government grants, ensuring your business receives deserved financial aid without any stress.",
    img: Image1.src,
    path: "/services/funding/grants",
  },
  {
    title: "Startup India Certificate",
    description:
      "Gain official startup recognition to access tax benefits, funding opportunities, and credibility via the Startup India initiative.",
    img: Image2.src,
    path: "/services/certificate/startup-india",
  },
  {
    title: "MSME Certificate Registration",
    description:
      "Register as an MSME to access subsidies, priority loans, and various government schemes that support small business growth effectively.",
    img: Image3.src,
    path: "/services/certificate/msme",
  },
  {
    title: "Seed Fund",
    description:
      "We provide step by step guidance to secure government seed funding, helping your startup launch with reliable support from the beginning.",
    img: Image4.src,
    path: "/services/funding/seed-fund",
  },
  {
    title: "Trademark Registration",
    description:
      "Safeguard your brand name, logo, or tagline through trademark registration, ensuring your unique identity remains protected and exclusive.",
    img: Image5.src,
    path: "/services/legal/trademark-registration",
  },
  {
    title: "ISO Certificate",
    description:
      "Demonstrate quality commitment with ISO certification, which we help obtain to meet global standards and build trust in your operations.",
    img: Image6.src,
    path: "/services/certificate/iso",
  },
  {
    title: "ZED Certificate",
    description:
      "Obtain Zero Defect Zero Effect certification to ensure high quality, eco friendly practices aligned with recognized government standards.",
    img: Image7.src,
    path: "/services/certificate/zed",
  },
  {
    title: "PMEGP Loan Scheme",
    description:
      "Start your venture with up to ₹25 lakh via PMEGP, where we streamline applications for government loans and subsidies to ease the process.",
    img: Image8.src,
    path: "/services/funding/subsidy/pmegp",
  },
  {
    title: "GST & Compliance",
    description:
      "Streamline your tax processes with our comprehensive GST registration and compliance services, ensuring your business stays updated with legal requirements.",
    img: Image9.src,
    path: "/services/tax/gst-filing",
  },
  {
    title: "MSME Loan",
    description:
      "Fuel your small business growth with specialized MSME loans, offering competitive interest rates and flexible terms to meet your capital needs.",
    img: Image10.src,
    path: "/services/funding/msme-loans",
  },
  {
    title: "NAIFF/AIFF Loan",
    description:
      "Scale your innovative business with strategic equity investments and loans from NAIFF/AIFF funds, customized for growth-stage companies.",
    img: Image11.src,
    path: "/services/funding/agriculture/naiff-aiff",
  },
  {
    title: "NBFC Business Loan",
    description:
      "Secure business funding through Non-Banking Financial Companies (NBFCs) with faster processing and customized loan options for your unique requirements.",
    img: Image12.src,
    path: "/services/funding/private-funding/nbfc",
  },
];

const OurService = () => {
  const nav = useNavigate();

  const [cols, setCols] = useState(4); // Default to 4 or some reasonable fallback
  const [visibleCount, setVisibleCount] = useState(4); // Start with 4 items

  // Update columns on resize (no need to adjust visibleCount)
  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      if (width >= 1280) setCols(4);
      else if (width >= 1024) setCols(3);
      else if (width >= 768) setCols(2);
      else setCols(1);
    };
    
    updateCols(); // Run once on mount
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const HandleClick = (path: any) => nav(path);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const canLoadMore = visibleCount < services.length;

  const getDelay = (index: number) => {
    const row = Math.floor(index / cols);
    return 0.1 + row * 0.1; // Start after section animation, stagger rows
  };

  return (
    <motion.section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center bg-[#f7f7f7] px-5 sm:px-7 md:px-12 lg:px-14 py-8 md:py-16"
    >
      <div className="w-full max-w-[1920px] mx-auto space-y-6">
        <h2
          className="sub-heading text-center bg-clip-text bg-gradient-to-b from-[#052EAA] to-[#3CA2E2] text-transparent font-1"
        
        >
          Our Service
        </h2>
        <p
          className="paragraph text-center font-2"
         
        >
          “Smart business solutions from registration to funding, licensing &
          certification all in one place.”
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
          {services.slice(0, visibleCount).map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: getDelay(index) }}
              onClick={() => HandleClick(service?.path)}
              className="bg-white cursor-pointer p-2.5 pb-6 shadow-lg rounded-4xl space-y-4 duration-300 transition-all hover:scale-105"
            >
              <div className="w-full flex items-center justify-center p-2">
                <img
                  src={service.img}
                  width={400}
                  height={192}
                  className="w-full h-48 object-contain rounded-4xl bg-gray-50 shadow-inner transition-all duration-300"
                  alt={service.title}
                  loading="lazy"
                />
              </div>
              <div className="space-y-3 px-3">
                <p className="text-center text-xl text-[#3CA2E2] font-semibold font-4 line-clamp-2">
                  {service?.title}
                </p>
                <p className="text-center paragraph line-clamp-3 font-4">
                  {service?.description}
                </p>
                <div className="text-center pt-2">
                  <button
                    className="custom-btn w-full max-w-[120px] !py-3 mx-auto font-2"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {canLoadMore && (
          <div className="flex justify-center mt-12">
            <button
              className="custom-btn w-full max-w-[120px] !py-3 mx-auto font-2"
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 4)} // Load next 4
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};
export default memo(OurService);
