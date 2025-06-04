import HeroSection from '@/components/Herosection';
import Lead from '@/components/Lead';
import Awards from '@/components/Award';
import React from 'react'
import Service from '@/components/Service';
import Technology from '@/components/Technology';
import Work from '@/components/Work';
import Company_Detail from '@/components/Company_Detail';


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
    </>
  );
}

export default page