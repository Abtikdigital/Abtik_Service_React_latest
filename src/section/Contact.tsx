// import Chart from "react-google-charts";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { memo, useState } from "react";
// import Map from "../section/Map";
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = (props: any) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<ContactFormData>();

  // const data = [
  //   ["Task", "Hours per Day"],
  //   ["MSME", 500],
  //   ["Startup", 700],
  //   ["TAX", 1800],
  // ];

  // const options = {
  //   title: "Business Segments",
  //   titleTextStyle: {
  //     fontName: "Anton",
  //     fontSize: 30,
  //     bold: true,
  //     color: "#233238",
  //   },
  //   pieHole: 0.4,
  //   is3D: true,
  //   backgroundColor: "transparent",
  //   pieStartAngle: 100,
  //   sliceVisibilityThreshold: 0.02,
  //   legend: {
  //     position: "bottom",
  //     alignment: "center",
  //     textStyle: {
  //       color: "#233238",
  //       fontSize: 14,
  //     },
  //   },
  //   colors: ["#3CA2E2", "#052EAA", "#2D87C4"],
  // };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      let res = await axios.post("/api/contactApi.js", data);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "Thank You For Contacting ",
          text: res?.data?.message || "Your response has been submitted",
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
        text: error?.response?.data?.message || "Error while inserting",
      });
    } finally {
    }
  };

  // Input validation rules
  const validationRules = {
    name: {
      required: "Name is required",
      minLength: {
        value: 2,
        message: "Name must be at least 2 characters long",
      },
      maxLength: {
        value: 50,
        message: "Name cannot exceed 50 characters",
      },
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: "Name can only contain letters and spaces",
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Please enter a valid email address",
      },
    },
    message: {
      required: "Message is required",
      minLength: {
        value: 10,
        message: "Message must be at least 10 characters long",
      },
      maxLength: {
        value: 500,
        message: "Message cannot exceed 500 characters",
      },
    },
  };

  return (
    <section className="px-7 md:px-14 py-6 md:py-16 bg-[#f7f7f7] space-y-6 ">
      <div className="flex  gap-6  lg:space-x-6 justify-center items-center w-full">
        <div className="space-y-6  flex flex-col justify-center w-2xl">
          <h2 className="sub-heading to-[#052EAA] text-center bg-gradient-to-t from-[#3CA2E2] bg-clip-text text-transparent font-1">
            Contact Us
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 "
          >
            {/* Name Input */}
            <div className="flex flex-col">
              <input
                {...register("name", validationRules.name)}
                placeholder="Enter Your Name"
                className={`bg-[#ECEFF4] rounded-lg w-full p-3 focus:outline-2 transition-all duration-0  font-2 ${errors.name
                    ? "outline-red-500 border-red-500"
                    : "outline-[#2178B5] hover:outline-2"
                  }`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1 ml-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <input
                {...register("email", validationRules.email)}
                type="email"
                placeholder="Enter Your Email"
                className={`bg-[#ECEFF4] rounded-lg w-full p-3 focus:outline-2 transition-all duration-0 font-2 ${errors.email
                    ? "outline-red-500 border-red-500"
                    : "outline-[#2178B5] hover:outline-2"
                  }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1 ml-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col">
              <textarea
                {...register("message", validationRules.message)}
                placeholder="Enter Your Message"
                className={`bg-[#ECEFF4] rounded-lg w-full p-3 overflow-auto h-24 max-h-32 resize-none transition-all duration-0  font-3 ${errors.message
                    ? "outline-red-500 border-red-500"
                    : "outline-[#2178B5] hover:outline-2"
                  }`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <span className="text-red-500 text-xs mt-1 ml-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`custom-btn w-full text-center !py-3  transition-shadow duration-300  ${isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:transform "
                  }`}
                style={{ fontFamily: "" }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      {props?.isMapVisible && (
        <div className="space-y-6 md:py-10">
          <h2 className="sub-heading to-[#052EAA] text-center bg-gradient-to-t from-[#3CA2E2] bg-clip-text text-transparent font-2 ">
            Our Location
          </h2>

          <div className="h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.404567325663!2d72.51250407436834!3d23.04562491546931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f8ee324da2af39%3A0xf04a9f002154b683!2sAbtik%20Group%20of%20Companies!5e0!3m2!1sen!2sin!4v1755069113485!5m2!1sen!2sin"
              style={{
                border: 0,
                width: "100%",
                height: "100%",
                borderRadius: "30px",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(Contact);
