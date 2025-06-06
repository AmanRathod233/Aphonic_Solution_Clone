'use client';

import React from 'react';
import ServiceBox from './Service_box';
import CTA from './CTA';

export default function Service() {
    return (
        <>
        <section className="main bg-[#0B223808] sm:pb-[300px]  mx-[10px] sm:mx-[30px] lg:mx-[50px] rounded-[20px] sm:p-[10px] pt-[0px] pb-[250px] px-[15px]">
            <section className="service">
                <div className='container mx-auto'>
                    <div className='service_content pt-[40px] pb-[30px]'>
                        <div className="service_heading text-center pb-[20px]">
                            <h3 className='pb-[20px] font-prime text-[25px] leading-[35px] sm:text-[40px] sm:leading-[48px] text-[#000] font-[700]'>
                                <span className="bg-[linear-gradient(90deg,#f08223_-2.63%,#f44336_63.19%,#f08223_122.49%)] bg-clip-text text-transparent font-prime font-[700]">Service</span> we provide
                            </h3>
                            <p className='font-opensans text-[18px] leading-[28px] tracking-[0.85px] text-[#000]'>In order to fully justify the goals of your business, we develop a website that is professional,<br className='hidden sm:block' /> well-structured, and fully optimized.</p>
                        </div>
                    </div>
                </div>

                <div className="container max-w-[1280px] mx-auto  p-[10px] ">
                    
                        <ServiceBox />
                    
                </div>


            </section>
                <CTA />
            </section>
        </>
    );
}