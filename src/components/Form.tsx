'use client';
import React from 'react';

export default function RequestQuoteForm() {
  return (
    <section className="bg-[linear-gradient(173deg,#f44336_-2.63%,#f44336_63.19%,#f08223_122.49%)] clip-angled-form ">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap -mx-4">
          {/* Left Column (50%) */}
          <div className="w-full">
            <div className="relative pt-[80px] pb-[50px] px-[50px]">
              {/* Overlay (if needed) */}
              <div className="absolute inset-0 opacity-[0.07] pointer-events-none rounded-md bg-[url('/assets/images/form_bg.webp')] bg-[position:top_center] z-0"></div>

              {/* Heading */}
              <h2 className="text-[50px] font-prime font-[700] text-[#FFFFFF42] uppercase tracking-[0.2px] leading-[35px] mb-[20px]">Request Free</h2>
              <h2 className="text-[42px] font-opensans tect-[#000] font-[700] tracking-[0.2px] leading-[36px] -mt-[35px] mb-[20px]">Quotes</h2>

           {/* Form */}
              <form className="space-y-4 relative z-100">
                {/* Name Field */}
                <div className='mb-[10px]'>
                  <label htmlFor="name" className="block text-[17px] font-opensans text-[#fff] ">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md bg-[#fff] py-[15px] px-[18px]"
                  />
                </div>

                {/* Phone Field */}
                <div className='mb-[10px]'>
                  <label htmlFor="phone" className="block text-[17px] font-opensans text-[#fff]">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9()#&+*=.-]+"
                    title="Only numbers and phone characters (#, -, *, etc) are accepted."
                    className="mt-1 block w-full rounded-md bg-[#fff] py-[15px] px-[18px]"
                  />
                </div>

                {/* Email Field */}
                <div className='mb-[10px]'>
                  <label htmlFor="email" className="block text-[17px] font-opensans text-[#fff] ">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md bg-[#fff] py-[15px] px-[18px]"
                  />
                </div>

                {/* Message Field */}
                <div className='mb-[10px]'>
                  <label htmlFor="message" className="block text-[17px] font-opensans text-[#fff] ">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-[#fff] py-[15px] px-[18px]"
                  ></textarea>
                </div>

                {/* reCAPTCHA (Mock Placeholder) */}
                <div className="bg-gray-100 text-sm text-gray-600 p-4 rounded-md text-center">
                  reCAPTCHA placeholder
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#000] text-white font-opensans text-[16px] font-[600] uppercase p-[18px] rounded-[5px] leading-[16px] tracking-[0.5px]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
