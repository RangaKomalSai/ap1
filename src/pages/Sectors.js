import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../components/SectionHeading.js";
import w1 from "../assets/w1.svg";
import w2 from "../assets/w2.svg";
import w3 from "../assets/w3.svg";
import w4 from "../assets/w4.svg";

const sections = [
  {
    title: "Education and Finance",
    content:
      "Tackle educational issues through digital educational platforms, embracing inclusive schooling approaches, providing viable student funding options, conducting programs to enhance financial understanding, and introducing innovative educational technology solutions.",
    img: w1,
  },
  {
    title: "Healthcare",
    content:
      "Targeting healthcare obstacles by enhancing healthcare service availability, making medical technologies more affordable, advocating for preventative healthcare measures, and addressing targeted health concerns.",
    img: w2,
  },
  {
    title: "Rural Development",
    content:
      "The goal is to help rural areas overcome their challenges. Aimed at empowering rural entrepreneurs, this means improving things like roads and buildings, coming up with innovations in farming, making sure there's clean water and toilets and creating jobs.",
    img: w3,
  },
  {
    title: "Women Empowerment",
    content:
      "Utilize technology to enhance women's roles across domains, offering job opportunities, training in digital proficiencies, ensuring their safety, and combating gender disparities. This involves fostering women-led cooperative enterprises, aiming to empower and uplift women's status holistically.",
    img: w4,
  },
  {
    title: "Sustainability",
    content:
      "Addressing environmental concerns by endorsing renewable energy, effectively managing waste, preserving natural resources, promoting sustainable farming, & fostering mindful patterns of consumption & production.",
    img: w4,
  },
];

export default function Sectors() {
  const [activeSection, setActiveSection] = useState(0);
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
      <div className="container mx-auto relative">
        <SectionHeading
          back_heading="DEVELOP"
          main_heading="What's in it for you?"
        />

        {/* Progress Indicator inside the container */}
        <div className="top-16 flex flex-col md:flex-row h-screen items-center sticky">
          {/* Left and Right Content Flexbox */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white p-2 rounded-full mb-4 w-1/4">
            <div className="flex justify-between">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    index <= activeSection ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row flex-1 w-full h-[65%]">
            {/* Right Content for mobile first with padding */}
            <div className="w-full md:w-1/2 bg-gray-800 p-6 md:p-10 flex items-center justify-center border-l-2 border-white">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={sections[activeSection].img}
                  alt={sections[activeSection].title}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>

            {/* Left Content for mobile with bg and padding */}
            <div className="w-full md:w-1/2 p-4 md:p-6 bg-gradient-to-r from-gray-100 to-gray-100 border-r-2 border-white flex items-center">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-[#180f3c] mb-2">
                  {sections[activeSection].title}
                </h2>
                <p
                  className="text-sm md:text-lg text-[#1b1341]"
                  data-aos="fade-left"
                >
                  {sections[activeSection].content}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Scroll Down Chevron */}
          <motion.div
            className="absolute bottom-28 left-1/2 transform -translate-x-1/2 text-center text-red-500 z-[100]"
            initial={{ opacity: 1 }}
            animate={{
              y: [0, 10, 0],
              opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            }}
            transition={{
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              opacity: {
                duration: 10,
                times: [0, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 0.97, 0.99, 1],
              },
            }}
          >
            <p className="mb-2 text-sm md:text-base">Scroll Down</p>
            <ChevronDown className="mx-auto w-4 h-4 md:w-6 md:h-6" />
          </motion.div>
        </div>

        {/* Invisible sections for scroll trigger */}
        <div className="relative z-10 mt-[-500px]">
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
