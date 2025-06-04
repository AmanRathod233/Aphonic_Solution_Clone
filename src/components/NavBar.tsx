'use client';
import React, { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-transparent">
            <div className="container mx-auto max-w-[1280px]">
                <div className="grid grid-cols-12 items-center justify-between w-full">

                    {/* Logo */}
                    <div className="flex items-center p-[10px] w-max col-span-6 lg:col-span-2">
                        <img
                            src="/assets/images/aphonic-solutions-logo.webp"
                            alt="logo"
                            className="w-[171px] h-[61px] object-contain"
                        />
                    </div>

                    {/* Hamburger (Mobile only) */}
                    <div className="col-span-6 flex justify-end items-center lg:hidden pr-2">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white text-2xl"
                        >
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex col-span-8 h-full p-[10px] items-center justify-end relative">
                        <nav className="ml-auto">
                            <ul className="flex space-x-4 items-center">
                                <li><a href="/" className="text-white text-[18px] font-outfit font-normal py-[13px] mr-[17.5px] nav-link">Home</a></li>

                                {/* ABOUT */}
                                <li className="group relative">
                                    <a href="/aboutus" className="text-white text-[18px] font-outfit font-normal py-[13px] mx-[17.5px] flex nav-link">
                                        About Us 
                                        <span className='pl-[10px]'><i className="fa fa-plus text-[12px]"></i></span>
                                    </a>
                                    <ul className="absolute top-[100%] left-[25px] z-10 bg-white min-w-[150px] opacity-0 scale-y-95 group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible transition-all duration-300 origin-top shadow-lg rounded-md invisible">
                                        <li><a href="/aboutus#team" className="block px-[20px] py-[13px] font-outfit font-normal hover:bg-[#F25E2E] hover:text-white hover:rounded-t-md">Our Team</a></li>
                                        <li><a href="/aboutus#mission" className="block px-[20px] py-[13px] font-outfit font-normal hover:bg-[#F25E2E] hover:text-white hover:rounded-b-md">Testimonial</a></li>
                                    </ul>
                                </li>

                                {/* SERVICES */}
                                <li className="group relative">
                                    <a href="/services" className="text-white font-outfit font-normal text-[18px] py-[13px] mx-[17.5px] flex nav-link">
                                        Services
                                        <span className='pl-[10px]'><i className="fa fa-plus text-[12px]"></i></span>
                                    </a>
                                    <ul className="absolute top-[100%] left-[25px] z-10 bg-white min-w-[200px] opacity-0 scale-y-95 group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible transition-all duration-300 origin-top shadow-lg rounded-md invisible">
                                        <li><a href="/services/web" className="block px-[20px] py-[13px] font-outfit font-normal hover:bg-[#F25E2E] hover:text-white hover:rounded-t-md">Web Design</a></li>
                                        <li><a href="/services/mobile" className="block px-[20px] py-[13px] font-outfit font-normal hover:bg-[#F25E2E] hover:text-white">Web Development</a></li>
                                        <li><a href="/services/seo" className="block px-[20px] py-[13px] font-outfit font-normal hover:bg-[#F25E2E] hover:text-white">App Development</a></li>
                                        <li><a href="/services/seo" className="block px-[20px] py-[13px] font-outfit font-normal hover:bg-[#F25E2E] hover:text-white">Graphic Design</a></li>
                                        <li><a href="/services/seo" className="block px-[20px] py-[13px] font-outfit font-normal hover:bg-[#F25E2E] hover:text-white">SEO</a></li>
                                        <li><a href="/services/seo" className="block px-[20px] py-[13px] font-outfit font-normal hover:bg-[#F25E2E] hover:text-white hover:rounded-b-md">SMM</a></li>
                                    </ul>
                                </li>

                                <li><a href="/ourworks" className="text-white text-[18px] py-[13px] mx-[17.5px] nav-link font-outfit font-normal">Our Works</a></li>
                                <li><a href="/blog" className="text-white text-[18px] py-[13px] mx-[17.5px] nav-link font-outfit font-normal">Blog</a></li>
                                <li><a href="/contact" className="text-white text-[18px] py-[13px] ml-[17.5px] nav-link font-outfit font-normal">Career</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Contact Us Button (Desktop) */}
                    <div className="hidden lg:flex col-span-2 items-center h-full ml-[34px] p-[10px]">
                        <a href="/contact" className="flex justify-center items-center w-[100%] bg-white font-outfit font-[500] leading-[100%] text-black pr-[24px] py-[12px] pl-[30px] text-[18px] rounded-tl-[5px] rounded-tr-[10px] rounded-bl-[100px] rounded-br-[8px] clip-angled-footer transition-colors duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-40 lg:hidden block" />}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 lg:hidden block pl-[40px] clip-angles-header ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 flex justify-end items-center">
                    <button onClick={() => setIsOpen(false)}>
                        <i className="fa fa-times text-white h-[40px] w-[40px] text-xl bg-[#f08223]"></i>
                    </button>
                </div>

                <ul className="flex flex-col gap-1 text-black text-[18px] p-4">
                    <li><a href="/" className="block py-2">Home</a></li>
                    <li>
                        <details>
                            <summary className="flex justify-between items-center cursor-pointer py-2">About <i className="fa fa-plus text-sm"></i></summary>
                            <ul className="ml-4 mt-2">
                                <li><a href="/aboutus#team" className="block py-1">Our Team</a></li>
                                <li><a href="/aboutus#mission" className="block py-1">Testimonial</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="flex justify-between items-center cursor-pointer py-2">Services <i className="fa fa-plus text-sm"></i></summary>
                            <ul className="ml-4 mt-2">
                                <li><a href="/services/web" className="block py-1">Web Design</a></li>
                                <li><a href="/services/mobile" className="block py-1">Web Development</a></li>
                                <li><a href="/services/seo" className="block py-1">App Development</a></li>
                                <li><a href="/services/seo" className="block py-1">Graphic Design</a></li>
                                <li><a href="/services/seo" className="block py-1">SEO</a></li>
                                <li><a href="/services/seo" className="block py-1">SMM</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="/ourworks" className="block py-2">Our Works</a></li>
                    <li><a href="/blog" className="block py-2">Blog</a></li>
                    <li><a href="/contact" className="block py-2">Career</a></li>
                    <li className="mt-4">
                        <a href="/contact" className="block bg-black text-white text-center py-2 rounded-md">Contact Us</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
