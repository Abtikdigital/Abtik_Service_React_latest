import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/About/bgImg.svg";
import ClientStats from "../section/ClientStats";
import Image1 from "../assets/WhyChooseUs/male-female-graphic-designers-using-laptop.jpg";
import Contact from "../section/Contact";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";
import { HeadProvider, Meta, Title } from "react-head";
import seoData from "../data/seoData.json";
const About = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };
  // const TeamData = [
  //   {
  //     img: Image1,
  //     name: "Abinav Thakker",
  //     position: "Director",
  //     instagram: "",
  //     facebook: "",
  //     linkdin: "",
  //   },
  //   {
  //     img: Image1,
  //     name: "Raj Bhensla",
  //     position: "Director",
  //     instagram: "",
  //     facebook: "",
  //     linkdin: "",
  //   },
  //   {
  //     img: Image1,
  //     name: "Bharat Barot",
  //     position: "Vice President",
  //     instagram: "",
  //     facebook: "",
  //     linkdin: "",
  //   },
  //   {
  //     img: Image1,
  //     name: "Virendra Rao",
  //     position: "Operation Manager",
  //     instagram: "",
  //     facebook: "",
  //     linkdin: "",
  //   },
  // ];

  // Hero
  const refHero = useRef(null);
  const isInViewHero = useInView(refHero, { once: true, amount: 0.1 });

  // Client Stats
  const refClient = useRef(null);
  const isInViewClient = useInView(refClient, { once: true, amount: 0.1 });

  // About Vision And Mission
  const refVisionMission = useRef(null);
  const isInViewVisionMission = useInView(refVisionMission, {
    once: true,
    amount: 0.1,
  });
  const [visionCols, setVisionCols] = useState(1);
  useEffect(() => {
    const updateCols = () => {
      setVisionCols(window.innerWidth >= 768 ? 2 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getVisionDelay = (index: number) => {
    const row = Math.floor(index / visionCols);
    return 0.5 + row * 0.5;
  };

  // Why Choose Us
  const refWhyChoose = useRef(null);
  const isInViewWhyChoose = useInView(refWhyChoose, {
    once: true,
    amount: 0.4,
  });
  const [whyChooseCols, setWhyChooseCols] = useState(1);
  useEffect(() => {
    const updateCols = () => {
      setWhyChooseCols(window.innerWidth >= 768 ? 2 : 1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);
  const getWhyChooseDelay = (index: number) => {
    const row = Math.floor(index / whyChooseCols);
    return 0.5 + row * 0.5;
  };

  // Meet Our Expert
  // const refTeam = useRef(null);
  // const isInViewTeam = useInView(refTeam, { once: true, amount: 0.4 });
  // const [teamCols, setTeamCols] = useState(1);
  // useEffect(() => {

  //   const updateCols = () => {
  //     setTeamCols(window.innerWidth >= 768 ? 4 : 1);
  //   };
  //   updateCols();
  //   window.addEventListener("resize", updateCols);
  //   return () => window.removeEventListener("resize", updateCols);
  // }, []);
  // const getTeamDelay = (index: number) => {
  //   const row = Math.floor(index / teamCols);
  //   return 0.5 + row * 0.5;
  // };

  // Contact
  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, { once: true, amount: 0.4 });

  return (
    <>
      <HeadProvider>
        <Title>{seoData?.aboutPage?.title}</Title>
        <Meta name="description" content={seoData?.aboutPage?.description} />
        <Meta name="keyword" content={seoData?.aboutPage?.keyword} />
        <Meta name="robots" content={seoData?.aboutPage?.robots} />
      </HeadProvider>
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
              style={{ fontFamily: "Montserrat Alternates" }}
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
                               transition-transform duration-300
                              shadow-lg hover:shadow-xl"
              >
                Schedule a call
              </button>
            </div>
          </motion.div>
        </section>
        {/* Client Stats */}
        <motion.section
          ref={refClient}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewClient ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <ClientStats />
        </motion.section>
        {/* About Vision And Mission */}
        <motion.section
          ref={refVisionMission}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewVisionMission ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-14 py-6 gap-6 items-center"
        >
          {[0, 1].map((index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInViewVisionMission ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: getVisionDelay(index) }}
              className="space-y-10"
            >
              <h2
                className="sub-heading text-center  bg-clip-text bg-gradient-to-t text-transparent
          from-[#3CA2E2]
          to-[#052EAA]
          "
                style={{ fontFamily: "Anton" }}
              >
                {index === 0 ? "Our Vision" : "Our Mission"}
              </h2>
              <p
                className="paragraph  "
                style={{ fontFamily: "Montserrat Alternates" }}
              >{
                index==0?
                
                "To become the most trusted growth partner for every small and medium business in India — by making government support, digital transformation, and business compliance simple, accessible, and result-driven. We believe growth should never be limited by lack of guidance or opportunity."
                :"At Abtik, our mission is to simplify business growth. From government schemes and funding to branding, legal support, and digital services — we handle it all. With 50,000+ businesses served, we’re your trusted partner for turning ideas into impact."
              }
              </p>
              <div>
                <img loading="lazy" src={Image1} className="rounded-4xl" />
              </div>
            </motion.div>
          ))}
        </motion.section>
        {/* Why Choose Us */}
        <motion.section
          ref={refWhyChoose}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewWhyChoose ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-14 py-6 gap-6 items-center"
        >
          {[0, 1].map((index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInViewWhyChoose ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: getWhyChooseDelay(index) }}
              className={
                index === 0
                  ? "space-y-10"
                  : "grid grid-cols-1 md:grid-cols-2  gap-6"
              }
            >
              {index === 0 ? (
                <>
                  <h2
                    className="sub-heading text-center bg-clip-text bg-gradient-to-t text-transparent
          from-[#3CA2E2]
          to-[#052EAA]
          "
                    style={{ fontFamily: "Anton" }}
                  >
                    Why Choose Abtik
                  </h2>
                  <p
                    className="paragraph  "
                    style={{ fontFamily: "Montserrat Alternates" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    quidem ipsa voluptate architecto quisquam reprehenderit rem,
                    totam, facere rerum cum harum cumque explicabo dolorum a ex?
                    Hic officiis dolore aliquam!
                  </p>
                  {/* <div>
                    <button className="custom-btn">Explore</button>
                  </div> */}
                </>
              ) : (
                <>
                  <div>
                    <img loading="lazy" src={Image1} className="rounded-4xl" />
                  </div>
                  <div>
                    <img loading="lazy" src={Image1} className="rounded-4xl" />
                  </div>
                  <div className="md:col-span-2">
                    <img loading="lazy" src={Image1} className="rounded-4xl max-h-48 w-full" />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.section>
        {/* Meet Our Expert */}
        {/* <motion.section
          ref={refTeam}
          initial={{ y: 100, opacity: 0 }}
          animate={isInViewTeam ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#f7f7f7] px-7 md:px-14 py-6"
        >
          <div className="space-y-6">
            <h2
              className="sub-heading text-center bg-gradient-to-t bg-clip-text text-transparent from-[#3CA2E2] to-[#052EAA]"
              style={{ fontFamily: "Anton" }}
            >
              Meet Our Expert
            </h2>
            <p className="paragraph text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
              accusamus.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {TeamData?.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInViewTeam ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: getTeamDelay(index) }}
                  className="space-y-3"
                >
                  <div>
                    <img
                      src={member?.img}
                      className="rounded-4xl hover:scale-105 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                  <h2
                    className="text-xl text-[#3CA2E2] font-semibold "
                    style={{ fontFamily: "Montserrat Alternates" }}
                  >
                    {member?.name}
                  </h2>
                  <h3 className="text-base text-[#757575] font-medium">
                    {member?.position}
                  </h3>
                  <div className="gap-2.5 flex ">
                    <button className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg ">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="text-white "
                        size="xl"
                      />
                    </button>
                    <button className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg ">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-white "
                        size="xl"
                      />
                    </button>{" "}
                    <button className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg ">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-white "
                        size="xl"
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section> */}

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
export default memo(About);
