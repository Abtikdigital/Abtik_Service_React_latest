import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import OtpInput from "react-otp-input";
import Swal from "sweetalert2";
import Image from "../assets/Logo/Abtik-blue.png";
import { X, User, Mail, Phone, MessageSquare, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { memo, useState, useRef, useEffect } from "react";
import Offer from "./Offer";
import { addOtpDetails, verifyOtp } from "../api/otpApis";

// Define FormData interface
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  companyname: string;
  serviceType: string;
}

// Define Redux state type
interface RootState {
  isContactFormOpen: boolean;
}

// Define props for Mainlayout
interface MainlayoutProps {
  children: React.ReactNode;
}

// Custom ShadCN-like Dropdown Component
const ShadcnDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  disabled,
  error,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
  error?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full pl-10 pr-4 py-2 border ${
          error
            ? "border-red-500"
            : "border-gray-300"
        } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200 ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        } flex justify-between items-center text-left`}
      >
        <span className="text-sm">{selectedLabel}</span>
        <svg
          className={`fill-current h-4 w-4 text-gray-700 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2 px-2 max-h-48 overflow-y-auto gap-1.5 p-1 flex flex-col">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-sm"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Animation Variants for Framer Motion
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const modalVariants: any = {
  hidden: { opacity: 0, y: -30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

// Custom SweetAlert with higher z-index
const showSwal = (options: any) => {
  return Swal.fire({
    ...options,
    customClass: {
      container: 'swal-high-zindex'
    }
  });
};

const Mainlayout = ({ children }: MainlayoutProps) => {
  const isOpen = useSelector((state: RootState) => state.isContactFormOpen);
  const dispatch = useDispatch();
  
  // OTP related states
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState("");
  const [, setContactPayload] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      companyname: "",
      serviceType: "",
    },
  });

  // Service options for dropdown
  const serviceOptions = [
    { value: "funding-solution", label: "Funding Solution" },
    { value: "trademark-ip", label: "Trademark IP" },
    { value: "certificate-licence", label: "Certificate & Licence" },
    { value: "tax-compliance", label: "Tax Compliance" },
    { value: "business-registration", label: "Business Registration" },
    { value: "other", label: "Other" },
  ];

  // Input validation rules
  const validationRules = {
    name: {
      required: "* Name is required",
      minLength: {
        value: 2,
        message: "* Name must be at least 2 characters long",
      },
      maxLength: {
        value: 50,
        message: "* Name cannot exceed 50 characters",
      },
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: "Name can only contain letters and spaces",
      },
    },
    serviceType: {
      required: "* Please select a service",
    },
    email: {
      required: "* Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Please enter a valid email address",
      },
    },
    phone: {
      required: "* Phone number is required",
      pattern: {
        value: /^[6-9]\d{9}$/, // starts with 6-9 and has 10 digits
        message: "Enter a valid 10-digit mobile number",
      },
    },
    companyname: {
      required: "* Company name is required",
    },
   
  };

  // Initial form submission to get OTP
  const onSubmit = async (data: FormData) => {
    try {
      
      // Map form data to match API expectations
      const apiData = {
        name: data.name,
        companyName: data.companyname,
        email: data.email,
        number: data.phone,
        message: data.message,
        serviceType: data.serviceType,
      };

      const res = await addOtpDetails({ contactData: apiData });
      
      if (res?.status === 201) {
        
        setContactPayload(data); // Save form data for the next step
        setShowOtpForm(true); // Show the OTP form
        showSwal({
          icon: "success",
          title: "OTP Sent!",
          text: res?.data?.message || "An OTP has been sent to your contact number.",
          confirmButtonColor: "#052EAA",
          scrollbarPadding: false,
        });
      } else {
        showSwal({
          icon: "error",
          title: "Error",
          text: res?.data?.message || "Could not send OTP. Please try again.",
          confirmButtonColor: "#052EAA",
          scrollbarPadding: false,
        });
      }
    } catch (error: any) {
      showSwal({
        icon: "error",
        title: "Submission Error",
        text: error?.response?.data?.message || "An unexpected error occurred.",
        confirmButtonColor: "#052EAA",
        scrollbarPadding: false,
      });
    }
  };

  // Handle OTP verification
  const handleOtpVerify = async () => {
    if (otp.length !== 4) {
      showSwal({
        icon: "warning",
        title: "Invalid OTP",
        text: "Please enter a valid 4-digit OTP.",
        confirmButtonColor: "#052EAA",
        scrollbarPadding: false,
      });
      return;
    }

    try {
      const verificationData = {
        enteredOtp: otp,
      };

      const res = await verifyOtp(verificationData);
      
      if (res?.status === 201) {
        showSwal({
          icon: "success",
          title: "Thank You For Contacting Us!",
          text: res?.data?.message || "Your details have been verified successfully.",
          confirmButtonColor: "#052EAA",
          scrollbarPadding: false,
        });
        // Reset all states and form on final success
        reset();
        setOtp("");
        setShowOtpForm(false);
        setContactPayload(null);
        closeModal();
      } else {
        showSwal({
          icon: "error",
          title: "Verification Failed",
          text: res?.data?.message || "The OTP you entered is incorrect. Please try again.",
          confirmButtonColor: "#052EAA",
          scrollbarPadding: false,
        });
      }
    } catch (error: any) {
      showSwal({
        icon: "error",
        title: "Verification Error",
        text: error?.response?.data?.message || "An error occurred during verification.",
        confirmButtonColor: "#052EAA",
        scrollbarPadding: false,
      });
    }
  };

  const closeModal = () => {
    dispatch({ type: "close" });
    // Reset OTP states when closing modal
    setShowOtpForm(false);
    setOtp("");
    setContactPayload(null);
    reset();
  };

  // Handle backdrop click - only close if not on OTP form
  const handleBackdropClick = () => {
    if (!showOtpForm) {
      closeModal();
    }
  };

  // Add CSS for SweetAlert z-index
  useEffect(() => {
    const style = document.createElement('style');
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

  return (
    <>
      <Offer />
      <Navbar />
      {children}
      <Footer />
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex w-screen h-screen items-center justify-center bg-black/60 md:p-4"
            style={{ zIndex: 9999999999 }}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleBackdropClick} // Modified to use custom handler
          >
            <motion.div
              className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl flex flex-col max-h-[100vh] md:max-h-[90vh]"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Logo */}
              <div className="bg-gradient-to-r text-white font-3 heading from-[#052EAA] to-[#3CA2E2] p-4 flex items-center justify-center w-full rounded-t-lg flex-shrink-0">
                {showOtpForm ? "Verify Your Identity" : "Get In Touch"}
              </div>
              
              {/* Close Button */}
              <div className="absolute right-3 top-4 z-20">
                <X
                  className="p-1 w-7 h-7 bg-white rounded-md cursor-pointer hover:ring-2 ring-gray-200 hover:bg-gray-100 shadow-sm transition-colors"
                  onClick={closeModal}
                />
              </div>

              {/* Main Content */}
              <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Left Side: Image */}
                <div className="md:w-1/2 w-full p-4 bg-gray-50 flex items-center justify-center">
                  <img
                    src={Image}
                    alt="Contact Visual"
                    className="rounded-xl w-full h-48 md:h-full max-h-[200px] md:max-h-[200px] md:max-w-[200px]"
                  />
                </div>

                {/* Right Side: Form Content */}
                <div className="md:w-1/2 w-full flex flex-col overflow-y-auto">
                  <div className="p-4 md:p-6">
                    {!showOtpForm ? (
                      // Main Contact Form
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-5 font-3"
                      >
                        {/* Full Name */}
                        <div className="flex flex-col gap-1">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              {...register("name", validationRules.name)}
                              id="name"
                              type="text"
                              placeholder="Enter your full name"
                              className={`w-full pl-10 pr-4 py-2 border ${
                                errors.name ? "border-red-500" : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                              disabled={isSubmitting}
                            />
                          </div>
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                          )}
                        </div>

                        {/* Company Name */}
                        <div className="flex flex-col gap-1">
                          <label htmlFor="companyname" className="text-sm font-medium text-gray-700">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              {...register("companyname", validationRules.companyname)}
                              id="companyname"
                              type="text"
                              placeholder="Enter your company name"
                              className={`w-full pl-10 pr-4 py-2 border ${
                                errors.companyname ? "border-red-500" : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                              disabled={isSubmitting}
                            />
                          </div>
                          {errors.companyname && (
                            <p className="text-red-500 text-xs mt-1">{errors.companyname.message}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              {...register("email", validationRules.email)}
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              className={`w-full pl-10 pr-4 py-2 border ${
                                errors.email ? "border-red-500" : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                              disabled={isSubmitting}
                            />
                          </div>
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-1">
                          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Contact Number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              {...register("phone", validationRules.phone)}
                              id="phone"
                              type="tel"
                              placeholder="Enter your phone number"
                              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                if (!/[0-9]/.test(e.key)) e.preventDefault();
                              }}
                              className={`w-full pl-10 pr-4 py-2 border ${
                                errors.phone ? "border-red-500" : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                              disabled={isSubmitting}
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                          )}
                        </div>

                        {/* Service Type Dropdown */}
                        <div className="flex flex-col gap-1">
                          <label htmlFor="serviceType" className="text-sm font-medium text-gray-700">
                            Service Type <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={18} />
                            <Controller
                              name="serviceType"
                              control={control}
                              rules={validationRules.serviceType}
                              render={({ field }) => (
                                <ShadcnDropdown
                                  options={serviceOptions}
                                  value={field.value}
                                  onChange={field.onChange}
                                  placeholder="Select a Service"
                                  disabled={isSubmitting}
                                  error={!!errors.serviceType}
                                />
                              )}
                            />
                          </div>
                          {errors.serviceType && (
                            <p className="text-red-500 text-xs mt-1">{errors.serviceType.message}</p>
                          )}
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1">
                          <label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Message 
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                            <textarea
                              {...register("message")}
                              id="message"
                              placeholder="Enter your message"
                              className={`w-full pl-10 pr-4 py-2 border ${
                                errors.message ? "border-red-500" : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent min-h-[100px] transition-all duration-200 resize-vertical`}
                              disabled={isSubmitting}
                            />
                          </div>
                          {errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                          )}
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex flex-col md:flex-row w-full gap-4 pt-4">
                          <button
                            type="button"
                            onClick={closeModal}
                            className="w-full md:w-1/2 h-11 font-3 md:h-10 cursor-pointer bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full font-3 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center md:w-1/2 h-11 md:h-10 bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] text-white font-semibold rounded-full cursor-pointer hover:from-[#041f7a] hover:to-[#2d8bc7] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#052EAA] transition-all duration-200"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center justify-center">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Sending...
                              </div>
                            ) : (
                              "Send OTP"
                            )}
                          </button>
                        </div>
                      </form>
                    ) : (
                      // OTP Verification Form
                      <div className="flex flex-col items-center gap-6 p-4">
                        <h2 className="text-xl text-center font-medium text-gray-800">
                          Enter The OTP You Received
                        </h2>
                        <p className="text-sm text-gray-600 text-center">
                          Please enter the 4-digit OTP sent to your mail. Use the close button (×) to exit.
                        </p>
                        <OtpInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={4}
                          renderSeparator={<span className="w-4"></span>}
                          renderInput={(props) => <input {...props} />}
                          inputStyle={{
                            width: "3rem",
                            height: "3rem",
                            fontSize: "1.5rem",
                            borderRadius: "0.5rem",
                            border: "1px solid #052EAA",
                            backgroundColor: "white",
                            textAlign: "center",
                            outline: "none",
                            transition: "all 0.15s ease",
                          }}
                          containerStyle={{
                            justifyContent: "center",
                          }}
                        />
                        <div className="flex flex-col gap-3 w-full mt-4">
                          <button
                            onClick={handleOtpVerify}
                            disabled={isSubmitting}
                            className={`w-full h-11 bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] text-white font-semibold rounded-full cursor-pointer hover:from-[#041f7a] hover:to-[#2d8bc7] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#052EAA] transition-all duration-200 ${
                              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                          >
                            {isSubmitting ? (
                              <div className="flex items-center justify-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Verifying...
                              </div>
                            ) : (
                              "Verify & Submit"
                            )}
                          </button>
                          <button
                            onClick={() => {
                              setShowOtpForm(false);
                              setOtp("");
                            }}
                            className="w-full h-11 bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                          >
                            Back to Form
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Mainlayout);
