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
import MainLayout from "../section/Mainlayout";
import Contact from "../section/Contact";
import BgImage from "../assets/Hero/bgImg.svg";
import EbookImage from "../assets/eBooks/Image2.jpg";
import Book1 from "../assets/eBooks/StartupAccelerator.jpg";
import Book2 from "../assets/eBooks/TAXExemption.jpg"
import FormImage from "../assets/Logo/LogoWithoutBelowContent.png";
import seoData from "../data/seoData.json";
import isValidIndianNumber from "../utils/validation/isGenuineNumber";
import { addDownloadApplication } from "../api/eBookApi"; // Updated to a generic API for form submission
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
  
 );
};

export default memo(Ebook);
