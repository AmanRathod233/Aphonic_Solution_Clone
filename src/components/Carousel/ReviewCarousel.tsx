"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ReviewCard from "./ReviewCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Marketing Director, TechCorp",
    image: "/assets/images/Review_1.webp",
    rating: 5,
    review:
      "The product has transformed our workflow completely. The intuitive interface and powerful features have made our team significantly more productive.",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "CEO, Innovation Labs",
    image: "/assets/images/Review_2.webp",
    rating: 4,
    review:
      "Outstanding service and support. The team went above and beyond to ensure our success. Highly recommended for any business looking to scale.",
  },
  {
    id: 3,
    name: "Emma Williams",
    designation: "Product Manager, CloudTech",
    image: "/assets/images/Review_3.webp",
    rating: 5,
    review:
      "Exceptional quality and attention to detail. The implementation was smooth, and the results exceeded our expectations.",
  },
  {
    id: 4,
    name: "David Miller",
    designation: "CTO, DataFlow",
    image: "/assets/images/Review_4.webp",
    rating: 5,
    review:
      "A game-changing solution that has helped us streamline our operations. The ROI has been remarkable, and our team loves using it.",
  },
];

const ReviewCarousel = () => {
  return (
    <section className="review mb-[70px]">
    <div className=" container max-w-7xl mx-auto py-[50px] px-[10px] bg-[#0B223808] rounded-xl">
      <div className="heading text-center">
        <h3 className="text-[35px] font-[700] leading-[48px] tracking-[0.2px] font-prime mb-[20px]">
          Our <span className="bg-[linear-gradient(90deg,#f08223_-2.63%,#f44336_63.19%,#f08223_122.49%)] bg-clip-text text-transparent">Client's</span> Feedbacks
        </h3>
        <p className="font-opensans text-[18px] leading-[28px] tracking-[0.85px] pb-[40px]">Here are just a few of our amazing clients, from startups to not-for-profits to enterprises.<br/>
We've had the pleasure of working with them.</p>
        </div>      
      <div className="p-[10px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="flex">
              {/* Important: Make SwiperSlide flex so ReviewCard fills height */}
              <ReviewCard
                review={review}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </section>
  );
};

export default ReviewCarousel;
