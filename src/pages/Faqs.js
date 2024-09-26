import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading.js";
import Footer from "../components/Footer.js";

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open FAQ index

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close for the clicked index
  };

  const faqs = [
    {
      question: "Who can participate in the Action Plan Competition?",
      answer:
        "Anyone, from students to working professionals across the nation, can participate. For more information, refer to the Rules Section in the Competition Tab.",
    },
    {
      question:
        "What is the registration/participation fee for the Action Plan?",
      answer: "There is NO registration/participation fee.",
    },
    {
      question: "How can I confirm that I have registered successfully?",
      answer:
        "After registering, you will receive a confirmation mail on the e-mail ID you have registered with.",
    },
    {
      question:
        "What should be the size of my team and where do I register my team?",
      answer:
        "Your team can consist of 2-4 members. The registration confirmation link will include the link to a form where you can add your team members. Only the Team Leader is supposed to register on the website.",
    },
    {
      question: "Where do I have to submit the Questionnaire?",
      answer:
        "The registration confirmation link will include the link to the submission of the Questionnaire.",
    },
    {
      question: "Can a team consist of people from different colleges?",
      answer: "Yes, teams can consist of individuals from different colleges.",
    },
    {
      question: "Does my Action Plan have to be only technology-related?",
      answer:
        "No, we encourage all entries that can be developed into an Action plan. It must fit into the model of Activism, Not-for-profit (NGO), or Social entrepreneurship.",
    },
    {
      question: "How does a mentoring program work?",
      answer:
        "Mentors are experienced sector-specific experts who provide assistance and guidance to the participants. They will offer suggestions and feedback to help participants develop and refine their model. Participants are not required to have a mentor, although teams are strongly encouraged to take advantage of this opportunity.",
    },
  ];

  return (
    <>
      <section
        id="faqs"
        className=" bg-primary text-white py-16 font-montserrat pb-[200px]"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center">
            <SectionHeading back_heading="FAQ'S" main_heading="FAQ's" />

            <div className="grid w-[75%]  grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
              {faqs.map((item, index) => (
                <div className="faq-item" key={index} data-aos="fade-up">
                  <button
                    className="p-6 hoverable border-b-2 text-start text-xl flex flex-col w-full"
                    onClick={() => handleClick(index)}
                  >
                    <div className="flex justify-between items-center pb-3 w-full">
                      <h3 className="text-xl font-medium font-chelsea">
                        {item.question}
                      </h3>
                      <div className="text-gray-300 hover:text-gray-500 text-3xl">
                        {openIndex === index ? "-" : "+"}
                      </div>
                    </div>
                    <div
                      className={`faq-answer ${
                        openIndex === index ? "open" : ""
                      }`}
                    >
                      <p className="text-gray-400 font-oswald">{item.answer}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx="true">
          {`
            .faq-item {
              position: relative;
            }

            .faq-answer {
              overflow: hidden;
              max-height: 0;
              opacity: 0;
              transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
            }

            .faq-answer.open {
              max-height: 1000px;
              opacity: 1;
            }
            .faq-item:hover {
              background: linear-gradient(
                180deg,
                rgba(52, 255, 255, 0.35) -1.39%,
                rgba(255, 255, 255, 0.0735) 95.65%
              );
              opacity: 1;
            }
          `}
        </style>
      </section>
      <Footer />
    </>
  );
}

export default Faqs;
