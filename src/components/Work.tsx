'use client';
import React from 'react';
import IdeaCard from './WorkCard'; // Adjust path based on your project structure

const Work: React.FC = () => {
  return (
    <section className="work bg-[url('/assets//images/grid.webp')] pt-[90px] pb-[70px] bg-no-repeat bg-[position:100%_7%] relative">
      <div className="container max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-6 text-center p-[10px]">
            <h2 className="title font-prime text-[35px] text-left font-[700] leading-[48px] mb-[20px]">
              <span className="bg-[linear-gradient(90deg,#f08223_-2.63%,#f44336_63.19%,#f08223_122.49%)] bg-clip-text text-transparent">
                digital business
              </span>{' '}
              model solution of exceptional quality 👋
            </h2>
            <p className="text-[#000] font-opensans text-[18px] text-left leading-[28px] tracking-[1px] pb-[20px]">
              Our team has years of experience in web Development field, and we are passionate about
              helping our clients achieve the best possible results.
            </p>

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
          <div className="col-span-6 text-center p-[10px]">
            <img src="/assets/images/digital-business-model-solution-of-exceptional-quality-Illustration-.webp" alt="" className='w-full object-contain' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
