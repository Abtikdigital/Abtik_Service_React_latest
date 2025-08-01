import { ArrowRight, ArrowUpRight } from "lucide-react";
import { memo, useState } from "react";

const FaqSection = () => {
  const [isExpanded, setIsExpanded] = useState({
    isOpen: false,
    index: -1,
  });

  const faq = [
    {
      question: "1. What is Abtik?",
      answer:
        "Abtik is a business support firm that helps startups and MSMEs with registration, funding, licensing, and certifications—everything needed to grow.",
    },
    {
      question: "2. Who is Abtik for?",
      answer:
        "Entrepreneurs, startups, MSMEs, professionals, and anyone looking to start or scale a business.",
    },
    {
      question: "3. What makes Abtik different?",
      answer:
        "Expert guidance, quick support, and complete business solutions—all under one roof.",
    },
    {
      question: "4. Why choose Abtik?",
      answer:
        "Because we simplify the complex—offering expert guidance and complete business solutions in one place.",
    },
  ];

  const toggleIsExpanded = (index: number) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  return (
    <section className="bg-[#f7f7f7]  py-8 md:py-16 space-y-6">
      <h1 className="sub-heading bg-gradient-to-t text-center  bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent">
        Frequently Asked Questions
      </h1>

      <div className="px-6  md:px-24 space-y-4 "
      style={{fontFamily:"Montserrat Alternates"}}
      >
        {faq.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
          >
            <h2
              className={`p-2.5 px-4 relative cursor-pointer flex items-center justify-between  text-base font-medium ${
                isExpanded.isOpen && isExpanded.index === index
                  ? "border-b border-gray-200"
                  : ""
              }`}
              onClick={() => toggleIsExpanded(index)}
            >
              <span>{data.question}</span>
              <button className="border-2 p-1 transition-all duration-300 hover:scale-105 h-8 w-8 flex justify-center items-center border-[#052EAA] rounded-lg text-[#052EAA]">
                {isExpanded.isOpen && isExpanded.index === index ? (
                  <ArrowRight className="w-5 h-5" />
                ) : (
                  <ArrowUpRight className="w-5 h-5" />
                )}
              </button>
            </h2>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded.isOpen && isExpanded.index === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="p-4 bg-gradient-to-t rounded-b-lg from-[#052EAA] to-[#3CA2E2] text-white">
                {data.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(FaqSection);
