import { memo, useState } from "react";
import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Career/bgImg.svg";
import Image1 from "../assets/Career/male-female-graphic-designers-using-laptop.jpg";
import Contact from "../section/Contact";
import Logo from "../assets/Logo/Abtik-blue.png";
import CareerImage from "../assets/Hero/bgImg.svg";
import {
  MapPin,
  Clock,
  ArrowRight,
  X,
  User,
  Mail,
  Phone,
  File,
  Briefcase,
  Calendar,
  Building,
  DollarSign,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRef, useEffect } from "react";

const Career = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };
  const [isOpen, setIsOpen] = useState<any>(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const jobOpenings = [
    {
      title: "Frontend Developer",
      position: "Software Development",
      description:
        "We are looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for creating responsive and user-friendly web applications using modern technologies like React, TypeScript, and Tailwind CSS.",
      vacancy: 3,
      experience: "2-4 years",
      location: "Bangalore, India",
      type: "Full-time",
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Backend Developer",
      position: "Software Development",
      description:
        "Join our backend team to build scalable and robust server-side applications. You'll work with Node.js, Python, databases, and cloud technologies to create efficient APIs and systems.",
      vacancy: 2,
      experience: "3-5 years",
      location: "Mumbai, India",
      type: "Full-time",
      skills: ["Node.js", "Python", "MongoDB", "PostgreSQL", "AWS", "Docker"],
    },
    {
      title: "UI/UX Designer",
      position: "Design",
      description:
        "We are seeking a creative UI/UX Designer to create intuitive and engaging user experiences. You'll work on wireframes, prototypes, and visual designs for web and mobile applications.",
      vacancy: 1,
      experience: "2-3 years",
      location: "Delhi, India",
      type: "Full-time",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    },
  ];

  // Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<any>();

  const file = watch("resume");

  const formVariants: any = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.3 },
    },
    exit: { opacity: 0, y: 80, transition: { duration: 0.1 } },
  };

  const handleApplyNow = (job: any) => {
    setSelectedJob(job);
    setIsOpen(true);
    reset({
      jobTitle: job.title,
      position: job.position,
      location: job.location,
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      currentCTC: "",
      expectedCTC: "",
      noticePeriod: "",
      resume: null,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedJob(null);
    reset();
  };

  const onSubmit = async (data: any) => {
    try {
      // Handle form submission here
      console.log("Application Data:", data);

      // Create FormData for file upload
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "resume" && data[key]?.[0]) {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert(`Application submitted successfully for ${data.jobTitle}!`);
      closeModal();
    } catch (error) {
      alert("Error submitting application. Please try again.");
    }
  };

  // Hero
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.4 });

  // Career Opportunity Section
  const refCareerOpp = useRef(null);
  const isInViewCareerOpp = useInView(refCareerOpp, { once: true, amount: 0.4 });
  const [careerOppCols, setCareerOppCols] = useState(1);
  useEffect(() => {
    const updateCols = () => {
      setCareerOppCols(window.innerWidth >= 768 ? 2 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getCareerOppDelay = (index: number) => {
    const row = Math.floor(index / careerOppCols);
    return 0.5 + row * 0.5;
  };

  // Job Openings
  const refJobOpenings = useRef(null);
  const isInViewJobOpenings = useInView(refJobOpenings, { once: true, amount: 0.4 });
  const [jobCols, setJobCols] = useState(1);
  useEffect(() => {
    const updateCols = () => {
      setJobCols(window.innerWidth >= 768 ? 3 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getJobDelay = (index: number) => {
    const row = Math.floor(index / jobCols);
    return 0.5 + row * 0.5;
  };

  // Contact
  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, { once: true, amount: 0.4 });

  return (
    <>
      <Mainlayout>
        {/* Hero Section */}
        <section
          ref={refHero}
          className="flex justify-center items-center h-[70vh] sm:h-[80vh] lg:h-[85vh] xl:h-screen 
                    lg:justify-end lg:items-center bg-center bg-cover 
                    px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14
                    relative overflow-hidden"
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for better text readability on tablets */}
          <div className="absolute inset-0 bg-black/20 lg:bg-transparent"></div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInViewHero ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none lg:w-1/2 
                        space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8
                        text-center lg:text-left"
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight
                          text-white lg:text-inherit tracking-wide
                          main-heading"
              style={{ fontFamily: "Anton" }}
            >
              Your One-Stop{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                Solution
              </span>{" "}
              for all Business Needs
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0"
                         style={{fontFamily:"Montserrat Alternates"}}
            >
              Empowering Businesses through Comprehensive Solutions From Fund
              Management to Legal Compliance, We've Got You Covered at Abtik
              Startup Advisor Private Limited
            </p>
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleOpenDialog}
                className="custom-btn 
                              text-sm sm:text-base md:text-lg
                              px-6 sm:px-8 md:px-10 lg:px-12
                              py-3 sm:py-3.5 md:py-4
                              hover:scale-105 transition-transform duration-300
                              shadow-lg hover:shadow-xl"
              >
                Schedule a call
              </button>
            </div>
          </motion.div>
        </section>

        {/* Career Opportunity Section */}
        <motion.section
          ref={refCareerOpp}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewCareerOpp ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-14 py-12 gap-8 items-center"
        >
          {[0, 1].map((index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInViewCareerOpp ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: getCareerOppDelay(index) }}
              className={index === 0 ? "space-y-6" : "grid grid-cols-1 gap-6"}
            >
              {index === 0 ? (
                <>
                  <h2
                    className="sub-heading text-center md:text-left bg-clip-text bg-gradient-to-t text-transparent from-[#3CA2E2] to-[#052EAA]"
                    style={{ fontFamily: "Anton" }}
                  >
                    Career Opportunities at <br />
                    Abtik Services
                  </h2>
                  <p className="paragraph text-center md:text-left"
                  style={{fontFamily:"Montserrat Alternates"}}
                  >
                    Join our innovative team and be part of a company that's
                    transforming the business landscape. We offer exciting
                    opportunities for growth, learning, and making a meaningful
                    impact. At Abtik, we believe in nurturing talent and providing a
                    collaborative environment where your skills can flourish.
                  </p>
                </>
              ) : (
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={Image1}
                    className="w-full h-full object-cover"
                    alt="Career opportunities"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.section>

        {/* Job Openings */}
        <motion.section
          ref={refJobOpenings}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewJobOpenings ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-7 md:px-14 py-12 bg-gradient-to-b from-[#f7f7f7] to-white"
        >
          <div>
            <h2
              className="sub-heading bg-clip-text text-center bg-gradient-to-t text-transparent from-[#052EAA] to-[#3CA2E2] mb-12"
              style={{ fontFamily: "Anton" }}
            >
              Job Openings At Abtik
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
              {jobOpenings?.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInViewJobOpenings ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: getJobDelay(index) }}
                  className="bg-white border-1 hover:border-gray-300 cursor-pointer border-gray-200 rounded-4xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Job Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-xs font-semibold text-[#3CA2E2] bg-blue-50 px-3 py-1 rounded-full"
                        style={{ fontFamily: "Montserrat Alternates" }}
                      >
                        {job.position}
                      </span>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {job.vacancy}{" "}
                        {job.vacancy === 1 ? "Opening" : "Openings"}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-800 group-hover:text-[#052EAA] transition-colors"
                      style={{ fontFamily: "Montserrat Alternates" }}
                    >
                      {job.title}
                    </h3>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-[#3CA2E2]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-[#3CA2E2]" />
                      <span>
                        {job.type} • {job.experience}
                      </span>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Required Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] text-white px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 3 && (
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                          +{job.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => handleApplyNow(job)}
                    className="custom-btn flex justify-center items-center gap-1 w-full"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Career Application Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 flex w-screen h-screen items-center justify-center bg-black/60 md:p-4"
              style={{ zIndex: 9999999999 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeIn" }}
            >
              <motion.div
                className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl flex flex-col max-h-[100vh] md:max-h-[90vh]"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
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
                      src={CareerImage}
                      alt="Career Visual"
                      className="object-cover rounded-xl w-full h-48 md:h-full max-h-[350px] md:max-h-[350px] md:max-w-[350px]"
                    />
                  </div>

                  {/* Right Side: Form */}
                  <div className="md:w-1/2 w-full flex flex-col overflow-y-auto">
                    <div className="p-4 md:p-6">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                      >
                        {/* Job Title (Read-only) */}
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                            <Briefcase size={18} className="text-gray-400" />
                            Job Title
                          </label>
                          <input
                            type="text"
                            value={selectedJob?.title || ""}
                            disabled
                            className="w-full pl-3 pr-4 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-600 text-sm h-[38px]"
                          />
                        </div>

                        {/* Position (Read-only) */}
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                            <Building size={18} className="text-gray-400" />
                            Position
                          </label>
                          <input
                            type="text"
                            value={selectedJob?.position || ""}
                            disabled
                            className="w-full pl-3 pr-4 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-600 text-sm h-[38px]"
                          />
                        </div>

                        {/* Full Name */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="fullName"
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
                              {...register("fullName", {
                                required: "Full name is required",
                                minLength: {
                                  value: 2,
                                  message: "Name must be at least 2 characters",
                                },
                              })}
                              id="fullName"
                              type="text"
                              placeholder="Enter your full name"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.fullName
                                  ? "border-red-500"
                                  : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            />
                          </div>
                          {errors.fullName && (
                            <p className="text-red-500 text-xs mt-1">
                              {String(errors.fullName.message) || ""}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                          >
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address",
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
                              {String(errors.email.message) || ""}
                            </p>
                          )}
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-gray-700"
                          >
                            Contact Number{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                  value: /^[0-9]{10,15}$/,
                                  message: "Phone number must be 10-15 digits",
                                },
                              })}
                              id="phone"
                              type="tel"
                              placeholder="Enter your phone number"
                              onKeyPress={(e) => {
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
                              {String(errors.phone.message) || ""}
                            </p>
                          )}
                        </div>

                        {/* Experience */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="experience"
                            className="text-sm font-medium text-gray-700"
                          >
                            Experience <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Calendar
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <select
                              {...register("experience", {
                                required: "Experience is required",
                              })}
                              id="experience"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.experience
                                  ? "border-red-500"
                                  : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            >
                              <option value="">Select experience</option>
                              <option value="Fresher">Fresher</option>
                              <option value="1-2 years">1-2 years</option>
                              <option value="2-4 years">2-4 years</option>
                              <option value="3-5 years">3-5 years</option>
                              <option value="5+ years">5+ years</option>
                            </select>
                          </div>
                          {errors.experience && (
                            <p className="text-red-500 text-xs mt-1">
                              {String(errors.experience.message) || ""}
                            </p>
                          )}
                        </div>

                        {/* Current CTC */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="currentCTC"
                            className="text-sm font-medium text-gray-700"
                          >
                            Current CTC (₹){" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <DollarSign
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register("currentCTC", {
                                required: "Current CTC is required",
                                min: {
                                  value: 0,
                                  message: "CTC must be positive",
                                },
                              })}
                              id="currentCTC"
                              type="number"
                              placeholder="Enter current CTC"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.currentCTC
                                  ? "border-red-500"
                                  : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            />
                          </div>
                          {errors.currentCTC && (
                            <p className="text-red-500 text-xs mt-1">
                              {String(errors.currentCTC.message) || ""}
                            </p>
                          )}
                        </div>

                        {/* Expected CTC */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="expectedCTC"
                            className="text-sm font-medium text-gray-700"
                          >
                            Expected CTC (₹){" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <DollarSign
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register("expectedCTC", {
                                required: "Expected CTC is required",
                                min: {
                                  value: 0,
                                  message: "CTC must be positive",
                                },
                              })}
                              id="expectedCTC"
                              type="number"
                              placeholder="Enter expected CTC"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.expectedCTC
                                  ? "border-red-500"
                                  : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            />
                          </div>
                          {errors.expectedCTC && (
                            <p className="text-red-500 text-xs mt-1">
                              {String(errors.expectedCTC.message) || ""}
                            </p>
                          )}
                        </div>

                        {/* Notice Period */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="noticePeriod"
                            className="text-sm font-medium text-gray-700"
                          >
                            Notice Period{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Clock
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <select
                              {...register("noticePeriod", {
                                required: "Notice period is required",
                              })}
                              id="noticePeriod"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.noticePeriod
                                  ? "border-red-500"
                                  : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent h-[38px] transition-all duration-200`}
                            >
                              <option value="">Select notice period</option>
                              <option value="Immediate">Immediate</option>
                              <option value="15 Days">15 Days</option>
                              <option value="30 Days">30 Days</option>
                              <option value="60 Days">60 Days</option>
                              <option value="90 Days">90 Days</option>
                            </select>
                          </div>
                          {errors.noticePeriod && (
                            <p className="text-red-500 text-xs mt-1">
                              {String(errors.noticePeriod.message) || ""}
                            </p>
                          )}
                        </div>

                        {/* Upload Resume */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="resume"
                            className="text-sm font-medium text-gray-700"
                          >
                            Upload Resume{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <File
                              className="absolute left-3 top-3 text-gray-400"
                              size={18}
                            />
                            <input
                              {...register("resume", {
                                required: "Resume is required",
                                validate: {
                                  fileType: (files) => {
                                    if (!files?.[0])
                                      return "Resume is required";
                                    const file = files[0];
                                    const allowedTypes = [
                                      "application/pdf",
                                      "application/msword",
                                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                    ];
                                    return (
                                      allowedTypes.includes(file.type) ||
                                      "Only PDF, DOC, DOCX files allowed"
                                    );
                                  },
                                  fileSize: (files) => {
                                    if (!files?.[0])
                                      return "Resume is required";
                                    const file = files[0];
                                    return (
                                      file.size <= 2 * 1024 * 1024 ||
                                      "File size must be less than 2MB"
                                    );
                                  },
                                },
                              })}
                              id="resume"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className={`w-full pl-10 pr-4 py-2 border ${errors.resume
                                  ? "border-red-500"
                                  : "border-gray-300"
                                } rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#052EAA] focus:border-transparent transition-all duration-200`}
                            />
                          </div>
                          {file && file[0] && (
                            <p className="text-xs text-gray-600 mt-1">
                              Selected: {file[0].name} (
                              {(file[0].size / 1024 / 1024).toFixed(2)} MB)
                            </p>
                          )}
                          {errors.resume && (
                            <p className="text-red-500 text-xs mt-1">
                              {String(errors.resume.message) || ""}
                            </p>
                          )}
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex flex-col md:flex-row w-full gap-4 pt-4">
                          <button
                            type="button"
                            onClick={closeModal}
                            className="w-full md:w-1/2 h-11 md:h-10 cursor-pointer bg-gray-200 text-gray-800 font-medium rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
                            disabled={isSubmitting}
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
                                Submitting...
                              </div>
                            ) : (
                              "Submit Application"
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

        {/* Contact Section */}
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

export default memo(Career);
