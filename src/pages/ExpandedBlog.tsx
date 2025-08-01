import { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/ExpandedBlog/bgImg.svg";
import Image1 from "../assets/Blog/Image1.png";
import { useDispatch } from "react-redux";

interface BlogListItem {
  title: string;
  lists: string[];
  description: string;
}

interface BlogData {
  title: string;
  description: string;
  img: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  list: BlogListItem[];
}

const ExpandedBlog = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };
  const blogsData: BlogData[] = [
    {
      title: "The Future of Digital Marketing: Trends and Strategies",
      description:
        "Discover the latest trends and strategies that are shaping the digital marketing landscape in 2024 and beyond.",
      img: Image1,
      slug: "test",
      date: "July 20, 2024",
      readTime: "5 min read",
      category: "Marketing",
      list: [
        {
          title: "Key Digital Marketing Trends",
          lists: [
            "AI-powered personalization for better customer targeting",
            "Voice search optimization for smart devices",
            "Interactive content engagement strategies",
          ],
          description:
            "These trends are revolutionizing how businesses connect with their audiences and drive meaningful engagement across all digital platforms.",
        },
        {
          title: "Implementation Strategies",
          lists: [
            "Data-driven decision making processes",
            "Multi-channel integration approaches",
            "Customer journey optimization techniques",
          ],
          description:
            "Successful implementation requires a strategic approach that aligns with your business objectives and target audience needs while maintaining consistent brand messaging.",
        },
      ],
    },
    {
      title: "Building Scalable Startup Solutions",
      description:
        "Learn how to build technology solutions that grow with your startup from day one to enterprise level.",
      img: Image1,
      slug: "scalable-startup-solutions",
      date: "July 18, 2024",
      readTime: "7 min read",
      category: "Technology",
      list: [],
    },
    {
      title: "Legal Compliance for Modern Businesses",
      description:
        "Navigate the complex world of business compliance with our comprehensive guide and expert insights.",
      img: Image1,
      slug: "legal-compliance-guide",
      date: "July 15, 2024",
      readTime: "6 min read",
      category: "Legal",
      list: [],
    },
    {
      title: "Fund Management Best Practices",
      description:
        "Optimize your fund management strategies with proven methodologies and cutting-edge tools.",
      img: Image1,
      slug: "fund-management-practices",
      date: "July 12, 2024",
      readTime: "8 min read",
      category: "Finance",
      list: [],
    },
    {
      title: "Customer Success Stories: Transformation Journey",
      description:
        "Real stories of how businesses transformed their operations with our comprehensive solutions.",
      img: Image1,
      slug: "customer-success-stories",
      date: "July 10, 2024",
      readTime: "4 min read",
      category: "Case Study",
      list: [],
    },
    {
      title: "Innovation in Business Process Automation",
      description:
        "Explore how automation is reshaping business processes across various industries worldwide.",
      img: Image1,
      slug: "business-automation-innovation",
      date: "July 8, 2024",
      readTime: "6 min read",
      category: "Technology",
      list: [],
    },
    {
      title: "Strategic Planning for Growth",
      description:
        "Master the art of strategic planning to accelerate your business growth and market expansion.",
      img: Image1,
      slug: "strategic-planning-growth",
      date: "July 5, 2024",
      readTime: "9 min read",
      category: "Strategy",
      list: [],
    },
    {
      title: "Digital Transformation Success Guide",
      description:
        "Complete guide to successfully implementing digital transformation in your organization.",
      img: Image1,
      slug: "digital-transformation-guide",
      date: "July 2, 2024",
      readTime: "7 min read",
      category: "Technology",
      list: [],
    },
  ];

  const { slug } = useParams<{ slug: string }>();
  const [selectedBlogData, setSelectedBlogData] = useState<BlogData | null>(
    null
  );

  useEffect(() => {
    const data = blogsData?.find((blog) => blog?.slug === slug);
    setSelectedBlogData(data || null);
  }, [slug]);

  if (selectedBlogData === null) {
    return (
      <Mainlayout>
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center space-y-6 max-w-md px-6">
            <div className="w-20 h-20 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] flex items-center justify-center">
                <span className="text-2xl text-white font-bold">404</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Blog Not Found
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The blog post you&apos;re looking for doesn&apos;t exist or has
              been moved. Please check the URL or browse our other articles.
            </p>
            <Link
              to="/blogs"
              className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Back to All Blogs
            </Link>
          </div>
        </div>
      </Mainlayout>
    );
  }

  return (
    <Mainlayout>
      {/* Hero Section - Your Original Design */}
      <section
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
        {/* Overlay for better text readability on tablets */}
        <div className="absolute inset-0 bg-black/20 lg:bg-transparent"></div>

        <div
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
            Your One-Stop{" "}
            <span className="text-[#3CA2E2] font-extrabold block sm:inline">
              Solution
            </span>{" "}
            for all Business Needs
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0"
          >
            Empowering Businesses through Comprehensive Solutions From Fund
            Management to Legal Compliance, We've Got You Covered at Abtik
            Startup Advisor Private Limited
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
              Schedule a call
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Blog Section - Enhanced */}
      <section className="px-4 sm:px-7 md:px-14 py-6 md:py-12 bg-[#f7f7f7] min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {/* Left Part - Main Content */}
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            {/* Blog Image with Overlay Info */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={selectedBlogData.img}
                className="w-full h-48 md:h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                alt={selectedBlogData.title}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-3 md:p-6">
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-white text-xs md:text-sm mb-3">
                  <span className="px-2 md:px-3 py-1 bg-[#3CA2E2] rounded-full font-medium">
                    {selectedBlogData.category || "Article"}
                  </span>
                  <span className="flex items-center gap-1 md:gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {selectedBlogData.date || "July 23, 2024"}
                  </span>
                  <span className="flex items-center gap-1 md:gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {selectedBlogData.readTime || "5 min read"}
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Content Card */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 lg:p-8">
              {/* Blog Title */}
              <h2
                style={{ fontFamily: "Anton" }}
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] bg-clip-text text-transparent mb-4 md:mb-6 leading-tight"
              >
                {selectedBlogData.title}
              </h2>

              {/* Blog Description */}
              <div className="prose max-w-none mb-6 md:mb-8">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed border-l-4 border-[#3CA2E2] pl-4 md:pl-6 bg-blue-50 p-3 md:p-4 rounded-r-lg">
                  {selectedBlogData.description}
                </p>
              </div>

              {/* Blog Content Lists */}
              <div className="space-y-6 md:space-y-8">
                {selectedBlogData.list?.map((listItem, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border-l-4 border-[#3CA2E2]"
                  >
                    {listItem?.title && (
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                          {index + 1}
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                          {listItem.title}
                        </h3>
                      </div>
                    )}

                    {listItem?.lists && listItem.lists.length > 0 && (
                      <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6 ml-4 md:ml-6">
                        {listItem.lists.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-3 md:gap-4 text-gray-700"
                          >
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-[#3CA2E2] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed text-sm md:text-base">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {listItem?.description && (
                      <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-[#3CA2E2] ml-4 md:ml-6">
                        <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
                          {listItem.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Part - Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4 md:space-y-6">
              {/* Latest Blogs Card */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] p-4 md:p-6">
                  <h2 className="text-lg md:text-xl font-bold text-white">
                    Latest Blogs
                  </h2>
                </div>
                <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  {blogsData?.slice(0, 5).map((blog, index) => (
                    <Link
                      key={index}
                      to={blog.slug ? `/expandedBlog/${blog.slug}` : "/"}
                      className="group block hover:bg-gray-50 p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 border border-transparent hover:border-gray-200"
                    >
                      <div className="grid grid-cols-4 gap-2 md:gap-3">
                        <div className="overflow-hidden rounded-md md:rounded-lg">
                          <img
                            src={blog.img}
                            alt={blog.title}
                            className="w-full h-10 md:h-12 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="col-span-3 space-y-1 md:space-y-2">
                          <h3 className="font-semibold text-xs md:text-sm text-gray-800 line-clamp-2 group-hover:text-[#3CA2E2] transition-colors leading-tight">
                            {blog.title}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {blog.date || "Recent"}
                            </span>
                            <span className="text-xs text-[#3CA2E2] font-medium group-hover:translate-x-1 transition-transform">
                              Read →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Call to Action Card */}
              <div className="bg-gradient-to-br from-[#3CA2E2] via-[#2691d9] to-[#052EAA] rounded-xl md:rounded-2xl p-4 md:p-6 text-white shadow-lg">
                <div className="text-center space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-[#2691D9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-bold">
                    Ready to Get Started?
                  </h3>
                  <p className="text-xs md:text-sm text-blue-100 leading-relaxed">
                    Schedule a consultation with our experts today and transform
                    your business.
                  </p>
                  <button className="custom-btn ">Schedule a Call</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Mainlayout>
  );
};

export default memo(ExpandedBlog);
