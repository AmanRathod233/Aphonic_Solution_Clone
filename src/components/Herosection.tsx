'use client';
import React from 'react';
import NavBar from './NavBar';
import RotatingText from './ui/RotatingText';

export default function HeroSection() {
  return (
    <>
      <section className="hero_section bg-transparent bg-[linear-gradient(159deg,#F55E2E_0%,#BD144E_100%)] relative  min-h-screen">
        {/* Bottom SVG Shape */}
        <div
          className="shape-bottom absolute -bottom-[1px] left-0 w-full "
          data-negative="true"
        >
         <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1000 100"
  preserveAspectRatio="none"
  className="w-full md:h-[131px] h-[40px] transform -scale-x-100"
>
  <path
    className="elementor-shape-fill fill-current text-white"
    d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9
    c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7
    c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
  />
</svg>

        </div>
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/assets/images/Hero_Section_Bg.webp')] bg-cover bg-center filter [filter:brightness(2)_contrast(2)_saturate(1.32)_blur(0)_hue-rotate(11deg)] opacity-[0.13] z-[0]"></div>

        {/* NavBar */}
        <NavBar />
        <div className="container max-w-[1280px] mx-auto h-full w-full pt-[20px] pb-[100px] sm:pb-[0px]">

        {/* Hero Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center ">
            
            {/* Image Column - First on mobile, second on desktop */}
            <div className="flex justify-center order-1 md:order-2 -z-0 p-[10px]">
              <img
                src="/assets/images/Hero_Section_img.webp"
                alt="Hero Section"
                loading="lazy"
                className="w-[90%] max-w-[400px] md:max-w-[80%]"
              />
            </div>

            {/* Text Column - Second on mobile, first on desktop */}
            <div className="text-left order-2 md:order-1 p-[10px]">
              <h1 className="text-[55px] mb-4 font-prime text-white leading-[65px] font-[300]">
  We{" "}
  <span className="inline-block">
    <RotatingText
      texts={['Design', 'Develop', 'Create', 'Inspire']}
      mainClassName="font-prime1 text-[#fff] overflow-hidden justify-center  inline-flex"
      staggerFrom="last"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
  </span>
  <br /> and <span className="font-prime1">Build</span> ultimate
  <br />
  things.
</h1>
              <p className="text-white font-prime text-[20px] leading-[34px] font-[500]">
                Our design & technology team will meet with you to
                <br />
                determine the appropriate technology stack to support
                <br />
                business objectives and user requirements.
              </p>

              {/* Buttons */}
              <div className="hero_section_btn flex flex-wrap pt-[40px]">
                <div className="flex items-center justify-start sm:max-w-[170px] max-w-[150px] w-full">
                  <a
                    href="/contactus"
                    className="bg-white text-[#000] pl-[0px] w-full clip-angled-hero pr-[15px] pt-[15px] pb-[15px] rounded-md font-outfit text-[18px] leading-[18px] font-[500] hover:bg-[linear-gradient(159deg,#F55E2E_0%,#BD144E_100%)] hover:text-white transition-colors duration-300"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      Know More
                    </span>
                  </a>
                </div>

                <div className="flex items-center justify-start sm:max-w-[170px] max-w-[150px] w-full">
                  <a
                    href="/contactus"
                    className="bg-white text-[#000] w-full clip-angled-hero1 pt-[15px] pr-[8px] pb-[15px] pl-[15px] rounded-md font-outfit text-[18px] font-[500] leading-[18px] hover:bg-[linear-gradient(159deg,#F55E2E_0%,#BD144E_100%)] hover:text-white transition-colors duration-300"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      Contact Us
                    </span>
                  </a>
                </div>
              </div>

              {/* Mouse Icon */}
              <div className="mouse_img w-[20px] h-[34px] mt-[30px]">
                <a href="#">
                <img
                  src="https://aphonicsolutions.com/wp-content/uploads/2023/04/clicker-black.webp"
                  alt="clicker-black"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
                </a>
              </div>
            </div>
          </div>
        </div>
        

      </section>
    </>
  );
}
