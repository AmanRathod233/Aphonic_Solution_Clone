'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white relative z-10 overflow-hidden pt-[80px] pb-[50px]">
                {/* Background World Map */}
                <div className="absolute inset-0 bg-[url('/assets/images/map1.webp')] bg-repeat-x bg-[position:center_left] opacity-100 bg-contain pointer-events-none w-full"></div>

                {/* Top Wave Shape */}
                <div className="rotate-[180deg] fill-[#fff] absolute -top-[1px] w-full left-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="h-[65px] translate-x-[-50%] rotate-y-180 max-w-[101%] w-full block relative left-[50%]">
                        <path className="elementor-shape-fill" d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1" />
                    </svg>
                </div>
                {/* Content */}
                <div className="relative z-10 container mx-auto p-[10px] text-center max-w-7xl">
                    <div className="info flex flex-col">
                        <div className="md:mx-auto ">
                            <div className="p-[10px] flex flex-col items-center">

                                {/* Logo */}
                                <div className="logo mb-[20px]">
                                    <a href="#">
                                        <img
                                            src="/assets/images/logo_footer.webp"
                                            alt="Aphonic Logo"
                                            className="h-[71px] w-[200px]"
                                        />
                                    </a>
                                </div>
                                {/* Contact Info */}
                                <div className="contact_info flex justify-center flex-wrap font-prime font-[500] tracking-[0.5px] text-[22px] my-[20px]">
                                    <div className="flex number items-center mx-[10px]">
                                        <i aria-hidden="true" className="fas fa-phone w-[1.25em] text-[17px]"></i>
                                        <a href="#"><span className="pl-[5px]">+91 78742 00097</span></a>
                                    </div>
                                    <div className="flex items-center mx-[10px]">
                                        <i aria-hidden="true" className="fas fa-envelope-open w-[1.25em] text-[17px]"></i>
                                        <a href="#"><span className="pl-[5px]">info@aphonicsolutions.com</span></a>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-[#fff] mx-auto text-[16px] font-opensans font-normal leading-[26px] tracking-[0.5px] mt-[15px]">
                                    Aphonic Solutions is a leading web development and marketing company that specializes in creating beautiful,<br />
                                    functional websites and applications. We design and develop 500+ websites with our talented team over the globe.
                                </p>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="nav_link mt-[25px] mb-[20px]">
                            <nav className="flex justify-center flex-wrap">
                                <li className="sm:border_right list-none">
                                    <a href="#" className="hover:text-[#c9c9c9] text-[16px] font-opensans mx-[10px] sm:mx-[19px] leading-[16px] decoration-none tracking-[0.5px]">Home</a>
                                </li>
                                <li className="sm:border_right list-none">
                                    <a href="#" className="hover:text-[#c9c9c9] text-[16px] font-opensans mx-[10px] sm:mx-[19px] leading-[16px] decoration-none tracking-[0.5px]">About Us</a>
                                </li>
                                <li className="sm:border_right list-none">
                                    <a href="#" className="hover:text-[#c9c9c9] text-[16px] font-opensans mx-[19px] leading-[16px] decoration-none tracking-[0.5px]">Our Works</a>
                                </li>
                                <li className="sm:border_right list-none">
                                    <a href="#" className="hover:text-[#c9c9c9] text-[16px] font-opensans mx-[10px] sm:mx-[19px] leading-[16px] decoration-none tracking-[0.5px]">Blog</a>
                                </li>
                                <li className="sm:border_right list-none">
                                    <a href="#" className="hover:text-[#c9c9c9] text-[16px] font-opensans mx-[10px] sm:mx-[19px] leading-[16px] decoration-none tracking-[0.5px]">Career</a>
                                </li>
                                <li className='list-none'>
                                    <a href="#" className="hover:text-[#c9c9c9] text-[16px] font-opensans mx-[10px] sm:mx-[19px] leading-[16px] decoration-none tracking-[0.5px]">Contact Us</a>
                                </li>
                            </nav>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center gap-[17px] text-white text-lg mt-[20px]">
                            <a href="#" className="hover:text-[#c9c9c9] h-[24px] w-[24px] leading-[24px] text-[24px]"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="hover:text-[#c9c9c9] h-[24px] w-[24px] leading-[24px] text-[24px]"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="hover:text-[#c9c9c9] h-[24px] w-[24px] leading-[24px] text-[24px]"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="hover:text-[#c9c9c9] h-[24px] w-[24px] leading-[24px] text-[24px]"><i className="fab fa-skype"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="cpoyright bg-[#131313] py-[5px]">
                <div className="container max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 sm:col-span-6 p-[10px] sm:block hidden">
                            <p className="text-[#fff] font-opensans text-[16px] leading-normal tracking-[0.5px]">
                                © {new Date().getFullYear()} Aphonic Solutions. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-span-12 sm:col-span-6 p-[10px]">
                            <div className="flex flex-row">
                                <ul className="flex list-none flex-wrap justify-center">
                                    <li className="sm:border_right">
                                        <a href="#" className="text-[#fff] text-[16px] leading-[22px] font-normal font-opensans tracking-[0.5px] mr-[10px] sm:mr-[19px]">
                                            Legal Disclaimer
                                        </a>
                                    </li>
                                    <li className="sm:border_right">
                                        <a href="#" className="text-[#fff] text-[16px] leading-[22px] font-normal font-opensans tracking-[0.5px] mx-[10px] sm:mx-[19px]">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="sm:border_right">
                                        <a href="#" className="text-[#fff] text-[16px] leading-[22px] font-normal font-opensans tracking-[0.5px] mx-[10px] sm:mx-[19px]">
                                            Refund Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-[#fff] text-[16px] leading-[22px] font-normal font-opensans tracking-[0.5px] ml-[10px] sm:ml-[19px]">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}
