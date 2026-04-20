import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {
 const nav = useNavigate();
 const handleGoHome = () => nav("/");

 const helpfulLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/news-insights/blogs", label: "Blogs" },
  { to: "/services/funding/msme-loans", label: "MSME Loans" },
 ];

 return (
  <section className="flex justify-center items-center min-h-screen w-full px-4 py-12">
   <div className="max-w-lg w-full space-y-6 text-center">
    <h1 className="text-6xl sm:text-7xl font-bold text-[#052EAA]">404</h1>
    <h2 className="sub-heading bg-linear-to-t from-[#3CA2E2] bg-clip-text to-[#052EAA] text-transparent">
     Page Not Found
    </h2>
    <p className="paragraph text-[#4D4D4D]">
     The page you're looking for doesn't exist or has been moved. Here are some helpful links to get you back on track.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
     <button
      type="button"
      className="custom-btn px-10! py-3!"
      onClick={handleGoHome}
     >
      Back to Home
     </button>
    </div>
    <div className="pt-6 border-t border-gray-200">
     <p className="text-sm font-semibold text-[#4D4D4D] mb-3">Explore our site</p>
     <nav className="flex flex-wrap justify-center gap-4" aria-label="Helpful links">
      {helpfulLinks.map(({ to, label }) => (
       <Link
        key={to}
        to={to}
        className="text-sm font-semibold text-[#3CA2E2] hover:text-[#052EAA] hover:underline transition-colors"
       >
        {label}
       </Link>
      ))}
     </nav>
    </div>
   </div>
  </section>
 );
};
export default memo(PageNotFound);
