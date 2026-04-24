import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f7f7f7] to-[#e8f3ff] px-4">
      <div className="text-center max-w-lg mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Sorry, the page you are looking for does not exist or has been moved. 
            Let us help you find what you need.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#052EAA] text-[#052EAA] rounded-full font-semibold hover:bg-[#052EAA] hover:text-white transition-all duration-300"
          >
            <Search className="w-5 h-5" />
            Contact Us
          </Link>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Looking for something specific? Check out our popular services:
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            {[
              { label: "Startup India", href: "/startup-india-registration" },
              { label: "MSME Loans", href: "/services/funding/msme-loans" },
              { label: "Grants", href: "/services/funding/grants" },
              { label: "Seed Fund", href: "/startup-india-seed-fund" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#3CA2E2] hover:text-[#052EAA] hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

