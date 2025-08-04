import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/Blog/budget 2025.jpeg";
import Image2 from "../assets/Blog/2nd blog.jpeg";
import Image3 from "../assets/Blog/3rd blog.png";
import Image4 from "../assets/Blog/4th blog.jpeg";

const blogs = [
  {
    title: "Budget 2025: A Strategic Shift for MSMEs",
    description:
      "India’s Union Budget 2025 has set",
    img: Image1,
    slug: "test",
  },
  // ... other blog objects ...
  {
    title: "India’s Startups Get a Boost: Budget 2025 Unlocks New Pathways",
    description:
      "First-time entrepreneurs are front",
    img: Image2,
    slug: "/",
  },
   {
    title: " Budget 2025 Simplifies the Journey for New Founders",
    description:
      "For first-time entrepreneurs, Budget",
    img: Image3,
    slug: "test",
  },
  // ... other blog objects ...
  {
    title: " A Budget That Strengthens Local Industries and Women-Led Enterprises",
    description:
      "Budget 2025 goes beyond metro",
    img: Image4,
    slug: "/",
  },
   {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "test",
  },
  // ... other blog objects ...
  {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "/",
  }, {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "test",
  },
  // ... other blog objects ...
  {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "/",
  },
   {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "test",
  },
  // ... other blog objects ...
  {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "/",
  }, {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "test",
  },
  // ... other blog objects ...
  {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "/",
  }, {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "test",
  },
  // ... other blog objects ...
  {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "/",
  }, {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "test",
  },
  // ... other blog objects ...
  {
    title: "Title1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    img: Image1,
    slug: "/",
  },
  // (add all your blog objects as above)
];

const BlogSection = () => {
  const nav = useNavigate();
  const refBlog = useRef(null);
  const isInViewBlog = useInView(refBlog, { once: true, amount: 0.1 });

  // Responsive cols (4 for md+, 1 for <md)
  const getCols = () => (window.innerWidth >= 768 ? 4 : 1);
  const [cols, setCols] = useState(getCols());
  const [rows, setRows] = useState(1);

  // Update cols on resize, and ensure correct visible blogs if cols change
  useEffect(() => {
    const updateCols = () => {
      const currentCols = getCols();
      setCols(currentCols);
      setRows(prevRows => {
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

  const getDelay = (index:number) => {
    const row = Math.floor(index / cols);
    return 0.1+ row * 0.1;
  };

  return (
    <motion.section
      ref={refBlog}
      initial={{ y: 100, opacity: 0 }}
      animate={isInViewBlog ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="px-7 md:px-14 py-7 space-y-6 bg-[#f7f7f7]"
    >
      <h2
        style={{ fontFamily: "Anton" }}
        className="sub-heading text-center bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] bg-clip-text text-transparent"
      >
        New Blog's
      </h2>
      <p
        className="paragraph text-center"
        style={{ fontFamily: "Montserrat Alternates" }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, qui.
      </p>
      <div className={`grid ${cols === 1 ? 'grid-cols-1' : 'md:grid-cols-4'} gap-6`}>
        {blogs.slice(0, itemsToShow).map((blog, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={isInViewBlog ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: getDelay(index) }}
            className="space-y-3"
          >
            <img src={blog?.img} alt={blog?.title} />
            <h2
              className="text-xl text-[#3CA2E2] font-semibold"
              style={{ fontFamily: "Montserrat Alternates" }}
            >
              {blog?.title}
            </h2>
            <p className="paragraph">{blog?.description}</p>
            <div>
              <button
                className="custom-btn"
                onClick={() => nav(`/expandedBlog/${blog?.slug}`)}
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
            onClick={() => setRows(r => r + 1)}
          >
            Load More
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default memo(BlogSection);
