'use client';
import React from 'react';

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Web Design can help to create a professional and polished appearance of your website.",
    image: "/assets/images/web-design-1-1.webp",
    buttonImage: "/assets/images/Next_btn.webp",
    link: "#",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Web development includes everything from developing simple websites to building complex platforms.",
    image: "/assets/images/web-development.webp",
    buttonImage: "/assets/images/Next_btn.webp",
    link: "#",
  },
  {
    id: 3,
    title: "App Development",
    description: "Our experienced developers will work hard to create an app that meets your requirements.",
    image: "/assets/images/mobile-app.webp",
    buttonImage: "/assets/images/Next_btn.webp",
    link: "#",
  },
  {
    id: 4,
    title: "Branding & Graphics",
    description: "A well-executed branding & graphics can help you create identity for your company, & attract new customers. ",
    image: "/assets/images/Branding-Graphic.webp",
    buttonImage: "/assets/images/Next_btn.webp",
    link: "#",
  },
  {
    id: 5,
    title: "SEO",
    description: "SEO can help you identify your website’s weaknesses, correct them, & boost your site’s performance in search engines.",
    image: "/assets/images/social-media-marketing.webp",
    buttonImage: "/assets/images/Next_btn.webp",
    link: "#",
  },
  {
    id: 6,
    title: "SMM",
    description: "SMM services are a great way for businesses of all sizes to get the most out of their social media presence over the globe.",
    image: "/assets/images/content.png",
    buttonImage: "/assets/images/Next_btn.webp",
    link: "#",
  },
  {
    id: 7,
    title: "Software Development",
    description: "Help create and design the software, ensuring that it meets the specific needs of the business. ",
    image: "/assets/images/software-development-2.webp",
    buttonImage: "/assets/images/Next_btn.webp",
    link: "#",
  },
  {
    id: 8,
    title: "Maintenance",
    description: "Maintaining your website will help to ensure that it looks its best, is easy to use, good user experience and runs smoothly",
    image: "/assets/images/web-maintenance.webp",
    buttonImage: "/assets/images/Next_btn.webp",
    link: "#",
  },
  
  

];

export default function Service_Box() {
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {services.map(service => (
    <div key={service.id} className='p-[10px]'>
      <div className="service_box relative bg-white p-[35px] rounded-[16px] shadow-lg h-[100%] z-0 group">
        <a href={service.link} className="service_icon relative block w-[40%]">
          <img
            src={service.image}
            alt={service.title}
            className="w-[64px] h-[64px] mb-[45px]"
          />
        </a>
        <div className="service_box_heading mb-[10px]">
          <a href={service.link}>
            <h3 className="font-outfit text-[23px] leading-[34px] font-[600] mb-[10px] group-hover:text-[#fff]">
              {service.title}
            </h3>
          </a>
        </div>
        <div className="service_box_content">
          <a href={service.link}>
            <p className="font-outfit text-[17px] leading-[24px] text-[#7a7a7a] tracking-[.5px] group-hover:text-[#fff]">
              {service.description}
            </p>
            <div className="service_box_btn mt-[15px]">
              <img
                src={service.buttonImage}
                alt="Next"
                className="w-[50px] object-contain h-[50px] group-hover:filter group-hover:brightness-[100]"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
  
  );
}
