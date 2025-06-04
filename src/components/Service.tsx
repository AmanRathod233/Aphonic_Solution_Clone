'use client';

import React from 'react';
import ServiceBox from './Service_box';
import CTA from './CTA';

export default function Service() {
    return (
        <>
        <section className="main bg-[#0B223808]  max-w-[1805px] pb-[300px] mx-auto rounded-[20px]">
            <section className="service">
                <div className='container mx-auto '>
                    <div className='service_content pt-[40px] pb-[30px]'>
                        <div className="service_heading text-center pb-[20px]">
                            <h2 className='pb-[20px] font-prime text-[40px] leading-[48px] text-[#000] font-[700]'>
                                <span className="bg-[linear-gradient(90deg,#f08223_-2.63%,#f44336_63.19%,#f08223_122.49%)] bg-clip-text text-transparent font-prime font-[700]">Service</span> we provide
                            </h2>
                            <p className='font-opensans font-[18px] leading-[28px] tracking-[0.85px] text-[#000]'>In order to fully justify the goals of your business, we develop a website that is professional,<br /> well-structured, and fully optimized.</p>
                        </div>
                    </div>
                </div>

                <div className="container max-w-[1280px] mx-auto">
                    
                        <ServiceBox />
                    
                </div>


            </section>
                <CTA />
            </section>
        </>
    );
}