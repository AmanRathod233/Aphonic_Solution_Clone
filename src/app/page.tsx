import HeroSection from '@/components/Herosection';
import Lead from '@/components/Lead';
import Awards from '@/components/Award';
import React from 'react'
import Service from '@/components/Service';
import Technology from '@/components/Technology';


function page() {
  return (
    <>
   <HeroSection />
   <Lead />
   <Awards />
   <Service />
   <Technology />
    </>
  );
}

export default page