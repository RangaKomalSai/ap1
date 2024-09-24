import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeaturesSticky = () => {
  useEffect(() => {
    // Load external scripts (Webflow and Amply Motion)
    const loadScript = (src, integrity = "", crossOrigin = "") => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (integrity) script.integrity = integrity;
      if (crossOrigin) script.crossOrigin = crossOrigin;
      document.body.appendChild(script);
    };

    loadScript(
      "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js",
      "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
      "anonymous"
    );
    loadScript("https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/js/webflow.bdb8249c0.js");
    loadScript("https://cdn.jsdelivr.net/gh/joinamply/amply-motion@b1.1.1/dist/index.js");

    // GSAP and ScrollTrigger initialization
    gsap.registerPlugin(ScrollTrigger);

    const itemsTriggers = document.querySelectorAll(".features-sticky_track-item");
    const currentItemEl = document.querySelector(".features-sticky_progress-current");
    const totalItemsEl = document.querySelector(".features-sticky_progress-total");

    const hideTimelines = [];
    const showTimelines = [];

    itemsTriggers.forEach((trigger, i) => {
      const itemImage = document.querySelectorAll(".features-sticky_item-image")[i];
      const itemContent = document.querySelectorAll(".features-sticky_content-item")[i];
      const itemIcon = document.querySelectorAll(".features-sticky_progress-icon")[i];
      const itemBullets =
        i > 0
          ? document.querySelectorAll(".features-sticky_progress-bullets-list")[i - 1].querySelectorAll(
              ".features-sticky_progress-bullet"
            )
          : null;

      // GSAP Animations
      const hideTimeline = gsap.timeline({ paused: true });
      const showTimeline = gsap.timeline({ paused: true });

      // Hide Animation
      hideTimeline.to(itemImage, { y: "-100%", opacity: 0, duration: 0.8, ease: "power2.inOut" });
      hideTimeline.to(itemContent, { opacity: 0, pointerEvents: "none", duration: 0.5, ease: "power2.out" }, "<");

      // Show Animation
      showTimeline.to(itemImage, { y: "0%", opacity: 1, duration: 0.8, ease: "power2.inOut" });
      showTimeline.to(itemContent, { opacity: 1, pointerEvents: "auto", duration: 0.5, ease: "power2.out" }, "<");
      showTimeline.to(itemIcon, { opacity: 1, duration: 0.5, ease: "power2.out" }, "<");
      if (itemBullets)
        showTimeline.to(itemBullets, { opacity: 1, duration: 0.5, ease: "power2.out" }, "<");

      hideTimelines.push(hideTimeline);
      showTimelines.push(showTimeline);

      ScrollTrigger.create({
        trigger,
        start: "top center",
        end: "bottom center",
        markers: false,
        onEnter: () => {
          if (i - 1 >= 0) {
            showTimelines[i - 1].pause().progress(1);
            hideTimelines[i - 1].play();
          }
          showTimelines[i].play();
          updateProgressNumber(i);
        },
        onEnterBack: () => {
          if (i - 1 >= 0) hideTimelines[i - 1].reverse();
          showTimelines[i].reverse();
          updateProgressNumber(i - 1);
        },
      });
    });

    const updateProgressNumber = (num) => {
      if (currentItemEl) currentItemEl.textContent = num + 1;
      if (totalItemsEl) totalItemsEl.textContent = itemsTriggers.length;
    };

    updateProgressNumber(0);
  }, []);

  return (
    <section className="section_features-sticky bg-gray-900 py-10">
    <div id="sticky-features" className="px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute top-0 left-0 w-full">
              <img
                src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/6622ca33fe3adf7f0e3506ad_features-sticky-bg.webp"
                alt="Background"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col space-y-4 relative z-10">
              <img
                src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/66968a7405660784a28b2143_OV-StreamlineOnboarding.png"
                alt="Streamline Onboarding"
                className="w-full h-auto"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/66272306eb7ef538337e9122_Frame%201171277429.webp"
                alt="Client App"
                className="w-full h-auto"
                loading="lazy"
              />
              <img
                src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/6627230604492823b864d8f1_Frame%201171277430.webp"
                alt="Advisor Portal"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  <strong>Streamlined</strong> onboarding
                </h2>
                <p className="text-gray-300">
                  Simplify the collection of KYC information with our
                  user-friendly interface. Reduce the need for repetitive
                  forms, and streamline personal data integration, saving time
                  and administrative effort.
                </p>
                <a
                  href="/solutions/onboarding"
                  className="text-indigo-400 flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <img
                    src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/6626c6eb6a67b7f7ce269701_arrow-right.svg"
                    alt="Arrow Icon"
                    className="w-4 h-4"
                  />
                </a>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  <strong>Client</strong> app
                </h2>
                <p className="text-gray-300">
                  Configure our web and mobile apps to offer clients a
                  personalized digital experience.
                </p>
                <a
                  href="/solutions/client-experience"
                  className="text-indigo-400 flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <img
                    src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/6626c6eb6a67b7f7ce269701_arrow-right.svg"
                    alt="Arrow Icon"
                    className="w-4 h-4"
                  />
                </a>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  <strong>Advisor</strong> portal
                </h2>
                <p className="text-gray-300">
                  Our advisor portal allows easy account handling, goal
                  setting, performance monitoring, and sharing important
                  documents securely—all in one place.
                </p>
                <a
                  href="/solutions/client-management"
                  className="text-indigo-400 flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <img
                    src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/6626c6eb6a67b7f7ce269701_arrow-right.svg"
                    alt="Arrow Icon"
                    className="w-4 h-4"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-3 gap-4">
            <div className="features-sticky_track-item is-01"></div>
            <div className="features-sticky_track-item is-02"></div>
            <div className="features-sticky_track-item is-03"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile layout */}
    <div className="block md:hidden py-10 px-4">
      <div className="space-y-8">
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/66968a7405660784a28b2143_OV-StreamlineOnboarding.png"
            alt="Streamline Onboarding"
            className="w-48 h-auto mb-4"
            loading="lazy"
          />
          <h2 className="text-xl font-bold text-white">
            <strong>Streamlined</strong> onboarding
          </h2>
          <p className="text-gray-300 text-center">
            Simplify the collection of KYC information with our user-friendly
            interface. Reduce the need for repetitive forms, and streamline
            personal data integration.
          </p>
          <a
            href="/solutions/onboarding"
            className="text-indigo-400 flex items-center space-x-2 mt-4"
          >
            <span>Learn More</span>
            <img
              src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/6626c6eb6a67b7f7ce269701_arrow-right.svg"
              alt="Arrow Icon"
              className="w-4 h-4"
            />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/66272306eb7ef538337e9122_Frame%201171277429.webp"
            alt="Client App"
            className="w-48 h-auto mb-4"
            loading="lazy"
          />
          <h2 className="text-xl font-bold text-white">
            <strong>Client</strong> app
          </h2>
          <p className="text-gray-300 text-center">
            Configure our web and mobile apps to offer clients a personalized
            digital experience.
          </p>
          <a
            href="/solutions/client-experience"
            className="text-indigo-400 flex items-center space-x-2 mt-4"
          >
            <span>Learn More</span>
            <img
              src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/6626c6eb6a67b7f7ce269701_arrow-right.svg"
              alt="Arrow Icon"
              className="w-4 h-4"
            />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/6627230604492823b864d8f1_Frame%201171277430.webp"
            alt="Advisor Portal"
            className="w-48 h-auto mb-4"
            loading="lazy"
          />
          <h2 className="text-xl font-bold text-white">
            <strong>Advisor</strong> portal
          </h2>
          <p className="text-gray-300 text-center">
            Our advisor portal allows easy account handling, goal setting, and
            sharing important documents securely.
          </p>
          <a
            href="/solutions/client-management"
            className="text-indigo-400 flex items-center space-x-2 mt-4"
          >
            <span>Learn More</span>
            <img
              src="https://cdn.prod.website-files.com/6616e98deb2aac9914d5e8f2/6626c6eb6a67b7f7ce269701_arrow-right.svg"
              alt="Arrow Icon"
              className="w-4 h-4"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FeaturesSticky;
