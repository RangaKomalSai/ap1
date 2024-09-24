import React, { useRef, useState, useEffect } from "react";
import SectionHeading from "../../components/SectionHeading.js";

export default function Testimonials() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // The multiplier can be adjusted for scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleWheel = (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY; // Allow vertical scrolling to affect horizontal scrolling
      };
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <section className="testimonials bg-primary text-white py-8 md:py-16 font-montserrat w-full overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <div className="relative bg-white text-black py-8 md:py-16 content2 font-montserrat rounded-lg shadow-lg">
          <div className="container mx-auto flex flex-col justify-center items-center my-4 md:my-8">
            <SectionHeading
              back_heading="REVIEWS"
              main_heading="Testimonials"
              light={true}
            />
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto pb-8 space-x-4 md:space-x-8 scrollbar-hide"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {[
                {
                  content: "Sha Singh here! Participating in the Profectus internship at Abhyuday was a game-changer for me. This experience was packed with learning opportunities—from in-depth market analysis to strategic planning. The mentorship provided was exceptional, encouraging me to stretch my capabilities and enhancing my professional skills. It was incredibly fulfilling to see the practical impact of our strategies. If you’re looking for an internship that offers real growth and learning in a supportive environment. This program truly prepares you for a successful career. I am deeply grateful for this transformative journey.",
                  name: "Sha Singh",
                  department: "Energy Science Department",
                  logo: "Logo"
                },
                {
                  content: "Hi, I'm Sahiti. Joining the Profectus internship at Abhyuday was really good. I worked with Jaipur Rugs, making a database system that helped them a lot. The environment at Abhyuday was very nice and supportive. The mentors helped us all the time, and it was very useful. I learned so much and felt good because our work made a big difference for the company. If you want an internship that helps your career and also makes you feel proud of your work, I think you should join the Profectus program at Abhyuday. It was a really great experience for me.",
                  name: "Sahiti",
                  logo: "Logo"
                },
                {
                  content: "The Profectus Fellowship Program under Abhyuday has been an incredibly enriching experience. The well-designed curriculum, blending theory and practice, has significantly enhanced my skills. Through Profectus, I had the opportunity to intern with Distinct Horizon as a CSR Research Intern and with Pranyas Development Foundation as a Content Writer Intern. These internships provided valuable hands-on experience and deepened my understanding of social responsibility. This fellowship has equipped me with the confidence and knowledge to make meaningful contributions to society.",
                  name: "Anonymous",
                  logo: "Logo"
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-[300px] w-[280px] md:h-[400px] md:w-[350px] bg-black rounded-lg shadow-md transition-transform hover:scale-105 p-4"
                >
                  <p className="mb-2">{testimonial.content}</p>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.department || ""}</p>
                  <p className="text-sm">{testimonial.logo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
