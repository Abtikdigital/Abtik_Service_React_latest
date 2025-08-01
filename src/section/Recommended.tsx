import Image1 from "../assets/Recommended/Img1.svg";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";

const Recommended = () => {
  const recommendedData = [
    {
      title: "Start-Up India Registration",
      img: Image1,
      description:
        "A DPIIT-recognized government program that enables eligible startups to access tax exemptions, self-certification....",
    },
    {
      title: "Seed Fund Scheme",
      img: Image1,
      description:
        "An initiative under Startup India that provides early-stage funding through government-approved incubators. It ....",
    },
    {
      title: "MSME Loan",
      img: Image1,
      description:
        "Loans provided to Micro, Small, and Medium Enterprises under various central and state government schemes. These....",
    },
    {
      title: "NBFC Loan",
      img: Image1,
      description:
        "Loans provided by Non-Banking Financial Companies with simplified documentation and eligibility. These are....",
    },
    {
      title: "PMEGP Loan",
      img: Image1,
      description:
        "A credit-linked subsidy scheme by the Government of India that supports new micro-enterprises in the manufacturing or....",
    },
    {
      title: "NAIIF Loan",
      img: Image1,
      description:
        "Equity-based funding made available through SEBI-registered Alternative Investment Funds (AIFs) under the National....",
    },
    {
      title: "GST & Tax Compliance",
      img: Image1,
      description:
        "GST registration, monthly and annual return filings, income tax filing, TDS management, and audit preparation. Ensures....",
    },
    {
      title: "Tax Exemption Certificates (80-IAC, 12AB, 80G)",
      img: Image1,
      description:
        "Government-issued certificates offering tax benefits to eligible startups and NGOs. These include 80-IAC....",
    },
  ];

  const [cols, setCols] = useState(1);

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      if (width >= 1280) setCols(4); // xl
      else if (width >= 1024) setCols(3); // lg
      else if (width >= 768) setCols(2); // md
      else setCols(1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1});

  const getDelay = (index: number) => {
    const row = Math.floor(index / cols);
    return 0.5 + row * 0.5; // Start after section's animation (0.5s), stagger rows by 0.5s
  };

  return (
    <motion.section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-[#f7f7f7] px-5 sm:px-7 md:px-12 lg:px-14 space-y-6 py-8 md:py-16"
    >
      <h2
        className="sub-heading bg-clip-text text-center text-transparent bg-gradient-to-t from-[#3CA2E2] to-[#052EAA]"
        style={{ fontFamily: "Anton" }}
      >
        Recommended For You
      </h2>
      <p className="paragraph text-center"
      style={{fontFamily:"Montserrat Alternates"}}
      >
        Top-picked services for your business goals—get exactly what you need, when you need it.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
        {recommendedData?.map((data, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: getDelay(index) }}
            className="bg-white p-4 shadow-lg rounded-4xl space-y-3 duration-300 transition-all hover:scale-105 cursor-pointer"
          >
            <img src={data?.img} className="w-full" />
            <h2
              className="text-xl text-[#3CA2E2] font-semibold text-center"
              style={{ fontFamily: "Montserrat Alternates" }}
            >
              {data?.title}
            </h2>
            <p className="paragraph text-center">{data?.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
export default memo(Recommended);
