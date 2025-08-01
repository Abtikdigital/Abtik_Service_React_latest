import React, { useEffect, useState, useRef, memo } from "react";

interface TestimonialType {
  name: string;
  company: string;
  text: string;
}

const testimonials: TestimonialType[] = [
  {
    name: "alan john",
    company: "",
    text: "Great team! They did an excellent job helping us set up the company, handle the startup registration, and navigate the entire process smoothly. Big thanks to Vaishali for the prompt support and clear communication throughout. Highly recommend!",
  },
  {
    name: "Aruma Kushwaha",
    company: "AYUVEDA GLOW",
    text: "On behalf of AYUVEDA GLOW, I had a great experience working with Mr. Kevin Chotia and his team. Their professionalism, dedication, and attention to detail made the entire process smooth and successful. Thank you, Kevin and team, for your excellent support!",
  },
  {
    name: "Arun Sapre",
    company: "Shri Sai Advance Imaging and Diagnostic Centre",
    text: "ABTIK Services made our seed funding process smooth and stress-free. Special thanks to Anand, Jyoti, and Khusi for their prompt support and professionalism. Highly recommended for startups! Thank you, Team ABTIK!",
  },
  {
    name: "Kingzee Chhachhi",
    company: "",
    text: "Thank you whole team for your appreciable efforts towards helping and guiding me in Startup program by Indian Government. Special thanks to Dhruvesh Patel for your personal efforts to accomplish.🙏🏻❤️",
  },
  {
    name: "Manju Choudhary",
    company: "Femaura Crafts",
    text: "Abtik group of company is one destination for all kind of registration & scheme kind of solution. They worked aggressively and on time responsive, explain each n everything point to point. Special thanks to Vidit and staff.",
  },
  {
    name: "Kuro Valmiki",
    company: "",
    text: "I live in Pune. I spoke to Shashikant Gaikwad. He gave me a better service than I had expected. His team did a great job. Thanks to Abtik Group of Companies for that.",
  },
];

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 768);
  const timer = useRef<any>(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // FORWARD ANIMATION
  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % testimonials.length // move forward
      );
    }, 3000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  // Manual navigation via dots
  const handleDotClick = (idx: number) => {
    setCurrent(idx);
    // Reset timer (forward direction)
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % testimonials.length // move forward
      );
    }, 4000);
  };

  const getIndex = (offset: number) =>
    (current + offset + testimonials.length) % testimonials.length;
  const prevIdx = getIndex(-1);
  const nextIdx = getIndex(1);

  return (
    <section className="flex flex-col items-center py-6 space-y-8 md:space-y-16 bg-[#f7f7f7] min-h-[400px] w-full overflow-hidden">
      <h2
        className="sub-heading bg-clip-text text-transparent bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] px-4"
        style={{ fontFamily: "Anton" }}
      >
        Testimonials
      </h2>
      <div className="relative w-full max-w-[90vw] sm:max-w-[350px] md:max-w-[480px] h-[280px] flex flex-col items-center justify-center mb-8 mx-auto overflow-hidden">
        {/* Previous */}
        <Card
          testimonial={testimonials[prevIdx]}
          position="prev"
          key={prevIdx}
          windowWidth={windowWidth}
        />
        {/* Current */}
        <Card
          testimonial={testimonials[current]}
          position="current"
          key={current}
          windowWidth={windowWidth}
        />
        {/* Next */}
        <Card
          testimonial={testimonials[nextIdx]}
          position="next"
          key={nextIdx}
          windowWidth={windowWidth}
        />
      </div>
      {/* Dot navigation */}
      <div className="flex gap-3 mt-2 px-4">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-blue-700 scale-125 shadow" : "bg-blue-300"
            }`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
};

interface CardProps {
  testimonial: TestimonialType;
  position: "prev" | "current" | "next";
  windowWidth: number;
}

const Card: React.FC<CardProps> = ({ testimonial, position, windowWidth }) => {
  // Get initials safely
  const getInitials = (name: string) => {
    const nameParts = name.trim().split(" ");
    if (nameParts.length >= 2) {
      return nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase();
    } else if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase() + nameParts[0].charAt(1)?.toUpperCase() || "";
    }
    return "AB";
  };

  // Base styles with proper containment
  let baseStyles =
    "absolute w-full max-w-[85vw] sm:max-w-[320px] md:max-w-[450px] rounded-3xl bg-gradient-to-b from-blue-800 to-blue-500 text-white p-4 sm:p-5 md:p-6 shadow-lg transition-all duration-700 ease-in-out box-border";
  let styles = "";
  let zIndex = 10;
  let transformStyle = "";

  if (position === "current") {
    styles = "scale-100 opacity-100";
    zIndex = 30;
    transformStyle = "translateY(0)";
  } else if (position === "prev") {
    styles = "scale-75 opacity-70";
    zIndex = 20;
    transformStyle = windowWidth < 640 ? "translateY(-35px)" : "translateY(-60px)";
  } else if (position === "next") {
    styles = "scale-75 opacity-70";
    zIndex = 20;
    transformStyle = windowWidth < 640 ? "translateY(35px)" : "translateY(60px)";
  }

  return (
    <div
      className={`${baseStyles} ${styles}  `}
      style={{ 
        
        zIndex, 
        transform: transformStyle,
        left: '50%',
        marginLeft: windowWidth < 640 ? '-42.5vw' : windowWidth < 768 ? '-160px' : '-225px'
      }}
    >
      <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4 md:mb-6 ">
        <div
         style={{ fontFamily: "Montserrat Alternates" }}
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full  bg-gray-300 flex justify-center items-center text-gray-800 font-semibold text-xs sm:text-sm md:text-base flex-shrink-0">
          {getInitials(testimonial.name)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-sm sm:text-base md:text-lg capitalize truncate"
           style={{ fontFamily: "Montserrat Alternates" }}
          >
            {testimonial.name}
          </p>
          {testimonial.company && (
            <p className="text-xs md:text-sm opacity-80 truncate">
              {testimonial.company}
            </p>
          )}
        </div>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-center leading-relaxed">
        {testimonial.text}
      </p>
    </div>
  );
};

export default memo(Testimonial);
