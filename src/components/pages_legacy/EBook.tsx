"use client";
import React, { memo, useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

import {
 Mail,
 User,
 Phone,
 Building,
 X,
 Book,
 CheckCircle,
 FileText,
 ArrowRight,
 ArrowUpRight,
} from "lucide-react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import MainLayout from "../../section/Mainlayout";
import Contact from "../../section/Contact";
import BgImage from "../../assets/Hero/bgImg.svg";
import EbookImage from "../../assets/eBooks/Image2.jpg";
import Book1 from "../../assets/eBooks/StartupAccelerator.jpg";
import Book2 from "../../assets/eBooks/TAXExemption.jpg"
import FormImage from "../../assets/Logo/LogoWithoutBelowContent.png";
import seoData from "../../data/seoData.json";
import isValidIndianNumber from "../../utils/validation/isGenuineNumber";
import { addDownloadApplication } from "../../api/eBookApi"; // Updated to a generic API for form submission
import { useDispatch } from "react-redux";
import { useNavigate } from "@/utils/hooks/useNavigate";;

interface FormData {
 name: string;
 email: string;
 phone: string;
 pdfPath:any;

 companyname: string;
 bookName: string;
}

interface EbookData {
 id: string;
 title: string;
 description: string;
 image: string;
 pdfPath: string;
 downloadFileName: string;
}

interface Benefit {
 icon: React.ComponentType<{ className?: string }>;
 title: string;
 description: string;
}

interface FAQ {
 question: string;
 answer: string;
}

// interface CustomDropdownProps {
//  options: { value: string; label: string }[];
//  value: string;
//  onChange: (value: string) => void;
//  placeholder: string;
//  disabled: boolean;
//  error: boolean;
// }

const backdropVariants = {
 hidden: { opacity: 0 },
 visible: { opacity: 1, transition: { duration: 0.2 } },
};

const modalVariants = {
 hidden: { opacity: 0 },
 visible: { opacity: 1, transition: { duration: 0.2 } },
};

// const CustomDropdown: React.FC<CustomDropdownProps> = ({
//  options,
//  value,
//  onChange,
//  placeholder,
//  disabled,
//  error,
// }) => {
//  const [isOpen, setIsOpen] = useState(false);
//  const dropdownRef = useRef<HTMLDivElement>(null);
//  const selectedLabel =
//   options.find((opt) => opt.value === value)?.label || placeholder;

//  useEffect(() => {
//   const handleClickOutside = (event: MouseEvent) => {
//    if (
//     dropdownRef.current &&
//     !dropdownRef.current.contains(event.target as Node)
//    ) {
//     setIsOpen(false);
//    }
//   };
//   document.addEventListener("mousedown", handleClickOutside);
//   return () => document.removeEventListener("mousedown", handleClickOutside);
//  }, []);

//  return (
//   <div className="relative" ref={dropdownRef}>
//    <button
//     type="button"
//     onClick={() => !disabled && setIsOpen(!isOpen)}
//     disabled={disabled}
//     className={`w-full pl-10 pr-4 py-2 border ${
//      error ? "border-red-500" : "border-gray-300"
//     } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] h-[38px] flex justify-between items-center text-left ${
//      disabled ? "cursor-not-allowed opacity-50" : ""
//     }`}
//    >
//     <span>{selectedLabel}</span>
//     <svg
//      className={`h-4 w-4 text-gray-700 transform transition-transform duration-200 ${
//       isOpen ? "rotate-180" : ""
//      }`}
//      xmlns="http://www.w3.org/2000/svg"
//      viewBox="0 0 20 20"
//     >
//      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
//     </svg>
//    </button>
//    {isOpen && (
//     <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
//      <ul className="py-2 px-2 max-h-48 overflow-y-auto flex flex-col gap-1.5">
//       {options.map((option) => (
//        <li
//         key={option.value}
//         onClick={() => {
//          onChange(option.value);
//          setIsOpen(false);
//         }}
//         className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-sm"
//        >
//         {option.label}
//        </li>
//       ))}
//      </ul>
//     </div>
//    )}
//   </div>
//  );
// };

const showSwal = (options: any) => {
 return Swal.fire({
  ...options,
  customClass: { container: "swal-high-zindex" },
 });
};

const Ebook: React.FC = () => {
 const [isFormOpen, setIsFormOpen] = useState(false);
 const [selectedEbook, setSelectedEbook] = useState<EbookData | null>(null);
 const [isExpanded, setIsExpanded] = useState({ isOpen: false, index: -1 });
 const navigate=useNavigate()

 const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
  // control,
  setValue,
 } = useForm<FormData>({
  defaultValues: {
   name: "",
   email: "",
   phone: "",

   companyname: "",
   bookName: "",
  },
 });

 // const bookOptions = [
 //  { value: "business-financing-guide", label: "Business Financing Guide" },
 //  { value: "startup-growth-strategies", label: "Startup Growth Strategies" },
 //  { value: "loan-application-mastery", label: "Loan Application Mastery" },
 // ];

 const validationRules = {
  name: {
   required: "* Name is required",
   minLength: {
    value: 2,
    message: "* Name must be at least 2 characters long",
   },
   maxLength: { value: 50, message: "* Name cannot exceed 50 characters" },
   pattern: {
    value: /^[a-zA-Z\s]+$/,
    message: "Name can only contain letters and spaces",
   },
  },
  bookName: { required: "* Please select a book" },
  email: {
   required: "* Email is required",
   pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Please enter a valid email address",
   },
  },
  phone: {
   required: "* Phone number is required",
   maxLength: { value: 12, message: "* Phone number must be 10-12 digits" },
   validate: {
    validIndianNumber: (value: string) =>
     isValidIndianNumber(value) ||
     "Please enter a valid 10-12 digit phone number",
   },
  },
  companyname: { required: "* Company name is required" },
 };

 const ebooks: EbookData[] = [
  {
   id: "ebook1",
   title:
    "Turn Your Startup Dream into Reality with Our Startup Accelerator ",
   description:
    "Grow your startup idea into a successful business with mentorship, funding support, accelerator programs, and global growth opportunities.",
   image: Book1,
   pdfPath: "/StartupAccelerator.pdf",
   downloadFileName: "StartupAccelerator.pdf",
  },
    {
   id: "ebook2",
   title:
    "Startup India Tax Exemption Guide: Claim Your 80-IAC Benefits ",
   description:
    "The ultimate guide for Indian startup founders. Discover how to get DPIIT recognition and claim your Section 80-IAC tax benefits to save profits and accelerate your growth.",
   image: Book2,
   pdfPath: "/TaxExemptionEBook.pdf",
   downloadFileName: "TaxExemptionBook.pdf",
  },
  
 ];

 const faq: FAQ[] = [
  {
   question: "What are the benefits of downloading these eBooks?",
   answer:
    "Our eBooks provide in depth knowledge on business financing, CGTMSE schemes, and growth strategies, tailored for entrepreneurs and small business owners.",
  },
  {
   question: "How can I access the eBooks?",
   answer:
    "Simply fill out the form with your details, and you’ll be able to download the eBook instantly after submission.",
  },
  {
   question: "Are the eBooks free?",
   answer:
    "Yes, all our eBooks are completely free to download after providing your contact information.",
  },
 ];

 const benefitsData: Benefit[] = [
  {
   icon: Book,
   title: "Expert Insights",
   description:
    "Gain access to expert advice on business financing and growth strategies.",
  },
  {
   icon: CheckCircle,
   title: "Practical Tips",
   description:
    "Learn actionable steps to secure loans and scale your business effectively.",
  },
  {
   icon: FileText,
   title: "Comprehensive Guides",
   description:
    "Detailed guides to navigate CGTMSE schemes and loan applications.",
  },
 ];

 const resetAllStates = () => {
  reset();
  setIsFormOpen(false);
  setSelectedEbook(null);
 };

 const onSubmit = async (data: FormData) => {
  try {
   const apiData = {
    name: data.name,
    companyName: data.companyname,
    email: data.email,
    number: data.phone,

    bookName: data.bookName,
   };
   const res = await addDownloadApplication(apiData);
   if (res?.status === 201) {
    await showSwal({
     icon: "success",
     title: "Success!",
     text: "Your details have been submitted successfully.",
     confirmButtonColor: "#052EAA",
     scrollbarPadding: false,
    });
    navigate(`/files${data?.pdfPath}`)
    
    resetAllStates();
   } else {
    await showSwal({
     icon: "error",
     title: "Error",
     text:
      res?.data?.message || "Could not submit details. Please try again.",
     confirmButtonColor: "#052EAA",
     scrollbarPadding: false,
    });
   }
  } catch (error: any) {
   await showSwal({
    icon: "error",
    title: "Submission Error",
    text: error?.response?.data?.message || "An unexpected error occurred.",
    confirmButtonColor: "#052EAA",
    scrollbarPadding: false,
   });
  }
 };

 const openFormModal = (ebook: EbookData) => {
  setSelectedEbook(ebook);
  setValue("pdfPath",ebook?.pdfPath)
  setValue("bookName", ebook.title.toLowerCase().replace(/\s+/g, "-")); // Set default bookName based on clicked eBook
  setIsFormOpen(true);
 };

 const closeModal = () => {
  resetAllStates();
 };

 const handleBackdropClick = (e: React.MouseEvent) => {
  if (e.target === e.currentTarget) {
   closeModal();
  }
 };

 const toggleIsExpanded = (index: number) => {
  setIsExpanded((prev) =>
   prev.index === index && prev.isOpen
    ? { isOpen: false, index: -1 }
    : { isOpen: true, index }
  );
 };

 const refHero = useRef(null);
 const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

 const refEbooks = useRef(null);
 const isInViewEbooks = useInView(refEbooks, { once: true, amount: 0.4 });

 const refTouch = useRef(null);
 const isInViewTouch = useInView(refTouch, { once: true, amount: 0.1 });

 const refBenefits = useRef(null);
 const isInViewBenefits = useInView(refBenefits, { once: true, amount: 0.4 });

 const refFAQ = useRef(null);
 const isInViewFAQ = useInView(refFAQ, { once: true, amount: 0.4 });

 const refContact = useRef(null);
 const isInViewContact = useInView(refContact, { once: true, amount: 0.4 });

 useEffect(() => {
  const style = document.createElement("style");
  style.textContent = `
   .swal-high-zindex {
    z-index: 99999999999 !important;
   }
   .swal2-container.swal-high-zindex {
    z-index: 99999999999 !important;
   }
  `;
  document.head.appendChild(style);
  return () => {
   document.head.removeChild(style);
  };
 }, []);
 const dispatch = useDispatch();
 const handleOpenDialog = () => {
  dispatch({ type: "open" });
 };

  return (
    <>
      <MainLayout>
        {/* Hero Section */}
        <section
          ref={refHero}
          className="flex justify-center items-center h-[70vh] sm:h-[80vh] lg:h-[85vh] xl:h-[80vh] 2xl:h-[75vh] bg-center bg-cover w-full max-w-[1920px] mx-auto px-4 relative overflow-hidden"
          style={{
            backgroundImage: `url(${BgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/20 lg:bg-transparent"></div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInViewHero ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-4xl text-center lg:text-left lg:w-1/2 space-y-6 px-7 md:px-14"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white lg:text-inherit font-1">
              Resources & <span className="text-[#3CA2E2]">E-Books</span>
            </h1>
            <p className="text-lg md:text-xl text-white font-3">
              Download our comprehensive guides to scale your business and navigate government schemes with ease.
            </p>
            <button onClick={handleOpenDialog} className="custom-btn px-8 py-4">
              Get Started
            </button>
          </motion.div>
        </section>

        {/* Ebooks List */}
        <section ref={refEbooks} className="py-16 bg-[#f7f7f7]">
          <div className="max-w-[1920px] mx-auto px-7 md:px-14">
            <h2 className="sub-heading text-center mb-12 font-1 bg-clip-text text-transparent bg-gradient-to-t from-[#3CA2E2] to-[#052EAA]">
              Our Premium E-Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ebooks.map((ebook, index) => (
                <motion.div
                  key={ebook.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInViewEbooks ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-4xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow"
                >
                  <div className="md:w-1/3">
                    <img src={ebook.image.src} alt={ebook.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-2/3 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 font-2">{ebook.title}</h3>
                      <p className="text-gray-600 mb-6 font-3">{ebook.description}</p>
                    </div>
                    <button
                      onClick={() => openFormModal(ebook)}
                      className="custom-btn w-full md:w-auto px-6 py-3"
                    >
                      Download Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={refBenefits} className="py-16 bg-white">
          <div className="max-w-[1920px] mx-auto px-7 md:px-14">
            <h2 className="sub-heading text-center mb-12 font-1">Why Download Our E-Books?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitsData.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInViewBenefits ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                    <benefit.icon className="w-8 h-8 text-[#052EAA]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-2">{benefit.title}</h3>
                  <p className="text-gray-600 font-3">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={refFAQ} className="py-16 bg-[#f7f7f7]">
          <div className="max-w-4xl mx-auto px-7">
            <h2 className="sub-heading text-center mb-12 font-1">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <button
                    onClick={() => toggleIsExpanded(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                  >
                    <span className="font-bold font-2">{item.question}</span>
                    <ArrowUpRight className={`w-5 h-5 transition-transform ${isExpanded.index === index && isExpanded.isOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isExpanded.index === index && isExpanded.isOpen && (
                    <div className="px-6 pb-4 text-gray-600 font-3">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={refContact}>
          <Contact />
        </section>

        {/* Download Form Modal */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={handleBackdropClick}
              className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4"
            >
              <motion.div
                variants={modalVariants}
                className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={closeModal} className="absolute right-4 top-4 z-10 p-2 bg-gray-100 rounded-full">
                  <X className="w-5 h-5" />
                </button>
                <div className="p-8">
                  <div className="text-center mb-8">
                    <img src={FormImage.src} alt="Form Logo" className="h-12 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold font-2">Download Your E-Book</h2>
                    <p className="text-gray-600 font-3">Fill the form below to get instant access.</p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input {...register("name", validationRules.name)} placeholder="Full Name" className="w-full pl-10 pr-4 py-2 border rounded-lg" />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input {...register("email", validationRules.email)} placeholder="Email Address" className="w-full pl-10 pr-4 py-2 border rounded-lg" />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input {...register("phone", validationRules.phone)} placeholder="Phone Number" className="w-full pl-10 pr-4 py-2 border rounded-lg" />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}

                    <div className="relative">
                      <Building className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input {...register("companyname", validationRules.companyname)} placeholder="Company Name" className="w-full pl-10 pr-4 py-2 border rounded-lg" />
                    </div>
                    {errors.companyname && <p className="text-red-500 text-xs">{errors.companyname.message}</p>}

                    <button disabled={isSubmitting} type="submit" className="custom-btn w-full py-3">
                      {isSubmitting ? "Submitting..." : "Submit & Download"}
                    </button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MainLayout>
    </>
  );

};

export default memo(Ebook);
