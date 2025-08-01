import { useNavigate } from "react-router-dom";
import Image1 from "../assets/OurService/Img1.svg";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";

const OurService = () => {
  const nav = useNavigate();
  const services = [
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
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

  const HandleClick = (path: any) => {
    nav(path);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
        <p className="paragraph text-center"
        style={{fontFamily:"Montserrat Alternates"}}
        >
          “Smart business solutions—from registration to funding, licensing & certification—all in one place.”
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
          {services.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: getDelay(index) }}
              className="space-y-4"
            >
              <img src={service.img} className="w-full" />
              <h2 className="text-center text-xl text-[#3CA2E2] font-semibold">
                {service?.title}
              </h2>
              <p className="text-center paragraph">{service?.description}</p>
              <div className="text-center">
                <button
                  onClick={() => {
                    HandleClick(service?.path);
                  }}
                  className="custom-btn w-full max-w-[120px] !py-3 mx-auto"
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default memo(OurService);
