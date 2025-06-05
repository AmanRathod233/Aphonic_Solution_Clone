'use client';

export default function Project() {
  return (
    <>
      <section
        className="project mt-[70px] sm:-mt-[400px]
          "
      >
        <div className="container max-w-[1280px] mx-auto p-[10px] px-4 sm:px-6 lg:px-8">
          <div className="heading mb-6 sm:mb-5 xs:mb-4">
            <p
              className="text-[20px] font-prime font-[700] leading-[28px] text-center sm:text-left tracking-[0.2]
                sm:text-[18px] sm:leading-[24px]
                xs:text-[16px] xs:leading-[22px]"
            >
              Clients we work for
            </p>
            <h3
              className="text-[25px] font-prime font-[700] leading-[35px] text-center sm:text-left mb-[20px]
                sm:text-[35px] sm:leading-[48px]
               "
            >
              Our Recent{' '}
              <span className="bg-[linear-gradient(90deg,#f08223_-2.63%,#f44336_63.19%,#f08223_122.49%)] bg-clip-text text-transparent font-prime font-[700]">
                Projects.
              </span>
            </h3>
          </div>
          <div className="project_detail">
            <div className="grid grid-cols-12">
              <div className="p-[10px] col-span-12 sm:col-span-8">
                <img
                  src="/assets/images/The-UVFoods-Copy.webp"
                  alt=""
                  className="w-full object-cover mb-[20px] rounded-[15px]"
                />
                <h5
                  className="font-prime text-[21px] leading-[28px] tracking-[0.2px] font-[700]
                    sm:text-[19px] sm:leading-[26px]
                    xs:text-[17px] xs:leading-[24px]"
                >
                  The UV Food
                </h5>
                <p
                  className="font-opensans text-[15px] leading-[28px] tracking-[0.5px]
                    sm:text-[14px] sm:leading-[22px]
                    xs:text-[13px] xs:leading-[20px]"
                >
                  WordPress & E-commerce Store
                </p>
              </div>
              <div className="p-[10px] col-span-12 sm:col-span-4">
                <img
                  src="/assets/images/Welcome.webp"
                  alt=""
                  className="w-full object-cover h-auto sm:h-[571.22px] mb-[20px] rounded-[15px]"
                />
                <h5
                  className="font-prime text-[21px] leading-[28px] tracking-[0.2px] font-[700]
                    sm:text-[19px] sm:leading-[26px]
                    xs:text-[17px] xs:leading-[24px]"
                >
                  Big Shot
                </h5>
                <p
                  className="font-opensans text-[15px] leading-[28px] tracking-[0.5px]
                    sm:text-[14px] sm:leading-[22px]
                    xs:text-[13px] xs:leading-[20px]"
                >
                  Mobile Application
                </p>
              </div>
            </div>
            <div className="project_section_btn mt-[15px] mx-[10px] flex justify-center">
              <a
                href="#"
                className="text-[18px] font-[500] tracking-[0.5px] font-outfit px-[35px] py-[15px] bg-[linear-gradient(279deg,#F08223_0%,#F44336_100%)] text-[#fff] rounded-[50px] bg-transparent leading-[18px]
                  sm:text-[16px] sm:px-[28px] sm:py-[12px]
                  xs:text-[14px] xs:px-[22px] xs:py-[10px]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
