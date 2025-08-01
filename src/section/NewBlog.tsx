import { useNavigate } from "react-router-dom";
import Image1 from "../assets/NewBlog/Image1.svg";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";

const NewBlog = () => {
  const nav = useNavigate();

  const blogData = [
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
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
    return 0.5 + row * 0.3; // Start after section's animation (0.5s), stagger rows by 0.3s
  };

  return (
    <motion.section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-[#f7f7f7] py-8 md:py-16 px-5 sm:px-7 md:px-12 lg:px-14"
    >
      <div className="space-y-6">
        <h2
          style={{ fontFamily: "Anton" }}
          className="sub-heading text-center bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] bg-clip-text text-transparent"
        >
          New Blog's
        </h2>
        <p className="paragraph text-center"
        style={{fontFamily:"Montserrat Alternates"}}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, qui.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
          {blogData?.map((blog: any, index: number) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: getDelay(index) }}
              className="space-y-4"
            >
              <img src={blog?.img} className="w-full" />
              <h2
                className="text-center text-xl text-[#3CA2E2] font-semibold"
                style={{ fontFamily: "Montserrat Alternates" }}
              >
                {blog?.title}
              </h2>
              <p className="text-center paragraph">{blog?.description}</p>
              <div className="text-center">
                <button
                  className="custom-btn w-full max-w-[120px] !py-3 mx-auto"
                  onClick={() => {
                    HandleClick(blog?.path);
                  }}
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
export default memo(NewBlog);
