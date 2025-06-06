'use client';
import React, { useState } from 'react';
import RequestQuoteForm from './Form'

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const items: AccordionItem[] = [
  { id: 'panel1', title: 'What type of websites can you help me with?', content: 'Aphonic can help you design, build and optimize websites for any business or organization. We specialize in helping businesses of all sizes, from small businesses to multinationals.' },
  { id: 'panel2', title: 'Do you provide support after the website development is complete?', content: 'Yes, we offer support services for a period of time after the website is complete. This includes answering any questions that users might have, helping to troubleshoot problems, and providing support as needed.' },
  { id: 'panel3', title: 'Will the website be responsive mobile friendly?', content: 'We guarantee that the website will be responsive mobile friendly. This means that the site will adjust its layout and design to fit any screen size.' },
  { id: 'panel4', title: 'Why choose a professional web development company in India?', content: 'There are many reasons to choose a professional web development agency in Rajkot. We have the experience and expertise to build your website the right way, from the ground up. Our team is passionate about what they do, and they will go above and beyond to deliver on everything you agreed to when you hired us. You can trust that we will take care of everything from start to finish, so you can focus on what’s important – your business' },
  { id: 'panel5', title: 'How long does web development take?', content: 'Most web development projects can be completed within 1-2 months. However, this can depend on the complexity of the project, the amount of research required, and the number of modifications or revisions that need to be made.' },
  { id: 'panel6', title: 'What strategies are required to develop a web project?', content: 'There are many different strategies that are required to develop a Web project. Some of the strategies that are required include planning, designing, coding, testing, and marketing. It is important to have a well-planned strategy before starting the project so that everything goes as planned and meets the expectations of the customer' },
];

export default function CustomAccordion() {
  const [expanded, setExpanded] = useState<string | null>('panel1');

  const toggle = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="faq pb-[70px]">
      <div className="container max-w-7xl mx-auto">
        
        <div className="grid grid-cols-12">
          <div className="col-span-7 mr-[40px] p-[10px]">
            <div className="heading mb-[20px]">
          <h3 className='font-prime text-[35px] leading-[48px] tracking-[0.85px] font-[700]'>
            Frequently <span className="bg-[linear-gradient(90deg,#f08223_-2.63%,#f44336_63.19%,#f08223_122.49%)] bg-clip-text text-transparent font-prime font-[700]">asked</span> questions
          </h3>
        </div>
            {items.map(({ id, title, content }) => (
              <div key={id} className="my-[18px] border-e-[#d4d4d4] overflow-hidden" style={{ boxShadow: '0 2px 40px 0 rgb(0 0 0 / 9%)' }}>
                <button
                  onClick={() => toggle(id)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center"
                  aria-expanded={expanded === id}
                  aria-controls={`${id}-content`}
                  id={`${id}-header`}
                >
                  <span className='font-opensans text-[18px] font-[700] leading-[28px]'>{title}</span>
                  <span className="text-[24px] font-[700]">
                    <i className={`fas ${expanded === id ? 'fa-minus' : 'fa-plus'}`}></i>
                  </span>
                </button>
                <div
                  id={`${id}-content`}
                  role="region"
                  aria-labelledby={`${id}-header`}
                  className={`px-[15px] bg-white duration-300 ease-in-out overflow-hidden ${
                    expanded === id ? 'max-h-[200px] py-[20px]' : 'max-h-0'
                  }`}
                >
                  {expanded === id && <p className='mb-[16px] font-opensans text-[16px] leading-[26px] text-[#5A5A5A] font-[400] tracking-[0.2px]'>{content}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-5 p-[10px]">
            <RequestQuoteForm/>
          </div>
        </div>
      </div>
    </section>
  );
}
