'use client';

export default function Our_Values() {
  return (
    <>
      <section
        className="our_values bg-[url('/assets/images/we_have_section_bg.webp')] bg-[position:center_left] bg-no-repeat pt-[90px] pb-[70px] relative
          sm:pt-16 sm:pb-14
          xs:pt-12 xs:pb-10"
      >
        <div className="overlay bg-[#fff] opacity-[0.59] absolute inset-0"></div>
        <div className="container max-w-[1280px] mx-auto relative z-[99999] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 items-center gap-6 md:gap-8">
            <div className="col-span-12 md:col-span-8 order-2 sm:order-1">
              <div className="our_values_left p-[10px]">
                <div className="heading mb-5 sm:mb-4">
                  <h3
                    className="font-prime font-[700] tracking-[0.85px] leading-[40px] text-[28px]
                      sm:text-[35px] sm:leading-[48px]"
                  >
                    What we have? (We believe the right form{' '}
                    <span className="bg-[linear-gradient(90deg,#f08223_-2.63%,#f44336_63.19%,#f08223_122.49%)] bg-clip-text text-transparent">
                      makes all the difference
                    </span>
                    .)
                  </h3>
                </div>
                <div className="heading_detail">
                  <p
                    className="font-opensans font-normal tracking-[1px] leading-[28px] text-[18px] mb-5
                      "
                  >
                    We believe in doing things the right way. We work hard to create a positive working environment where everyone is treated with respect.
                  </p>
                </div>
                <div className="values_detail py-5">
                  <div className="grid grid-cols-12 gap-6 sm:gap-8">
                    <div className="value_box_1 flex col-span-12 sm:col-span-6 p-[10px]">
                      <div className="icon flex justify-center items-baseline mr-[15px] leading-1">
                        <span className="text-[#fff] rounded-[50%] text-[29px] p-[0.5em] bg-[#f44336]">
                          <i aria-hidden="true" className="fas fa-hashtag"></i>
                        </span>
                      </div>
                      <div className="values">
                        <h4
                          className="font-opensans font-[600] tracking-[0.5px] mb-2 text-[20px]
                           "
                        >
                          Clear Purpose
                        </h4>
                        <p
                          className="font-opensans tracking-[0.5px] leading-[26px] text-[17px]
                           "
                        >
                          We believe in doing what's best for our clients. We're committed to providing innovative solutions that improve the quality of serve.
                        </p>
                      </div>
                    </div>
                    <div className="value_box_2 flex col-span-12 sm:col-span-6 p-[10px]">
                      <div className="icon flex justify-center items-baseline mr-[15px] leading-1">
                        <span className="text-[#fff] rounded-[50%] text-[29px] p-[0.5em] bg-[#f44336]">
                          <i aria-hidden="true" className="fas fa-hashtag"></i>
                        </span>
                      </div>
                      <div className="values">
                        <h4
                          className="font-opensans font-[600] tracking-[0.5px] mb-2 text-[20px]
                            sm:text-[18px]
                            xs:text-[16px]"
                        >
                          Driven by Innovation
                        </h4>
                        <p
                          className="font-opensans tracking-[0.5px] leading-[26px] text-[17px]
                           "
                        >
                          We're constantly looking for new ways to improve our services. Our team of experts is constantly coming up with new ideas that will make a difference in work
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="values_detail mb-2">
                  <div className="grid grid-cols-12 gap-6 sm:gap-8">
                    <div className="value_box_1 flex col-span-12 sm:col-span-6 p-[10px]">
                      <div className="icon flex justify-center items-baseline mr-[15px] leading-1">
                        <span className="text-[#fff] rounded-[50%] text-[29px] p-[0.5em] bg-[#f44336]">
                          <i aria-hidden="true" className="fas fa-hashtag"></i>
                        </span>
                      </div>
                      <div className="values">
                        <h4
                          className="font-opensans font-[600] tracking-[0.5px] mb-2 text-[20px]
                           "
                        >
                          Commitment to Ethics and Integrity
                        </h4>
                        <p
                          className="font-opensans tracking-[0.5px] leading-[26px] text-[17px]
                           "
                        >
                          We believe in upholding high ethical standards – We take pride in living up to these values each and every day, which reflects in the quality of our work.
                        </p>
                      </div>
                    </div>
                    <div className="value_box_2 flex col-span-12 sm:col-span-6 p-[10px]">
                      <div className="icon flex justify-center items-baseline mr-[15px] leading-1">
                        <span className="text-[#fff] rounded-[50%] text-[29px] p-[0.5em] bg-[#f44336]">
                          <i aria-hidden="true" className="fas fa-hashtag"></i>
                        </span>
                      </div>
                      <div className="values">
                        <h4
                          className="font-opensans font-[600] tracking-[0.5px] mb-2 text-[20px]
                           "
                        >
                          Eye on Security Vulnerabilities
                        </h4>
                        <p
                          className="font-opensans tracking-[0.5px] leading-[26px] text-[17px]
                           "
                        >
                          It’s important to keep up with current security threats and update your applications accordingly so that they are as safe as possible for users.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 order-1 sm:order-2">
              <div className="values_right p-[10px]">
                <img src="/assets/images/What-we-have-We-believe-the-right.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
