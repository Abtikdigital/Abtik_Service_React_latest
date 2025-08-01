import Image1 from "../assets/Recommended/Img1.svg";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";

const recommendedData = [
  {
    title: "Start-Up India Registration",
    img: Image1,
    description:
      "A DPIIT-recognized government program that enables eligible startups to access tax exemptions, self-certification, and other incentives for rapid growth and compliance.",
  },
  {
    title: "Seed Fund Scheme",
    img: Image1,
    description:
      "An initiative under Startup India that provides early-stage funding through government-approved incubators. It helps promising startups access vital capital to scale.",
  },
  {
    title: "MSME Loan",
    img: Image1,
    description:
      "Loans provided to Micro, Small, and Medium Enterprises under various central and state government schemes. These help businesses grow and maintain healthy cash flow.",
  },
  {
    title: "NBFC Loan",
    img: Image1,
    description:
      "Loans provided by Non-Banking Financial Companies with simplified documentation and eligibility. These are tailored for startups and growing enterprises.",
  },
  {
    title: "PMEGP Loan",
    img: Image1,
    description:
      "A credit-linked subsidy scheme by the Government of India that supports new micro-enterprises in the manufacturing or service sectors, including interest subsidies.",
  },
  {
    title: "NAIIF Loan",
    img: Image1,
    description:
      "Equity-based funding made available through SEBI-registered Alternative Investment Funds (AIFs) under the National Alternative Investment and Infrastructure Fund (NAIIF).",
  },
  {
    title: "GST & Tax Compliance",
    img: Image1,
    description:
      "GST registration, monthly and annual return filings, income tax filing, TDS management, and audit preparation. Ensures your business always stays compliant.",
  },
  {
    title: "Tax Exemption Certificates (80-IAC, 12AB, 80G)",
    img: Image1,
    description:
      "Government-issued certificates offering tax benefits to eligible startups and NGOs. These include 80-IAC for startups, and 12AB/80G for charitable institutions.",
  },
];

const Recommended = () => {
  // Responsive cols (xl:4, lg:3, md:2, sm:1)
  const getCols = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    else if (width >= 1024) return 3;
    else if (width >= 768) return 2;
    return 1;
  };

  const [cols, setCols] = useState(getCols());
  const [rows, setRows] = useState(1);

  // Listen for screen resize & update cols and rows so items don't disappear
  useEffect(() => {
    const updateCols = () => {
      const newCols = getCols();
      setCols(newCols);
      setRows(prevRows => {
        const visible = prevRows * cols;
        return Math.ceil(visible / newCols) || 1;
      });
    };
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
    // eslint-disable-next-line
  }, [cols]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const itemsToShow = rows * cols;
  const canLoadMore = itemsToShow < recommendedData.length;

  const getDelay = (index: number)=> {
    const row = Math.floor(index / cols);
    return 0.1 + row * 0.1;
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
      <p className="paragraph text-center" style={{ fontFamily: "Montserrat Alternates" }}>
        Top-picked services for your business goals—get exactly what you need, when you need it.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
        {recommendedData.slice(0, itemsToShow).map((data, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: getDelay(index) }}
            className="bg-white p-4 shadow-lg rounded-4xl space-y-3 duration-300 transition-all hover:scale-105 cursor-pointer"
          >
            <img src={data?.img} alt={data?.title} className="w-full" />
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
      {canLoadMore && (
        <div className="flex justify-center mt-6">
          <button
            className="custom-btn"
            type="button"
            onClick={() => setRows(r => r + 1)}
          >
            Load More
          </button>
        </div>
      )}
    </motion.section>
  );
};
export default memo(Recommended);
