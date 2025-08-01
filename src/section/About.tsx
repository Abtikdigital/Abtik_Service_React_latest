import  { useState, useEffect, memo } from 'react';
import Image1 from '../assets/AboutSection/male-female-graphic-designers-using-laptop.jpg';

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
          className={`space-y-10 transition-all duration-800 ease-out ${
            visibleElements.text 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h2
            className="sub-heading text-center md:text-left bg-clip-text bg-gradient-to-t text-transparent from-[#3CA2E2] to-[#052EAA]"
            style={{ fontFamily: "Anton" }}
          >
            About Abtik
          </h2>
          <p className="paragraph">
            Abtik Group of Companies is a trusted consultancy dedicated to
            empowering startups, MSMEs, and professionals across India. We
            provide end-to-end business support—from registrations, government
            funding assistance, and licensing to certifications, tax compliance,
            and documentation. With a strong focus on reliability, speed, and
            expertise, Abtik simplifies complex processes and helps businesses
            launch, grow, and succeed—efficiently and confidently. Your
            business, our responsibility.
          </p>
          <div className="text-center md:text-left">
            <button className="custom-btn">Explore</button>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Image - Top Row */}
          <div 
            className={`transition-all duration-800 ease-out ${
              visibleElements.topRowImages 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <img 
              src={Image1} 
              className="rounded-4xl"
              alt="Team working"
            />
          </div>

          {/* Second Image - Top Row */}
          <div 
            className={`transition-all duration-800 ease-out ${
              visibleElements.topRowImages 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <img 
              src={Image1} 
              className="rounded-4xl"
              alt="Team collaboration"
            />
          </div>

          {/* Third Image - Bottom Row (Full Width) */}
          <div 
            className={`md:col-span-2 transition-all duration-800 ease-out ${
              visibleElements.bottomImage 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <img 
              src={Image1} 
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
