"use client";
import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";

import Mainlayout from "../../section/Mainlayout";
import BgImage from "../../assets/Hero/bgImg.svg";
import Contact from "../../section/Contact";
import { useDispatch } from "react-redux";
import seoData from "../../data/seoData.json";
import { MapPin, Phone, Mail } from "lucide-react";

const TermsConditions = () => {
 const dispatch = useDispatch();
 const handleOpenDialog = () => {
  dispatch({ type: "open" });
 };

 // Hero
 const refHero = useRef(null);
 const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

 // Content
 const refContent = useRef(null);
 const isInViewContent = useInView(refContent, { once: true, amount: 0.1 });

 // Contact
 const refContact = useRef(null);
 const isInViewContact = useInView(refContact, { once: true, amount: 0.4 });

 return (
  <>
   

   <Mainlayout>
    {/* Hero Section */}
    <section
     ref={refHero}
     className="flex justify-center items-center h-[70vh] sm:h-[80vh] lg:h-[85vh]
           bg-center bg-cover w-full max-w-[1920px] mx-auto px-6 relative"
     style={{
      backgroundImage: `url(${ BgImage.src })`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
     }}
    >
     <div className="absolute inset-0 bg-black/30"></div>

     <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isInViewHero ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="relative z-10 text-center max-w-3xl space-y-6"
     >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-1">
       Terms & <span className="text-[#3CA2E2]">Conditions</span>
      </h1>
      <p className="text-lg text-white font-3">
       Please read these terms carefully before using our website or
       availing any services from Abtik Startup Advisor pvt ltd Team.
      </p>
      <button
       onClick={handleOpenDialog}
       className="custom-btn px-8 py-4"
      >
       Contact Us
      </button>
     </motion.div>
    </section>

    {/* Content Section */}
    <motion.section
     ref={refContent}
     initial={{ y: 100, opacity: 0 }}
     animate={isInViewContent ? { y: 0, opacity: 1 } : {}}
     transition={{ duration: 0.5 }}
     className="bg-gray-50 py-16"
    >
     <div className="max-w-4xl mx-auto px-6 space-y-8">

      {/* Introduction */}
      <div className="bg-white p-8 rounded-2xl shadow-sm">
       <p className="text-gray-700 font-3 leading-relaxed">
        Welcome to <strong>Abtik Startup Advisor pvt ltd Team</strong> (“Abtik Startup Advisor pvt ltd Team”,
        “we”, “our”, or “us”). These Terms and Conditions govern your
        access to and use of our website, services, and any interaction
        with us. By accessing our website or availing our services, you
        agree to be bound by these Terms and Conditions along with our
        Privacy Policy.
       </p>
      </div>

      {/* Sections */}
      {[
       ["1. About Abtik Startup Advisor pvt ltd Team",
        "We provide professional business consulting and advisory services including business advisory, government schemes consultancy, MSME and Startup India support, trademark, ISO, ZED compliance, funding advisory, and legal documentation support. We act only as consultants; final approvals are governed by respective authorities."
       ],
       ["2. Acceptance of Terms",
        "By using our website or services, you confirm that you have read, understood, and agreed to these Terms and Conditions and applicable laws."
       ],
       ["3. Use of Website",
        "You agree to use our website lawfully and not misuse content, attempt unauthorized access, or provide false information."
       ],
       ["4. Client Responsibilities",
        "You must provide accurate information, valid documents, timely responses, and comply with applicable laws. Client-side delays may impact outcomes."
       ],
       ["5. Payments and Transactions",
        "Payments are accepted only in the official company bank account of Abtik Startup Advisor pvt ltd Team. Payments made to personal accounts are not our responsibility."
       ],
       ["6. Disclaimer on Approvals",
        "We do not guarantee approvals, certifications, funding, or outcomes. Decisions are solely at the discretion of respective authorities."
       ],
       ["7. Privacy and Data Protection",
        "Your data is handled in accordance with our Privacy Policy & Data Protection Policy."
       ],
       ["8. Confidentiality",
        "Client information is kept confidential unless required by law, shared with trusted partners, or consented by the client."
       ],
       ["9. Intellectual Property",
        "All website content is the intellectual property of Abtik Startup Advisor pvt ltd Team and may not be used without written permission."
       ],
       ["10. Limitation of Liability",
        "Liability is limited to fees paid for the specific service. We are not responsible for third-party decisions."
       ],
       ["11. Third-Party Links",
        "We are not responsible for content or policies of third-party websites."
       ],
       ["12. Amendments",
        "We reserve the right to modify these Terms at any time. Continued use implies acceptance."
       ],
       ["13. Governing Law and Jurisdiction",
        "These Terms are governed by Indian law. Jurisdiction lies exclusively in Ahmedabad, Gujarat."
       ],
      ].map(([title, content], index) => (
       <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-2 font-bold mb-4">{title}</h2>
        <p className="text-gray-700 font-3 leading-relaxed">{content}</p>
       </div>
      ))}

      {/* Contact */}
      <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
       <h2 className="text-2xl font-bold font-2 mb-4">Contact Information</h2>
       <p className="font-3 mb-4">Abtik Startup Advisor pvt ltd Team</p>
       <div className="flex flex-col items-center space-y-3">
        <div className="flex items-center gap-3">
         <MapPin className="text-[#3CA2E2] min-h-5 min-w-5" />
         <p className="font-3">313, Patel Ave, Thaltej, Ahmedabad – 380054</p>
        </div>
        <div className="flex items-center gap-3">
         <Phone className="text-[#3CA2E2] min-h-5 min-w-5" />
         <a href="tel:+91 89281 38434" className="font-3 hover:underline">+91 89281 38434</a>
        </div>
        <div className="flex items-center gap-3">
         <Mail className="text-[#3CA2E2] min-h-5 min-w-5" />
         <a href="mailto:info@abtikservices.com" className="font-3 hover:underline">info@abtikservices.com</a>
        </div>
       </div>
      </div>

     </div>
    </motion.section>

    {/* Contact Component */}
    <motion.section
     ref={refContact}
     initial={{ y: 100, opacity: 0 }}
     animate={isInViewContact ? { y: 0, opacity: 1 } : {}}
     transition={{ duration: 0.5 }}
    >
     <Contact />
    </motion.section>
   </Mainlayout>
  </>
 );
};

export default memo(TermsConditions);
