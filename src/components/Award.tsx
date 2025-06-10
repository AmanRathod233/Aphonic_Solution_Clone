'use client';

export default function Award() {   
    return (       
        <>
        <section className="award_section sm:mb-[70px] mb-[50px]">
            <div className="container max-w-[955px] mx-auto">

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    <div className="col-span-1 p-[10px] flex justify-center items-center">
                        <img src="./assets/images/Badge-Top-Mobile-App-Development.webp" alt="Award 1" className="object-contain " />
                    </div>
                    <div className="col-span-1 p-[10px] flex justify-center items-center">
                        <img src="./assets/images/top-website-development-companie.webp" alt="Award 2"   className="object-contain" />
                    </div>
                    <div className="col-span-1 p-[10px] flex justify-center items-center">
                        <img src="./assets/images/15_wadline_app-min.webp" alt="Award 3" className="object-contain" />
                    </div>
                    <div className="col-span-1 p-[10px] flex justify-center items-center">
                        <img src="./assets/images/14e0a35ee542b98d7e7a300c21f5f385.webp" alt="Award 4" className="object-contain h-[120px] w-[100%]"  />
                    </div>
                    <div className="col-span-1  p-[10px] flex justify-center items-center">
                        <img src="./assets/images/MLBadge-search-d.webp" alt="Award 5" className="object-contain h-[120px] w-[100%]" />
                    </div>
                    <div className="col-span-1 p-[10px] flex justify-center items-center">
                        <img src="./assets/images/11_itfirms_app-min.webp" alt="Award 6" className="object-contain h-[120px] w-[100%]"  />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
