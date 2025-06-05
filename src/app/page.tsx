import HeroSection from '@/components/Herosection';
import Lead from '@/components/Lead';
import Awards from '@/components/Award';
import React from 'react'
import Service from '@/components/Service';
import Technology from '@/components/Technology';
import Work from '@/components/Work';
import Company_Detail from '@/components/Company_Detail';
import Project from '@/components/Project';
import Our_Values from '@/components/Our_Values';
import ReviewCarousel from '../components/Carousel/ReviewCarousel';
import MyAccordion from '@/components/Faq';
import Footer from '@/components/Footer';


function page() {
  return (
    <>
   <HeroSection />
   <Lead />
   <Awards />
   <Service />
   <Technology />
   <Work />
   <Company_Detail />
   <Project />
   <Our_Values />
   <ReviewCarousel />
   <MyAccordion />
   <Footer/>
    </>
  );
}

export default page