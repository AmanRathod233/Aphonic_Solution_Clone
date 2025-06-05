'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
    return (
        <footer className="bg-black text-white relative z-10 overflow-hidden pt-[80px] pb-[50px]">
            {/* Background World Map (simulate with bg image or layer) */}
            <div className="absolute inset-0 bg-[url('/assets/images/map1.webp')] bg-repeat-x bg-[position:center_left] opacity-100 bg-contain pointer-events-none w-full"></div>
            <div className='rotate-[180deg] fill-[#fff] absolute -top-[1px] w-[100%] left-0 '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className='h-[65px] translate-x-[-50%] rotate-y-180 max-w-[101%] w-full block relative left-[50%] w-[calc(100% + 1.3px)];
}'>
                    <path className="elementor-shape-fill" d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"></path>
                </svg>
            </div>

            <div className="relative z-10 container  mx-auto p-[10px] text-center max-w-7xl">
                <div className='info'>
                    <div className='max-w-[930px] mx-auto'>
                        <div className='p-[10px] flex flex-col items-center'>


                            {/* Logo */}
                            <div className="logo mb-[20px]">
                                <a href="#">
                                    <img
                                        src="/assets/images/logo_footer.webp"
                                        alt="Aphonic Logo"
                                        className="h-[71px] w-[200px] mb-6"
                                    />
                                </a>
                            </div>


                            {/* Contact Info */}
                            <div className="contact_info flex justify-center flex-wrap text-lg font-prime font-[500] tracking-[0.5px] text-[22px] my-[20px]">
                                <div className="flex number items-center mx-[10px]">
                                    <FaPhoneAlt />
                                    <a href="#"><span className='pl-[5px]'>+91 78742 00097</span></a>
                                </div>
                                <div className="flex items-center mx-[10px]">
                                    <HiOutlineMail />
                                   <a href="#"><span className='pl-[5px]'>info@aphonicsolutions.com</span></a>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-[#fff] mx-auto text-[16px] font-opensans font-normal leading-[26px] tracking-[0.5px]">
Aphonic Solutions is a leading web development and marketing company that specializes in creating beautiful,<br/> functional websites and applications. We design and develop 500+ websites with our talented team over the globe.                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="nav_link mt-[25px] mb-[20px]">
                <nav className="flex justify-center flex-wrap">
                    
                   <li className='border_right decoration-none'> <a href="#" className="hover:text-orange-400  text-[16px] font-opensans mr-[19px] ml-[19px] leading-[16px]">Home</a>            </li>
                   <li className='border_right decoration-none'> <a href="#" className="hover:text-orange-400  text-[16px] font-opensans mr-[19px] ml-[19px] leading-[16px]">About Us</a></li>
                   <li className='border_right decoration-none'> <a href="#" className="hover:text-orange-400  text-[16px] font-opensans mr-[19px] ml-[19px] leading-[16px]">Our Works</a></li>
                   <li className='border_right decoration-none'> <a href="#" className="hover:text-orange-400  text-[16px] font-opensans mr-[19px] ml-[19px] leading-[16px]">Blog</a></li>
                   <li className='border_right decoration-none'> <a href="#" className="hover:text-orange-400  text-[16px] font-opensans mr-[19px] ml-[19px] leading-[16px]">Career</a></li>
                   <li className='decoration-none'> <a href="#" className="hover:text-orange-400  text-[16px] font-opensans mr-[19px] ml-[19px] leading-[16px]">Contact Us</a></li>
                </nav>
</div>
                {/* Social Icons */}
                <div className="flex justify-center gap-5 text-white text-lg mb-6">
                    <a href="#" className="hover:text-orange-400"><FaFacebookF /></a>
                    <a href="#" className="hover:text-orange-400"><FaInstagram /></a>
                    <a href="#" className="hover:text-orange-400"><FaLinkedinIn /></a>
                    <a href="#" className="hover:text-orange-400"><FaSkype /></a>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-4"></div>

                {/* Bottom Text Links */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2024 Aphonic Solutions. All Rights Reserved.</p>
                    <div className="flex gap-4 mt-3 md:mt-0">
                        <a href="#" className="hover:text-white">Legal Disclaimer</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Refund Policy</a>
                        <a href="#" className="hover:text-white">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
