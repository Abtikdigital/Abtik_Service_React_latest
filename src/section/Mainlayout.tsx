import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import Logo from "../assets/Logo/Abtik-white.png";
import Image from "../assets/Logo/Abtik-blue.png";
import { X, User, Mail, Phone, MessageSquare, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";
import Offer from "./Offer";
import { addContact } from "../api/contactApis";

// Define FormData interface - updated to match API
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  companyname: string;
}

// Define Redux state type
interface RootState {
  isContactFormOpen: boolean;
}

// Define props for Mainlayout
interface MainlayoutProps {
  children: React.ReactNode;
}

// --- Animation Variants for Framer Motion ---
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

const Mainlayout = ({ children }: MainlayoutProps) => {
  const isOpen = useSelector((state: RootState) => state.isContactFormOpen);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  // Vercel Function and all
  // const onSubmit = async (data: FormData) => {
  //   try {
  //     // Map form data to match API expectations
  //     const apiData = {
  //       name: data.name,
  //       companyname: data.companyname,
  //       email: data.email,
  //       number: data.phone,
  //       message: data.message,
  //     };

  //     const res = await axios.post("/api/getInTouchApi.js", apiData);

  //     if (res.status === 201) {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Thank You For Contacting Us!",
  //         text: res.data.message || "Your inquiry has been submitted successfully",
  //         confirmButtonColor: "#052EAA",
  //         scrollbarPadding: false
  //       });
  //     } else {
  //       throw new Error("Unexpected response status");
  //     }
  //   } catch (error: any) {
  //     const errorMessage =
  //       error.response?.data?.message ||
  //       error.response?.data?.error ||
  //       "Error while submitting your request. Please try again.";

  //     Swal.fire({
  //       icon: "error",
  //       title: "Submission Failed",
  //       text: errorMessage,
  //       confirmButtonColor: "#052EAA",
  //       scrollbarPadding: false
  //     });
  //   } finally {
  //     reset();
  //     closeModal();
  //   }
  // };


  // Node js Code and all 
  const onSubmit = async (data: FormData) => {
    try {
      // Map form data to match API expectations
      const apiData = {
        name: data.name,
        companyName: data.companyname,
        email: data.email,
        number: data.phone,
        message: data.message,
      };

      const res = await addContact(apiData);

      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Thank You For Contacting Us!",
          text: res.data.message || "Your inquiry has been submitted successfully",
          confirmButtonColor: "#052EAA",
          scrollbarPadding: false
        });
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Error while submitting your request. Please try again.";

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: errorMessage,
        confirmButtonColor: "#052EAA",
        scrollbarPadding: false
      });
    } finally {
      reset();
      closeModal();
    }
  };

  const closeModal = () => {
    dispatch({ type: "close" });
  };

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
            onClick={closeModal}
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
              <div className="bg-gradient-to-r text-white  font-3 heading from-[#052EAA] to-[#3CA2E2] p-4 flex items-center justify-center w-full rounded-t-lg flex-shrink-0">
                {/* <img
                  src={Logo}
                  alt="Company Logo"
                  className="h-12 sm:h-14 w-auto"
                /> */}
                Get In Touch
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
                    className=" rounded-xl w-full h-48 md:h-full max-h-[200px] md:max-h-[200px] md:max-w-[200px]"
                  />
                </div>

                {/* Right Side: Scrollable Container */}
                <div className="md:w-1/2 w-full flex flex-col overflow-y-auto">
                  <div className="p-4 md:p-6">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col gap-5 font-3"
                    >
                      {/* Full Name - maps to 'name' in API */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-700"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <input
                            {...register("name", {
                              required: "* Name is required",
                              minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters",
                              },
                            })}
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className={`w-full pl-10 pr-4 py-2  border ${errors.name
                              ? "border-red-500"
                              : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Company Name - maps to 'companyname' in API */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="companyname"
                          className="text-sm font-medium text-gray-700"
                        >
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Building
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <input
                            {...register("companyname", {
                              required: "* Company name is required",
                              minLength: {
                                value: 2,
                                message:
                                  "Company name must be at least 2 characters",
                              },
                            })}
                            id="companyname"
                            type="text"
                            placeholder="Enter your company name"
                            className={`w-full pl-10 pr-4 py-2 border ${errors.companyname
                              ? "border-red-500"
                              : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                          />
                        </div>
                        {errors.companyname && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.companyname.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <input
                            {...register("email", {
                              required: "* Email is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "* Invalid email address",
                              },
                            })}
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            className={`w-full pl-10 pr-4 py-2 border ${errors.email
                              ? "border-red-500"
                              : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-gray-700"
                        >
                          Contact Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <input
                            {...register("phone", {
                              required: "* Phone number is required",
                              pattern: {
                                value: /^[6-9]\d{9}$/, // starts with 6-9 and has 10 digits
                                message: "Enter a valid 10-digit mobile number",
                              },
                            })}
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            onKeyPress={(
                              e: React.KeyboardEvent<HTMLInputElement>
                            ) => {
                              if (!/[0-9]/.test(e.key)) e.preventDefault();
                            }}
                            className={`w-full pl-10 pr-4 py-2 border ${errors.phone
                              ? "border-red-500"
                              : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-gray-700"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <MessageSquare
                            className="absolute left-3 top-3 text-gray-400"
                            size={18}
                          />
                          <textarea
                            {...register("message", {
                              required: "* Message is required",
                              minLength: {
                                value: 10,
                                message:
                                  "Message must be at least 10 characters",
                              },
                            })}
                            id="message"
                            placeholder="Enter your message"
                            className={`w-full pl-10 pr-4 py-2 border ${errors.message
                              ? "border-red-500"
                              : "border-gray-300"
                              } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent min-h-[100px] transition-all duration-200 resize-vertical`}
                          />
                        </div>
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.message.message}
                          </p>
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
                            "Send Message"
                          )}
                        </button>
                      </div>
                    </form>
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
