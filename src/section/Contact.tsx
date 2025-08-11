import Chart from "react-google-charts";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { memo, useState } from "react";
import Map from "../section/Map"
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<ContactFormData>();

  const data = [
    ["Task", "Hours per Day"],
    ["MSME", 500],
    ["Startup", 700],
    ["TAX", 1800],
  ];

  const options = {
    title: "Business Segments",
    titleTextStyle: {
      fontName: "Anton",
      fontSize: 30,
      bold: true,
      color: "#233238",
    },
    pieHole: 0.4,
    is3D: true,
    backgroundColor: "transparent",
    pieStartAngle: 100,
    sliceVisibilityThreshold: 0.02,
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    colors: ["#3CA2E2", "#052EAA", "#2D87C4"],
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      let res = await axios.post("/api/contactApi.js",data);
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
    <section className="px-7 md:px-14 py-6 md:py-16 bg-[#f7f7f7]"
   
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:grid-rows-1 lg:space-x-6">
        <div className="space-y-6  flex flex-col justify-center">
          <h2
            className="sub-heading to-[#052EAA] text-center bg-gradient-to-t from-[#3CA2E2] bg-clip-text text-transparent font-1"
         
          >
            Contact Us
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Name Input */}
            <div className="flex flex-col">
              <input
                {...register("name", validationRules.name)}
                placeholder="Enter Your Name"
                className={`bg-[#ECEFF4] rounded-lg w-full p-3 focus:outline-2 transition-all duration-0  font-2 ${
                  errors.name
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
                className={`bg-[#ECEFF4] rounded-lg w-full p-3 focus:outline-2 transition-all duration-0 font-2 ${
                  errors.email
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
                className={`bg-[#ECEFF4] rounded-lg w-full p-3 overflow-auto h-24 max-h-32 resize-none transition-all duration-0  font-3 ${
                  errors.message
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
                className={`custom-btn w-full text-center !py-3  transition-shadow duration-300  ${
                  isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:transform hover:scale-105"
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

        {/* Chart Section */}
        <div className="lg:col-span-3 bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] rounded-lg grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <div className="relative">
            <Map/>
          </div>
          <div className="p-6">
            <div className="bg-[#F7F7F7] rounded-3xl p-4">
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"250px"}
              />
              <div className="flex justify-center items-center">
                <div className="bg-white rounded-xl shadow-lg">
                  <ul className="space-y-3 p-3"
                 
                  >
                    <li className="grid grid-cols-[auto_1.5rem] items-center gap-2 cursor-pointer">
                      <h2 className="paragraph">MSME</h2>
                      <div className="bg-[#3CA2E2] h-6 w-6 rounded-md"></div>
                    </li>
                    <li className="grid grid-cols-[auto_1.5rem] items-center gap-2 cursor-pointer">
                      <h2 className="paragraph">STARTUP</h2>
                      <div className="bg-[#052EAA] h-6 w-6 rounded-md"></div>
                    </li>
                    <li className="grid grid-cols-[auto_1.5rem] items-center gap-2 cursor-pointer">
                      <h2 className="paragraph">TAX</h2>
                      <div className="bg-[#2D87C4] h-6 w-6 rounded-md"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
