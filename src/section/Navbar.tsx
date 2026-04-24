"use client";
import { ChevronDown, Menu, X, ChevronRight, Search, Loader2 } from "lucide-react";
import Logo from "../assets/Logo/NewTmLogo.png";
import { useEffect, useMemo, useState, useRef, memo } from "react";
import Link from "next/link";
import { usePathname as useLocation } from "next/navigation";;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { blogsData } from "../data/blogsData";
interface SubService {
  name: string;
  path: string;
}

interface MenuItem {
  name: string;
  path: string | null;
  description?: string;
  subServices?: SubService[];
}

interface Section {
  section: string;
  items: MenuItem[];
}

interface Menu {
  name: string;
  path: string | null;
  description?: string;
  subItems?: Section[];
  subServices?: SubService[];
}

const menuItems: Menu[] = [
  {
    name: "Home",
    path: "/",
    description: "Navigate to our homepage",
  },
  {
    name: "About",
    path: "/about",
    description: "Learn more about our company and mission",
  },
  {
    name: "Services",
    path: null,
    description: "Explore our comprehensive business services",
    subItems: [
      {
        section: "Funding Solutions",
        items: [
          {
            name: "Seed Fund",
            path: "/services/funding/seed-fund",
            description:
              "Early-stage funding for startup ventures and business ideas",
          },
          {
            name: "Subsidy",
            path: null,
            description:
              "Government subsidies and financial assistance programs",
            subServices: [
              { name: "PMEGP", path: "/services/funding/subsidy/pmegp" },
              { name: "CMEGP", path: "/services/funding/subsidy/cmegp" },
              { name: "PMFME", path: "/services/funding/subsidy/pmfme" },
              {
                name: "Stand Up India",
                path: "/services/funding/subsidy/stand-up-india",
              },
            ],
          },
          {
            name: "Grants",
            path: "/services/funding/grants",
            description: "Government grants and non-repayable funding",
          },
          {
            name: "MSME Loan",
            path: null,
            description: "Loans for Micro, Small, and Medium Enterprises",
            subServices: [
              { name: "Mudra Loan", path: "/services/funding/msme-loan/mudra" },
              { name: "Udaan", path: "/services/funding/msme-loan/udaan" },
              { name: "CGTMSE", path: "/services/funding/msme-loan/cgtmse" },
            ],
          },
          {
            name: "Agriculture",
            path: null,
            description:
              "Financial support and funding for agricultural businesses",
            subServices: [
              {
                name: "NAIFF/AIFF",
                path: "/services/funding/agriculture/naiff-aiff",
              },
              {
                name: "Agrisure",
                path: "/services/funding/agriculture/agrisure",
              },
            ],
          },
          {
            name: "Private Funding",
            path: null,
            description:
              "Connect with private investors and venture capital firms",
            subServices: [
              {
                name: "Angel Investor",
                path: "/services/funding/private-funding/angel-investor",
              },
              {
                name: "VC Funding",
                path: "/services/funding/private-funding/venture-capital",
              },
              {
                name: "NBFC",
                path: "/services/funding/private-funding/nbfc",
              },
            ],
          },
          {
            name: "Secured/Unsecured Loan",
            path: null,
            description: "Business loans with flexible terms and conditions",
            subServices: [
              {
                name: "Business Loan",
                path: "/services/funding/loans/business-loan",
              },
              { name: "LAP", path: "/services/funding/loans/lap" },
              {
                name: "Cash Credit (CC)",
                path: "/services/funding/loans/cash-credit",
              },
              {
                name: "Overdraft (OD)",
                path: "/services/funding/loans/overdraft",
              },
              {
                name: "Dropline OD",
                path: "/services/funding/loans/dropline-od",
              },
              { name: "SME", path: "/services/funding/loans/sme" },
              { name: "Term Loan", path: "/services/funding/loans/term-loan" },
              {
                name: "Project Funding",
                path: "/services/funding/loans/project-funding",
              },
            ],
          },
        ],
      },
      {
        section: "Trademark & IP",
        items: [
          {
            name: "Trademark Registration",
            path: "/services/legal/trademark-registration",
            description: "Protect your brand with trademark registration",
          },
          {
            name: "Copyright Protection",
            path: "/services/legal/copyright-protection",
            description: "Secure your creative works and content",
          },
          {
            name: "Patent Filing",
            path: "/services/legal/patent-filing",
            description: "Protect your inventions and innovations",
          },
        ],
      },
      {
        section: "Certificate & Licence",
        items: [
          {
            name: "Startup India",
            path: "/services/certificate/startup-india",
            description: "Government recognition and benefits for startups",
          },
          {
            name: "Tax Exemption Certificate",
            path: "/services/certificate/tax-exemption-certificate",
            description: "Government recognition and benefits for startups",
          },
          {
            name: "Msme",
            path: "/services/certificate/msme",
            description: "MSME registration for small and medium enterprises",
          },
          {
            name: "Make In India",
            path: "/services/certificate/make-in-india",
            description: "Registration under Make in India initiative",
          },
          {
            name: "Fssai Licence",
            path: "/services/certificate/fssai-licence",
            description: "Food safety and standards authority license",
          },
          {
            name: "Zed Certificate",
            path: "/services/certificate/zed",
            description: "Zero defect zero effect certification for MSMEs",
          },
          {
            name: "ISO Certification",
            path: "/services/certificate/iso",
            description: "International quality standards certification",
          },
          {
            name: "Trade Licence",
            path: "/services/certificate/trade-licence",
            description: "Municipal trade license for business operations",
          },
        ],
      },
      {
        section: "Tax & Compliance",
        items: [
          {
            name: "GST Register/Filing",
            path: "/services/tax/gst-filing",
            description: "GST registration and regular return filing services",
          },
          {
            name: "TDS Compliance",
            path: "/services/tax/tds-compliance",
            description:
              "Tax deducted at source filing and compliance management",
          },
          {
            name: "Annual Compliance",
            path: "/services/tax/annual-compliance",
            description: "Complete annual regulatory and statutory compliance",
          },
        ],
      },
      {
        section: "Business Registration",
        items: [
          {
            name: "Private Limited Co.",
            path: "/services/registration/private-limited",
            description: "Incorporate your private limited company with MCA",
          },
          {
            name: "LLP Registration",
            path: "/services/registration/llp",
            description: "Limited liability partnership registration services",
          },
          {
            name: "Sole Proprietorship",
            path: "/services/registration/proprietorship",
            description:
              "Simple business structure registration for individuals",
          },
          {
            name: "Partnership Firm",
            path: "/services/registration/partnership",
            description: "Partnership deed and firm registration services",
          },
          {
            name: "Section 8 Company",
            path: "/services/registration/section8company",
            description: "Non-profit organization registration under Section 8",
          },
          {
            name: "Producer Company",
            path: "/services/registration/producer",
            description:
              "Producer company registration for agricultural cooperatives",
          },
        ],
      },
    ],
  },
  {
    name: "News & Insights",
    path: null,
    description: "Read our latest news & insights",
    subServices: [
      { name: "Blogs", path: "/news-insights/blogs" },
      { name: "E-books", path: "/news-insights/e-books" },
    ],
  },
  {
    name: "Career",
    path: "/career",
    description: "Explore career opportunities with us",
  },
  {
    name: "Contact",
    path: "/contact",
    description: "Get in touch with our team",
  },
];

type SearchLink = {
  name: string;
  path: string;
  description?: string;
  context?: string;
};

function normalizeSearchText(value: string) {
  return value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getSearchRank(haystack: string, query: string) {
  const q = normalizeSearchText(query);
  if (!q) return -1;

  const hs = normalizeSearchText(haystack);
  const hsNoSpace = hs.replace(/\s+/g, "");
  const qNoSpace = q.replace(/\s+/g, "");

  // Strong matches first
  if (hs === q) return 100;
  if (hs.startsWith(q)) return 90;
  if (hsNoSpace.startsWith(qNoSpace)) return 88; // e.g. "startupindia" vs "startup india"
  if (hs.includes(q)) return 80; // partial substring match (startup -> startups)
  if (hsNoSpace.includes(qNoSpace)) return 78;

  // Token match (all tokens must exist somewhere)
  const tokens = q.split(" ").filter(Boolean);
  const ok = tokens.every((t) => hs.includes(t) || hsNoSpace.includes(t));
  return ok ? 60 : -1;
}

function flattenMenuToLinks(menu: Menu[]): SearchLink[] {
  const out: SearchLink[] = [];

  for (const top of menu) {
    if (top.path) {
      out.push({
        name: top.name,
        path: top.path,
        description: top.description,
        context: "Page",
      });
    }

    if (top.subServices?.length) {
      for (const s of top.subServices) {
        out.push({
          name: s.name,
          path: s.path,
          context: top.name,
        });
      }
    }

    if (top.subItems?.length) {
      for (const section of top.subItems) {
        for (const item of section.items) {
          if (item.path) {
            out.push({
              name: item.name,
              path: item.path,
              description: item.description,
              context: `${top.name} · ${section.section}`,
            });
          }

          if (item.subServices?.length) {
            for (const sub of item.subServices) {
              out.push({
                name: sub.name,
                path: sub.path,
                context: `${top.name} · ${section.section} · ${item.name}`,
              });
            }
          }
        }
      }
    }
  }

  // de-dupe by path+name
  const seen = new Set<string>();
  return out.filter((l) => {
    const key = `${l.name}@@${l.path}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const DesktopNavbar = ({ setOpen }: any) => {
  const pathname = useLocation();
  const [hoverTimeout, setHoverTimeout] = useState<any | null>(null);
  const [clearSubmenuTimeout, setClearSubmenuTimeout] = useState<any | null>(
    null,
  );
  const [megaMenuVisible, setMegaMenuVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [subMenuPosition, setSubMenuPosition] = useState({
    left: false,
    top: 0,
    showAtTop: false,
  });
  const serviceRefs = useRef<Record<string, HTMLElement | null>>({});
  const megaMenuRef = useRef<HTMLDivElement | null>(null);
  const newsDropdownRef = useRef<HTMLDivElement | null>(null);
  const mainMenuRef = useRef<HTMLLIElement | null>(null);
  const newsMenuRef = useRef<HTMLLIElement | null>(null);
  const menuWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (clearSubmenuTimeout) {
      clearTimeout(clearSubmenuTimeout);
      setClearSubmenuTimeout(null);
    }
    setMegaMenuVisible(true);
    setDropdownVisible(false); // Close News & Insights dropdown
  };

  const handleNewsMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (clearSubmenuTimeout) {
      clearTimeout(clearSubmenuTimeout);
      setClearSubmenuTimeout(null);
    }
    setDropdownVisible(true);
    setMegaMenuVisible(false); // Close Services megamenu
    setHoveredService(null); // Reset hovered service
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const relatedTarget = event.relatedTarget as Node;
    const menuWrapperElement = menuWrapperRef.current;

    if (menuWrapperElement && !menuWrapperElement.contains(relatedTarget)) {
      const timeout = setTimeout(() => {
        setMegaMenuVisible(false);
        setHoveredService(null);
      }, 200);
      setHoverTimeout(timeout);
    }
  };

  const handleNewsMouseLeave = (event: React.MouseEvent) => {
    const relatedTarget = event.relatedTarget as Node;
    const menuWrapperElement = menuWrapperRef.current;

    if (menuWrapperElement && !menuWrapperElement.contains(relatedTarget)) {
      const timeout = setTimeout(() => {
        setDropdownVisible(false);
      }, 200);
      setHoverTimeout(timeout);
    }
  };

  const handleServiceHover = (serviceName: string, event: React.MouseEvent) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (clearSubmenuTimeout) {
      clearTimeout(clearSubmenuTimeout);
      setClearSubmenuTimeout(null);
    }
    setHoveredService(serviceName);

    const serviceElement = event.currentTarget as HTMLElement;
    const megaMenuElement = megaMenuRef.current;

    if (!serviceElement || !megaMenuElement) return;

    const serviceRect = serviceElement.getBoundingClientRect();
    const megaMenuRect = megaMenuElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const columnWidth = megaMenuRect.width / 5;
    const relativeLeft = serviceRect.left - megaMenuRect.left;
    const columnIndex = Math.floor(relativeLeft / columnWidth);

    const shouldShowOnLeft = columnIndex >= 3;

    const serviceTopRelativeToMegaMenu = serviceRect.top - megaMenuRect.top;
    const estimatedSubmenuHeight = 300;
    const availableSpaceBelow = viewportHeight - serviceRect.bottom;
    const shouldShowAtTop =
      availableSpaceBelow < estimatedSubmenuHeight &&
      serviceTopRelativeToMegaMenu > estimatedSubmenuHeight;

    setSubMenuPosition({
      left: shouldShowOnLeft,
      top: shouldShowAtTop
        ? Math.max(
            0,
            serviceTopRelativeToMegaMenu - estimatedSubmenuHeight + 50,
          )
        : serviceTopRelativeToMegaMenu,
      showAtTop: shouldShowAtTop,
    });
  };

  const handleServiceItemEnter = (
    hasSubServices: boolean,
    serviceName: string,
    event: React.MouseEvent,
  ) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (clearSubmenuTimeout) {
      clearTimeout(clearSubmenuTimeout);
      setClearSubmenuTimeout(null);
    }

    if (hasSubServices) {
      handleServiceHover(serviceName, event);
    } else {
      const timeout = setTimeout(() => {
        setHoveredService(null);
      }, 150);
      setClearSubmenuTimeout(timeout);
    }
  };

  const handleMenuItemEnter = (_hasSubItems: boolean, itemName: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (clearSubmenuTimeout) {
      clearTimeout(clearSubmenuTimeout);
      setClearSubmenuTimeout(null);
    }

    if (itemName === "Services") {
      setMegaMenuVisible(true);
      setDropdownVisible(false);
      setHoveredService(null);
    } else if (itemName === "News & Insights") {
      setDropdownVisible(true);
      setMegaMenuVisible(false);
      setHoveredService(null);
    } else {
      setMegaMenuVisible(false);
      setDropdownVisible(false);
      setHoveredService(null);
    }
  };

  const handleSubMenuEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (clearSubmenuTimeout) {
      clearTimeout(clearSubmenuTimeout);
      setClearSubmenuTimeout(null);
    }
  };

  const handleSubMenuLeave = (event: React.MouseEvent) => {
    const relatedTarget = event.relatedTarget as Node;
    const mainMenuElement = mainMenuRef.current;
    const megaMenuElement = megaMenuRef.current;

    if (
      (mainMenuElement && mainMenuElement.contains(relatedTarget)) ||
      (megaMenuElement && megaMenuElement.contains(relatedTarget))
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      setHoveredService(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  const handleMegaMenuAreaHover = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const isServiceItem = target.closest("[data-service-item]");
    const isInsideSubmenu = target.closest("[data-submenu]");

    if (!isServiceItem && !isInsideSubmenu) {
      if (clearSubmenuTimeout) {
        clearTimeout(clearSubmenuTimeout);
      }

      const timeout = setTimeout(() => {
        if (
          !target.closest("[data-service-item]") &&
          !target.closest("[data-submenu]")
        ) {
          setHoveredService(null);
        }
      }, 200);
      setClearSubmenuTimeout(timeout);
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
      if (clearSubmenuTimeout) {
        clearTimeout(clearSubmenuTimeout);
      }
    };
  }, [hoverTimeout, clearSubmenuTimeout]);

  return (
    <div className="hidden xl:block w-full max-w-[1920px] mx-auto px-4 lg:px-8 xl:px-14 py-2">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src={Logo.src} alt="Abtik Startup Advisor" width={180} height={56} className="h-12 lg:h-14 w-auto" />
        </div>

        <div ref={menuWrapperRef}>
          <ul className="flex gap-4 lg:gap-6 xl:gap-8 font-medium items-center text-sm lg:text-base font-1">
            {menuItems.map((item) => {
              const isActive = item.path && pathname === item.path;
              const isServicesPage =
                item.name === "Services" &&
                (pathname.startsWith("/services") ||
                  pathname.startsWith("/funding") ||
                  pathname.startsWith("/ip") ||
                  pathname.startsWith("/certificate") ||
                  pathname.startsWith("/tax") ||
                  pathname.startsWith("/registration"));
              const isNewsPage =
                item.name === "News & Insights" &&
                pathname.startsWith("/news");

              return (
                <li
                  key={item.name}
                  className={`group py-2 ${
                    isActive || isServicesPage || isNewsPage
                      ? ""
                      : "border-transparent transition-all duration-300"
                  } transition cursor-pointer text-[#A4A4A4] hover:text-[#052EAA] ${
                    isActive || isServicesPage || isNewsPage
                      ? "!text-[#052EAA] font-bold"
                      : ""
                  }`}
                  onMouseEnter={() =>
                    handleMenuItemEnter(
                      !!item.subItems || !!item.subServices,
                      item.name,
                    )
                  }
                  onMouseLeave={
                    item.name === "Services"
                      ? handleMouseLeave
                      : item.name === "News & Insights"
                        ? handleNewsMouseLeave
                        : undefined
                  }
                  ref={
                    item.name === "Services"
                      ? mainMenuRef
                      : item.name === "News & Insights"
                        ? newsMenuRef
                        : null
                  }
                >
                  {item.path ? (
                    <Link  href={item.path}
                      className="flex items-center gap-1 relative group py-2"
                      onMouseEnter={() =>
                        handleMenuItemEnter(
                          !!item.subItems || !!item.subServices,
                          item.name,
                        )
                      }
                    >
                      {item.name}
                      {(item.subItems || item.subServices) && (
                        <ChevronDown
                          size={16}
                          className="group-hover:rotate-180 transition-transform duration-300"
                        />
                      )}
                      <div
                        className={`w-0 transition-all duration-300 group-hover:w-full absolute h-1 bg-[#052EAA] bottom-0 rounded-2xl ${
                          isActive ? "!w-full" : ""
                        }`}
                      ></div>
                    </Link>
                  ) : (
                    <div
                      className="flex items-center gap-1 relative group py-2"
                      onMouseEnter={() =>
                        handleMenuItemEnter(
                          !!item.subItems || !!item.subServices,
                          item.name,
                        )
                      }
                    >
                      {item.name}
                      {(item.subItems || item.subServices) && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            (megaMenuVisible && item.name === "Services") ||
                            (dropdownVisible && item.name === "News & Insights")
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                      <div
                        className={`w-0 transition-all duration-300 group-hover:w-full absolute h-1 bg-[#052EAA] bottom-0 rounded-sm ${
                          isServicesPage ||
                          isNewsPage ||
                          (megaMenuVisible && item.name === "Services") ||
                          (dropdownVisible && item.name === "News & Insights")
                            ? "!w-full"
                            : ""
                        }`}
                      ></div>
                    </div>
                  )}

                  {item.subItems && item.name === "Services" && (
                    <div
                      ref={megaMenuRef}
                      className={`
                        absolute left-1/2 top-full mt-1.5 bg-white text-gray-800 rounded-xl shadow-2xl
                        w-full max-w-[1920px] mx-auto overflow-hidden
                        transform -translate-x-1/2 transition-all duration-300 z-40 border border-gray-300
                        font-1
                        ${
                          megaMenuVisible
                            ? "opacity-100 visible -translate-y-1"
                            : "opacity-0 invisible translate-y-0"
                        }
                      `}
                      style={{
                        maxHeight: "75vh",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onMouseMove={handleMegaMenuAreaHover}
                    >
                      <div className="overflow-y-auto max-h-[75vh]">
                        <div className="p-6">
                          <div className="grid grid-cols-5 gap-6">
                            {item.subItems.map((section, sectionIndex) => (
                              <div
                                key={section.section}
                                className="flex flex-col"
                              >
                                <div className="mb-4 pb-3 border-b-2 border-[#010574] min-h-[60px] flex flex-col justify-end">
                                  <h3 className="text-base font-bold text-[#010574] leading-tight">
                                    {section.section}
                                  </h3>
                                </div>

                                <div className="space-y-3">
                                  {section.items.map(
                                    (subItem: any, itemIndex) => (
                                      <div
                                        key={`${subItem.name}-${itemIndex}`}
                                        className="relative"
                                        data-service-item={
                                          subItem.subServices ? "true" : "false"
                                        }
                                        ref={(el) => {
                                          serviceRefs.current[
                                            `${subItem.name}-${sectionIndex}-${itemIndex}`
                                          ] = el;
                                        }}
                                        onMouseEnter={(e) => {
                                          handleServiceItemEnter(
                                            !!subItem.subServices,
                                            `${subItem.name}-${sectionIndex}-${itemIndex}`,
                                            e,
                                          );
                                        }}
                                        onMouseLeave={
                                          subItem.subServices
                                            ? handleSubMenuLeave
                                            : undefined
                                        }
                                      >
                                        {subItem.path ? (
                                          <Link  href={subItem.path}
                                            className={`flex items-center justify-between text-xs font-normal p-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] min-h-[50px] group ${
                                              pathname === subItem.path
                                                ? "bg-[#e8f3ff] text-[#010574] shadow-sm"
                                                : "bg-gray-50 hover:bg-[#e0f0ff] hover:text-[#010574] text-gray-800 hover:shadow-sm"
                                            }`}
                                          >
                                            <div className="flex-1">
                                              <span
                                                className={`block text-sm font-medium leading-tight ${
                                                  pathname ===
                                                  subItem.path
                                                    ? "font-semibold text-[#010574]"
                                                    : "text-gray-900"
                                                }`}
                                              >
                                                {subItem.name}
                                              </span>
                                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                                {subItem.description ||
                                                  "Professional services"}
                                              </p>
                                            </div>
                                            {subItem.subServices && (
                                              <ChevronRight
                                                size={14}
                                                className="ml-2 text-gray-400 group-hover:text-[#010574] transition-colors flex-shrink-0"
                                              />
                                            )}
                                          </Link>
                                        ) : (
                                          <div
                                            className={`flex items-center justify-between text-xs font-normal p-3 rounded-lg transition-all duration-300 transform min-h-[50px] group bg-gray-50 text-gray-800`}
                                          >
                                            <div className="flex-1">
                                              <span className="block text-sm font-medium leading-tight text-gray-900">
                                                {subItem.name}
                                              </span>
                                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                                {subItem.description ||
                                                  "Professional services"}
                                              </p>
                                            </div>
                                            {subItem.subServices && (
                                              <ChevronRight
                                                size={14}
                                                className="ml-2 text-gray-400 group-hover:text-[#010574] transition-colors flex-shrink-0"
                                              />
                                            )}
                                          </div>
                                        )}

                                        {subItem.subServices &&
                                          hoveredService ===
                                            `${subItem.name}-${sectionIndex}-${itemIndex}` && (
                                            <div
                                              data-submenu="true"
                                              className={`absolute w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-[70] overflow-hidden ${
                                                subMenuPosition.left
                                                  ? "right-full mr-3"
                                                  : "left-full ml-3"
                                              }`}
                                              style={{
                                                top: subMenuPosition.showAtTop
                                                  ? "auto"
                                                  : "0px",
                                                bottom:
                                                  subMenuPosition.showAtTop
                                                    ? "0px"
                                                    : "auto",
                                                maxHeight: "400px",
                                              }}
                                              onMouseEnter={handleSubMenuEnter}
                                              onMouseLeave={handleSubMenuLeave}
                                            >
                                              <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                                                <h4 className="font-semibold text-[#010574] text-sm">
                                                  {subItem.name}
                                                </h4>
                                                <p className="text-blue-600 text-xs mt-1">
                                                  Available services
                                                </p>
                                              </div>

                                              <div className="py-2 max-h-80 overflow-y-auto">
                                                {subItem.subServices.map(
                                                  (subService: any) => (
                                                    <Link key={subService.name}
                                                      href={subService.path}
                                                      className={`block px-4 py-3 text-sm transition-all duration-200 ${
                                                        pathname ===
                                                        subService.path
                                                          ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                                                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-r-2 hover:border-blue-300"
                                                      }`}
                                                    >
                                                      <div className="font-medium">
                                                        {subService.name}
                                                      </div>
                                                    </Link>
                                                  ),
                                                )}
                                              </div>
                                            </div>
                                          )}
                                      </div>
                                    ),
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.subServices && item.name === "News & Insights" && (
                    <div
                      ref={newsDropdownRef}
                      className={`
                        absolute top-full mt-1.5 bg-white rounded-lg shadow-lg border border-gray-200 z-[70] overflow-hidden
                        transform transition-all duration-300 font-1
                        ${dropdownVisible ? "opacity-100 visible -translate-y-1" : "opacity-0 invisible translate-y-0"}
                      `}
                      style={{
                        width: "fit-content",
                        minWidth: "200px",
                        maxHeight: "400px",
                      }}
                      onMouseEnter={handleNewsMouseEnter}
                      onMouseLeave={handleNewsMouseLeave}
                    >
                      <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                        <h4 className="font-semibold text-[#010574] text-sm">
                          News & Insights
                        </h4>
                        <p className="text-blue-600 text-xs mt-1">
                          Available topics
                        </p>
                      </div>
                      <div className="py-2 max-h-80 overflow-y-auto">
                        {item.subServices.map((subService) => (
                          <Link key={subService.name}
                            href={subService.path}
                            className={`block px-4 py-3 text-sm transition-all duration-200 ${
                              pathname === subService.path
                                ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-r-2 hover:border-blue-300"
                            }`}
                          >
                            <div className="font-medium">{subService.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] text-white flex justify-center cursor-pointer items-center transition-colors duration-300"
          >
            <Search />
          </button>
        </div>

        <div className="flex-shrink-0">
          <a
            className="custom-btn !text-black items-center gap-2 group !bg-none !shadow-none inline-flex text-center text-sm lg:text-base px-4 lg:px-6 py-2"
            href="tel:+918928138434"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] p-3 rounded-full text-white"
            />
            <span className="text-[#4D4D4D] group-hover:underline hover:text-black transition-all duration-100">
              +91 8928 138 434
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const MobileNavbar = ({ onOpenSearch }: { onOpenSearch: () => void }) => {
  const [isMobileViewOpen, setIsMobileViewOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileNewsOpen, setIsMobileNewsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openSubService, setOpenSubService] = useState<string | null>(null);
  const pathname = useLocation();

  const toggleMobileView = () => {
    setIsMobileViewOpen(!isMobileViewOpen);
    setIsMobileServicesOpen(false);
    setIsMobileNewsOpen(false);
    setOpenSection(null);
    setOpenSubService(null);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
    setIsMobileNewsOpen(false);
    setOpenSection(null);
    setOpenSubService(null);
  };

  const toggleMobileNews = () => {
    setIsMobileNewsOpen(!isMobileNewsOpen);
    setIsMobileServicesOpen(false);
    setOpenSection(null);
    setOpenSubService(null);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
    setOpenSubService(null);
  };

  const toggleSubService = (serviceName: string) => {
    setOpenSubService(openSubService === serviceName ? null : serviceName);
  };

  const handleMobileSearch = () => {
    // Close mobile menu overlay (if open) then open the global search sheet.
    setIsMobileViewOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileNewsOpen(false);
    setOpenSection(null);
    setOpenSubService(null);
    onOpenSearch();
  };

  useEffect(() => {
    document.body.style.overflow = isMobileViewOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileViewOpen]);

  return (
    <>
      <div className="xl:hidden relative bg-white">
        <div className="w-full max-w-[1920px] mx-auto py-3 flex px-4 h-18 lg:h-20 items-center justify-between">
          <img src={Logo.src} alt="Abtik Startup Advisor" width={160} height={48} className="h-10 lg:h-12 w-auto" />
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="p-2 rounded-md bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] text-white flex justify-center cursor-pointer items-center transition-colors duration-300"
              onClick={handleMobileSearch}
            >
              <Search className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              className="p-2 rounded-md border border-[#A4A4A4] hover:bg-[#f5f5f5] transition-colors duration-300"
              onClick={toggleMobileView}
              aria-label={isMobileViewOpen ? "Close menu" : "Open menu"}
            >
              {isMobileViewOpen ? (
                <X className="w-5 h-5 lg:w-6 lg:h-6 text-[#010574]" />
              ) : (
                <Menu className="w-5 h-5 lg:w-6 lg:h-6 text-[#010574]" />
              )}
            </button>
          </div>
        </div>

        {isMobileViewOpen && (
          <div className="absolute w-full max-h-[90vh] lg:max-h-[80vh] overflow-auto bg-white z-50 flex flex-col px-4 py-4 lg:py-6 shadow-lg border-t border-gray-100">
            <ul className="flex flex-col space-y-2 text-sm lg:text-base font-medium w-full font-1">
              {menuItems.map((item: any) => (
                <li
                  key={item.name}
                  className="w-full border-b border-gray-100 py-2"
                >
                  {item.subItems ? (
                    <>
                      <div
                        onClick={toggleMobileServices}
                        className="cursor-pointer flex items-center justify-between gap-2 hover:text-[#010574] transition w-full px-3 lg:px-4 py-2 lg:py-3 text-[#A4A4A4] hover:bg-[#f5f5f5] rounded-md"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {isMobileServicesOpen && item.name === "Services" && (
                        <ul className="mt-2 space-y-2 text-xs lg:text-sm w-full px-2 lg:px-4">
                          {item.subItems.map((section: any) => (
                            <li key={section.section} className="space-y-2">
                              <div
                                onClick={() => toggleSection(section.section)}
                                className="cursor-pointer flex items-center justify-between hover:text-[#010574] transition px-3 lg:px-4 py-2 hover:bg-[#f5f5f5] rounded-md"
                              >
                                <h4 className="font-semibold text-[#6B7280]">
                                  {section.section}
                                </h4>
                                <ChevronDown
                                  size={14}
                                  className={`transition-transform ${
                                    openSection === section.section
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </div>
                              {openSection === section.section && (
                                <ul className="space-y-1 pl-4 lg:pl-8 border-l-2 border-gray-200">
                                  {section.items.map(
                                    (subItem: any, itemIndex: any) => (
                                      <li key={`${subItem.name}-${itemIndex}`}>
                                        <div className="space-y-1">
                                          <div className="flex items-center justify-between">
                                            {subItem.subServices ? (
                                              <button
                                                onClick={() =>
                                                  toggleSubService(
                                                    `${subItem.name}-${itemIndex}`,
                                                  )
                                                }
                                                className="flex-1 text-left hover:text-[#010574] transition py-2 px-3 lg:px-4 rounded-md hover:bg-[#f5f5f5] text-[#6B7280]"
                                              >
                                                {subItem.name}
                                              </button>
                                            ) : (
                                            subItem.path ? (
                                              <Link  href={subItem.path}
                                                onClick={toggleMobileView}
                                                className="flex-1 hover:text-[#010574] transition py-2 px-3 lg:px-4 rounded-md hover:bg-[#f5f5f5] text-[#6B7280]"
                                              >
                                                {subItem.name}
                                              </Link>
                                            ) : (
                                              <span className="flex-1 transition py-2 px-3 lg:px-4 rounded-md text-[#6B7280]">
                                                {subItem.name}
                                              </span>
                                            )
                                            )}
                                            {subItem.subServices && (
                                              <button
                                                onClick={() =>
                                                  toggleSubService(
                                                    `${subItem.name}-${itemIndex}`,
                                                  )
                                                }
                                                className="p-1 rounded hover:bg-[#f5f5f5] transition-colors"
                                              >
                                                <ChevronDown
                                                  size={12}
                                                  className={`transition-transform text-[#6B7280] ${
                                                    openSubService ===
                                                    `${subItem.name}-${itemIndex}`
                                                      ? "rotate-180"
                                                      : ""
                                                  }`}
                                                />
                                              </button>
                                            )}
                                          </div>
                                          {subItem.subServices &&
                                            openSubService ===
                                              `${subItem.name}-${itemIndex}` && (
                                              <ul className="space-y-1 pl-6 border-l border-gray-300 mt-2">
                                                {subItem.subServices.map(
                                                  (subService: any) => (
                                                    <li key={subService.name}>
                                                      <Link  href={subService.path}
                                                        onClick={
                                                          toggleMobileView
                                                        }
                                                        className={`block transition py-2 px-3 rounded-md text-xs ${
                                                          pathname ===
                                                          subService.path
                                                            ? "text-[#010574] bg-[#e8f3ff] font-semibold"
                                                            : "text-[#8B8B8B] hover:text-[#010574] hover:bg-[#f5f5f5]"
                                                        }`}
                                                      >
                                                        <div className="flex items-center">
                                                          {subService.name}
                                                        </div>
                                                      </Link>
                                                    </li>
                                                  ),
                                                )}
                                              </ul>
                                            )}
                                        </div>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : item.subServices && item.name === "News & Insights" ? (
                    <>
                      <div
                        onClick={toggleMobileNews}
                        className="cursor-pointer flex items-center justify-between gap-2 hover:text-[#010574] transition w-full px-3 lg:px-4 py-2 lg:py-3 text-[#A4A4A4] hover:bg-[#f5f5f5] rounded-md"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            isMobileNewsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {isMobileNewsOpen && (
                        <ul className="mt-2 space-y-1 pl-4 lg:pl-8 border-l-2 border-gray-200">
                          {item.subServices.map((subService: any) => (
                            <li key={subService.name}>
                              <Link  href={subService.path}
                                onClick={toggleMobileView}
                                className={`block transition py-2 px-3 rounded-md text-xs ${
                                  pathname === subService.path
                                    ? "text-[#010574] bg-[#e8f3ff] font-semibold"
                                    : "text-[#8B8B8B] hover:text-[#010574] hover:bg-[#f5f5f5]"
                                }`}
                              >
                                <div className="flex items-center">
                                  {subService.name}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link  href={item.path}
                      onClick={toggleMobileView}
                      className={`block transition px-3 lg:px-4 py-2 lg:py-3 rounded-md hover:bg-[#f5f5f5] ${
                        pathname === item.path
                          ? "text-[#052EAA] font-bold"
                          : "text-[#A4A4A4] hover:text-[#010574]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="">
                <a
                  className="custom-btn !text-black items-center gap-2 group !bg-none !shadow-none inline-flex text-center text-sm lg:text-base px-4 lg:px-6 py-2"
                  href="tel:+918928138434"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] p-3 rounded-full text-white"
                  />
                  <span className="text-[#4D4D4D] group-hover:underline hover:text-black transition-all duration-100">
                    +91 8928 138 434
                  </span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchSheetOpenChange = (nextOpen: boolean) => setOpen(nextOpen);

  const menuLinks = useMemo(() => flattenMenuToLinks(menuItems), []);
  const listedBlogs = useMemo(
    () => blogsData.filter((b) => b.showInNewBlogList !== false),
    []
  );

  const pageResults = useMemo(() => {
    const q = debouncedQuery.trim();
    if (q.length < 2) return [];
    return menuLinks
      .map((l) => ({
        link: l,
        rank: getSearchRank(`${l.name} ${l.context ?? ""} ${l.description ?? ""}`, q),
      }))
      .filter((x) => x.rank >= 0)
      .sort((a, b) => b.rank - a.rank)
      .slice(0, 10)
      .map((x) => x.link);
  }, [debouncedQuery, menuLinks]);

  const blogResults = useMemo(() => {
    const q = debouncedQuery.trim();
    if (q.length < 2) return [];
    return listedBlogs
      .map((b) => ({
        blog: b,
        rank: getSearchRank(
          `${b.title} ${b.category} ${b.cardDescription ?? ""} ${b.description} ${b.slug}`,
          q
        ),
      }))
      .filter((x) => x.rank >= 0)
      .sort((a, b) => b.rank - a.rank)
      .slice(0, 10)
      .map((x) => x.blog);
  }, [debouncedQuery, listedBlogs]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setDebouncedQuery("");
      setIsSearching(false);
    }
  }, [open]);

  // Debounce search input to avoid filtering on every keystroke.
  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) {
      setDebouncedQuery("");
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const t = window.setTimeout(() => {
      setDebouncedQuery(q);
      setIsSearching(false);
    }, 300);

    return () => window.clearTimeout(t);
  }, [query]);

  return (
    <>
      <nav
        className="sticky top-0 left-0 w-full z-50 bg-white shadow-xl"
        style={{ fontFamily: "Montserrat Alternates" }}
      >
        <DesktopNavbar setOpen={setOpen} />
        <MobileNavbar onOpenSearch={() => handleSearchSheetOpenChange(true)} />
      </nav>

      <Sheet open={open} onOpenChange={handleSearchSheetOpenChange} modal={false}>
        <SheetContent
          side="top"
          className="p-0 w-full max-w-none overflow-y-auto overscroll-contain touch-pan-y gap-0 bottom-0 h-[100dvh] sm:bottom-auto sm:h-auto sm:max-h-[90dvh]"
        >
          <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100">
            <div className="px-4 pt-6">
              <SheetHeader className="flex justify-center items-center">
                <SheetTitle className="text-2xl font-bold">Search</SheetTitle>
                <SheetDescription className="text-sm text-gray-500">
                  Search for services, pages, and blogs
                </SheetDescription>
              </SheetHeader>
            </div>

            <SheetClose asChild>
              <button
                type="button"
                aria-label="Close search"
                className="absolute top-4 right-4 p-2 rounded-md bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors z-20"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </SheetClose>

            <div className="w-full max-w-5xl mx-auto flex items-center px-4 pb-4">
              <div className="relative flex-1 min-w-0">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder='Try "Startup India"'
                  className="w-full pr-10"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  {isSearching ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Search className="w-5 h-5" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <section className="px-4 pb-6">
            {query.trim().length < 2 ? (
              <div className="text-center text-sm text-gray-500 py-6">
                Type to search. Results will appear here.
              </div>
            ) : (
              <div className="w-full max-w-5xl mx-auto space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                    <h4 className="font-semibold text-[#010574] text-sm">
                      Pages & Services
                    </h4>
                    <p className="text-blue-600 text-xs mt-1">
                      Matching navigation links
                    </p>
                  </div>
                  <div className="p-2">
                    {isSearching ? (
                      <div className="px-3 py-4 space-y-3">
                        <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
                        <div className="h-4 bg-gray-100 rounded w-2/3 animate-pulse" />
                        <div className="h-4 bg-gray-100 rounded w-4/5 animate-pulse" />
                      </div>
                    ) : pageResults.length === 0 ? (
                      <div className="px-3 py-4 text-sm text-gray-500">
                        No matching pages.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        {pageResults.map((r) => (
                          <Link key={`${r.name}-${r.path}`}
                            href={r.path}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-3 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <div className="font-semibold text-sm text-gray-900 line-clamp-1">
                                  {r.name}
                                </div>
                                {(r.context || r.description) && (
                                  <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                                    {r.context}
                                    {r.context && r.description ? " — " : ""}
                                    {r.description}
                                  </div>
                                )}
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                    <h4 className="font-semibold text-[#010574] text-sm">
                      Blogs
                    </h4>
                    <p className="text-blue-600 text-xs mt-1">
                      Matching blog posts (with full details)
                    </p>
                  </div>
                  <div className="p-2">
                    {isSearching ? (
                      <div className="px-3 py-4 space-y-4">
                        <div className="flex gap-4 items-start">
                          <div className="w-40 h-28 md:w-52 md:h-36 bg-gray-100 rounded-lg animate-pulse" />
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
                            <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse" />
                            <div className="h-3 bg-gray-100 rounded w-5/6 animate-pulse" />
                          </div>
                        </div>
                        <div className="flex gap-4 items-start">
                          <div className="w-40 h-28 md:w-52 md:h-36 bg-gray-100 rounded-lg animate-pulse" />
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-100 rounded w-2/3 animate-pulse" />
                            <div className="h-3 bg-gray-100 rounded w-2/5 animate-pulse" />
                            <div className="h-3 bg-gray-100 rounded w-4/6 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    ) : blogResults.length === 0 ? (
                      <div className="px-3 py-4 text-sm text-gray-500">
                        No matching blogs.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        {blogResults.map((b) => (
                          <Link key={b.slug}
                            href={`/expandedBlog/${b.slug}`}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-3 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-40 h-28 md:w-52 md:h-36 overflow-hidden rounded-lg flex-shrink-0">
                                <img
                                  loading="lazy"
                                  src={b.cardImg ?? b.img}
                                  alt={b.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="min-w-0 space-y-1">
                                <div className="font-semibold text-sm text-gray-900 line-clamp-2">
                                  {b.title}
                                </div>
                                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full">
                                    {b.category}
                                  </span>
                                  <span>{b.date}</span>
                                  <span>•</span>
                                  <span>{b.readTime}</span>
                                </div>
                                <div className="text-xs text-gray-600 line-clamp-3">
                                  {b.cardDescription ?? b.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                    <div className="px-2 pt-2">
                      <Link  href="/news-insights/blogs"
                        onClick={() => setOpen(false)}
                        className="block text-center text-sm font-semibold text-[#3CA2E2] hover:underline py-2"
                      >
                        View all blogs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
       </SheetContent>
      </Sheet>
    </>
  );
};

export default memo(Navbar);