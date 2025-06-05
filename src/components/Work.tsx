'use client';
import React from 'react';
import IdeaCard from './WorkCard'; // Adjust the path as needed

const Work: React.FC = () => {
  return (
    <section className="work bg-[url('/assets/images/grid.webp')] pt-[90px] pb-[70px] bg-no-repeat bg-[position:100%_7%] relative">
      <div className="container max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Text Column */}
          <div className="order-2 md:order-1 p-[10px]">
            <h3 className="title font-prime text-[30px] md:text-[35px] font-[700] leading-[42px] md:leading-[48px] mb-[20px] text-left">
              <span className="bg-gradient-to-r from-[#f08223] via-[#f44336] to-[#f08223] bg-clip-text text-transparent">
                digital business
              </span>{' '}
              model solution of exceptional quality 👋
            </h3>

            <p className="text-[#000] font-opensans text-[16px] md:text-[18px] text-left leading-[26px] tracking-[0.5px] pb-[20px]">
              Our team has years of experience in web Development field, and we are passionate about
              helping our clients achieve the best possible results.
            </p>

            {/* Cards */}
            <IdeaCard
              iconClass="far fa-gem"
              title="Innovative Ideas"
              description="We're passionate about what we do, and this shines through in our work with our creative ideas."
              bgColor="#f44336"
            />
            <IdeaCard
              iconClass="fas fa-user-tie"
              title="High Quality"
              description="We have a strict quality control policy, so you can be sure that your website will meet all your requirements."
              bgColor="#f44336"
            />
            <IdeaCard
              iconClass="far fa-grin-hearts"
              title="Endless Support"
              description="We're a reliable and experienced web development company that has a track record of providing top-notch service 24/7."
              bgColor="#f44336"
            />
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2 p-[10px] sm:order-2">
            <img
              src="/assets/images/digital-business-model-solution-of-exceptional-quality-Illustration-.webp"
              alt="Digital Business Model Illustration"
              className="w-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
