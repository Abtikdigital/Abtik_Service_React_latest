import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import Logo from "../assets/Logo/Abtik-white.png";
import Image from "../assets/Hero/bgImg.svg";
import { X, User, Mail, Phone, MessageSquare, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";

// Define FormData interface
interface FormData {
  clientName: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  companyType: string;
  companyName: string;
}

// Define Redux state type
interface RootState {
  isContactFormOpen: boolean;
}

// Define props for Mainlayout
interface MainlayoutProps {
  children: React.ReactNode;
}

// --- Animation Variants for Framer Motion (Faster) ---

// 1. Backdrop Animation (the dark overlay)
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } }, // Faster duration
};

// 2. Modal Animation (the main dialog box)
const modalVariants :any= {
  hidden: { opacity: 0, y: -30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2, // Faster duration
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    transition: {
      duration: 0.15, // Faster duration
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

  const onSubmit = async (data: FormData) => {
    try {
      const res: any = await axios.post("/api/getInTouchApi", data);
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Thank You For Contacting",
          text: res.data.message || "Your response has been submitted",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error while inserting data",
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Error while inserting data",
      });
    } finally {
      reset();
      closeModal();
    }
  };

  const closeModal = () => {
    dispatch({ type: "close" }); // Adjust based on your Redux action
  };

  return (
    <>
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
              <div className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-4 flex items-center justify-center w-full rounded-t-lg flex-shrink-0">
                <img
                  src={Logo}
                  alt="Company Logo"
                  className="h-12 sm:h-14 w-auto"
                />
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
                    className="object-cover rounded-xl w-full h-48 md:h-full max-h-[350px] md:max-h-[350px] md:max-w-[350px]"
                  />
                </div>

                {/* Right Side: Scrollable Container */}
                <div className="md:w-1/2 w-full flex flex-col overflow-y-auto">
                  <div className="p-4 md:p-6">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col gap-5"
                    >
                      {/* Client Name */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="clientName"
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
                            {...register("clientName", {
                              required: "* Name is required",
                              minLength: {
                                value: 2,
                                message: "Name must be at least 2 characters",
                              },
                            })}
                            id="clientName"
                            type="text"
                            placeholder="Enter your full name"
                            className={`w-full pl-10 pr-4 py-2 border ${
                              errors.clientName
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                          />
                        </div>
                        {errors.clientName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.clientName.message}
                          </p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="companyName"
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
                            {...register("companyName", {
                              required: "* Company name is required",
                              minLength: {
                                value: 2,
                                message:
                                  "Company name must be at least 2 characters",
                              },
                            })}
                            id="companyName"
                            type="text"
                            placeholder="Enter your company name"
                            className={`w-full pl-10 pr-4 py-2 border ${
                              errors.companyName
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                          />
                        </div>
                        {errors.companyName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.companyName.message}
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
                            className={`w-full pl-10 pr-4 py-2 border ${
                              errors.email
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
                                value: /^[0-9]{10,15}$/,
                                message: "* Phone number must be 10-15 digits",
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
                            className={`w-full pl-10 pr-4 py-2 border ${
                              errors.phone
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
                            className={`w-full pl-10 pr-4 py-2 border ${
                              errors.message
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent min-h-[100px] transition-all duration-200`}
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
                          className="w-full md:w-1/2 h-11 md:h-10 cursor-pointer bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center md:w-1/2 h-11 md:h-10 bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] text-white font-semibold rounded-full cursor-pointer hover:from-[#041f7a] hover:to-[#2d8bc7] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#052EAA] transition-all duration-200"
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
