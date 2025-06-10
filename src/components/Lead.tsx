'use client';
import React from 'react';

export default function Lead() {
  return (
    <>

      <section className="sm:bg-[url('/assets/images/Abstract-Stroke-1.webp')] bg-no-repeat sm:bg-[position:105%_0px] py-[50px] relative sm:pt-[80px] sm:pb-[100px]">
      <div className="overlay_background sm:bg-[url('/assets/images/Abstract-Stroke-1.webp')] bg-no-repeat sm:bg-[position:-41px_97%] bg-[size:250px_auto] opacity-50 absolute inset-0 -z-1"></div>
      
        <div className="container max-w-[1280px] mx-auto"> {/* Added padding for better spacing on smaller screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center"> {/* Added gap for outer grid */}

            
            <div className="flex flex-row items-center bg-[url('/assets/images/Abstract.webp')] bg-bottom bg-no-repeat bg-[size:101px_auto] p-[10px] ">
              {/* Large Image (Left on Desktop, Top on Mobile) */}
              <div className="flex-1">
                <div className='p-[10px]'>
                  <img
                  src="/assets/images/app-design.webp"
                  alt="App Design - example of our work"
                  className="w-full h-auto object-cover rounded-lg"
                />
                </div>
                
              </div>

              {/* Two Smaller Images (Right on Desktop, Bottom on Mobile) */}
              <div className="flex flex-col flex-1">
                <div className='p-[10px]'>
                  <img
                  src="/assets/images/web-design.webp"
                  alt="Web Design - example of our work 1"
                  className="w-full h-auto object-cover rounded-lg"
                />
                </div>

                <div  className='p-[10px]'>
                  <img
                  src="/assets/images/webdesign3-1.webp"
                  alt="Web Design - example of our work 2"
                  className="w-full h-auto object-cover rounded-lg"
                />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lead_content sm:text-center text-left p-[10px]">
              <div className="lead_heading pb-[20px]">
                <h2 className="font-prime font-[700]  text-[25px] leading-[35px] sm:text-[35px]  sm:leading-[48px] "> {/* Added responsive font sizes and line height */}
                  <span className="bg-[linear-gradient(90deg,#f08223_-2.63%,#f44336_63.19%,#f08223_122.49%)] bg-clip-text text-transparent font-prime font-[700]">Aphonic Solutions</span> a leading Web Development Company in India.
                </h2>
              </div>
              {/* You can add more content here if needed, e.g., paragraphs, buttons */}
              <p className="text-[18px] text-[#000] pb-[20px] leading-[28px] tracking-[1px] font-opensans font-normal">
Aphonic Solutions is a leading web development company in <br className="hidden sm:block" />India. We have a team of experienced and qualified developers<br className="hidden sm:block" /> who are capable of creating robust, high-quality websites that<br className="hidden sm:block" /> fulfil your needs.
              </p>
              <p className="text-lg text-[#000] pb-[20px] text-[18px] leading-[28px] tracking-[1px] font-opensans font-normal">
Our sites are always optimized for search engines, so you can be sure that they will rank well in Google and other search engines. We also offer a wide range of other services, such as website design and hosting, so you can rest assured that we will take care of everything from start to finish.
              </p>
             <div className="flex items-center justify-start max-w-[170px] w-full">
                  <a
                    href="/contactus"
                    className="bg-black text-[#fff] pl-[0px] w-full clip-angled-hero pr-[15px] pt-[15px] pb-[15px] rounded-md font-outfit text-[18px] leading-[18px] font-[500] hover:bg-[linear-gradient(159deg,#F55E2E_0%,#BD144E_100%)] hover:text-white transition-colors duration-300"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      Read More
                    </span>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}