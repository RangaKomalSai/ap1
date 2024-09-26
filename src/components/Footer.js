import React from "react";
import { ReactComponent as Insta } from "../assets/insta.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="contact-us bg-primary text-white py-16 md:px-16 px-4 font-montserrat">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around items-center overflow-hidden">
          <div>
            <h2 className="font-extrabold text-2xl mb-4">FOLLOW US:</h2>
            <ul className="pb-4 text-white mx-auto flex flex-row justify-between items-center gap-4 lg:gap-8 text-xl">
              <li
                className="scroll-icon animated"
                data-animate="fadeInRight"
                data-delay="0.2s"
              >
                <a
                  id="instagram"
                  href="https://www.instagram.com/iitbombay_abhyuday/"
                  target="_blank"
                  rel="noreferrer"
                  className="instagram"
                >
                  <Insta />
                </a>
              </li>
              <li
                className="scroll-icon animated"
                data-animate="fadeInRight"
                data-delay="0.2s"
              >
                <a
                  id="youtube"
                  href="https://youtube.com/@abhyudayiitbombay"
                  target="_blank"
                  rel="noreferrer"
                  className="hoverable"
                >
                  <svg
                    id="youtube"
                    viewBox="0 0 22 16"
                    width="45"
                    height="45"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.0617 2.93984C20.9422 2.49462 20.7078 2.0886 20.382 1.76243C20.0563 1.43625 19.6505 1.20136 19.2055 1.08125C17.5672 0.640625 11 0.640625 11 0.640625C11 0.640625 4.43281 0.640625 2.79453 1.07891C2.34927 1.19862 1.94334 1.43339 1.61751 1.75962C1.29169 2.08586 1.05744 2.49208 0.938281 2.9375C0.5 4.57812 0.5 8 0.5 8C0.5 8 0.5 11.4219 0.938281 13.0602C1.17969 13.9648 1.89219 14.6773 2.79453 14.9188C4.43281 15.3594 11 15.3594 11 15.3594C11 15.3594 17.5672 15.3594 19.2055 14.9188C20.1102 14.6773 20.8203 13.9648 21.0617 13.0602C21.5 11.4219 21.5 8 21.5 8C21.5 8 21.5 4.57813 21.0617 2.93984ZM8.91406 11.1406V4.85938L14.3516 7.97656L8.91406 11.1406Z"></path>
                  </svg>
                </a>
              </li>
              <li
                className="scroll-icon animated"
                data-animate="fadeInRight"
                data-delay="0.3s"
              >
                <a
                  id="linkedin"
                  href="https://www.linkedin.com/company/abhyuday-iit-bombay/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkedin"
                >
                  <Linkedin />
                </a>
              </li>
              <li
                className="scroll-icon animated"
                data-animate="fadeInRight"
                data-delay="0.6s"
              >
                <a
                  href="https://www.facebook.com/abhyuday.iitb/"
                  target="_blank"
                  rel="noreferrer"
                  className="facebook"
                  id="facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    fill="white"
                    viewBox="0 0 50 50"
                    width="45"
                    height="45"
                  >
                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                  </svg>
                </a>
              </li>
              <li
                className="scroll-icon animated"
                data-animate="fadeInRight"
                data-delay="0.6s"
              >
                <a
                  href="https://x.com/Abhyuday_IITB"
                  target="_blank"
                  rel="noreferrer"
                  className="x"
                  id="x"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="45"
                    height="45"
                  >
                    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block h-[200px] w-1 bg-white mx-4"></div>
          <div className="md:hidden w-[200px] h-1 bg-white md:mx-4 mb-8 mt-8 self-start"></div>
          <div className="text-xl font-semibold text-center">
            <h2 className="font-bold mb-4">REACH OUT</h2>
            <Link to="https://maps.app.goo.gl/seG6qxwWHYLZWjrG7" className="hover:underline">
            <p>Abhyuday Office,</p>
            <p>Student Activity Centre,</p>
            <p>IIT Bombay, Powai,</p>
            <p>Mumbai, India</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
