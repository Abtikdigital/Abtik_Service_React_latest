import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo/NewTmLogo.png";
import { MapPin } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";;
import { memo } from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-[#F7F7F7]">
        <div className="grid grid-cols-1 lg:grid-cols-4 font-3 space-y-5 px-7 md:px-14 py-6 md:py-10 w-full max-w-[1920px] mx-auto">
          <div className="space-y-5">
            <div>
              <OptimizedImage src={Logo.src} alt="Abtik Startup Advisor pvt ltd" width={160} height={56} className="h-14 w-auto" />
            </div>
            <p className="paragraph">
              © 2025 Abtik Startup Advisor pvt ltd - All rights reserved.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/share/1aKQvTf7NU/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg "
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white "
                  size="xl"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/abtik-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg "
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white "
                  size="xl"
                />
              </a>
              <a
                href="https://www.instagram.com/abtikservices?igsh=MTk3cWxteWswbTFidQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg "
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white "
                  size="xl"
                />
              </a>
            </div>
          </div>

          <div>
            <p className="heading">Contact Info</p>
            <ul className="space-y-3 py-1.5">
              <li className="flex gap-3 items-center">
                <Phone className="hover:from-[#2178B5] hover:bg-gradient-to-tl text-white min-h-8 min-w-8 hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg" />
                <a
                  href="tel:+91 89281 38434"
                  className="text-sm text-[#4D4D4D] font-semibold hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  +91 89281 38434
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="hover:from-[#2178B5] hover:bg-gradient-to-tl text-white min-h-8 min-w-8 hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg" />
                <a
                  href="mailto:info&#64;abtikservices&#46;com"
                  className="text-sm text-[#4D4D4D] font-semibold hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  info&#64;abtikservices&#46;com
                </a>
              </li>
              <li className="flex gap-3 items-center ">
                <MapPin className="hover:from-[#2178B5] text-white min-h-8 min-w-8 hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg" />
                <a
                  href="https://maps.app.goo.gl/Mu76k61nJaZzH38P8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  313, Patel Ave, Sarkhej - Gandhinagar Hwy, Thaltej, Ahmedabad,
                  Gujarat 380054
                </a>
              </li>
              <li className="flex gap-3 items-center ">
                <MapPin className="hover:from-[#2178B5] text-white min-h-8 min-w-8 hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg" />
                <a
                  href="https://maps.app.goo.gl/Mu76k61nJaZzH38P8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  B-209 Shilp Corporate Park, Rajpath Rangoli Rd, Thaltej,
                  Ahmedabad, Gujarat - 380054
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 space-y-5 md:grid-cols-3 lg:col-span-2">
            <div className="space-y-3">
              <p className="heading">Company</p>
              <ul className="flex flex-col space-y-3">
              <Link  href={"/"}
                  className="text-sm text-[#4D4D4D] font-semibold hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  Homepage
                </Link>
                <Link  href={"/about"}
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  About Us
                </Link>
                <Link  href={"/contact"}
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  Contact Abtik
                </Link>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="heading">Our Popular Services</p>
              <ul className="flex flex-col space-y-3">
                <Link  href={"/services/funding/grants"}
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  Government Grants
                </Link>
                <Link  href={"/services/certificate/startup-india"}
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  Startup India Certification
                </Link>
                <Link  href={"/services/certificate/msme"}
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  MSME Certificate Registration
                </Link>
                <Link  href={"/services/funding/seed-fund"}
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  Startup Seed Funding
                </Link>
                <Link  href={"/services/legal/trademark-registration"}
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  Trademark Registration Service
                </Link>
                <Link  href={"/services/certificate/iso"}
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  ISO Certification
                </Link>
                <Link  href={"/services/certificate/zed"}
                  className="text-sm font-semibold  text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  ZED Certification
                </Link>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="heading">Legal</p>
              <ul className="flex flex-col space-y-3">
                <Link  href={"/legal/privacy-policy"}
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  Privacy Policy
                </Link>
                <Link  href={"/legal/terms-and-conditions"}
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  Terms & Conditions
                </Link>
                {/* <Link  href={"/legal/refund-policy"}
                  className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
                >
                  Cancellation & Refund Policy
                </Link> */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] text-white">
        <div className="space-y-4 text-center px-7 md:px-14 py-6 md:py-8 w-full max-w-[1920px] mx-auto">
          <div>
            <p className="text-sm md:text-base">
              <span className="font-bold">Note :</span> Payments only accepted
              in our company account; personal account payments are not our
              responsibility.
            </p>
          </div>
          <div className="border-t border-white/20 pt-4">
            <p className="text-sm md:text-base">
              <span className="font-bold">Disclaimer :</span> Please note that
              although we offer consulting, approval is subject to the terms and
              conditions of the scheme or programme.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Footer);
