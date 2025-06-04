'use client';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function CompanyDetail() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <>
      <section className="company_counter max-w-[1805px] mx-auto bg-[#F4F8FF] p-[10px] rounded-[20px]">
        <div className="container max-w-[1805px]">
          <div className="mt-[70px] mb-[30px] pt-[60px] pb-[80px] bg-[url('/assets/images/bg-counter.webp')] bg-[position:top_center] bg-no-repeat bg-[length:60%_auto] relative">
            <div className="container max-w-[856px] mx-auto">
              <div className="grid grid-cols-12 items-center" ref={ref}>
                {/* Card 1 */}
                <div className="col-span-4 p-[10px]">
                  <div className="cup flex items-start justify-start gap-[10px]">
                    <div className="icon flex items-center justify-center">
                      <img src="/assets/images/coffee-cup.svg" alt="Cup Icon" className="max-h-[64px] max-w-[64px]" />
                    </div>
                    <div className="number text-center">
                      <p className="text-[26px] font-prime font-[700] leading-[32px] text-center tracking-[.85px]">
                        {inView && <CountUp end={2700} duration={2} />}
                      </p>
                      <p className="flex items-center justify-center font-opensans text-[19px] font-[400] leading-[2.5]">Cup Of Tea</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-span-4 p-[10px]">
                  <div className="cup flex items-start justify-start gap-[10px]">
                    <div className="icon flex items-center justify-center">
                      <img src="/assets/images/listing.svg" alt="Project Icon" className="max-h-[64px] max-w-[64px]" />
                    </div>
                    <div className="number text-center">
                      <p className="text-[26px] font-prime font-[700] leading-[32px] text-center tracking-[.85px]">
                        {inView && <CountUp end={2000} duration={2} />}+
                      </p>
                      <p className="flex items-center justify-center font-opensans text-[19px] font-[400] leading-[2.5]">Project Completed</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-span-4 p-[10px]">
                  <div className="cup flex items-start justify-start gap-[10px]">
                    <div className="icon flex items-center justify-center">
                      <img src="/assets/images/rating.svg" alt="Rating Icon" className="max-h-[64px] max-w-[64px]" />
                    </div>
                    <div className="number text-center">
                      <p className="text-[26px] font-prime font-[700] leading-[32px] text-center tracking-[.85px]">
                        {inView && <CountUp end={95} duration={2} />}%
                      </p>
                      <p className="flex items-center justify-center font-opensans text-[19px] font-[400] leading-[2.5]">Satisfied Clients</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <section className="join mb-[100px] -mt-[70px] text-center p-[10px]">
          <h2 className="font-prime text-[64px] font-[700] tracking-[.2px] text-[#00000014] mb-[5px] leading-[48px]">
            Join and Test our Cup of Tea
          </h2>
        </section>
      </section>
    </>
  );
}
