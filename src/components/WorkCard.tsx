'use client';
import React from 'react';

interface IdeaCardProps {
  iconClass: string;
  title: string;
  description: string;
  bgColor?: string;
}

const IdeaCard: React.FC<IdeaCardProps> = ({
  iconClass,
  title,
  description,
  bgColor = '#f44336',
}) => {
  return (
    <div className="idea flex items-center justify-start">
      <div className="p-[10px]">
        <div
          className="icon text-[35px] rounded-full flex items-center justify-center p-[17.5px]"
          style={{ backgroundColor: bgColor }}
        >
          <i className={`${iconClass} h-[1em] w-[1em]`} style={{ color: '#ffffff' }}></i>
        </div>
      </div>
      <div className="detail text-left p-[10px]">
        <h3 className="text-[#000] font-prime text-[20px] font-[700] leading-[28px] mb-[10px]">
          {title}
        </h3>
        <p className="text-[#000] font-opensans text-[17px] leading-[28px] tracking-[1px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IdeaCard;
