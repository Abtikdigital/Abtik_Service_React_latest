import { useState, useEffect, memo } from 'react';
import Image1 from '../assets/AboutSection/business-people-casual-meeting.jpg';
import Image2  from "../assets/AboutSection/silhouette-confident-businesspeople.jpg"
import Image3 from "../assets/AboutSection/modern-equipped-computer-lab.jpg"

const About = () => {
  const [visibleElements, setVisibleElements] = useState({
    text: false,
    topRowImages: false, // First two images load together
    bottomImage: false   // Third image loads separately
  });

  useEffect(() => {
    // Text section first
    const textTimer = setTimeout(() => {
      setVisibleElements(prev => ({ ...prev, text: true }));
    }, 200);

    // Top row images (image1 and image2) load together
    const topRowTimer = setTimeout(() => {
      setVisibleElements(prev => ({ ...prev, topRowImages: true }));
    }, 800);

    // Bottom image loads last
    const bottomImageTimer = setTimeout(() => {
      setVisibleElements(prev => ({ ...prev, bottomImage: true }));
    }, 1400);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(topRowTimer);
      clearTimeout(bottomImageTimer);
    };
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-14 py-6 gap-6 items-center">
        {/* Text Section */}
        <div
          className={`space-y-10 transition-all duration-800 ease-out ${visibleElements.text
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
            }`}
        >
          <h2
            className="sub-heading text-center md:text-left bg-clip-text bg-gradient-to-t text-transparent from-[#3CA2E2] to-[#052EAA] font-1"
           
          >
            About Abtik
          </h2>
          <p className="paragraph font-2"
          
          >
            In Abtik Services is a start-up dedicated consultation dedicated to accelerate the development of micro, small and medium enterprises across India. With the vision of making government schemes and funding accessible to every entrepreneur, we have become a reliable one-stop partner for business funding, branding and legal needs.
          </p>
           <p className="paragraph font-2"
         
          >
           From government grants and MSME loans to providing strategic aid in working capital finance, digital attendance, legal compliance and IP protection - we simplify the journey of business building. Our team of experienced experts has already assisted more than 50,000 client PAN-India, including 6,500+ recognized startups to convert their ambitions into reality.
           </p>
           <p className="paragraph font-2"
          
          >
          At Abtik, we don’t just consult — we collaborate. Our transparent and personalized approach ensures that every business gets the right support at the right stage — from idea to expansion.
          </p>
          <div className="text-center md:text-left">
            <button className="custom-btn">Explore</button>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Image - Top Row */}
          <div
            className={`transition-all duration-800 ease-out ${visibleElements.topRowImages
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
              }`}
          >
            <img
              src={Image1}
              className="rounded-4xl h-full"
              alt="Team working"
              loading='lazy'
            />
          </div>

          {/* Second Image - Top Row */}
          <div
            className={`transition-all duration-800 ease-out ${visibleElements.topRowImages
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
              }`}
          >
            <img
              src={Image3}
              className="rounded-4xl"
              loading='lazy'
              alt="Team collaboration"
            />
          </div>

          {/* Third Image - Bottom Row (Full Width) */}
          <div
            className={`md:col-span-2 transition-all duration-800 ease-out ${visibleElements.bottomImage
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
              }`}
          >
            <img
              src={Image2}
              loading='lazy'
              className="rounded-4xl max-h-48 w-full"
              alt="Professional workspace"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(About);
