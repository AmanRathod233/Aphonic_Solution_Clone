import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ReviewCard = ({
  review,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="bg-white rounded-lg p-6 transition-all duration-500 transform hover:scale-103 hover:rounded-2xl h-full max-h-[260px] flex flex-col overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Header */}
      <div className="flex items-center mb-4 transform transition-transform duration-300 hover:translate-x-2 flex-shrink-0">
        <img
          src={review.image}
          alt={review.name}
          className="w-16 h-16 rounded-full object-cover"
          loading="lazy"
        />
        <div className="ml-4">
          <h3 className="font-semibold text-lg text-gray-800">{review.name}</h3>
          <p className="text-gray-600 text-sm font-medium">{review.designation}</p>
        </div>
      </div>

      {/* Scrollable Review Text */}
      <div className="relative flex-1 overflow-y-auto">
        <FaQuoteLeft className="text-blue-100 text-5xl absolute top-0 left-1 transform rotate-12" />
        <p className="text-gray-700 mt-4 mb-4 relative z-10 text-sm lg:text-base leading-relaxed pr-2">
          {review.review}
        </p>
      </div>

      {/* Stars */}
      <div className="flex text-yellow-400 mt-4 flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
        {[...Array(review.rating)].map((_, i) => (
          <FaStar key={i} className="mr-1" />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
