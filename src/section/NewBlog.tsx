import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { blogsData } from "../data/blogsData";

const BlogSection = () => {
  const nav = useNavigate();
  const refBlog = useRef(null);
  const isInViewBlog = useInView(refBlog, { once: true, amount: 0.1 });
  const blogs = blogsData.filter((b) => b.showInNewBlogList !== false);

  // Responsive cols: 1 / 2 / 3 / 4 (same pattern as OurService & Recommended)
  const getCols = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    else if (width >= 1024) return 3;
    else if (width >= 768) return 2;
    return 1;
  };
  const [cols, setCols] = useState(getCols());
  const [rows, setRows] = useState(1);

  // Update cols on resize, and ensure correct visible blogs if cols change
  useEffect(() => {
    const updateCols = () => {
      const currentCols = getCols();
      setCols(currentCols);
      setRows((prevRows) => {
        // Ensure all blogs currently visible stay shown
        const visible = prevRows * cols;
        return Math.ceil(visible / currentCols) || 1;
      });
    };
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
    // eslint-disable-next-line
  }, [cols]);

  const itemsToShow = rows * cols;
  const canLoadMore = itemsToShow < blogs.length;

  const getDelay = (index: number) => {
    const row = Math.floor(index / cols);
    return 0.1 + row * 0.1;
  };

  return (
    <motion.section
      ref={refBlog}
      initial={{ y: 100, opacity: 0 }}
      animate={isInViewBlog ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="px-7 md:px-14 py-7 bg-[#f7f7f7]"
    >
      <div className="w-full max-w-[1920px] mx-auto space-y-6">
        <h2 className="sub-heading text-center bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] bg-clip-text text-transparent font-1">
          New Blog's
        </h2>
        <p className="paragraph text-center font-2">
          Explore expert insights, tips, and updates to grow your business with
          ease.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs.slice(0, itemsToShow).map((blog, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInViewBlog ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: getDelay(index) }}
            className="space-y-3"
          >
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={blog?.cardImg ?? blog?.img}
                alt={blog?.title}
                loading="lazy"
                className="w-full h-full object-cover cursor-pointer hover:scale-105 duration-300"
              />
            </div>
            <h2 className="text-xl text-[#3CA2E2] font-semibold line-clamp-1 font-4">
              {blog?.title}
            </h2>
            <p className="paragraph line-clamp-1 font-4">
              {blog?.cardDescription ?? blog?.description}
            </p>
            <div>
              <button
                className="custom-btn font-2 w-full max-w-[120px] !py-3 mx-auto font-2"
                onClick={() => nav(`/expandedBlog/${blog?.slug}`)}
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
        </div>
        {canLoadMore && (
          <div className="flex justify-center mt-6">
            <button
              className="custom-btn font-2 w-full max-w-[120px] !py-3 mx-auto font-2"
              onClick={() => setRows((r) => r + 1)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default memo(BlogSection);
