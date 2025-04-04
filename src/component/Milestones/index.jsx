import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import milestone1Image from "../../assets/milestone1.svg";
import milestone2Image from "../../assets/milestone2.svg";
import milestone1Video from "../../assets/milestone3.mp4";
import milestone3Video from "../../assets/2.MP4";
import milestone2Video from "../../assets/1.MP4";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const milestones = [
  {
    type: "image",
    src: milestone1Image,
    title: "Signing Ceremony",
    description: "Signing ceremony with our Honourable Cheif Minister Shri. Devendra Fadnavis, at Davos, Switzerland."
  },
  {
    type: "video",
    src: milestone1Video,
    title: "Signing Ceremony",
    description: "A glimpse Signing ceremony with our Honourable Cheif Minister Shri. Devendra Fadnavis,  at Davos, Switzerland."
  },
  {
    type: "image",
    src: milestone2Image,
    title: "Signing Ceremony",
    description: "A glimpse Signing ceremony with our Honourable Cheif Minister Shri. Devendra Fadnavis,  at Davos, Switzerland."
  },
  {
    type: "video",
    src: milestone2Video,
    title: "Signing Ceremony",
    description: "A glimpse Signing ceremony with our Honourable Cheif Minister Shri. Devendra Fadnavis,  at Davos, Switzerland."
  },
  {
    type: "video",
    src: milestone3Video,
    title: "Signing Ceremony",
    description: "A glimpse Signing ceremony with our Honourable Cheif Minister Shri. Devendra Fadnavis,  at Davos, Switzerland."
  }
];

const MilestoneSection = () => {
  const carouselRef = React.useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const items = milestones.map((milestone, index) => (
    <motion.div
      key={index}
      className="flex flex-col items-center p-4 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        {milestone.type === "image" ? (
          <img
            src={milestone.src}
            alt={milestone.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source src={milestone.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <h3 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white text-center">{milestone.title}</h3>
      <p className="text-md text-gray-600 dark:text-gray-400 mt-2 text-center max-w-md">{milestone.description}</p>
    </motion.div>
  ));

  return (
    <div  className="w-full px-4 py-16 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 relative">
      <motion.h2 
        className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
       <div id="milestone"> Our Milestones </div>
      </motion.h2>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        A journey of growth, innovation, and success. Here are some of our most significant milestones.
      </p>
      <div className="relative w-full flex items-center justify-center">
        <button onClick={handlePrev} className="absolute left-2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
          <FaArrowLeft size={20} />
        </button>
        <div className="w-full sm:w-[90%] md:w-[80%] mx-auto">
          <AliceCarousel
            ref={carouselRef}
            items={items} 
            autoPlay
            autoPlayInterval={4000}
            infinite
            controlsStrategy="responsive"
            disableDotsControls
          />
        </div>
        <button onClick={handleNext} className="absolute right-2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default MilestoneSection;