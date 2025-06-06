'use client';
import React from 'react';

export default function CTA() {
  return (
    <>
      <section className="cta sm:pt-[90px] pt-[40px]">
        <div className="container max-w-[892px] mx-auto">
          <div className="bg-gradient-to-r from-[#e91e63] to-[#ff5722] py-[30px] px-[50px] rounded-[100px] sm:rounded-full flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
            <h2 className="text-[30px] leading-[44px] font-prime font-[700] text-white text-center md:text-left">
              Join and Test our Cup of Tea
            </h2>
            <a
              href="#"
              className="bg-white text-[#e61e93] py-[12px] px-[23px] text-[18px] font-[600] leading-[1] font-prime rounded-full transition-colors duration-300 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
