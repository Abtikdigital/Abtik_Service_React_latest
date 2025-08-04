import { useNavigate } from "react-router-dom";
import Image1 from "../assets/OurService/grant.jpeg";
import Image2 from "../assets/OurService/starup.jpg"
import Image3 from "../assets/OurService/msme.jpeg"
import Image4 from "../assets/OurService/seed.jpeg"
import Image5 from "../assets/OurService/trademark.jpeg"
import Image6 from "../assets/OurService/iso.jpeg"
import Image7 from "../assets/OurService/zed.jpeg"
import Image8 from "../assets/OurService/pmegp.jpeg"
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";

const services = [
  {
    title: "Grants",
    description: "We help you find and apply for the right government grants, so that your business gets the financial assistance he deserves - without stress.on",
    img: Image1,
    path: "/",
  },
  {
    title: "StartStartup India Certificate",
    description: "Get recognized as an official startup and enjoy tax profit, funding access and reliability under the Start-up India Mission.",
    img: Image2,
    path: "/",
  },
  {
    title: "MSME certificate",
    description: "Register your business as MSME and unlock a wide range of subsidy, priority lending and government scheme benefits.",
    img: Image3,
    path: "/",
  },
  {
    title: "Seed fund",
    description: "We guide you step-by-step to apply for reliable government seed funding — so your startup gets the right start with the right support.",
    img: Image4,
    path: "/",
  },
  {
    title: "trademark registration",
    description: "Protect your brand name, logo, or tagline with proper trademark safety so that your identity is really yours.",
    img: Image5,
    path: "/",
  },
  {
    title: "ISO certificate",
    description: "Show the world that you mean quality. We help you get ISO certification for compliance with trusts and global standards.",
    img: Image6,
    path: "/",
  },
  {
    title: "ZED Certificate",
    description: "Achieve Zero Defect Zero Effect Certification to align your business with high-quality standards and eco-friendly practices recognized by the government.",
    img: Image7,
    path: "/",
  },
  {
    title: "PMEGP Loan Scheme",
    description: "Launch your business with up to ₹25 lakh support through the PMEGP scheme. We simplify the process of getting government loans and subsidies.",
    img: Image8,
    path: "/",
  },
];

const OurService = () => {
  const nav = useNavigate();

  // Responsive column tracking
  const getCols = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    else if (width >= 1024) return 3;
    else if (width >= 768) return 2;
    return 1;
  };

  const [cols, setCols] = useState(getCols());
  const [rows, setRows] = useState(1);

  // Responsive cols/rows updating
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

  const HandleClick = (path:any) => nav(path);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const itemsToShow = rows * cols;
  const canLoadMore = itemsToShow < services.length;

  const getDelay = (index:number) => {
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
      <div className="w-full space-y-6">
        <h2
          className="sub-heading text-center bg-clip-text bg-gradient-to-b from-[#052EAA] to-[#3CA2E2] text-transparent"
          style={{
            fontFamily: "Anton",
          }}
        >
          Our Service
        </h2>
        <p
          className="paragraph text-center"
          style={{ fontFamily: "Montserrat Alternates" }}
        >
          “Smart business solutions—from registration to funding, licensing & certification—all in one place.”
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
          {services.slice(0, itemsToShow).map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: getDelay(index) }}
              className="space-y-4"
            >
              <img src={service.img} className="w-full" alt={service.title} />
              <h2 className="text-center text-xl text-[#3CA2E2] font-semibold">
                {service?.title}
              </h2>
              <p className="text-center paragraph">{service?.description}</p>
              <div className="text-center">
                <button
                  onClick={() => HandleClick(service?.path)}
                  className="custom-btn w-full max-w-[120px] !py-3 mx-auto"
                >
                  Explore
                </button>
              </div>
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
      </div>
    </motion.section>
  );
};
export default memo(OurService);
