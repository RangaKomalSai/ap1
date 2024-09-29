import React from "react";
import nostop from "../assets/partners/nostop.png";
import aic from "../assets/partners/aic.png";
import threei from "../assets/partners/3i.png";
import tbi from "../assets/partners/tbi.png";
import bbb from "../assets/partners/bbb.jpg";
import yti from "../assets/partners/yti.png";
import jss from "../assets/partners/jss.png";
import cedi from "../assets/partners/cedi.png";
import cwe from "../assets/partners/cwe.png";
import sx from "../assets/partners/sx.png";
import renteez from "../assets/partners/renteez.jpg";
import anantam from "../assets/partners/anantam.png";
import athera from "../assets/partners/athera.jpg";
import venture_wolf from "../assets/partners/venture_wolf.jpg";
import ivy from "../assets/partners/ivy.png";
import inflection from "../assets/partners/inflection.png";
import youth from "../assets/partners/youth.png";
import unstop from "../assets/partners/unstop.png";
import zexpr from "../assets/partners/zex.png";
import startupnews from "../assets/partners/startupnews.png";
import lawctopus from "../assets/partners/lawctopus.svg";
import know from "../assets/partners/know.jpg";
import bizzbucket from "../assets/partners/bizzbucket.jpg";
import indiaeducation from "../assets/partners/indiaeducation.png";
import amarujala from "../assets/partners/amarujala.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./IncentivesSections/sections.css";

function Partners() {
  return (
    <section className="bg-primary text-white py-16 font-montserrat pt-[20vh] text-center">
      <div className="pb-16">
        <h1 className="font-extrabold text-[32px] text-[#5ED2FF] w-[80%] mx-auto">
          INVESTMENT PARTNERS
        </h1>
        <div className="xl:w-[80%] w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8 justify-items-center items-center mt-8">
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link
              to="https://www.linkedin.com/company/anantam-ecosystems/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img
                  src={anantam}
                  alt="Anantam ecosystem logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link
              to="https://www.atheravp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img
                  src={athera}
                  alt="athera logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link
              to="https://www.venturewolf.in/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img
                  src={venture_wolf}
                  alt="venture_wolf logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="https://ivycamp.in/" target="_blank" rel="noreferrer">
              <div className="img-container">
                <img
                  src={ivy}
                  alt="Ivy camp ventures logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="https://ipventures.in/" target="_blank" rel="noreferrer">
              <div className="img-container">
                <img
                  src={inflection}
                  alt="Inflection point ventures logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
        </div>
        <h1 className="font-extrabold text-[32px] text-[#5ED2FF] pt-16 w-[80%] mx-auto">
          INCUBATION PARTNERS
        </h1>
        <div className="xl:w-[80%] w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8 justify-items-center items-center mt-8">
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link
              to="https://www.nostops.org/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img
                  src={nostop}
                  alt="No Stop logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="http://www.aic-rmp.org/" target="_blank" rel="noreferrer">
              <div className="img-container">
                <img src={aic} alt="AIC logo" className="" draggable="false" />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="http://www.3izone.com/" target="_blank" rel="noreferrer">
              <div className="img-container">
                <img
                  src={threei}
                  alt="3i logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link
              to="https://www.tbi-kec.org/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img src={tbi} alt="tbi logo" className="" draggable="false" />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="https://bbb.rcb.res.in/" target="_blank" rel="noreferrer">
              <div className="img-container">
                <img src={bbb} alt="bbb logo" className="" draggable="false" />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link
              to="https://ytincubator.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img src={yti} alt="yti logo" className="" draggable="false" />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link
              to="https://www.jssstepnoida.org/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img src={jss} alt="jss logo" className="" draggable="false" />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link
              to="https://www.nitt.edu/home/rc/cedi/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img
                  src={cedi}
                  alt="cedi logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="http://cwe.org.in/" target="_blank" rel="noreferrer">
              <div className="img-container">
                <img src={cwe} alt="cwe logo" className="" draggable="false" />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link
              to="https://www.startupxperts.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-container">
                <img src={sx} alt="sx logo" className="" draggable="false" />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="http://www.renteez.net" target="_blank" rel="noreferrer">
              <div className="img-container">
                <img
                  src={renteez}
                  alt="renteez logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
        </div>
        <h1 className="font-extrabold text-[32px] text-[#5ED2FF] pt-16 w-[80%] mx-auto">
          MEDIA & OUTREACH PARTNERS
        </h1>
        <div className="xl:w-[80%] w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8 justify-items-center items-center mt-8">
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="#" rel="noreferrer">
              <div className="img-container">
                <img
                  src={bizzbucket}
                  alt="Bizz Bucket logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="#" rel="noreferrer">
              <div className="img-container">
                <img
                  src={youth}
                  alt="Youth Incorporated logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="#" rel="noreferrer">
              <div className="img-container">
                <img
                  src={unstop}
                  alt="Unstop logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="#" rel="noreferrer">
              <div className="img-container">
                <img
                  src={zexpr}
                  alt="Zex PR logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="#" rel="noreferrer">
              <div className="img-container">
                <img
                  src={indiaeducation}
                  alt="Indian Education Diary logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="#" rel="noreferrer">
              <div className="img-container">
                <img
                  src={startupnews}
                  alt="Startup news logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="#" rel="noreferrer">
              <div className="img-container">
                <img
                  src={lawctopus}
                  alt="Lawctopus logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="#" rel="noreferrer">
              <div className="img-container">
                <img
                  src={know}
                  alt="Know a fest logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
          <div
            className="profile-card h-[150px] w-[150px] md:h-[200px] md:w-[200px]"
            data-aos="fade-up"
          >
            <Link to="#" rel="noreferrer">
              <div className="img-container">
                <img
                  src={amarujala}
                  alt="Amar Ujala logo"
                  className=""
                  draggable="false"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Partners;
