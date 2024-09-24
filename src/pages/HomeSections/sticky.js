"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from "../../components/SectionHeading";
import w1 from "../../assets/w1.svg";
import w2 from "../../assets/w2.svg";
import w3 from "../../assets/w3.svg";
import w4 from "../../assets/w4.svg";

const sections = [
  {
    title: "Unlock Cash Prizes, Rewards",
    content: " Access to cash prize, rewards and exciting incentives that drive your social innovation forward",
    image: w1
  },
  {
    title: "Networking Opportunities",
    content: "Opportunity to netwok with Action Plan's excelent partner base spread across the globe",         
    image: w2
  },
  {
    title: "Mentoring Support",
    content: "Gain personalized guidance from seasoned mentors to nurture your social entrepreneurship journey",
    image: w3
  },
  {
    title: "Exclusive Workshops",
    content: "Series of exclusive and interesting workshops in both Round 1  and Round 2 by leading speakers of the field.",
    image: w4
  }
]

export default function Component() {
  const [activeSection, setActiveSection] = useState(0);
  
  // Initialize the ref for storing multiple div references
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sections.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.5 }
      );
    });

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        observers[index].observe(ref);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="benefits bg-primary font-montserrat text-white py-16">
      <div className="container mx-auto">
        <SectionHeading
          back_heading="DEVELOP"
          main_heading="What's in it for you?"
        />
       
        <div className="sticky top-0 flex flex-col md:flex-row h-screen items-center overflow-hidden">
          {/* Left Content with different background and padding */}
          <div className="w-full md:w-1/2 order-2 md:order-1 p-6 md:p-10 bg-gradient-to-r from-gray-800 to-gray-900 border-r-2 border-white">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{sections[activeSection].title}</h2>
              <p className="bg-gradient-to-b from-[#FFFFFF] to-[#3812E4] text-transparent bg-clip-text text-[32px]" data-aos="fade-left">
                {sections[activeSection].content}
              </p>
            </motion.div>
          </div>
          
          {/* Right Content with different background and padding */}
          <div className="w-full md:w-1/2 order-1 md:order-2 bg-gray-600 p-6 md:p-10 flex items-center justify-center border-l-2 border-white">
            <motion.img
              key={activeSection}
              src={sections[activeSection].image}
              alt={sections[activeSection].title}
              className="w-full h-auto object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Scroll Down Chevron */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-gray-500"
            initial={{ opacity: 1 }}
            animate={{ 
              y: [0, 10, 0],
              opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              opacity: { duration: 10, times: [0, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 0.97, 0.99, 1] }
            }}
          >
            <p className="mb-2 text-sm md:text-base">Scroll Down</p>
            <ChevronDown className="mx-auto w-4 h-4 md:w-6 md:h-6" />
          </motion.div>
        </div>

        {/* Invisible sections for scroll trigger */}
        <div className="relative z-10">
          {sections.map((_, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="h-screen flex items-center justify-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
