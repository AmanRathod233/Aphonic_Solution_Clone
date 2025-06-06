'use client';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function CompanyDetail() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="company_counter bg-[#F4F8FF] px-3 pt-3 sm:pb-[400px] rounded-[20px] mx-[50px]">
      <div className="container max-w-[1805px] mx-auto">
        <div className="mt-[70px] mb-[30px] pt-[60px] pb-[80px] bg-[url('/assets/images/bg-counter.webp')] bg-top bg-no-repeat bg-[length:60%_auto] relative">
          <div className="max-w-[856px] mx-auto">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              ref={ref}
            >
              {/* Card 1 */}
              <div className="flex flex-row  justify-center items-start sm:items-center gap-4">
                <img
                  src="/assets/images/coffee-cup.svg"
                  alt="Cup Icon"
                  className="w-[64px] h-[64px] shrink-0"
                />
                <div>
                  <p className="text-[26px] font-prime font-[700] leading-[32px] tracking-[.85px]">
                    {inView && <CountUp end={2700} duration={2} />}
                  </p>
                  <p className="font-opensans text-[19px] font-[400] leading-[2.5]">
                    Cup Of Tea
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-row justify-center items-start sm:items-center gap-4">
                <img
                  src="/assets/images/listing.svg"
                  alt="Project Icon"
                  className="w-[64px] h-[64px] shrink-0"
                />
                <div>
                  <p className="text-[26px] font-prime font-[700] leading-[32px] tracking-[.85px]">
                    {inView && <CountUp end={2000} duration={2} />}+
                  </p>
                  <p className="font-opensans text-[19px] font-[400] leading-[2.5]">
                    Project Completed
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-row justify-center items-start sm:items-center gap-4">
                <img
                  src="/assets/images/rating.svg"
                  alt="Rating Icon"
                  className="w-[64px] h-[64px] shrink-0"
                />
                <div>
                  <p className="text-[26px] font-prime font-[700] leading-[32px] tracking-[.85px]">
                    {inView && <CountUp end={95} duration={2} />}%
                  </p>
                  <p className="font-opensans text-[19px] font-[400] leading-[2.5]">
                    Satisfied Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="join pb-[100px] -mt-[70px] text-center px-4">
          <h2 className="font-prime text-[40px] sm:text-[64px] font-[700] tracking-[.2px] text-[#00000014] mb-[5px] leading-[48px]">
            Join and Test our Cup of Tea
          </h2>
        </section>
      </div>
    </section>
  );
}
